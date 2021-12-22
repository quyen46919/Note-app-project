import React from 'react';
import './styles.scss';
import iconbottom from 'assets/images/intro-iconbottom.png';
import muitenbottom from 'assets/images/intro-muitenbottom.png';


function Footer() {
    return (
        <div className="intro-footer">
            <img className="intro-footer__iconbtn" src={iconbottom}/>
            <p className="intro-footer__p">Copyright 2021. All Right Reserved By Ojjomedia</p>
            <img className="intro-footer__muiten" src={muitenbottom}/>
        </div>
    );
}

export default Footer;