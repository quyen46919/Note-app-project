import React from 'react';
import './styles.scss';
import contentlogo from 'assets/images/intro-contentlogo.png';
import InforIcon from '../InforIcon';
// import ContentTitle from '../ContentTitle';
// import { TextField } from '@mui/material';
import btnicon from 'assets/images/intro-iconbutton.png';
import FadeInWhenVisible from '../../../components/FadeInWhenVisible';


function Content() {
    return (
        <div className="intro-content">
            <div className="intro-content__contentbox">
                <FadeInWhenVisible>
                    <div className="intro-content__boxs">
                        <img className="intro-content__logo" src={contentlogo}/>
                        <p className="intro-content__text">Trường đại học Đông Á, 33 Xô Viết Nghệ Tĩnh, phường Hòa Cường Nam, quận Hải Châu, thành phố Đà Nẵng</p>
                        <div className="intro-content__icon">
                            <InforIcon/>
                        </div>
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <div className="intro-content__boxs">
                        <div className="intro-inforcontent">
                            <h1 className="intro-content__title">Về chúng tôi</h1>
                            <div className="inforintro-content__li">
                                <li className="intro-content__box--li">Cơ sở</li>
                                <li className="intro-content__box--li">Công việc</li>
                                <li className="intro-content__box--li">Client</li>
                                <li className="intro-content__box--li">Blog</li>
                                <li className="intro-content__box--li">Liên hệ</li>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <div className="intro-content__boxs">
                        <div className="intro-inforcontent">
                            <h1 className="intro-content__title">Dịch vụ</h1>
                            <div className="inforintro-content__li">
                                <li className="intro-content__box--li">Graphic Design</li>
                                <li className="intro-content__box--li">UI/UX Design</li>
                                <li className="intro-content__box--li">Web Development</li>
                                <li className="intro-content__box--li">App Development</li>
                                <li className="intro-content__box--li">Web Hosting</li>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <div className="intro-content__boxs">
                        <h1 className="intro-content__title">Cộng tác</h1>
                        <p className="intro-content__text">Vui lòng điền email của bạn để chúng tôi có thể hỗ trợ tốt nhất</p>
                        <div className="intro-content__button-icon">
                            <div className="intro-content__button">
                                <input className="intro-content__btn" placeholder="info@gmail.com"></input>
                            </div>
                            <div className="intro-content__icon">
                                <img className="intro-content__btnicon" src={btnicon}/>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </div>
    );
}

export default Content;