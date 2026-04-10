import React from "react";


function SocialLinks() {
  return (
    <div className="socialLinks">
      <li>
        <a href="https://www.linkedin.com/in/sdantuono/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-linkedin" style={{ color: "#000000" }}></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/escosio">
          <i class="fa-brands fa-github" style={{ color: "#000000" }}></i>
        </a>
      </li>
      {/* <li>
        <a href="mailto: scottd26@gmail.com" target="_blank" rel="noreferrer">
          <i class="fa-regular fa-envelope"></i>
        </a>
      </li> */}
      {/* <li>
        <a href={resume} download="scottdantuono.pdf">
          <i class="fa-solid fa-file"></i>
        </a>
      </li> */}
    </div>
  );
}

export default SocialLinks;
