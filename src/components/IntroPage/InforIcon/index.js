import React from 'react';
import './styles.scss';


function InforIcon() {
    return (
        <div className="intro__infor-icon">
            <div className="intro__infor-icon__img-icon">
                <div className="intro__infor-icon__icon">
                    <i className="fab fa-facebook-f"></i>
                </div>
            </div>
            <div className="intro__infor-icon__img-icon">
                <div className="intro__infor-icon__icon">
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div className="intro__infor-icon__img-icon">
                <div className="intro__infor-icon__icon">
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
            <div className="intro__infor-icon__img-icon">
                <div className="intro__infor-icon__icon">
                    <i className="fab fa-skype"></i>
                </div>
            </div>
        </div>
    );
}

export default InforIcon;