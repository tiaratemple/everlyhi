import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./DrawerToggleButton.css";

const DrawerToggleButton = ({ click }) => {
  return (
    <button className="toggle_btn" onClick={click}>
      <GiHamburgerMenu className="menu_icon" />
    </button>
  );
};

export default DrawerToggleButton;
