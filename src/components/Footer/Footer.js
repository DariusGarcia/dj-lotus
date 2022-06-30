import "./Footer.scss";
import { MdMailOutline, MdCall } from "react-icons/md";

import { GrSoundcloud } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <section className="footer-section">
          <h1 id="dj-lotus-title"> dj lotus banks.</h1>
          <article className="social-media-links">
            <IconContext.Provider
              className="fb"
              value={{ color: "#FF7700", size: "1.5rem" }}
            >
              <a
                href="https:/soundcloud.app.goo.gl/eWae6TjA1bb8KaaFA"
                target="_blank"
                rel="noreferrer"
              >
                <GrSoundcloud /> <span id="span-media-icons">Soundcloud</span>
              </a>
            </IconContext.Provider>
          </article>
          <article className="social-media-links">
            <IconContext.Provider
              className="fb"
              value={{ color: "#4267B2", size: "1.5rem" }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100044150903725"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook /> <span id="span-media-icons">Facebook</span>
              </a>
            </IconContext.Provider>
          </article>
        </section>
        <section className="footer-section">
          <article>
            <h2>Contact us</h2>

            <p id="email-phone-icons">
              <span id="span-socials-icon">
                <MdMailOutline />
              </span>{" "}
              Email: Iamlotusbanks@gmail.com
            </p>
            <p id="email-phone-icons">
              <span id="span-socials-icon">
                <MdCall />
              </span>
              Phone: (619) 869-5164
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Footer;
