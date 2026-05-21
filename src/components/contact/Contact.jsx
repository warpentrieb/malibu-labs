import React, { useRef, useState } from "react";
import "./contact.css";

const Contact = () => {
    const formRef = useRef(null);
    const [formStatus, setFormStatus] = useState("idle");

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormStatus("sending");

        window.setTimeout(() => {
            setFormStatus("success");
            formRef.current?.reset();
        }, 900);

        event.currentTarget.submit();
    };

    return (
        <section id="contact">
            <div id="contact-intro">
                <p>Contact Us</p>
                <h2>Tell us what you want to build</h2>
                <span>Share your goals, requirements, timeline, and any features you have in mind. We will review the scope and follow up with a custom quote.</span>
            </div>
            <iframe
                title="Contact form submission"
                name="contact-form-frame"
                className="contact-form-frame"
                aria-hidden="true"
            />
            <form
                ref={formRef}
                id="contact-form"
                action="https://formsubmit.co/support@malibulabs.online"
                method="POST"
                target="contact-form-frame"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="_subject" value="New Malibu Labs quote inquiry" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="contact-honey-field" tabIndex="-1" autoComplete="off" />
                {formStatus === "success" && (
                    <div className="contact-success-message" role="status" aria-live="polite">
                        We have received your inquiry. Our team will review your details and follow up with a custom quote.
                    </div>
                )}
                <label>
                    <span>Your Name</span>
                    <input type="text" name="name" placeholder="Jane Smith" required />
                </label>
                <label>
                    <span>Email Address</span>
                    <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                    <span>Phone Number</span>
                    <input type="tel" name="phone" placeholder="(555) 123-4567" />
                </label>
                <label>
                    <span>What do you need?</span>
                    <select name="service" defaultValue="" required>
                        <option value="" disabled>Select a service</option>
                        <option>Website Design & Development</option>
                        <option>AI Agent Development</option>
                        <option>SEO Services</option>
                        <option>Google PPC Ads</option>
                        <option>Custom Web App</option>
                        <option>Mobile App Development</option>
                    </select>
                </label>
                <label className="contact-message-field">
                    <span>Project Details</span>
                    <textarea name="message" rows="6" placeholder="Tell us about your goals, current website, must-have features, timeline, and budget range if you have one." required></textarea>
                </label>
                <button type="submit" disabled={formStatus === "sending"}>
                    {formStatus === "sending" ? "Sending Inquiry..." : "Request a Custom Quote"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
