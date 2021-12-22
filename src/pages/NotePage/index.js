import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { seedNote } from 'assets/seedNote';
import SearchBar from 'components/SearchBar';
import React, { useEffect, useState } from 'react';
import SingleNote from './SingleNote';
import './styles.scss';

function NotePage() {
    const [data, setData] = useState([]);
    const [ filterText, setFilterText ] = useState('');
    const [click, setClick] = useState(false);
    const [newNote, setNewNote] = useState({ title: '', content: '' });

    useEffect(() => {
        setData(seedNote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seedNote]);

    const deleteNote = (id) => {
        const filterData = data.filter((note) => note.id !== id);
        setData(filterData);
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

    const createNewNote = () => {
        if (!newNote.title && !newNote.content) return;

        let newNoteToCreate = {
            id: Math.random().toString(36).substr(2, 5),
            title: newNote.title,
            content: newNote.content,
            isCompleted: false
        };

        data.unshift(newNoteToCreate);
        setClick(false);
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
            <div className="note-page__list">
                { data.map(note => <SingleNote key={note.id} note={note} deleteNote={deleteNote}/>) }
            </div>
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={createNewNote}>Tạo mới</Button>
                    <Button onClick={handleClose}>Huỷ</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NotePage;