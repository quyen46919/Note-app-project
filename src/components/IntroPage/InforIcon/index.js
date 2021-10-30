import React from 'react';
import './styles.scss';


function InforIcon() {
    return (
        <div className="intro-inforicon">
            <div className="intro-inforicon__imgicon">
                <div className="intro-inforicon__icon">
                    <i className="fab fa-facebook-f"></i>
                </div>
            </div>
            <div className="intro-inforicon__imgicon">
                <div className="intro-inforicon__icon">
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div className="intro-inforicon__imgicon">
                <div className="intro-inforicon__icon">
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
            <div className="intro-inforicon__imgicon">
                <div className="intro-inforicon__icon">
                    <i className="fab fa-skype"></i>
                </div>
            </div>
        </div>
    );
}

export default InforIcon;