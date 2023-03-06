import React, { useState, useEffect } from "react";
import homeimg from "../../assets/homeimg.jpeg";
import "./Tagline.css";
import { Link } from "react-router-dom";

const Tagline = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
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
          {screenWidth > 481 && (
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
