import React from "react";
import "./Toolbar.css";
import everlylogo from "../../assets/everlylogo.PNG";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

const Toolbar = ({ drawerClickHandler }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="toolbar">
      <nav className="toolbar_nav">
        <div>
          <img className="toolbar_logo" src={everlylogo} alt="logo" />
        </div>
        <div className="spacer" />
        <div className="toolbar_nav_items">
          <ul>
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="toolbar_toggle_btn">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
