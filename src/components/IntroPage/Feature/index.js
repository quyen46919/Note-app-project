import React from 'react';
import img1 from 'assets/images/intro-feature-img.png';
import img2 from 'assets/images/intro-feature-img2.png';
import img3 from 'assets/images/intro-feature-img1.png';
import './styles.scss';
import FadeInWhenVisible from '../FadeInWhenVisible';


function Feature() {
    return (
        <div className="intro-feature">
            <div className="intro-feature__box">
                <div className="intro-feature__img-image">
                    <FadeInWhenVisible>
                        <img className="intro-feature__image" src={img1}/>
                    </FadeInWhenVisible>
                </div>
                <div className="intro-feature__content">
                    <FadeInWhenVisible>
                        <div className="intro-feature__text">
                            <p className="intro-feature__title">Công cụ quản lý trực quan</p>
                            <p className="intro-feature__content-text">Phần mềm Quản lý ghi chú - trợ lý đắc lực trong công việc.</p>
                            <p className="intro-feature__content-text">Nottable được cung cấp các công cụ hỗ trợ ghi chú chuyên nghiệp, bạn có thể lưu trữ ghi chú cá nhân hoặc dùng với team của bạn trong các dự án..</p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
            <div className="intro-feature__box">
                <div className="intro-feature__img-image">
                    <FadeInWhenVisible>
                        <img className="intro-feature__image" src={img2}/>
                    </FadeInWhenVisible>
                </div>
                <div className="intro-feature__content">
                    <FadeInWhenVisible>
                        <div className="intro-feature__text">
                            <p className="intro-feature__title">Tương tác kéo thả thú vị</p>
                            <p className="intro-feature__content-text">Phần mềm Quản lý ghi chú - trợ lý đắc lực trong công việc.</p>
                            <p className="intro-feature__content-text">Nottable được cung cấp các công cụ hỗ trợ ghi chú chuyên nghiệp, bạn có thể lưu trữ ghi chú cá nhân hoặc dùng với team của bạn trong các dự án..</p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
            <div className="intro-feature__box">
                <div className="intro-feature__img-image">
                    <FadeInWhenVisible>
                        <img className="intro-feature__image" src={img3}/>
                    </FadeInWhenVisible>
                </div>
                <div className="intro-feature__content">
                    <FadeInWhenVisible>
                        <div className="intro-feature__text">
                            <p className="intro-feature__title">Miễn phí<br/> cho người dùng cá nhân</p>
                            <p className="intro-feature__content-text">Phần mềm Quản lý ghi chú - trợ lý đắc lực trong công việc.</p>
                            <p className="intro-feature__content-text">Nottable được cung cấp các công cụ hỗ trợ ghi chú chuyên nghiệp, bạn có thể lưu trữ ghi chú cá nhân hoặc dùng với team của bạn trong các dự án..</p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </div>
    );
}

export default Feature;