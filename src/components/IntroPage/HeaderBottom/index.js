import React from 'react';
import './styles.scss';
import iconbottom from 'assets/images/intro-iconbottom.png';
import muitenbottom from 'assets/images/intro-muitenbottom.png';


function HeaderBottom() {
    return (
        <div className="intro-headerbottom">
            <div className="headerbottom__logo-text">
                <img className="headerbottom__iconbtn" src={iconbottom}/>
                <p className="headerbottom__p">Copyright 2021. All Right Reserved By Ojjomedia</p>
            </div>
            <div className="headerbottom__icon">
                <img className="headerbottom__muiten" src={muitenbottom}/>
            </div>
        </div>
    );
}

export default HeaderBottom;