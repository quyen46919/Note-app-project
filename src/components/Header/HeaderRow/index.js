import { FavoriteBorder, LightOutlined, Search, TranslateOutlined } from '@mui/icons-material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Button, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from '../AccountMenu';
import LeftDrawer from '../LeftDrawer';
import logo from 'assets/images/logo.png';
import './styles.scss';

const useStyles = makeStyles({
    buttonIcon: {
        background: 'white',
        border: '1px solid #e3e3e3!important',
        borderRadius: 8,
        color: '#3C3C3C',
        padding: '0!important',
        maxWidth: '40px!important',
        minWidth: '40px!important',
        maxHeight: '35px',
        minHeight: '35px',
        '&:hover': {
            color: '#007FFF'
        }
    },
    icon: {
        fontSize: '22px!important'
    },
    textField: {
        minHeight: 35,
        borderRadius: 8,
        borderColor: '#e3e3e3!important',
        '& input': {
            minHeight: 25,
            padding: '5px 20px 5px 10px!important',
            minWidth: '80px',
            maxWidth: '80px',
            fontSize: 13,
            transition: 'all .25s!important'
        },
        '&:focus input, &:hover input': {
            minWidth: '100px',
            maxWidth: '100px'
        },
        '& svg': {
            color: '#007FFF'
        }
    }
});

function HeaderRow() {
    const classes = useStyles();

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__menu">
                    <LeftDrawer/>
                </div>
                <div className="header__logo">
                    <NavLink to="/home" exact>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <div className="header__links">
                    <NavLink to="/home" exact>
                        Trang chủ
                    </NavLink>
                    <NavLink to="/home/account" exact>
                        Cá nhân
                    </NavLink>
                    <NavLink to="/" exact>
                        Giới thiệu
                    </NavLink>
                    <NavLink to="/not-found" exact>
                        404 Not found
                    </NavLink>
                </div>
            </div>
            <div className="header__right">
                <div className="header__tools">
                    <div className="header__text-field">
                        <TextField
                            className={classes.textField}
                            InputProps={{
                                startAdornment: <Search position="start" className={classes.icon}/>
                            }}
                            spellCheck="false"
                        />
                    </div>
                    <Tooltip disableFocusListener disableTouchListener title="Chế độ tối">
                        <Button className={classes.buttonIcon}>
                            <LightOutlined className={classes.icon}/>
                        </Button>
                    </Tooltip>
                    <Tooltip disableFocusListener disableTouchListener title="Đổi ngôn ngữ">
                        <Button className={classes.buttonIcon}>
                            <TranslateOutlined className={classes.icon}/>
                        </Button>
                    </Tooltip>
                    <Tooltip disableFocusListener disableTouchListener title="Thông báo">
                        <Button className={classes.buttonIcon}>
                            <NotificationsNoneOutlinedIcon className={classes.icon}/>
                        </Button>
                    </Tooltip>
                    <Tooltip disableFocusListener disableTouchListener title="Danh sách yêu thích">
                        <Button className={classes.buttonIcon}>
                            <FavoriteBorder className={classes.icon}/>
                        </Button>
                    </Tooltip>
                </div>
                <AccountMenu/>
            </div>
        </div>
    );
}

export default HeaderRow;