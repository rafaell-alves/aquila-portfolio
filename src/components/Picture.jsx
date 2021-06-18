import React from 'react';
import './Picture.css'

const Picture = (props) => {
    return (
        <div className="div-art mx-xl-1 mx-sm-3 mx-md-5 mx-lg-3  mb-3">
            <img  alt={props.alt} src={props.src}></img>
            <p>{props.name}</p>
        </div>
    );
}

export default Picture;
