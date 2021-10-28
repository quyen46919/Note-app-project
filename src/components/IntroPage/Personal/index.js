import React from 'react';
import './styles.scss';
import InforIcon from '../InforIcon';

function Personal(props) {
    return (
        <div className="intro-personal">
            <div className="personal__bacgruond-img">
                <img className="personal__img" src={props.img}/>
                <div className="infor__inforicon"><InforIcon/></div>
            </div>
            <p className="personal__name">{props.name}</p>
            <p className="personal__job">{props.job}</p>
        </div>
    );
}

export default Personal;