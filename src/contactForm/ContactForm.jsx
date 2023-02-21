import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwkjoplq");
  if (state.succeeded) {
    return (
      <p className="contact-message">We will be in touch with you soon!</p>
    );
  }
  return (
    <div className="form-container">
      <h3 className="contact-message-title">Send Us A Message</h3>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="form-btn" type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
