import React from 'react';
import './index.scss';
import content from 'assets/images/intro-introduce.png';
import introduceimg from 'assets/images/intro-introduceimg.png';
// import icon from 'assets/images/intro-contenticon.png';
import { Button } from '@mui/material';

function Introduce() {
    return (
        <div className="intro-introduce">
            <div className="introduce__content">
                <div className="introduce__image">
                    <img className="introduce__imgcontent" src={content}/>
                </div>
                <div className="introduce__text">
                    <p>Phần mềm Quản lý ghi chú - trợ lý đắc lực trong công việc.</p>
                    <p>Nottable được cung cấp các công cụ hỗ trợ ghi chú chuyên nghiệp, bạn có thể lưu trữ ghi chú cá nhân hoặc dùng với team của bạn trong các dự án..</p>
                </div>
                <div className="introduce__bnt-icon">
                    <div className="introduce__button">
                        <Button className="introduce__btn" variant="contained">Truy cập ngay</Button>
                    </div>
                    <div className="introduce__icon">
                        <div className="introduce__box-icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="introduce__box-icon">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="introduce__box-icon">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="introduce__img">
                <img className="introduce__imgcontent" src={introduceimg}/>
            </div>
        </div>
    );
}

export default Introduce;