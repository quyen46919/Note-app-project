import React from 'react';
import './styles.scss';
import HeaderTop from '../IntroPage/HeaderTop';
import Introduce from './Introduce';
import Feature from './Feature';
import Infor from './Infor';
import Content from './Content';
import Footer from './Footer';
import imgright from 'assets/images/intro_vienxanh.png';
import FadeInWhenVisible from './FadeInWhenVisible';

function IntroPage() {
    return (
        <div className='intro'>
            <FadeInWhenVisible>
                <div className="intro__imgright">
                    <img src={imgright}/>
                </div>
            </FadeInWhenVisible>
            <div className="intro__container">
                <FadeInWhenVisible>
                    <div className="intro__headertop"><HeaderTop/></div>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <div className="intro__introduce-img">
                        <div className="intro__introduce">
                            <Introduce/>
                        </div>
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible><h1 className="intro__feature-tex">Các tính năng nổi bật</h1></FadeInWhenVisible>
                <div className="intro__feature"><Feature/></div>
                <FadeInWhenVisible><p className="intro__member-text">Thành viên</p></FadeInWhenVisible>
                <FadeInWhenVisible><p className="intro__aboutus-text">Về chúng tôi</p></FadeInWhenVisible>
                <div className="intro__infor"><Infor/></div>
                <FadeInWhenVisible><p className="intro__someimages-text">(*) Some Images and Illustrations belongs to Freepik and Dribbble</p></FadeInWhenVisible>
                <div className="intro__content"><Content/></div>
                <FadeInWhenVisible><Footer/></FadeInWhenVisible>
            </div>
        </div>
    );
}

export default IntroPage;