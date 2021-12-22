import { EventNoteOutlined, FolderOutlined, NoteOutlined } from '@mui/icons-material';
import logo from 'assets/images/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from '../AccountMenu';
import LeftDrawer from '../LeftDrawer';
import './styles.scss';

function HeaderRow() {

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__menu">
                    <LeftDrawer/>
                </div>
                <div className="header__logo">
                    <NavLink to="" exact>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>

            </div>
            <div className="header__links">
                <NavLink to="/" exact>
                    <FolderOutlined/>
                        Ghi chú dạng thư mục
                </NavLink>
                <NavLink to="/note" exact>
                    <NoteOutlined/>
                        Ghi chú đơn
                </NavLink>
                <NavLink to="/calendar" exact>
                    <EventNoteOutlined/>
                        Lịch và đặt lịch
                </NavLink>
            </div>
            <div className="header__right">
                <AccountMenu/>
            </div>
        </div>
    );
}

export default HeaderRow;