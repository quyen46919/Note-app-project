import React from 'react';
import './styles.scss';
import logo from 'assets/images/intro_logo.png';
import logoname from 'assets/images/intro_logoname.png';
import avatar from 'assets/images/intro_avatar.jpg';
import 'assets/scss/_variables.scss';


function HeaderTop() {
    return (
        <div className="intro-headertop">
            <div className="intro-headertop__bars">
                <i className="fas fa-bars"></i>
            </div>
            <div className="intro-headertop__logo">
                <img className="intro-headertop__img" src={logo}/>
                <img className="intro-headertop__name" src={logoname}/>
            </div>
            <div className="intro-headertop__menu">
                <li>TÍNH NĂNG</li>
                <li>CHÍNH SÁCH</li>
                <li>NHÀ PHÁT TRIỂN</li>
                <li>LIÊN HỆ</li>
                <div className="intro-headertop__avatar">
                    <img className="intro-headertop__img" src={avatar}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;