import React from "react";
import "./Homepage.css";
import valvepic from "../../assets/valvepic.jpeg";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Comprehensive Inspections</h2>
      <p className="homepage-details">
        Welcome to Everly Home Inspections! We are a licensed and fully insured
        home inspection service based in Galt, CA and serving the surrounding
        areas. Our services include comprehensive home inspections, termite
        inspections, and pool inspections. Whether you're a home-buyer, investor
        or selling your property, we can help you. All of our inspections
        include a detailed report, along with photos of trouble areas. We work
        with you every step of the way. To schedule an appointment, call (209)
        625- 5544.
      </p>
      <div className="valve-pic-container">
        <img
          className="valve-pic"
          src={valvepic}
          alt="inspector testing gas valve"
        />
      </div>
      <div className="discount-section">
        <h2 className="discount">
          We proudly offer a 10% discount for Military and First Responders!
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
