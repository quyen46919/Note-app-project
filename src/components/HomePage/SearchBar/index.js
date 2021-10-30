import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
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
    form: {
        height: '48px',
        width: '665px',
        display: 'flex',
    },
    button: {
        backgroundColor: '#18A0FB!important',
        gap: '0px!important',
        fontSize: '16px!important'
    },
    plusIcon: {
        fontSize: '26px!important'
    },
    boxShadow: {
        boxShadow: '0px 2px 4.5px rgba(0, 0, 0, 0.1)!important'
    }
});

export default function SearchBar() {
    const classes = useStyles();
    return (
        <div className="home-search-bar">
            <Paper
                component='form'
                elevation={0}
                className={`${classes.form} ${classes.boxShadow}`}
            >
                <IconButton sx={{ p: '10px' }} aria-label='menu'>
                    <Search className={classes.searchIcon}/>
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Tìm kiếm'
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
            <Button
                className={`${classes.button} ${classes.boxShadow}`}

                variant="contained"
                disableElevation="false"
                startIcon={<AddIcon className={classes.plusIcon}/>}
            >
                Tạo mới
            </Button>
        </div>
    );
}