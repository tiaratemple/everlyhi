import React from "react";
import "./ServicesPage.css";
import services from "../../assets/services.webp";

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <h1 className="services-page-title">Quality Services</h1>
      <div className="services-pic-container">
        <img
          className="services-pic"
          src={services}
          alt="house with arrows indicating points of service areas"
        />
      </div>
      <div className="services-focus-title-container">
        <h2 className="services-focus-title">What We Focus On</h2>
      </div>
      <div className="services-line"></div>
      <div className="services-focus-list">
        <ul className="ul-services">
          <li>Roof Inspection</li>
          <li>Foundation Inspection</li>
          <li>Crawlspace Inspection</li>
          <li>Structural Systems</li>
          <li>HVAC system</li>
          <li>Plumbing Systems</li>
          <li>Electrical Systems</li>
          <li>Fireplace and Chimney</li>
          <li>Atic Inspection</li>
          <li>Walls (Interior and Exterior)</li>
          <li>Ducts and Vents</li>
          <li>Porches, Decks, and Carports</li>
          <li>Swimming Pools</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
