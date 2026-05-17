import React from "react";
import './reviews.css';

import ReviewsCard from "../reviewsCard/reviewsCard";
import SectionIntro from "../sectionIntro/SectionIntro";

const Reviews = () => {
    return (
        <section id="reviews-section">
            <SectionIntro 
                title="Our Reviews"
                heading="What our clients say after launch"
                description="Clients come to Malibu Labs when they want a site and growth system that feels professional, performs fast, and is easy to manage after launch."
            />
            <div id="reviews-proof-strip">
                <div>
                    <strong>5-star feedback</strong>
                    <span>Clear communication and reliable delivery.</span>
                </div>
                <div>
                    <strong>Built for results</strong>
                    <span>Sites, ads, SEO, and automations with a purpose.</span>
                </div>
                <div>
                    <strong>Long-term support</strong>
                    <span>Help before, during, and after the project goes live.</span>
                </div>
            </div>
            <section id="reviews">
                <ReviewsCard
                    project="Website build"
                    description="Shaheer and his team were responsive, talented, and easy to work with. They understood what we needed and delivered a polished site that gave our business a stronger online presence."
                    name="Brandon Lewis"
                    location="Los Angeles, CA"
                />
                <ReviewsCard
                    project="Modern redesign"
                    description="Malibu Labs built a beautiful, modern website and guided us through every step. The process was smooth, professional, and much easier than we expected."
                    name="Jason Brooks"
                    location="Macon, GA"
                />
                <ReviewsCard
                    project="Brand and conversion refresh"
                    description="They nailed the design, responded quickly, and made the whole project feel effortless. The final site looks sharp and makes it much easier for customers to take action."
                    name="Skyler Hayes"
                    location="Richmond, VA"
                />
            </section>
        </section>

    );
};

export default Reviews;
