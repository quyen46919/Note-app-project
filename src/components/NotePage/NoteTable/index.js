
import { Add, CalendarToday, Devices, FilterList, Fullscreen, MoreHoriz } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { initialNoteData } from 'assets/initialNoteData';
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

function NoteTable() {
    const classes = useStyles();
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);
    const [open, setOpen] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState('');

    useEffect(() => {
        const boardFromDb = initialNoteData.boards.find(board => board.id === 'board-1') || [];
        if (boardFromDb) {
            setBoard(boardFromDb);
            setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, 'id'));
        }
    }, []);

    const onColumnDrop = (dropResult) => {
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult);

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(c => c.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);
    };

    const onCardDrop = (columnId, dropResult) => {
        if (dropResult.removeIndex !== null || dropResult.addedIndex !== null) {
            let newColumns = [...columns];

            let currentColumn = newColumns.find(c => c.id === columnId);
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
            currentColumn.cardOrder = currentColumn.cards.map(i => i.id);

            setColumns(newColumns);
        }
    };

    const openDialog = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleNewColumnTitleChange = (e) => {
        setNewColumnTitle(e.target.value);
    };

    const createNewColumn = () => {
        if (newColumnTitle) {
            const newColumnToCreate = {
                id: Math.random().toString(36).substr(2, 5),
                boardId: board,
                title: newColumnTitle.trim(),
                cardOrder: [],
                cards: []
            };

            let newColumns = [...columns];
            newColumns.push(newColumnToCreate);

            let newBoard = { ...board };
            newBoard.columnOrder = newColumns.map(c => c.id);
            newBoard.columns = newColumns;

            setColumns(newColumns);
            setBoard(newBoard);
            setOpen(false);
            setNewColumnTitle('');
        }
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
                    >
                        Toàn màn hình
                    </Button>
                    <Button
                        className={classes.toolButton}
                        variant="outlined"
                        color="inherit"
                        startIcon={<Devices />}
                    >
                        Chế độ xem: Đầy đủ
                    </Button>
                    <Button
                        className={classes.toolButton}
                        variant="outlined"
                        color="inherit"
                        startIcon={<FilterList />}
                    >
                        Lọc
                    </Button>
                    <Button
                        className={classes.toolButton}
                        variant="outlined"
                        color="inherit"
                        startIcon={<MoreHoriz />}
                    >
                        Hiện bảng chọn
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
                    <Button variant="outlined" color="inherit" onClick={openDialog} className="note-table__btn">
                        <Add fontSize="small"/>
                    </Button>
                    <Button variant="outlined" color="primary" className="note-table__btn">
                        <CalendarToday fontSize="small"/>
                    </Button>
                </div>
            </div>
            {open &&
                <Dialog
                    open={true}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                    disableBackdropClick
                >
                    <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                    Tạo mới cột ghi chú
                    </DialogTitle>
                    <DialogContent className={classes.dialogTitle}>
                        Lưu ý: Tên cột quá dài sẽ bị ẩn đi một phần. Nên đặt tên dưới 25 kí tự.
                    </DialogContent>
                    <DialogContent className={classes.textField}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nhập tên cột"
                            type="text"
                            fullWidth
                            onChange={handleNewColumnTitleChange}
                            spellCheck="false"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={createNewColumn}>
                            Xác nhận
                        </Button>
                        <Button color="primary" onClick={handleClose}>
                            Hủy
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    );
}

export default NoteTable;