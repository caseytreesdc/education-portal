import React from 'react';
import './CTButton.css';

const CTButton = (props) => {
    let className = 'CTButton'
    
    if (props.noBorder) {
        className += "-noBorder"
    }

    return (
        <div className={className}>
            <p className={className + "__text"}>{props.text}</p>
        </div>
    )
}

export default CTButton;