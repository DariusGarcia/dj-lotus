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
      <div className="navigation-container">
        <div nav-home-icon-container>
          <ul className="nav-list">
            <li
              className="home-icon"
              onClick={() =>
                animateScroll.scrollToTop({
                  duration: 20,
                  delay: 0,
                })
              }
            >
              <FiHome />
            </li>
            <li className="DJ-title">DJ LOTUS.</li>
          </ul>
          <li></li>
        </div>
        <div className="nav-links container">
          <ul className="nav-list">
            <li
              className="links"
              onClick={() =>
                scroller.scrollTo("about", {
                  duration: 20,
                  delay: 0,
                  smooth: true,
                  offset: -100,
                })
              }
            >
              About
            </li>
            <li className="links">Shows</li>
            <li className="links">Releases</li>
            <li className="links">Contact</li>
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
                  href="https:/soundcloud.app.goo.gl/eWae6TjA1bb8KaaFA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </Element>
  );
}

export default Navigation;
