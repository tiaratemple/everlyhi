import React, { useEffect } from "react";
import clipboard from "../../assets/clipboard.jpg";
import { BiEnvelope } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import "./ContactPage.css";
import ContactForm from "../../contactForm/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="contact-page-container">
      <h1 className="contact-page-title">Contact Us</h1>
      <div className="contact-pic-container">
        <img
          className="contact-pic"
          src={clipboard}
          alt="A clipboard with a home inspection form on a table with a magnifying glass"
        />
      </div>
      <p className="contact-paragraph">
        Whenever you need a reliable and thorough home inspection in Galt, CA or
        surrounding cities, reach out to Everly Home Inspections. We are here to
        help!
      </p>
      <div className="contact-line"></div>
      <h2 className="get-in-touch">Get in Touch</h2>
      <div className="contact-email-icon-container">
        <BiEnvelope className="contact-icon" />
        <a href="mailto:everly7investments@gmail.com" className="email-link">
          everly7investments@gmail.com
        </a>
      </div>
      <div className="contact-phone-icon-container">
        <FiPhoneCall className="contact-icon" />
        <a href="tel:2096255544" className="contact-phone-number">
          (209) 625-5544
        </a>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
