import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { addNewNote, deleteNote, fetchAllNotes } from 'apiCall/note.api';
import SearchBar from 'components/SearchBar';
import { AuthContext } from 'context/AuthContext';
import { cloneDeep } from 'lodash';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import SingleNote from './SingleNote';
import './styles.scss';

function NotePage() {
    const [allNotes, setAllNotes] = useState([]);
    const [filterText, setFilterText ] = useState('');
    const [click, setClick] = useState(false);
    const [newNote, setNewNote] = useState({ title: '', content: '' });
    const { nottableUser } = useContext(AuthContext);
    const [confirm, setConfirm] = useState(false);
    const [noteToDelete, setNoteToDelete] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        fetchAllNotes(nottableUser.id)
            .then((res) => setAllNotes(res || []))
            .catch((err) => {
                enqueueSnackbar(err.response.data.message || 'Lấy dữ liệu thất bại', {
                    variant: 'error'
                });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteConfirmedNote = () => {
        const cloneAllNotes = cloneDeep(allNotes);
        const filterData = allNotes.filter((note) => note.id !== noteToDelete);
        setAllNotes(filterData);

        deleteNote(noteToDelete)
            .then((res) => {
                enqueueSnackbar(res.data || 'Xóa ghi chú thành công', {
                    variant: 'success'
                });
            })
            .catch((err) => {
                setAllNotes(cloneAllNotes);
                enqueueSnackbar(err.response.data.message || 'Xóa ghi chú thất bại', {
                    variant: 'error'
                });
            });
        setConfirm(false);
        setNoteToDelete('');
    };

    const createNewNote = () => {
        if (!newNote.title && !newNote.content) return;
        const currentNotes = cloneDeep(allNotes);

        let newNoteToCreate = {
            owner: nottableUser.id,
            title: newNote.title,
            content: newNote.content,
            cover: null
        };

        addNewNote(newNoteToCreate)
            .then((res) => {
                setAllNotes(prevNote => [...prevNote, res]);
            })
            .catch((err) => {
                setAllNotes(currentNotes);
                enqueueSnackbar(err.response.data.message || 'Tạo mới ghi chú thất bại', {
                    variant: 'error'
                });
            });
        setNewNote({ title: '', content: '' });
        setClick(false);
    };

    const handleDeleteNote = (id) => {
        setNoteToDelete(id);
        setConfirm(true);
    };

    const handleClosePopup = () => {
        setNoteToDelete('');
        setConfirm(false);
    };

    const handleFilterTextChange = (e) => { setFilterText(e.target.value); };

    const handleButtonClick = () => { setClick(true); };

    const handleClose = () => { setClick(false); };

    const handleInputContent = (e) => {
        setNewNote(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };

    return (
        <div className="note-page">
            <div className="note-page__search-bar">
                <SearchBar
                    handleFilterTextChange={handleFilterTextChange}
                    filterText={filterText}
                    handleButtonClick={handleButtonClick}
                />
            </div>
            { allNotes.length ?
                <div className="note-page__list">
                    { allNotes.map((note) => {
                        if (note.title.toLowerCase().includes(filterText.toLowerCase())) return (
                            <SingleNote key={note.id} note={note} handleDeleteNote={handleDeleteNote}/>
                        );
                    })}
                </div>
                :
                <div className="note-page__no-note">
                    Danh sách ghi chú rỗng
                </div>
            }
            <Dialog open={click} onClose={handleClose}>
                <DialogTitle>Tạo mới ghi chú</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nhập tiêu đề"
                        type="text"
                        fullWidth
                        variant="outlined"
                        placeholder="Nhập tiêu đề"
                        spellCheck="false"
                        name="title"
                        onChange={handleInputContent}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nhập nội dung"
                        type="text"
                        fullWidth
                        variant="outlined"
                        placeholder="Nhập nội dung"
                        spellCheck="false"
                        name="content"
                        onChange={handleInputContent}
                        multiline
                        rows={3}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={createNewNote}>Tạo mới</Button>
                    <Button onClick={handleClose}>Huỷ</Button>
                </DialogActions>
            </Dialog>
            {confirm &&
                <Dialog
                    open={confirm}
                    onClose={handleClosePopup}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        Bạn có thực sự muốn xóa ghi chú này
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Ghi chú này sẽ bị xóa đi và không thể khôi phục
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={deleteConfirmedNote} color="primary">
                            Đồng ý
                        </Button>
                        <Button onClick={handleClosePopup} color="primary" autoFocus>
                            Hủy
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    );
}

export default NotePage;