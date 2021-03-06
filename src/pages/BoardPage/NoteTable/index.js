import { Add, Devices, FilterList, Fullscreen, MoreHoriz } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addNewColumn, fetchBoarDetail, updateBoard, updateCard, updateColumn } from 'apiCall/board.api';
import { cloneDeep } from 'lodash';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from 'utils/dragDrop';
import { mapOrder } from 'utils/sorts';
import CardColumn from '../CardColumn';
import './styles.scss';

const useStyles = makeStyles(() => ({
    dialogTitle: {
        paddingBottom: 0
    },
    textField: {
        paddingTop: '0!important',
        paddingBottom: '0!important'
    },
    toolButton: {
        backgroundColor: 'white!important',
        fontSize: '14px!important',
        textTransform: 'initial!important',
        borderColor: 'silver!important'
    }
}));

function NoteTable(props) {
    const { id } = props;
    const classes = useStyles();
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);
    const [open, setOpen] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState('');
    const [showNoti, setShowNoti] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        fetchBoarDetail(id).then((board) => {
            setBoard(board);
            setColumns(mapOrder(board.columns, board.columnOrder, 'id'));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onColumnDrop = (dropResult) => {
        let newColumns = cloneDeep(columns);
        newColumns = applyDrag(newColumns, dropResult);

        let newBoard = cloneDeep(board);
        newBoard.columnOrder = newColumns.map(c => c.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);

        delete newBoard.owner;
        delete newBoard.createdAt;
        delete newBoard.updatedAt;
        delete newBoard.__v;
        delete newBoard.columns;

        updateBoard(newBoard.id, newBoard)
            .catch(() => {
                setColumns(columns);
                setBoard(board);
                enqueueSnackbar('C???p nh???t v??? tr?? th???t b???i', { variant: 'error' });
            });

    };

    const onCardDrop = (columnId, dropResult) => {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            let newColumns = cloneDeep(columns);

            let currentColumn = newColumns.find(c => c.id === columnId);
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
            currentColumn.cardOrder = currentColumn.cards.map(i => i.id);

            setColumns(newColumns);

            delete currentColumn.createdAt;
            delete currentColumn.updatedAt;
            delete currentColumn.__v;

            if (dropResult.removedIndex !== null && dropResult.addedIndex !== null) {
                /**
                 * Move card in same column
                 * Call api to update cardOrder in current column
                 */
                updateColumn(currentColumn.id, { cardOrder: currentColumn.cardOrder })
                    .catch(() => {
                        setColumns(columns);
                        enqueueSnackbar('C???p nh???t v??? tr?? ghi ch?? th???t b???i', { variant: 'error' });
                    });
            } else {
                /**
                 * Move card between 2 columns
                 * Call api to update cardOrder in current column
                 * Call api to update columnId for this card
                 */
                updateColumn(currentColumn.id, { cardOrder: currentColumn.cardOrder })
                    .catch(() => {
                        setColumns(columns);
                        enqueueSnackbar('C???p nh???t v??? tr?? ghi ch?? th???t b???i', { variant: 'error' });
                    });
                if (dropResult.addedIndex !== null) {
                    let currentCard = cloneDeep(dropResult.payload);
                    currentCard.columnId = currentColumn.id;

                    updateCard(currentCard.id, { columnId: currentCard.columnId })
                        .catch(() => {
                            enqueueSnackbar('C???p nh???t v??? tr?? ghi ch?? th???t b???i', { variant: 'error' });
                        });
                }
            }
        }
    };

    const openDialog = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleNotiPopUpOpen = () => {
        setShowNoti(true);
    };

    const handleNotiPopUpClose = () => {
        setShowNoti(false);
    };

    const handleNewColumnTitleChange = (e) => {
        setNewColumnTitle(e.target.value);
    };

    const createNewColumn = () => {
        if (!newColumnTitle) return;

        const newColumnToCreate = {
            boardId: board.id,
            title: newColumnTitle.trim()
        };

        addNewColumn(newColumnToCreate)
            .then((column) => {
                column.cards = [];
                let newColumns = [...columns];
                newColumns.push(column);

                let newBoard = { ...board };
                newBoard.columnOrder = newColumns.map(c => c.id);
                newBoard.columns = newColumns;

                setColumns(newColumns);
                setBoard(newBoard);
                setOpen(false);
                setNewColumnTitle('');
            })
            .catch(() => enqueueSnackbar('T???o m???i ghi ch?? th???t b???i', { variant: 'error' }));
    };

    const updateCardColumn = ( newColumn ) => {

        const columnIdToUpdate = newColumn.id;
        let newColumns = [ ...columns ];
        const columnIndexToUpdate = newColumns.findIndex(i => i.id === columnIdToUpdate);

        if (newColumn._destroy) {
            // remove card column
            newColumns.splice(columnIndexToUpdate, 1);
        } else {
            // update card column
            newColumns.splice(columnIndexToUpdate, 1, newColumn);
        }

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(c => c.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);
    };

    return (
        <div className="note-table">
            <div className="note-table__header">
                <h3>{board.title}</h3>
                <div className="note-table__tools">
                    <Button
                        className={classes.toolButton}
                        variant="outlined"
                        color="inherit"
                        startIcon={<Fullscreen className={classes.toolIcon}/>}
                        onClick={handleNotiPopUpOpen}
                    >
                        To??n m??n h??nh
                    </Button>
                    <Button
                        className={classes.toolButton}
                        variant="outlined"
                        color="inherit"
                        startIcon={<Devices />}
                        onClick={handleNotiPopUpOpen}
                    >
                        Ch??? ????? xem: ?????y ?????
                    </Button>
                    <Button
                        className={classes.toolButton}
                        variant="outlined"
                        color="inherit"
                        startIcon={<FilterList />}
                        onClick={handleNotiPopUpOpen}
                    >
                        L???c
                    </Button>
                    <Button
                        className={classes.toolButton}
                        variant="outlined"
                        color="inherit"
                        startIcon={<MoreHoriz />}
                        onClick={handleNotiPopUpOpen}
                    >
                        Hi???n b???ng ch???n
                    </Button>
                </div>
            </div>
            <div className="note-table__content">
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    dragHandleSelector=".column-drag-handle"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'column-drop-preview'
                    }}
                    getChildPayload={index => columns[index]}
                >
                    {columns.map((column, index) => (
                        <Draggable key={index}>
                            <CardColumn
                                column={column}
                                onCardDrop={onCardDrop}
                                updateCardColumn={updateCardColumn}
                            />
                        </Draggable>
                    ))}
                </Container>
                <div className="note-table__add">
                    <Tooltip title="T???o m???i ghi ch??">
                        <Button variant="outlined" color="inherit" onClick={openDialog} className="note-table__btn">
                            <Add fontSize="small"/>
                        </Button>
                    </Tooltip>
                </div>
            </div>
            {open &&
                <Dialog
                    open={true}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                    disablebackdropclick="true"
                >
                    <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                    T???o m???i c???t ghi ch??
                    </DialogTitle>
                    <DialogContent className={classes.dialogTitle}>
                        L??u ??: T??n c???t qu?? d??i s??? b??? ???n ??i m???t ph???n. N??n ?????t t??n d?????i 25 k?? t???.
                    </DialogContent>
                    <DialogContent className={classes.textField}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nh???p t??n c???t"
                            type="text"
                            fullWidth
                            onChange={handleNewColumnTitleChange}
                            spellCheck="false"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={createNewColumn}>
                            X??c nh???n
                        </Button>
                        <Button color="primary" onClick={handleClose}>
                            H???y
                        </Button>
                    </DialogActions>
                </Dialog>
            }
            {showNoti &&
                <Dialog
                    open={showNoti}
                    onClose={handleNotiPopUpClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        Ch???c n??ng n??y ch??a ???????c h??? tr???
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Ch???c n??ng n??y v???n ??ang trong giai ??o???n ph??t tri???n, vui l??ng ch??? c???p nh???t ??? c??c phi??n b???n ti???p theo
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleNotiPopUpClose} color="primary" autoFocus>
                            T??i hi???u
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    );
}

export default NoteTable;