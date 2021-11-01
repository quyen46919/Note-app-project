import React from 'react';
import './styles.scss';
import content from 'assets/images/intro-introduce.png';
import introduceimg from 'assets/images/intro-introduceimg.png';
import penimg from 'assets/images/intro_penimg.png';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Introduce() {
    return (
        <div className="intro-introduce">
            <div className="intro-introduce__content">
                <div className="intro-introduce__image">
                    <img className="intro-introduce__img-content" src={content}/>
                    <img className="intro-introduce__pen-img" src={penimg}/>
                </div>
                <div className="intro-introduce__text">
                    <p>Phần mềm Quản lý ghi chú - trợ lý đắc lực trong công việc.</p>
                    <p>Nottable được cung cấp các công cụ hỗ trợ ghi chú chuyên nghiệp, bạn có thể lưu trữ ghi chú cá nhân hoặc dùng với team của bạn trong các dự án..</p>
                </div>
                <div className="intro-introduce__bnt-icon">
                    <div className="intro-introduce__button">
                        <NavLink to="/home" style={{ textDecoration: 'unset', color: 'unset' }}>
                            <Button className="intro-introduce__btn" variant="contained" disableElevation>
                                Truy cập ngay
                            </Button>
                        </NavLink>
                    </div>
                    <div className="intro-introduce__icon">
                        <div className="intro-introduce__box-icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="intro-introduce__box-icon">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="intro-introduce__box-icon">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-introduce__img">
                <img className="intro-introduce__img-content" src={introduceimg}/>
            </div>
        </div>
    );
}

export default Introduce;