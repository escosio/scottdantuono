import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SocialLinks from "./SocialLinks";
import "../css/Contact.css";

export const Contact = () => {
  const [formSubmitted, updateFormState] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c5kewd8",
        "template_v65j64l",
        form.current,
        "UhIQXpNmdngg76R7o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    updateFormState(true);
  };

  return (
    <section className="section page">
      <h2>Contact</h2>
      <div>
        {formSubmitted ? (
          <p className="contact-thanks">
            Thanks for reaching out. I'll get back to you soon.
          </p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="contact_name"
              placeholder="Your name"
              aria-label="Your name"
            />
            <input
              type="email"
              name="contact_email"
              placeholder="Your email"
              aria-label="Your email"
            />
            <textarea
              name="message"
              placeholder="Write a message"
              aria-label="Message"
            />
            <input type="submit" className="submitButton" value="Send message" />
            <SocialLinks />
          </form>
        )}
      </div>
    </section>
  );
};
