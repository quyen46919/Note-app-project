import React from 'react';
import Text from '../Text';
import img1 from 'assets/images/intro-feature-img.png';
import img2 from 'assets/images/intro-feature-img2.png';
import img3 from 'assets/images/intro-feature-img1.png';
import './index.scss';
import FadeInWhenVisible from '../FadeInWhenVisible';


function Feature() {
    return (
        <div className="intro-Freature">
            <div className="freature__one">
                <FadeInWhenVisible><img className="feature__image" src={img1}/></FadeInWhenVisible>
                <FadeInWhenVisible><div className="feature__text"> <Text title={'Công cụ quản lý trực quan'}/></div></FadeInWhenVisible>
            </div>
            <div className="freature__two">
                <FadeInWhenVisible><div className="feature__text"> <Text title={'Công cụ quản lý trực quan'}/></div></FadeInWhenVisible>
                <FadeInWhenVisible><img className="feature__image" src={img2}/></FadeInWhenVisible>
            </div>
            <div className="freature__three">
                <FadeInWhenVisible><img className="feature__image" src={img3}/></FadeInWhenVisible>
                <FadeInWhenVisible><div className="feature__text"> <Text title={'Công cụ quản lý trực quan'}/></div></FadeInWhenVisible>
            </div>
        </div>
    );
}

export default Feature;