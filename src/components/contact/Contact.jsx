import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <div id="contact-intro">
                <p>Contact Us</p>
                <h2>Tell us what you want to build</h2>
                <span>Share your goals, requirements, timeline, and any features you have in mind. We will review the scope and follow up with a custom quote.</span>
            </div>
            <form id="contact-form">
                <label>
                    <span>Your Name</span>
                    <input type="text" name="name" placeholder="Jane Smith" />
                </label>
                <label>
                    <span>Email Address</span>
                    <input type="email" name="email" placeholder="you@example.com" />
                </label>
                <label>
                    <span>Phone Number</span>
                    <input type="tel" name="phone" placeholder="(555) 123-4567" />
                </label>
                <label>
                    <span>What do you need?</span>
                    <select name="service" defaultValue="">
                        <option value="" disabled>Select a service</option>
                        <option>Website Design & Development</option>
                        <option>AI Agent Development</option>
                        <option>SEO Services</option>
                        <option>Google PPC Ads</option>
                        <option>Custom Web App</option>
                    </select>
                </label>
                <label className="contact-message-field">
                    <span>Project Details</span>
                    <textarea name="message" rows="6" placeholder="Tell us about your goals, current website, must-have features, timeline, and budget range if you have one."></textarea>
                </label>
                <button type="submit">Request a Custom Quote</button>
            </form>
        </section>
    );
};

export default Contact;
