import "./Navigation.scss";

import { FiHome } from "react-icons/fi";

function Navigation() {
  return (
    <div className="navigation">
      <ul className="nav-list">
        <li className="home-icon">
          <FiHome />
        </li>
        <li className="links">About</li>
        <li className="links">Shows</li>
        <li className="links">Releases</li>
        <li className="links">Contact</li>
      </ul>
    </div>
  );
}

export default Navigation;
