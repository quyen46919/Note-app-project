import React from 'react';
import './styles.scss';
import HeaderTop from '../IntroPage/HeaderTop';
import Introduce from './Introduce';
import Feature from './Feature';
import Infor from './Infor';
import Content from './Content';
import HeaderBottom from './HeaderBottom';
import imgright from 'assets/images/intro_vienxanh.png';
import penimg from 'assets/images/intro_penimg.png';
import FadeInWhenVisible from './FadeInWhenVisible';

function IntroPage() {
    return (
        <div className='intro'>
            <div className="intro__content">
                <FadeInWhenVisible><div className="intro__headertop"><HeaderTop/></div></FadeInWhenVisible>
                <FadeInWhenVisible>
                    <div className="intro__introduce-img">
                        <div className="intro__introduce"><Introduce/></div>
                        <img className="intro__img" src={penimg}/>
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible><h1 className="intro__feature-tex">Các tính năng nổi bật</h1></FadeInWhenVisible>
                <div className="intro__feature"><Feature/></div>
                <FadeInWhenVisible><p className="intro__member-tex">Thành viên</p></FadeInWhenVisible>
                <FadeInWhenVisible><p className="intro__aboutus-tex">Về chúng tôi</p></FadeInWhenVisible>
                <FadeInWhenVisible><div className="intro__infor"><Infor/></div></FadeInWhenVisible>
                <FadeInWhenVisible><p className="intro__someimages-tex">(*) Some Images and Illustrations belongs to Freepik and Dribbble</p></FadeInWhenVisible>
                <FadeInWhenVisible><div className="intro__content"><Content/></div></FadeInWhenVisible>
                <FadeInWhenVisible><HeaderBottom/></FadeInWhenVisible>
            </div>
            <div className="intro__imgright">
                <FadeInWhenVisible><img src={imgright}/></FadeInWhenVisible>
            </div>
        </div>
    );
}

export default IntroPage;