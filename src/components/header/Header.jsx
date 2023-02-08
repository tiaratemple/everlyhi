import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import everlylogo from "../../assets/everlylogo.PNG";

const Header = () => {
  return (
    <div className="logo-menu-container">
      <img className="everly-logo" src={everlylogo} alt="logo" />
      <GiHamburgerMenu className="menu-icon" />
    </div>
  );
};

export default Header;
