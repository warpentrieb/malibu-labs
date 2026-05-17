// import React, { useState } from "react";
// import './navbar.css';
// import Btn from "../btn/Btn";

// const Navbar = ({ scrolled }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav id="main-navbar" className={scrolled ? "scrolled" : ""}>
//       <img src="/assets/logo.jpg" alt="logo" id="logo" />
//       <ul id="main-navbar-links" className={menuOpen ? "active" : ""}>
//         <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
//         <li><a href="#landing-services" onClick={() => setMenuOpen(false)}>About Us</a></li>
//         <li><a href="#" onClick={() => setMenuOpen(false)}>Services</a></li>
//         <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Quotes</a></li>
//         <li><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li>
//       </ul>
//       <Btn label="Get Started" id="contact-btn"/>
//       <div
//         id="hamburger-icon"
//         onClick={handleMenuToggle}
//         className={menuOpen ? 'hamburger-active' : ''}
//       >
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import './navbar.css';
import Btn from "../btn/Btn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="main-navbar" className={scrolled ? "scrolled" : ""} ref={navbarRef}>
      <div className="navbar-inner">
        <a href="#landing-hero" id="brand-logo" aria-label="Malibu Labs home">
          <img src="/assets/malibu-labs-logo-transparent.png" alt="Malibu Labs" />
        </a>
        <ul id="main-navbar-links" className={menuOpen ? "active" : ""}>
          <li><ScrollLink to="landing-hero" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Home</ScrollLink></li>
          <li><ScrollLink to="benefits" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>About Us</ScrollLink></li>
          <li><ScrollLink to="landing-services" smooth duration={500} offset={-100} onClick={() => setMenuOpen(false)}>Services</ScrollLink></li>
          <li><ScrollLink to="pricing" smooth duration={500} offset={-300} onClick={() => setMenuOpen(false)}>Quotes</ScrollLink></li>
          <li><ScrollLink to="contact" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Contact</ScrollLink></li>
        </ul>
        <Btn label="Get Started" id="contact-btn" href="#contact" />
        <div
          id="hamburger-icon"
          onClick={handleMenuToggle}
          className={menuOpen ? 'hamburger-active' : ''}
        >
          <div></div><div></div><div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
