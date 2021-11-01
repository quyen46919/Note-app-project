import React from 'react';
import './styles.scss';
import logo from 'assets/images/logo.png';
import 'assets/scss/_variables.scss';
import { NavLink } from 'react-router-dom';
import LeftDrawer from 'components/Header/LeftDrawer';


function HeaderTop() {
    return (
        <div className="intro-headertop">
            <div className="intro-headertop__bars">
                <LeftDrawer/>
            </div>
            <div className="intro-headertop__logo">
                <img src={logo}/>
            </div>
            <div className="intro-headertop__right">
                <div className="intro-headertop__menu">
                    <NavLink to="/home">
                        TRANG CHỦ
                    </NavLink>
                    <NavLink to="/term">
                        CHÍNH SÁCH
                    </NavLink>
                    <NavLink to="/contact">
                        LIÊN HỆ
                    </NavLink>
                </div>
                <div className="intro-headertop__avatar">
                    <img className="intro-headertop__img" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47c09177275483.5c82b10d5f62c.png"/>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;