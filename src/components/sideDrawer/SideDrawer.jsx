import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
const SideDrawer = ({ show, setSideDrawerOpen }) => {
  let drawerClasses = "side_drawer";
  if (show) {
    drawerClasses = "side_drawer open";
  }

  //Handles closing the sidedrawer after a user clicks a link
  //Scrolls to top of page
  const toggleSideNav = () => {
    setSideDrawerOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" onClick={() => toggleSideNav()}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => toggleSideNav()}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => toggleSideNav()}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => toggleSideNav()}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
