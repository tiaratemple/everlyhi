import React from "react";
import homeimg from "../../assets/homeimg.jpeg";
import "./Tagline.css";
import { Link } from "react-router-dom";

const Tagline = ({ isMobile }) => {
  return (
    <>
      <div
        className="home-banner"
        style={{
          background: `linear-gradient(
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)),
          url(${homeimg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="tagline-container">
          <p className="tagline">Inspected Once, Inspected Right!</p>
          {!isMobile && (
            <Link to="/contact">
              <button className="tagline-btn">
                Contact a Professional Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Tagline;
