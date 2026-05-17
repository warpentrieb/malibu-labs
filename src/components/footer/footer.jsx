import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer id="main-footer" role="contentinfo">
      <div id="main-footer-cta">
        <div>
          <p>Ready to scope your project?</p>
          <h2>Tell us what you need. We will shape the right quote.</h2>
        </div>
        <a href="#contact">Request a Custom Quote</a>
      </div>

      <div id="main-footer-wrapper">
        <div id="main-footer-branding" aria-label="Company branding">
          <a href="#landing-hero" id="main-footer-logo" aria-label="Malibu Labs home">
            <img src="assets/malibu-labs-logo-footer-transparent.png" alt="Malibu Labs" />
          </a>
          <p id="main-footer-description">
            Websites, SEO, ads, mobile apps, custom web apps, and AI agents built around your goals, requirements, and project complexity.
          </p>
          <div id="main-footer-badges">
            <span>Custom scoped quotes</span>
            <span>AI-ready systems</span>
            <span>US-based support</span>
          </div>
          <div id="main-footer-socials" aria-label="Social links">
            <a href="https://www.facebook.com/profile.php?id=61575124922241" target="_blank" rel="noreferrer" aria-label="Malibu Labs on Facebook">
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <nav id="main-footer-links" aria-label="Footer navigation">
          <p className="main-footer-column-heading">Explore</p>
          <a href="#landing-hero">Home</a>
          <a href="#benefits">What We Offer</a>
          <a href="#landing-services">Services</a>
          <a href="#pricing">Quotes</a>
          <a href="#contact">Contact</a>
        </nav>

        <div id="main-footer-services">
          <p className="main-footer-column-heading">Services</p>
          <span>AI Agent Development</span>
          <span>Website Development</span>
          <span>Mobile App Development</span>
          <span>SEO + Google Ads</span>
          <span>Custom Web Apps</span>
        </div>

        <div id="main-footer-contact" aria-label="Contact information">
          <p className="main-footer-column-heading">Contact</p>
          <a className="main-footer-contact-item-wrapper" href="mailto:support@malibulabs.online">
            <i className="fa-solid fa-envelope footer-icon" aria-hidden="true" />
            <span className="main-footer-contact-item">support@malibulabs.online</span>
          </a>
          <div className="main-footer-contact-item-wrapper">
            <i className="fa-solid fa-location-dot footer-icon" aria-hidden="true" />
            <span className="main-footer-contact-item">United States</span>
          </div>
          <div className="main-footer-contact-item-wrapper">
            <i className="fa-solid fa-clock footer-icon" aria-hidden="true" />
            <span className="main-footer-contact-item">Responsive project support</span>
          </div>
        </div>
      </div>

      <div id="main-footer-bottom">
        <p>© 2026 Malibu Labs. All rights reserved.</p>
        <a href="#contact">Start a project</a>
      </div>
    </footer>
  );
};

export default Footer;
