import React from "react";
import './pricing.css';
import SectionIntro from "../sectionintro/sectionintro";
import Btn from "../btn/btn";

const Pricing = () => {
    return (
        <section id="pricing">
            <SectionIntro
                title="Custom Quotes"
                heading="Built around your requirements"
                description="We do not use one-size-fits-all pricing. Every project starts with your goals, requirements, features, timeline, and the complexity of the work involved. After we understand what you need, we provide a custom quote that fits the scope of the job."
            />
            <div id="pricing-cta-wrapper">
                <Btn label="Request a Custom Quote" href="#contact" />
            </div>
        </section>
    )
};

export default Pricing;
