import React from "react";
import everlylogo from "../../assets/everlylogo.PNG";
import "./Footer.css";
import internachigold from "../../assets/internachigold.jpeg";
import poolcert from "../../assets/poolcert.jpeg";
import firsthomecert from "../../assets/firsthomecert.jpeg";
import moveincert from "../../assets/moveincert.jpg";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-container">
      <h2 className="cert-title">CERTIFICATIONS</h2>
      <div className="cert-container">
        <img
          className="cert"
          src={internachigold}
          alt="A gold badge indicating that we are certified by InterNACHI as home inpsectors"
        />
        <img
          className="cert"
          src={poolcert}
          alt="A badge indicating that we are certified by InterNACHI to inspect pools and spas"
        />
        <img
          className="cert"
          src={firsthomecert}
          alt="A badge indicating that InterNACHI certifies us to be First Time Home Buyer Friendly"
        />
        <img
          className="cert"
          src={moveincert}
          alt="A badge indicating that we are certified to have homes Pre-Inspected and Ready to move in"
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
          <HiOutlineLocationMarker className="footer-info-icon" />
          <p className="footer-location-details">Galt, CA</p>
        </div>
      </span>
      <div className="footer-hours-container">
        <h3 className="hours-title">Hours</h3>
        <p className="hours-details">
          Monday-Saturday: 7AM-8AM, Sunday: Closed
        </p>
      </div>
      <div className="footer-links-social-container">
        <section className="footer-links-container">
          <ul>
            <li>
              <Link to="/" onClick={() => handleClick()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleClick()}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => handleClick()}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleClick()}>
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
        <div className="social-container">
          <h3 className="social-title">Follow</h3>
          <div className="social-link-container">
            <a
              href="https://www.facebook.com/everlyhomeinspections/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hunter-white-kore/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <BiCopyright className="copy-icon" />
        <p className="footer-copyright">
          2023 Everly Home Inspections | Website by
        </p>
        <div className="spacer-footer" />
        <a
          href="http://tmtemple.com"
          target="_blank"
          rel="noreferrer"
          className="portfolio"
        >
          Tiara Temple
        </a>
      </div>
    </div>
  );
};

export default Footer;
