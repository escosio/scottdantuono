import React from "react";
import me from "../assets/IMG_9346.png";
import "../css/About.css";

const About = () => {
  return (
    <section className="section page">
      <h2>About</h2>
      <div className="about-body">
        <p>Thank you for visiting. I live in NYC with my family.</p>
        <img src={me} alt="Illustration of Scott in front of the NYC skyline" className="selfpic" />
      </div>
    </section>
  );
};

export default About;
