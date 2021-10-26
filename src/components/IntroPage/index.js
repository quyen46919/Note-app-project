import React from 'react';
import './styles.scss';
import HeaderTop from '../IntroPage/HeaderTop';
import Introduce from './Introduce';
import Feature from './Feature';
import Infor from './Infor';
import Content from './Content';
import HeaderBottom from './HeaderBottom';


function IntroPage() {
    return (
        <div className='intro'>
            <div className="intro__headertop"><HeaderTop/></div>
            <div className="intro__introduce"><Introduce/></div>
            <h1 className="intro__feature-tex">Các tính năng nổi bật</h1>
            <div className="intro__feature"><Feature/></div>
            <p className="intro__member-tex">Thành viên</p>
            <p className="intro__aboutus-tex">Về chúng tôi</p>
            <div className="intro__infor"><Infor/></div>
            <p className="intro__someimages-tex">(*) Some Images and Illustrations belongs to Freepik and Dribbble</p>
            <div className="intro__content"><Content/></div>
            <HeaderBottom/>
        </div>
    );
}

export default IntroPage;