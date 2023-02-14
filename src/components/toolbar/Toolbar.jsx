import React from "react";
import "./Toolbar.css";
import everlylogo from "../../assets/everlylogo.PNG";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";

const Toolbar = ({ drawerClickHandler }) => {
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
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
