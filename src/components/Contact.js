import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SocialLinks from "./SocialLinks";

export const Contact = () => {
  const [formSubmitted, updateFormState] = useState(false);
  const form = useRef();

  function toggleFormState() {
    updateFormState(!formSubmitted);
    console.log(formSubmitted);
  }

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
  };

  return (
    <>
      <h2>Hit me up</h2>
      {!formSubmitted && (
        <form ref={form} onSubmit={sendEmail} id="contact">
          <input type="text" name="contact_name" placeholder="name" />
          <input type="email" name="contact_email" placeholder="email" />
          <textarea
            name="message"
            placeholder="Write a message"
            style={{ "font-family": "inherit" }}
          />
          <input
            type="submit"
            className="submitButton"
            onClick={toggleFormState}
          />
          <SocialLinks />
        </form>
      )}
      {formSubmitted && <h3>Thanks for reaching out!</h3>}
    </>
  );
};
