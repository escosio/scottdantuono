import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, toggleMenuState] = useState(false);

  return (
      <nav onClick={() => toggleMenuState(true)} className="menu">
      <li>Projects</li>
      <li>Skills</li>
      <li>Contact</li>
      {/* {!menuOpen ? (
        <span class="material-symbols-outlined">menu</span>
      ) : (
        <span class="material-symbols-outlined">close</span>
      )} */}
    </nav>
  );
};
