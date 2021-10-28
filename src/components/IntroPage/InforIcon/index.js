import React from 'react';
import './index.scss';
import Iconimg from '../IconImg';


function InforIcon() {
    return (
        <div className="intro-inforicon">
            <div className="inforicon__imgicon"><Iconimg imgicon={<i className="fab fa-facebook-f"></i>}/></div>
            <div className="inforicon__imgicon"><Iconimg imgicon={<i className="fab fa-instagram"></i>}/></div>
            <div className="inforicon__imgicon"><Iconimg imgicon={<i className="fab fa-twitter"></i>}/></div>
            <div className="inforicon__imgicon"><Iconimg imgicon={<i className="fab fa-skype"></i>}/></div>

        </div>
    );
}

export default InforIcon;