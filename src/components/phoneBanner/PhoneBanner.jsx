import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import "./PhoneBanner.css";

const PhoneBanner = () => {
  return (
    <div className="phone-banner-container">
      <a href="tel:2096255544" className="phone-banner-link">
        <FaPhoneSquareAlt className="phone-icon" />

        <p className="phone-text">209-625-5544</p>
      </a>
    </div>
  );
};

export default PhoneBanner;
