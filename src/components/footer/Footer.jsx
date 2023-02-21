import React from "react";
import everlylogo from "../../assets/everlylogo.PNG";
import "./Footer.css";
import internachigold from "../../assets/internachigold.jpeg";
import poolcert from "../../assets/poolcert.jpeg";
import firsthomecert from "../../assets/firsthomecert.jpeg";
import moveincert from "../../assets/moveincert.jpg";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="cert-title">CERTIFICATIONS</h2>
      <div className="cert-container">
        <img
          className="cert"
          src={internachigold}
          alt="internachi certified gold logo"
        />
        <img
          className="cert"
          src={poolcert}
          alt="internachi pool inspector certified logo"
        />
        <img
          className="cert"
          src={firsthomecert}
          alt="internachi first home buyer friendly certified logo"
        />
        <img
          className="cert"
          src={moveincert}
          alt="internachi move-in certified logo"
        />
      </div>
      <div className="footer-everly-logo-container">
        <img className="footer-logo" src={everlylogo} alt="logo" />
      </div>
      <span className="footer-info-container">
        <div className="footer-phone-container">
          <FiPhoneCall className="footer-info-icon" />
          <p className="footer-phone-number">(209) 625-5544</p>
        </div>
        <div className="footer-location-container">
          <CiLocationOn className="footer-info-icon" />
          <p className="footer-location-details">Galt, CA</p>
        </div>
      </span>
      <section className="footer-links-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
