import { ViewHeadline, ViewModule } from '@mui/icons-material';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { useState } from 'react';
import FolderBox from '../FolderBox';
import SearchBar from '../SearchBar';
import './styles.scss';

function FolderPage(props) {
    const [view, setView] = useState(true);
    const [option, setOption] = useState(10);
    const { data } = props;

    const handleFolderView = () => {
        setView(true);
    };

    const handleLineView = () => {
        setView(false);
    };

    const handleOptionChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <div className="folder-page">
            <SearchBar />
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
                        <MenuItem className={option=='10' ? 'folder-page__menu-item': ''} value={10}>Mục xem gần đây</MenuItem>
                        <MenuItem className={option=='20' ? 'folder-page__menu-item': ''}value={20}>Mục được đánh dấu sao</MenuItem>
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
                    {data.boards.map(item => (
                        <FolderBox key={item.id} data={item}/>
                    ))}
                </div> : <div className="folder-page__list-line">
                    {data.boards.map(item => (
                        <FolderBox key={item.id} data={item} isLined={true}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default FolderPage;
