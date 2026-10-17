import me from "../assets/me.png";
import SocialLinks from "./SocialLinks";
import "../css/Header.css";

export const Header = () => {
  return (
    <header className="hero page">
      <div className="hero-pic">
        <img src={me} className="bio-pic" alt="Cartoon portrait of Scott" />
      </div>
      <div>
        <h1>
          Scott
          <br />
          D'Antuono
        </h1>
        <span className="say" aria-label="pronounced dan twan noh">
          DAN-twan-noh
        </span>
        <p className="lede">
          Engineering Manager at <a href="https://www.boldin.com/">Boldin</a>.
          I've been doing QA and development for 10+ years, and I build apps
          and tools to solve problems and make everyone's life easier. I live
          in Brooklyn, NY. Previously at Peloton, SeatGeek and Meetup.
        </p>
        <p className="bio-paragraph">
          Lately I've been studying algorithms, AWS, web automation with{" "}
          <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-faeec6b3-cae5-453e-be78-b6aaf13ebf84.jpg">
            Cypress.io &amp; Playwright
          </a>
          , and{" "}
          <a href="https://www.udemy.com/course/the-ultimate-react-course/">
            React
          </a>
          .
        </p>
        <SocialLinks />
      </div>
    </header>
  );
};
