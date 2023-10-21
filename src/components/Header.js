import React, { useState } from "react";
import { Navbar } from "./Navbar";
import resume from "../assets/scott_dantuono_resume.pdf"

export const Header = () => {
  return (
    <div className="section"> 
      <h1>Hello, I'm Scott D.</h1>
      <p className="subtext fade-in-text">
        I've been doing QA for 10 years and now I want to build stuff.
      </p>
      <div className="socialLinks">
        <li>
          <a href="https://www.linkedin.com/in/sdantuono/" target="_blank">
            <i class="fa-brands fa-linkedin" style={{color: "#000000",}}></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/escosio">
            <i class="fa-brands fa-github" style={{color: "#000000",}}></i>
          </a>
        </li>
        <li>
        <a href="mailto: scottd26@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i></a>
        </li>
        <li>
          <a href={resume} download="scottdantuono.pdf">
          <i class="fa-solid fa-file"></i>
          </a>
        </li>
      </div>
      {/* <p>I've worked at Peloton, SeatGeek and Meetup.</p> */}
    </div>
  );
};
