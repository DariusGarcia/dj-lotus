import "./About.scss";
import portrait1 from "../../images/portrait1.jpg";
import portrait2 from "../../images/djing-portrait2.jpg";
import portrait3 from "../../images/dj-portrait3.jpg";
import * as Scroll from "react-scroll";
import DJLotus from "../AnimatedModels/DjLotus";
let Element = Scroll.Element;

function About() {
  return (
    <Element name="about">
      <div className="about-container">
        <div className="about-grid-container">
          <div className="header-div">
            <section>
              <header>
                <h1 id="about-name-title">DJ Lotus Banks</h1>
              </header>
              <article className="about-text-article">
                <span>
                  <p id="about-text">
                    A very active member of her local community of San Diego.
                    Apart of the GLOBAL BPM music group, Lotus is no stranger to
                    the ups-and-downs of the music scene.
                  </p>
                  <p id="about-text">
                    Though she loves playing in nightclubs, patios, and special
                    events, her love for music goes beyond the spectrum of
                    mixing tunes. As a producer, musician, and promoter, she has
                    found plenty of ways to express herself musically.
                  </p>
                </span>
              </article>
            </section>
          </div>
          <div className="image-container">
            <img src={portrait1} alt="logo" id="about-image" />
            {/* <img src={portrait3} alt="logo" id="about-image" />
            <img src={portrait2} alt="logo" id="about-image" /> */}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
