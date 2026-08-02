import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/foundation-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-section">
          <img src={logo} alt="Foundation Logo" className="logo" />

          <div className="logo-text">
            <h2>Antonie Dwayne Wattz Foundation</h2>
            <span>Serving Our Community With Hope</span>
          </div>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/mission">Mission</Link>
            </li>
            <li>
              <Link to="/memory">In Memory</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>

        <Link to="/help" className="help-button">
          Need Help
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
