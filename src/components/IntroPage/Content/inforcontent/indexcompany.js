import React from 'react';
import './index.scss';
import ContentTitle from './ContentTitle';
import ContentLi from './ContentLi';

function InforContentCompany() {
    return (
        <div className="intro-inforcontent">
            <div className="ìnorcontent__title"><ContentTitle title={'Company'}/></div>
            <div className="inforcontent__li">
                <ContentLi li={'About Us'}/>
                <ContentLi li={'Our Work'}/>
                <ContentLi li={'Client'}/>
                <ContentLi li={'Our Blog'}/>
                <ContentLi li={'Contact US'}/>
            </div>
        </div>
    );
}

export default InforContentCompany;