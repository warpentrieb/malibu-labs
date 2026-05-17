import React from "react";
import './reviewsCard.css';

const ReviewsCard = (props) => {
    return (
        <div className="reviews-card">
            <div className="reviews-card-stars" aria-label="5 star review">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            {props.project && <span className="reviews-card-project">{props.project}</span>}
            <p className="reviews-card-description">{props.description}</p>
            <div className="reviews-card-client">
                <div className="reviews-card-avatar">{props.name?.charAt(0)}</div>
                <div>
                    <h3 className="reviews-card-name">{props.name}</h3>
                    <p className="reviews-card-location">{props.location}</p>
                </div>
            </div>
        </div>
    )
};

export default ReviewsCard;
