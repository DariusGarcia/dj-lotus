import "./Navigation.scss";

import { FiHome } from "react-icons/fi";
import { GrSoundcloud } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

function Navigation() {
  return (
    <div className="navigation-container">
      <div nav-home-icon-container>
        <ul className="nav-list">
          <li className="home-icon">
            <FiHome />
          </li>
          <li>DJ LOTUS.</li>
        </ul>
        <li></li>
      </div>
      <div className="nav-links container">
        <ul className="nav-list">
          <li className="links">About</li>
          <li className="links">Shows</li>
          <li className="links">Releases</li>
          <li className="links">Contact</li>
          <li className="links"></li>
          <IconContext.Provider value={{ color: "#FF7700", size: "1.5rem" }}>
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

          <IconContext.Provider value={{ color: "#4267B2", size: "1.5rem" }}>
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
  );
}

export default Navigation;
