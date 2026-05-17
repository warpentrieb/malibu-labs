import React, { useState, useEffect } from "react";
import './hero.css';
import Navbar from "../navbar/navbar";

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="landing-hero">
            <Navbar scrolled={scrolled} />

            <div id="landing-hero-container">
                <p id="landing-hero-subheading">Websites, SEO, ads, and AI agents</p>
                <p id="landing-hero-heading">Turn visitors into<br />qualified leads</p>
                <p id="landing-hero-description">
                    Malibu Labs builds fast websites and AI-powered growth systems that help small businesses capture leads, automate follow-up, and book more work.
                </p>
                <div id="landing-hero-actions">
                    <a href="#pricing" id="landing-hero-btn">Request a Custom Quote</a>
                    <a href="#landing-services" id="landing-hero-secondary-btn">View Services</a>
                </div>
                <div id="hero-proof-row" aria-label="Trust signals">
                    <span>&#9733; &#9733; &#9733; &#9733; &#9733; Rated 5 Stars</span>
                    <span>Custom scoped quotes</span>
                    <span>No template shortcuts</span>
                </div>
            </div>

            <div id="hero-image">
                <div id="hero-visual-card" aria-label="Malibu Labs growth system preview">
                    <div id="hero-browser-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="hero-visual-content">
                        <div id="hero-visual-main">
                            <p className="hero-visual-kicker">Lead Engine</p>
                            <h3>Website + AI Agent</h3>
                            <div className="hero-visual-chart">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="hero-visual-progress">
                                <span></span>
                            </div>
                        </div>
                        <div id="hero-visual-sidebar">
                            <div className="hero-metric-card">
                                <i className="fa-solid fa-robot"></i>
                                <div>
                                    <strong>AI Agent</strong>
                                    <span>Booked quote call</span>
                                </div>
                            </div>
                            <div className="hero-metric-card">
                                <i className="fa-solid fa-chart-line"></i>
                                <div>
                                    <strong>SEO + Ads</strong>
                                    <span>New lead captured</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="hero-floating-card">
                        <i className="fa-solid fa-bolt"></i>
                        <div>
                            <strong>3 new inquiries</strong>
                            <span>Ready for follow-up</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
