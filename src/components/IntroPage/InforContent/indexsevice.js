import React from 'react';
import './index.scss';
import ContentTitle from '../ContentTitle';
import ContentLi from '../ContentLi';

function InforContentSevice() {
    return (
        <div className="intro-inforcontent">
            <div className="ìnorcontent__title"><ContentTitle title={'Company'}/></div>
            <div className="inforcontent__li">
                <ContentLi li={'Graphic Design'}/>
                <ContentLi li={'UI/UX Design'}/>
                <ContentLi li={'Web Development'}/>
                <ContentLi li={'App Development'}/>
                <ContentLi li={'Web Hosting'}/>
            </div>
        </div>
    );
}

export default InforContentSevice;