import "./Header.css";
import CV from "../../assets/cv.pdf";

const Header = () => {
  return (
    <header id="header">
      <div className="header__content">
        <div className="header__icon"></div>
        <div className="header__info">
          <h2>Hello. I'm a</h2>
          <h1>Front-End Developer</h1>
          <h3>(ReactJs)</h3>
          <p>
            My name's Mohaned Adel. I craft user interfaces using modern
            frontend web technologies
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="btn btn-work"
          >
            Let's work together!
          </button>
          <button className="btn btn-cv">
            <a
              href="https://drive.google.com/file/d/12CJTCGC5hud959e3fUTFXp4uztfGT2LT/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </button>
        </div>
        <div className="header__socials">
          <p>
            Find me at{" "}
            <a
              href="https://www.facebook.com/mohaned.adel.98/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            ,{" "}
            <a
              href="https://github.com/Mohaned-Adel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/mohaned-adel/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            Download
            <a href={CV} download>
              {" "}
              my resume{" "}
            </a>
            (PDF 155Kb)
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
