import React from "react";
import './services.css';
import ServiceCard from "../servicecard/ServiceCard";
import Btn from "../btn/Btn";

const Services = () => {
    return (
        <div id="landing-services-wrapper">
            <section id="landing-services">
                <p>What we do</p>
                <h2>Services built for<br />modern businesses</h2>
                <p id="landing-services-subheading">At Malibu Labs, we build modern websites, AI-powered systems, and growth tools for businesses across the US and Canada. Every project is designed for speed, clarity, and measurable results, with hands-on support so your digital presence keeps improving long after launch.</p>
            </section>
            <div id="landing-services-cards-wrapper">
                <ServiceCard
                    icon="fa-solid fa-mobile-screen-button"
                    heading="Mobile First Design"
                    description="We design for mobile devices first, keeping your site clean, fast, and easy to use for customers on every screen." link="#contact"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-gauge-high"
                    heading="Fully Responsive"
                    description="Your website will adapt seamlessly to all mobile phones, tablets, and desktop screens, ensuring visitors can access it effortlessly from any device, wherever they are." link="#contact"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-robot"
                    heading="AI Agent Development"
                    description="We create AI agents that handle lead capture, customer support, appointment booking, internal workflows, and repetitive business tasks around the clock." link="#contact"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-magnifying-glass-chart"
                    heading="SEO Services"
                    description="We provide expert SEO services that maximize your online presence, attract quality traffic, and help your business rank higher than the competition." link="#contact"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-bolt"
                    heading="Optimized Page Speed"
                    description="We optimize your website's page speed to deliver fast load times, improve user experience, and support stronger search rankings." link="#contact"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-chart-line"
                    heading="Google PPC Ads"
                    description="We create carefully managed Google PPC ad campaigns that connect you with the right customers, delivering measurable results and helping your business grow with confidence." link="#contact"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-code"
                    heading="Custom Web Apps"
                    description="We build custom web tools, dashboards, booking flows, and client portals tailored to the way your business actually works." link="#contact"
                    link_title="Get Started" />
                <ServiceCard
                    icon="fa-solid fa-mobile-screen"
                    heading="Mobile App Development"
                    description="We design and build mobile apps for customer portals, bookings, internal tools, and business workflows that need a polished experience on the go." link="#contact"
                    link_title="Get Started" />
            </div>
            <div id="services-trust-panel">
                <div id="services-trust-icon">
                    <i className="fa-solid fa-flag-usa" aria-hidden="true"></i>
                </div>
                <div>
                    <p id="services-trust-label">Proudly American-Owned</p>
                    <h3>Practical service, clear communication, and support you can reach.</h3>
                    <p>Based in the USA, Malibu Labs provides transparent guidance, custom-scoped quotes, and dedicated support from planning through launch.</p>
                </div>
            </div>
            <div id="landing-services-btn-wrapper">
                <Btn label="Contact Us" href="#contact" />
            </div>
        </div>
    )
};

export default Services;
