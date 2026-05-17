import React from "react";
import './benefitsCard.css';

const BenefitsCard = (props) => {
    return (
        <div className="benefits-card">
            <div className="benefits-card-heading-wrapper">
                <i className={props.icon || "fa-solid fa-square-check"}></i>
                {props.tag && <span className="benefits-card-tag">{props.tag}</span>}
                <h3 className="benefits-card-heading">{props.heading}</h3>
            </div>
            <p className="benefits-card-description">{props.description}</p>
        </div>
    )
};

export default BenefitsCard;
