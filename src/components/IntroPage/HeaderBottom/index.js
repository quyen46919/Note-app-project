import React from 'react';
import './index.scss';
import iconbottom from 'assets/images/intro-iconbottom.png';
import muitenbottom from 'assets/images/intro-muitenbottom.png';


function HeaderBottom() {
    return (
        <div className="intro-headerbottom">
            <img className="headerbottom__iconbtn" src={iconbottom}/>
            <p className="headerbottom__p">Copyright 2021. All Right Reserved By Ojjomedia</p>
            <img className="headerbottom__muiten" src={muitenbottom}/>
        </div>
    );
}

export default HeaderBottom;