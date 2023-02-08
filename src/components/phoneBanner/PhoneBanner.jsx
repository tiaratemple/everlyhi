import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import "./PhoneBanner.css";

const PhoneBanner = () => {
  return (
    <section className="phone-banner-container">
      <h2 className="phone-banner">
        <FaPhoneSquareAlt className="phone-icon" /> 209-625-5544
      </h2>
    </section>
  );
};

export default PhoneBanner;
