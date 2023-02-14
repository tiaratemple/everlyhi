import React from "react";
import "./SideDrawer.css";

const SideDrawer = ({ show }) => {
  let drawerClasses = "side_drawer";
  if (show) {
    drawerClasses = "side_drawer open";
  }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default SideDrawer;
