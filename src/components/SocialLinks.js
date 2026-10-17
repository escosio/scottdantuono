import React from "react";

function SocialLinks() {
  return (
    <ul className="socialLinks">
      <li>
        <a
          href="https://www.linkedin.com/in/sdantuono/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/escosio"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
