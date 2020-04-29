import React from 'react';
import './CTButton.css';

const CTButton = (props) => {
    return (
        <div className="CTButton">
            <p className="CTButton__text">{props.text}</p>
        </div>
    )
}

export default CTButton;