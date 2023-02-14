import React from "react";
import "./AboutUsPage.css";
import handshake from "../../assets/handshake.jpg";

const AboutUsPage = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-page-title">About Us</h1>
      <div className="handshake-pic-container">
        <img
          className="handshake-pic"
          src={handshake}
          alt="inspector shaking hands with client over table"
        />
      </div>
      <div className="about-page-details-title-container">
        <h2 className="about-page-details-title">
          Family Owned, Trusted Home Inspection Company
        </h2>
        <div className="about-page-line"></div>
      </div>
      <div className="about-page-details-container">
        <p className="about-page-details">
          Everly Home Inspections is a reliable Home Inspection Company owned
          and operated in Galt, CA. We offer the best value and quality possible
          in all of our inspection services. Whether you are buying your first
          home or looking to put your home on the market, you will need a
          reliable inspection service on your side. Everly Home Inspections is
          that trusted service you can depend on. We offer a range of
          inspections, including new construction inspections, chimney
          inspections, HVAC inspections, and roof inspections. Give us a call to
          schedule an appointment at (209) 625-5544.
        </p>
      </div>
      <div className="about-why-title-container">
        <h3 className="about-why-title">Why Choose Us</h3>
      </div>
      <div className="about-why-details-container">
        <p className="about-why-details">
          We are locally owned and operated. We support other locally owned
          businesses. We communicate our findings with a quality report that is
          easy to understand. We are reliable and here to work with your
          schedule.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
