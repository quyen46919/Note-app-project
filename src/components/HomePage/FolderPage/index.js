import { ViewHeadline, ViewModule } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import FolderBox from '../FolderBox';
import './styles.scss';

function FolderPage(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div className="folder-page">
            <div className="folder-page__filter">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        className="folder-page__select"
                        InputLabelProps={{shrink: false}}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={10}
                        onChange={handleChange}
                    >
                        <MenuItem className="folder-page__menu-item" value={10}>Mục được đánh dấu sao</MenuItem>
                        <MenuItem value={20}>Mục xem gần đây</MenuItem>
                    </Select>
                </FormControl>
                <div className="folder-page__view">
                    <ViewHeadline />
                    <ViewModule />
                </div>
            </div>
            <div className="folder-page__list">
                <FolderBox />
                <FolderBox />
                <FolderBox />
                <FolderBox />
                <FolderBox />
                <FolderBox />
                <FolderBox />
                <FolderBox />
            </div>
        </div>
    );
}

export default FolderPage;
