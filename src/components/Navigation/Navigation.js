import "./Navigation.scss";
import * as Scroll from "react-scroll";

import { FiHome } from "react-icons/fi";
import { GrSoundcloud } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

let scroller = Scroll.scroller;

let Element = Scroll.Element;
let animateScroll = Scroll.animateScroll;

function Navigation() {
  return (
    <Element name="intro">
      <nav className="navigation-container">
        <div nav-home-icon-container>
          <ul className="nav-list">
            <li
              className="home-icon"
              onClick={() =>
                animateScroll.scrollToTop({
                  duration: 400,
                  delay: 50,
                  smooth: true,
                })
              }
            >
              <FiHome />
            </li>
            <li className="DJ-title">DJ LOTUS.</li>
          </ul>
        </div>
        <div className="nav-links container">
          <ul className="nav-list">
            <li
              className="links"
              onClick={() =>
                scroller.scrollTo("about", {
                  duration: 400,
                  delay: 50,
                  smooth: true,
                  offset: -100,
                })
              }
            >
              About
            </li>
            <li
              className="links"
              onClick={() =>
                scroller.scrollTo("schedule", {
                  duration: 400,
                  delay: 50,
                  smooth: true,
                  offset: 0,
                })
              }
            >
              Shows
            </li>
            {/* <li className="links">Releases</li> */}
            <li
              className="links"
              onClick={() =>
                scroller.scrollTo("newsletter", {
                  duration: 400,
                  delay: 50,
                  smooth: true,
                  offset: 0,
                })
              }
            >
              Contact
            </li>
            <li className="links"></li>
            <IconContext.Provider
              className="fb"
              value={{ color: "#FF7700", size: "1.5rem" }}
            >
              <li className="nav-icons">
                <a
                  href="https:/soundcloud.app.goo.gl/eWae6TjA1bb8KaaFA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrSoundcloud />
                </a>
              </li>
            </IconContext.Provider>

            <IconContext.Provider
              className="fb"
              value={{ color: "#4267B2", size: "1.5rem" }}
            >
              <li className="nav-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100044150903725"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
          {/* <input
            type="checkbox"
            role="button"
            aria-label="Display the menu"
            aria-expanded="false"
            aria-controls="menu"
          ></input> */}
        </div>
      </nav>
    </Element>
  );
}

export default Navigation;
