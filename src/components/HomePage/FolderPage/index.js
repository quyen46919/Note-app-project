import { ViewHeadline, ViewModule } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from 'react';
import FolderBox from '../FolderBox';
import SearchBar from '../SearchBar';
import './styles.scss';

function FolderPage(props) {
    const [view, setView] = useState(true);
    const [option, setOption] = useState('10');
    const [click, setClick] = useState(false);
    const [newFolderName, setNewFolderName] = useState('');
    const [ filterText, setFilterText ] = useState('');
    const { data } = props;
    var dataBackup = data.boards;

    useEffect(() => {
        if (option === '10') {
            dataBackup.sort((x, y) => Number(y.isFavorited) - Number(x.isFavorited));
        }
        if (option === '20') {
            dataBackup.sort(function (x, y) {
                return ('' + x.id).localeCompare(y.id);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option]);

    if (filterText) {
        dataBackup = dataBackup.filter(x => x.title.toLowerCase().includes(filterText.toLowerCase()));
    }

    const handleFolderView = () => {
        setView(true);
    };

    const handleLineView = () => {
        setView(false);
    };

    const handleOptionChange = (event) => {
        setOption(event.target.value);
    };

    const handleFilterTextChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleFolderNameChange = (e) => {
        setNewFolderName(e.target.value);
    };

    const handleButtonClick = () => {
        setClick(true);
    };

    const handleClose = () => {
        setClick(false);
    };

    const createNewFolder = () => {
        var date = new Date().toISOString().split('-');
        var formattedDate = date[2].toString().slice(0, 2) + '/' + date[1] + '/' + date[0];

        var newCard = {
            id: Math.random().toString(36).substr(2, 5),
            lastUpdate: formattedDate,
            title: newFolderName,
            isFavorited: false,
            columnOrder: [],
            columns: []
        };
        dataBackup.push(newCard);
        handleClose();
    };

    return (
        <div className="folder-page">
            <SearchBar
                handleFilterTextChange={handleFilterTextChange}
                filterText={filterText}
                handleButtonClick={handleButtonClick}
            />
            <div className="folder-page__filter">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        className="folder-page__select"
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={option}
                        disableUnderline
                        onChange={handleOptionChange}
                    >
                        <MenuItem className={option==='10' ? 'folder-page__menu-item': ''} value={'10'}>Mục xem gần đây</MenuItem>
                        <MenuItem className={option==='20' ? 'folder-page__menu-item': ''}value={'20'}>Mục được đánh dấu sao</MenuItem>
                    </Select>
                </FormControl>
                <div className="folder-page__view">
                    <Button
                        onClick={handleFolderView}
                        color='inherit'
                        className={view ? 'active folder-page__button': 'folder-page__button'}
                    >
                        <ViewModule />
                    </Button>
                    <Button
                        onClick={handleLineView}
                        color='inherit'
                        className={view ? 'folder-page__button': 'active folder-page__button'}
                    >
                        <ViewHeadline />
                    </Button>
                </div>
            </div>
            {
                view ? <div className="folder-page__list">
                    {dataBackup.map(item => (
                        <FolderBox key={item.id} data={item}/>
                    ))}
                </div> : <div className="folder-page__list-line">
                    {dataBackup.map(item => (
                        <FolderBox key={item.id} data={item} isLined={true}/>
                    ))}
                </div>
            }
            {click && (<Dialog open={click} onClose={handleClose}>
                <DialogTitle>Tạo mới tài liệu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Nhập tên bảng ở đây, nếu độ dài quá 25 ký tự sẽ bị ẩn đi một phần
                    </DialogContentText>
                    <TextField
                        onChange={handleFolderNameChange}
                        autoFocus
                        margin="dense"
                        type="text"
                        fullWidth
                        variant="standard"
                        placeholder="Untitled"
                        spellCheck="false"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={createNewFolder}>Tạo mới</Button>
                    <Button onClick={handleClose}>Huỷ</Button>
                </DialogActions>
            </Dialog>)}
        </div>
    );
}

export default FolderPage;
