import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Button, InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import './styles.scss';

const useStyles = makeStyles({
    searchIcon: {
        color: '#4B4B4B!important',
        fontSize: '30px!important',
        padding: 0,
        marginTop: '0px!important'
    },
    plusIcon: {
        fontSize: '26px!important'
    },
    boxShadow: {
        boxShadow: '0px 2px 4.5px rgba(0, 0, 0, 0.1)!important'
    }
});

export default function SearchBar(props) {
    const { handleFilterTextChange, filterText, handleButtonClick } = props;
    const classes = useStyles();

    return (
        <div className="home-search-bar">
            <TextField
                autoFocus
                autoComplete="true"
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Search/></InputAdornment>
                }}
                placeholder="Tìm kiếm"
                type="text"
                spellCheck="false"
                className="home-search-bar__input"
                onChange={handleFilterTextChange}
                value={filterText}
            />
            <Button
                className={`home-search-bar__button ${classes.boxShadow}`}
                variant="contained"
                disableElevation
                onClick={handleButtonClick}
                startIcon={<AddIcon className={classes.plusIcon}/>}
            >
                Tạo mới
            </Button>
        </div>
    );
}
