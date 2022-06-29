import "./Footer.scss";

import { GrSoundcloud } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <section>
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
                <GrSoundcloud />
              </a>
            </IconContext.Provider>
          </article>
          <article>
            <IconContext.Provider
              className="fb"
              value={{ color: "#4267B2", size: "1.5rem" }}
            >
              <a
                href="https:/soundcloud.app.goo.gl/eWae6TjA1bb8KaaFA"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </IconContext.Provider>
          </article>
        </section>
        <section>
          <article>
            <h2>Contact us</h2>
            <p>Email: temp@gmail.com</p>
            <p>Phone: xxx-xxx-xxxx</p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Footer;
