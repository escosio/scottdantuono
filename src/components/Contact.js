import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formState, updateFormState] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_c5kewd8", "template_v65j64l", form.current, "UhIQXpNmdngg76R7o")
      .then((result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      });
  };

  return (
      <form ref={form} onSubmit={sendEmail} id="contact" >
        <h2>Hit me up</h2>
        {/* <label>Name</label> */}
        <input type="text" name="contact_name" placeholder="name" />
        {/* <label>Email address</label> */}
        <input type="email" name="contact_email" placeholder="email"/>
        {/* <label>Message</label> */}
        <textarea name="message" placeholder="Write a message" style={{"font-family":"inherit"}}/>
        <input type="submit" className="submitButton" />
      </form>
  );
};
