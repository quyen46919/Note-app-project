import React from 'react';
import './styles.scss';
import InforIcon from '../InforIcon';
import FadeInWhenVisible from '../FadeInWhenVisible';

function Personal(props) {
    return (
        <FadeInWhenVisible><div className="intro-personal">
            <div className="personal__bacgruond-img">
                <img className="personal__img" src={props.img}/>
                <div className="infor__inforicon"><InforIcon/></div>
            </div>
            <p className="personal__name">{props.name}</p>
            <p className="personal__job">{props.job}</p>
        </div></FadeInWhenVisible>
    );
}

export default Personal;