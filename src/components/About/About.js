import "./About.scss";
import Spline from "@splinetool/react-spline";

function About() {
  return (
    <div className="about-container">
      <section>
        <Spline scene="https://prod.spline.design/RFk3p7GdffYPXAnr/scene.splinecode" />
        <header>
          <h1>DJ Lotus</h1>
        </header>
        <span>
          <p>
            A very active member of her local community of San Diego. Apart of
            the GLOBAL BPM music group, Lotus is no stranger to the
            ups-and-downs of the music scene. Though she loves playing in
            nightclubs, patios, and special events, her love for music goes
            beyond the spectrum of mixing tunes. As a producer, musician, and
            promoter, she has found plenty of ways to express herself musically.
          </p>
        </span>
      </section>
    </div>
  );
}

export default About;
