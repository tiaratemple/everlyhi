import React from "react";
import "./Header.css";
import { TbPhoneCall } from "react-icons/tb";
import { BiEnvelope } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import everlylogo from "../../assets/everlylogo.jpeg";

const Header = () => {
  return (
    <header>
      <div className="header-phone-container">
        <TbPhoneCall className="header-phone-icon" />
        <p className="header-phone-number">209-625-5544</p>
      </div>
      <div className="header-email-container">
        <BiEnvelope className="header-email-icon" />
        <a href="mailto:hwhite0819@gmail.com" className="header-email">
          hwhite0819@gmail.com
        </a>
      </div>
      <div className="logo-menu-container">
        <img className="everly-logo" src={everlylogo} alt="logo" />
        <GiHamburgerMenu className="menu-icon" />
      </div>
    </header>
  );
};

export default Header;
