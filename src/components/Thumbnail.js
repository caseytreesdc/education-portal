import React from 'react';
import './Thumbnail.css';

const Thumbnail = (props) => {
    
    return (
        <div className="Thumbnail">
            <img alt={props.imgSrc} className="Thumbnail__image" src={props.imgSrc}/>
        </div>
    )
}

export default Thumbnail;