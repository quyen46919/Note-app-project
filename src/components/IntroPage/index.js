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

function IntroPage() {
    return (
        <div className='intro'>
            <div className="intro__content">
                <div className="intro__headertop"><HeaderTop/></div>
                <div className="intro__introduce-img">
                    <div className="intro__introduce"><Introduce/></div>
                    <img className="intro__img" src={penimg}/>
                </div>
                <h1 className="intro__feature-tex">Các tính năng nổi bật</h1>
                <div className="intro__feature"><Feature/></div>
                <p className="intro__member-tex">Thành viên</p>
                <p className="intro__aboutus-tex">Về chúng tôi</p>
                <div className="intro__infor"><Infor/></div>
                <p className="intro__someimages-tex">(*) Some Images and Illustrations belongs to Freepik and Dribbble</p>
                <div className="intro__content"><Content/></div>
                <HeaderBottom/>
            </div>
            <div className="intro__imgright">
                <img src={imgright}/>
            </div>
        </div>
    );
}

export default IntroPage;