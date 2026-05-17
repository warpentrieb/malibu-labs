import React from 'react';
import './btn.css';

const Btn = (props) => {
    return (
        <a href={props.href || "#"} className="btn" id={props.id}>{props.label}</a>
    )
};

export default Btn;
