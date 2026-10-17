import React from "react";
import { NavLink } from "react-router-dom";
import me from "../assets/me.png";

export const Navbar = () => {
  return (
    <nav className="nav page" aria-label="Main">
      <NavLink to="/" end className="nav-brand">
        <img src={me} alt="" />
        Scott D.
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
      </ul>
    </nav>
  );
};
