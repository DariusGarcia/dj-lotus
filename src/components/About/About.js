import "./About.scss";
import Spline from "@splinetool/react-spline";
import logo from "../../images/logo512.png";

function About() {
  return (
    <div className="about-container">
      <section>
        <Spline
          className="DJ-lotus-model"
          scene="https://prod.spline.design/RFk3p7GdffYPXAnr/scene.splinecode"
        />
        <div className="about-section">
          <div className="about-grid-container">
            <div className="header-div">
              <header>
                <h1 id="about">About</h1>
              </header>
              <span>
                <p id="about-text">
                  A very active member of her local community of San Diego.
                  Apart of the GLOBAL BPM music group, Lotus is no stranger to
                  the ups-and-downs of the music scene.
                </p>
                <p id="about-text">
                  Though she loves playing in nightclubs, patios, and special
                  events, her love for music goes beyond the spectrum of mixing
                  tunes. As a producer, musician, and promoter, she has found
                  plenty of ways to express herself musically.
                </p>
              </span>
            </div>
            <div className="about-image-grid">
              <img src={logo} alt="logo" id="about-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
