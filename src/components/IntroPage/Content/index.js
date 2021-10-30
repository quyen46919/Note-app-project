import React from 'react';
import './styles.scss';
import contentlogo from 'assets/images/intro-contentlogo.png';
import InforIcon from '../InforIcon';
// import ContentTitle from '../ContentTitle';
// import { TextField } from '@mui/material';
import btnicon from 'assets/images/intro-iconbutton.png';
import FadeInWhenVisible from '../FadeInWhenVisible';


function Content() {
    return (
        <div className="intro-content">
            <div className="intro-content__contentbox">
                <FadeInWhenVisible><div className="intro-content__boxs">
                    <img className="intro-content__logo" src={contentlogo}/>
                    <p className="intro-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum.</p>
                    <div className="intro-content__icon"><InforIcon/></div>
                </div></FadeInWhenVisible>
                <FadeInWhenVisible><div className="intro-content__boxs">
                    <div className="intro-inforcontent">
                        <h1 className="intro-content__title">Sevices</h1>
                        <div className="inforintro-content__li">
                            <li className="intro-content__box--li">About Us</li>
                            <li className="intro-content__box--li">Our Work</li>
                            <li className="intro-content__box--li">Client</li>
                            <li className="intro-content__box--li">Our Blog</li>
                            <li className="intro-content__box--li">Contact US</li>
                        </div>
                    </div>
                </div></FadeInWhenVisible>
                <FadeInWhenVisible><div className="intro-content__boxs">
                    <div className="intro-inforcontent">
                        <h1 className="intro-content__title">Sevices</h1>
                        <div className="inforintro-content__li">
                            <li className="intro-content__box--li">Graphic Design</li>
                            <li className="intro-content__box--li">UI/UX Design</li>
                            <li className="intro-content__box--li">Web Development</li>
                            <li className="intro-content__box--li">App Development</li>
                            <li className="intro-content__box--li">Web Hosting</li>
                        </div>
                    </div>
                </div></FadeInWhenVisible>
                <FadeInWhenVisible><div className="intro-content__boxs">
                    <h1 className="intro-content__title">Newsletter</h1>
                    <p className="intro-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.</p>
                    <div className="intro-content__button-icon">
                        <div className="intro-content__button">
                            <input className="intro-content__btn" placeholder="info@gmail.com"></input>
                        </div>
                        <div className="intro-content__icon">
                            <img className="intro-content__btnicon" src={btnicon}/>
                        </div>
                    </div>
                </div></FadeInWhenVisible>
            </div>
        </div>
    );
}

export default Content;