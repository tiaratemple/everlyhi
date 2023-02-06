import React from "react";
import homeimg from "../../assets/homeimg.jpeg";
import "./Tagline.css";

const Tagline = () => {
  return (
    <div
      className="home-banner"
      style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)),
          url(${homeimg})`,
        backgroundSize: "cover",
        width: "100vw",
      }}
    >
      <div className="tagline-container">
        <h1 className="tagline">Inspected Once, Inspected Right!</h1>
      </div>
    </div>
  );
};

export default Tagline;
