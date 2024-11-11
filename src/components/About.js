import React from "react";
import me from "../assets/IMG_9346.png";
import "../css/About.css";

const About = () => {
  return (
    <div className="about">
      <h3>About Me</h3>
      <div className="about-container">
        <div>
          <p>Thank you for visiting. I live in NYC with my family.</p>
          <p></p>
        </div>
        <div>
          <img
            src={me}
            alt="about_pic"
            className="selfpic"
            height="250"
            width="250"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
