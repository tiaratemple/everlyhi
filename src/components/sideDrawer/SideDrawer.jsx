import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show }) => {
  let drawerClasses = "side_drawer";
  if (show) {
    drawerClasses = "side_drawer open";
  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default SideDrawer;
