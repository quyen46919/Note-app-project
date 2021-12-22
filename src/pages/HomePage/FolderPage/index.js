import { ViewHeadline, ViewModule } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { addNewBoard, fetchAllBoard } from 'apiCall/board-api';
import FadeInWhenVisible from 'components/FadeInWhenVisible';
import { AuthContext } from 'context/AuthContext';
import { AnimatePresence } from 'framer-motion';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../../../components/SearchBar';
import FolderBox from '../FolderBox';
import './styles.scss';

function FolderPage() {
    const [view, setView] = useState(true);
    const { nottableUser } = useContext(AuthContext);
    const [option, setOption] = useState('10');
    const [click, setClick] = useState(false);
    const [newFolderName, setNewFolderName] = useState('');
    const [ filterText, setFilterText ] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [allBoard, setAllBoard] = useState([]);

    useEffect(() => {
        fetchAllBoard(nottableUser.id)
            .then((res) => {
                setAllBoard(res);
            })
            .catch(() => {
                enqueueSnackbar('Lấy dữ liệu thất bại', { variant: 'error' });
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        if (!newFolderName) return;

        var newFolder = {
            owner: nottableUser.id,
            title: newFolderName,
            lastUpdated: new Date(),
            isFavorite: false,
            sharedUserList: []
        };

        addNewBoard(newFolder)
            .then((newBoard) => {
                setAllBoard(prevState => [...prevState, newBoard]);
            })
            .catch(() => {
                enqueueSnackbar('Tạo thư mục mới thất bại', { variant: 'error' });
            });
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
                allBoard.length ? <AnimatePresence>
                    {
                        view ? <div className="folder-page__list">
                            {allBoard.map((item, index) => {
                                if (item.title.toLowerCase().includes(filterText.toLowerCase())) return (
                                    <FadeInWhenVisible key={item.id} delay={index}>
                                        <FolderBox data={item}/>
                                    </FadeInWhenVisible>
                                );
                            })}
                        </div> : <div className="folder-page__list-line">
                            {allBoard.map((item, index) => {
                                if (item.title.toLowerCase().includes(filterText.toLowerCase())) return (
                                    <FadeInWhenVisible key={item.id} delay={index}>
                                        <FolderBox data={item} isLined={true}/>
                                    </FadeInWhenVisible>
                                );
                            })}
                        </div>
                    }
                </AnimatePresence> : <div>Không có thư mục ghi chú nào hết</div>
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
