import React from "react";
import './servicecard.css';

const ServiceCard = (props) => {
    return (
        <div className="service-card">
            <i className={props.icon + ' service-card-icon'} />
            <h3 className="service-card-heading">{props.heading}</h3>
            <p className="service-card-description">{props.description}</p>
            <a href={props.link} className="service-card-link">{props.link_title}</a>
        </div>
    )
};

export default ServiceCard;

