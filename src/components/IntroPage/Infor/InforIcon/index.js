import React from 'react';
import './index.scss';
import Iconimg from './Iconimg';
import iconfb from 'assets/images/intro-iconfb.png';
import iconisg from 'assets/images/intro-iconisg.png';
import icontwict from 'assets/images/intro-icontwict.png';
import icons from 'assets/images/intro-icons.png';

function InforIcon() {
    return (
        <div className="intro-inforicon">
            <div className="inforicon__imgicon"><Iconimg imgicon={iconfb}/></div>
            <div className="inforicon__imgicon"><Iconimg imgicon={iconisg}/></div>
            <div className="inforicon__imgicon"><Iconimg imgicon={icontwict}/></div>
            <div className="inforicon__imgicon"><Iconimg imgicon={icons}/></div>
        </div>
    );
}

export default InforIcon;