import React from 'react';
import './index.scss';
import logo from 'assets/images/intro_logo.png';
import logoname from 'assets/images/intro_logoname.png';
import avatar from 'assets/images/intro_avatar.jpg';
import 'assets/scss/_variables.scss';


function HeaderTop() {
    return (
        <div className="intro-headertop">
            <div className="headertop__logo">
                <img className="headertop__img" src={logo}/>
                <img className="headertop__name" src={logoname}/>
            </div>
            <div className="headertop__menu">
                <li>TÍNH NĂNG</li>
                <li>CHÍNH SÁCH</li>
                <li>NHÀ PHÁT TRIỂN</li>
                <li>LIÊN HỆ</li>
                <div className="headertop__avatar">
                    <img className="headertop__img" src={avatar}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;