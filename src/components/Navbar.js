import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, toggleMenuState] = useState(false);

  return (
    <nav onClick={() => toggleMenuState(!menuOpen)} className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
