import React from 'react';
import Text from './Text';
import img1 from 'assets/images/intro-feature-img.png';
import img2 from 'assets/images/intro-feature-img2.png';
import img3 from 'assets/images/intro-feature-img1.png';
import './index.scss';


function Feature() {
    return (
        <div className="intro-Freature">
            <div className="freature__one">
                <img className="feature__image" src={img1}/>
                <div className="feature__text"> <Text title={'Công cụ quản lý trực quan'}/></div>
            </div>
            <div className="freature__two">
                <div className="feature__text"> <Text title={'Công cụ quản lý trực quan'}/></div>
                <img className="feature__image" src={img2}/>
            </div>
            <div className="freature__three">
                <img className="feature__image" src={img3}/>
                <div className="feature__text"> <Text title={'Công cụ quản lý trực quan'}/></div>
            </div>
        </div>
    );
}

export default Feature;