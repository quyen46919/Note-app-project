import React from 'react';
import './styles.scss';
import HeaderTop from './HeaderTop';
import Introduce from './Introduce';
import Feature from './Feature';
import Infor from './Infor';
import Content from './Content';
import Footer from './Footer';
import imgright from 'assets/images/intro_vienxanh.png';
import FadeInWhenVisible from '../../components/FadeInWhenVisible';

function IntroPage() {
    return (
        <div className='intro'>
            <div className="intro__imgright">
                <FadeInWhenVisible>
                    <img src={imgright}/>
                </FadeInWhenVisible>
            </div>
            <div className="intro__container">
                <FadeInWhenVisible>
                    <div className="intro__headertop">
                        <HeaderTop/>
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <Introduce/>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <h1 className="intro__title">Các tính năng nổi bật</h1>
                </FadeInWhenVisible>
                <div className="intro__feature">
                    <Feature/>
                </div>
                <FadeInWhenVisible>
                    <p className="intro__title">Về chúng tôi</p>
                </FadeInWhenVisible>
                <div className="intro__infor">
                    <Infor/>
                </div>
                <FadeInWhenVisible>
                    <p className="intro__someimages-text">(*) Some Images and Illustrations belongs to Freepik and Dribbble</p>
                </FadeInWhenVisible>
                <div className="intro__content">
                    <Content/>
                </div>
                <FadeInWhenVisible>
                    <Footer/>
                </FadeInWhenVisible>
            </div>
        </div>
    );
}

export default IntroPage;