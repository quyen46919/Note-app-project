import React from 'react';
import './index.scss';
import contentlogo from 'assets/images/intro-contentlogo.png';
import InforIcon from '../InforIcon';
import InforContentCompany from '../InforContent/indexcompany';
import InforContentSevice from '../InforContent/indexsevice';
import ContentTitle from '../ContentTitle';
// import { TextField } from '@mui/material';
import btnicon from 'assets/images/intro-iconbutton.png';


function Content() {
    return (
        <div className="intro-content">
            <div className="content__contentbox">
                <div className="content__box">
                    <img className="content__logo" src={contentlogo}/>
                    <p className="content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum.</p>
                    <div className="content__icon"><InforIcon/></div>
                </div>
                <div className="content__box">
                    <InforContentCompany/>
                </div>
                <div className="content__box">
                    <InforContentSevice/>
                </div>
                <div className="content__box">
                    <ContentTitle title={'Newsletter'}/>
                    <p className="content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.</p>
                    <div className="content__button-icon">
                        <div className="content__button">
                            {/* <TextField id="outlined-basic" label="info@gmail.com" variant="outlined"/> */}
                            <input className="content__btn" placeholder="info@gmail.com"></input>
                        </div>
                        <div className="content__icon">
                            <img className="content__btnicon" src={btnicon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;