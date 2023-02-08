import React from "react";

const Toolbar = (props) => {
  return (
    <header>
      <nav>
        <div></div>
        <div>
          <a href="/">The logo</a>
        </div>
        <div>
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
      </nav>
    </header>
  );
};

export default Toolbar;
