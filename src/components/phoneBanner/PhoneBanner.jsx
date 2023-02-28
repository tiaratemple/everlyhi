import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import "./PhoneBanner.css";

const PhoneBanner = () => {
  return (
    <section className="phone-banner-container">
      <a href="tel:2096255544" className="phone-banner-link">
        <FaPhoneSquareAlt className="phone-icon" />

        <h2 className="phone-text">209-625-5544</h2>
      </a>
    </section>
  );
};

export default PhoneBanner;
