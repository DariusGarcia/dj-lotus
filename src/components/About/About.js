import "./About.scss";
import logo from "../../images/portrait1.jpg";
import * as Scroll from "react-scroll";
import DJLotus from "../AnimatedModels/DjLotus";
let Element = Scroll.Element;

function About() {
  return (
    <Element name="about">
      <div className="about-container">
        <section>
          <div className="about-section">
            <div className="about-grid-container">
              <div className="header-div">
                <header>
                  <h1 id="about-name-title">dj lotus.</h1>
                </header>
                <article className="about-text-article">
                  <span>
                    <p id="about-text">
                      A very active member of her local community of San Diego.
                      Apart of the GLOBAL BPM music group, Lotus is no stranger
                      to the ups-and-downs of the music scene.
                    </p>
                    <p id="about-text">
                      Though she loves playing in nightclubs, patios, and
                      special events, her love for music goes beyond the
                      spectrum of mixing tunes. As a producer, musician, and
                      promoter, she has found plenty of ways to express herself
                      musically.
                    </p>
                  </span>
                </article>
              </div>
              <div className="about-image-grid">
                <img src={logo} alt="logo" id="about-image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default About;
