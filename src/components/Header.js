import resume from "../assets/scott_dantuono_resume.pdf";
import me from "../assets/IMG_9346.png";

export const Header = () => {
  return (
    <div className="header section">
      <img src={me} height={150} className="bio-pic" alt="bio-pic" />
      <h1>Hello, I'm Scott D.</h1>
      <p className="subtext fade-in-text">
        <b>
          {" "}
          Senior QA Engineer @
          <a href="https://www.newretirement.com/">NewRetirement</a>.
        </b>{" "}
        I've been doing QA for 10 years and I want to build apps and tools
        to solve problems and make everyone's life easier. My last name
        D'Antuono is pronounced <i>(DAN-TWAN-NOH)</i> and I live in Brooklyn,
        NY. Previously, I've worked at Peloton, SeatGeek and Meetup.
      </p>
      <div className="socialLinks">
        <li>
          <a href="https://www.linkedin.com/in/sdantuono/" target="_blank">
            <i class="fa-brands fa-linkedin" style={{ color: "#000000" }}></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/escosio">
            <i class="fa-brands fa-github" style={{ color: "#000000" }}></i>
          </a>
        </li>
        <li>
          <a href="mailto: scottd26@gmail.com" target="_blank">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href={resume} download="scottdantuono.pdf">
            <i class="fa-solid fa-file"></i>
          </a>
        </li>
      </div>
      <p className="bio-paragraph">
        I wanted to take my skills to the next level so recently I've been
        studying <b>alogrithms</b>, {" "}
        <a href="https://verify.acloud.guru/DC5142641436?_ga=2.189816552.291013847.1694446391-257866084.1689853720">
          <b>AWS</b>
        </a>
        ,{" "}
        Web Automation frameworks <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-faeec6b3-cae5-453e-be78-b6aaf13ebf84.jpg">
          <b>Cypress.io & Playwright</b>
        </a>{" "}
        and{" "}
        <a href="https://www.udemy.com/course/full-stack-web-development-bootcamp/">
          <b>Full-Stack web development</b>
        </a>{" "}
        (using <b>React.js, Python, Flask</b> and <b>MongoDB</b>).
      </p>
    </div>
  );
};
