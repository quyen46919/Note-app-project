
import { Add, Close, Star, StarBorder } from '@mui/icons-material';
import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, IconButton, Input, TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addNewCard, deleteCard, deleteColumn, updateColumn } from 'apiCall/board.api';
import { cloneDeep } from 'lodash';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { mapOrder } from '../../../utils/sorts';
import CardNote from '../CardNote';
import './styles.scss';

const useStyles = makeStyles(() => ({
    dialogTitle: {
        paddingBottom: 0
    },
    textField: {
        paddingTop: '0!important',
        paddingBottom: '0!important'
    },
    dialogContent: {
        padding: 0
    },
    headerButtonIcon: {
        backgroundColor: '#fff!important',
        width: '28px!important',
        height: '28px!important',
        borderRadius: '8px'
    },
    headerIcon: {
        fontSize: '18px!important'
    },
    favorite: {
        color: 'orange'
    },
    noBorder: {
        border: 'none'
    }
}));

function CardColumn(props) {
    const classes = useStyles();
    const { column, onCardDrop, updateCardColumn } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');
    const [columnTitle, setColumnTitle] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [createCard, setCreateCard] = useState();
    const [createCardContent, setCreateCardContent] = useState({
        title: '',
        content: '',
        cover: ''
    });
    const { enqueueSnackbar } = useSnackbar();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setColumnTitle(column.title);
        setIsFavorite(column.isFavorite);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [column.title, column.isFavorite]);

    const handleConfirmPopUpClose = () => { setConfirm(false); };
    const handleConfirmPopUpOpen = () => { setConfirm(true); };

    const handleCreateCardPopupOpen = () => {
        setCreateCard(true);
    };
    const handleCreateCardPopupClose = () => { setCreateCard(false); };

    const removeColumn = () => {
        deleteColumn(column.id)
            .then(() => {
                const newColumn = {
                    ...column,
                    _destroy: true
                };
                updateCardColumn(newColumn);
                handleConfirmPopUpClose();
            })
            .catch(() => enqueueSnackbar('X??a c???t th???t b???i', { variant: 'error' }));
    };

    const onChangePicture = e => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setCreateCardContent(prevState => ({
                    ...prevState,
                    cover: reader.result
                }));
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleCreateContentChange = (e) => {
        setCreateCardContent(prevState => ({
            ... prevState,
            [e.target.name]: e.target.value
        }));
    };

    const createNewCard = () => {
        if (createCardContent.content || createCardContent.title || createCardContent.cover) {
            const newCardToCreate = {
                boardId: column.boardId,
                columnId: column.id,
                title: createCardContent.title.trim(),
                content: createCardContent.content
            };

            addNewCard(newCardToCreate)
                .then((card) => {
                    let newColumn = cloneDeep(column);
                    newColumn.cards.push(card);
                    newColumn.cardOrder.push(card.id);

                    updateCardColumn(newColumn);
                    setCreateCardContent({
                        title: '',
                        content: '',
                        cover: ''
                    });
                })
                .catch(() => enqueueSnackbar('T???o m???i ghi ch?? th???t b???i', { variant: 'error' }))
                .finally(() => setCreateCard(false));
        }
    };

    const removeCard = (cardId) => {
        deleteCard(cardId)
            .then(() => {
                let newColumn = cloneDeep(column);
                newColumn.cards = newColumn.cards.filter(i => i.id !== cardId);
                const cardIndex = newColumn.cardOrder.findIndex(i => i.id === cardId);
                newColumn.cardOrder.splice(cardIndex, 1);

                updateCardColumn(newColumn);
            })
            .catch(() => enqueueSnackbar('x??a ghi ch?? th???t b???i', { variant: 'error' }));
    };

    const handleColumnTitleChange = (e) => {
        setColumnTitle(e.target.value);
    };

    const handleColumnTitleBlur = () => {
        updateColumn(column.id, { title: columnTitle })
            .then((result) => {
                const updatedColumn = {
                    ...result,
                    cards: cards
                };
                updateCardColumn(updatedColumn);
            })
            .catch(() => enqueueSnackbar('C???p nh???t ti??u ????? th???t b???i', { variant: 'error' }));
    };

    const saveContentAfterPressEnter = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    const editTitleInLine = (e) => {
        e.target.focus();
        e.target.select();
    };

    const handleFavoriteStarClick = () => {
        updateColumn(column.id, { isFavorite: !isFavorite })
            .then((result) => {
                const updatedColumn = {
                    ...result,
                    cards: cards
                };
                updateCardColumn(updatedColumn);
                setIsFavorite(result.isFavorite);
            })
            .catch(() => enqueueSnackbar('C???p nh???t c???t y??u th??ch th???t b???i', { variant: 'error' }));
    };

    return (
        <div className="card-column">
            <header className="column-drag-handle card-column__header">
                <TextField
                    className="card-column__title"
                    value={columnTitle}
                    onChange={handleColumnTitleChange}
                    onBlur={handleColumnTitleBlur}
                    onKeyDown={saveContentAfterPressEnter}
                    onClick={editTitleInLine}
                    onMouseDown={e => e.preventDefault()}
                    spellCheck="false"
                />
                <div>
                    <IconButton size="small" className={classes.headerButtonIcon} onClick={handleFavoriteStarClick}>
                        <Checkbox
                            icon={<StarBorder className={ classes.headerIcon}/>}
                            checkedIcon={<Star className={`${classes.headerIcon} ${classes.favorite}`}/>}
                            checked={isFavorite}
                        />
                    </IconButton>
                    <IconButton size="small" className={classes.headerButtonIcon} onClick={handleConfirmPopUpOpen}>
                        <Close className={classes.headerIcon}/>
                    </IconButton>
                </div>
            </header>
            {confirm &&
                <Dialog
                    open={confirm}
                    onClose={handleConfirmPopUpClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        B???n c?? th???c s??? mu???n x??a c???t ghi ch?? n??y
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            T???t c??? ghi ch?? c?? trong c???t n??y ?????u s??? b??? x??a ??i v?? kh??ng th??? kh??i ph???c
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={removeColumn} color="primary">
                            ?????ng ??
                        </Button>
                        <Button onClick={handleConfirmPopUpClose} color="primary" autoFocus>
                            H???y
                        </Button>
                    </DialogActions>
                </Dialog>
            }
            <div className="card-column__content">
                <Container
                    groupName="columns"
                    onDrop={dropResult => onCardDrop(column.id, dropResult)}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'cards-drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {cards.map((card, index) => (
                        <Draggable key={index}>
                            <CardNote card={card} removeCard={removeCard}/>
                        </Draggable>
                    ))}
                </Container>
            </div>
            <div className="card-column__footer">
                <Button className="card-column__add-card" startIcon={<Add />} onClick={handleCreateCardPopupOpen}>
                    Th??m ghi ch?? m???i
                </Button>
            </div>
            {createCard &&
                <Dialog
                    open={createCard}
                    onClose={handleConfirmPopUpClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                >
                    <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                        T???o m???i ghi ch??
                    </DialogTitle>
                    <DialogContent className={classes.textField}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Nh???p ti??u ????? ghi ch??"
                            type="text"
                            fullWidth
                            name="title"
                            onChange={handleCreateContentChange}
                            spellCheck="false"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Nh???p n???i dung ghi ch??"
                            type="text"
                            fullWidth
                            multiline
                            maxRows={3}
                            minRows={3}
                            name="content"
                            onChange={handleCreateContentChange}
                            spellCheck="false"
                        />
                        <label htmlFor="contained-button-file">
                            <Input
                                accept="image/*"
                                id="contained-button-file"
                                multiple type="file"
                                style={{ display: 'none' }}
                                name="cover"
                                onChange={onChangePicture}
                            />
                            <Button
                                variant="contained"
                                component="span"
                                disableElevation
                                className="card-column__upload"
                            >
                                T???i ???nh l??n
                            </Button>
                        </label>
                        {createCardContent.cover &&
                            <img src={createCardContent.cover} alt="cover" className="card-column__img-demo"/>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={createNewCard} color="primary">
                            T???o m???i
                        </Button>
                        <Button onClick={handleCreateCardPopupClose} color="primary" autoFocus>
                            H???y
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    );
}

export default CardColumn;