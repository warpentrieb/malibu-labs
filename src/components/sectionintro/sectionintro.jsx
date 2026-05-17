import React from "react";
import './sectionIntro.css';

const SectionIntro = (props) => {
    return (
        <div className="section-intro">
            <h3 className="section-intro-title">{props.title}</h3>
            <h2 className="section-intro-heading">{props.heading}</h2>
            {props.description && (<p className="section-intro-decription">{props.description}</p>)}
        </div>
    )
};

export default SectionIntro;