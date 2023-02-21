import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, setSideDrawerOpen }) => {
  let drawerClasses = "side_drawer";
  if (show) {
    drawerClasses = "side_drawer open";
  }

  const handleClick = () => {
    setSideDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default SideDrawer;
