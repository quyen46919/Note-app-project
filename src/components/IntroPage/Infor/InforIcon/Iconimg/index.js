import React from 'react';
import './index.scss';


function Iconimg(props) {
    return (
        <div className="intro-icon">
            <img className="icon__imgicon" src={props.imgicon}/>
        </div>
    );
}

export default Iconimg;