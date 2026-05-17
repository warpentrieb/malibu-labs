// import React from "react";
// import './package.css';

// const Package = (props) => {
//     return (
//         <section className={props.featured == 'true' ? 'package featured' : 'package'}>
//             <h3 className="package-heading">{props.heading}</h3>
//             <ul className="package-benefits">
//                 <div className="benefit">
//                     <i className="fa-solid fa-check"></i>
//                     <li>Design & Development</li>
//                 </div>
//                 <div className="benefit">
//                     <i className="fa-solid fa-check"></i>
//                     <li>Design & Development</li>
//                 </div>
//                 <div className="benefit">
//                     <i className="fa-solid fa-check"></i>
//                     <li>Design & Development</li>
//                 </div>
//                 <div className="benefit">
//                     <i className="fa-solid fa-check"></i>
//                     <li>Design & Development</li>
//                 </div>
//                 <div className="benefit">
//                     <i class="fa-solid fa-ban"></i>
//                     <li>Design & Development</li>
//                 </div>
//                 <div className="benefit">
//                     <i class="fa-solid fa-ban"></i>
//                     <li>Design & Development</li>
//                 </div>
//             </ul>
//             <h2 className="package-price">${props.price} <span className="package-price-subheading">{props.price_subheading}</span></h2>
//             <a href="#" className={props.featured == 'true' ? 'package-btn featured' : 'package-btn'}>Get Started</a>
//         </section>
//     )
// };

// export default Package;

import React from "react";
import "./package.css";

const Package = (props) => {
  return (
    <section className={props.featured === "true" ? "package featured" : "package"}>
      <h3 className="package-heading">{props.heading}</h3>

      <h2 className="package-price">
        ${props.price}
        <span className="package-price-subheading">{props.price_subheading}</span>
      </h2>

      <a href="#" className={props.featured === "true" ? "package-btn featured" : "package-btn"}>
        Get Started
      </a>

      <hr className="package-divider" />

      <ul className="package-benefits">
        <div className="benefit">
          <i className="fa-solid fa-check"></i>
          <li>Development</li>
        </div>
        <div className="benefit">
          <i className="fa-solid fa-check"></i>
          <li>Hosting</li>
        </div>
        <div className="benefit">
          <i className="fa-solid fa-check"></i>
          <li>Unlimited Edits</li>
        </div>
        <div className="benefit">
          <i className="fa-solid fa-check"></i>
          <li>24/7 Support</li>
        </div>
        <div className="benefit">
          <i className="fa-solid fa-circle-exclamation"></i>
          <li>$50 per page fee after 5 pages</li>
        </div>
      </ul>
    </section>
  );
};

export default Package;
