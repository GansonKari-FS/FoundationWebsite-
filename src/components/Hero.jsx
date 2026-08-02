import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/antoine-smile.jpg')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
          Honoring the Legacy of Antoine Dwayne Wattz
        </span>

        <h1>
          Honoring a Legacy.
          <br />
          Serving Our Community.
        </h1>

        <p>
          The Antonie Dwayne Wattz Foundation is dedicated to continuing
          Antoine's legacy of compassion, mentorship, and service by providing
          hope, resources, and support to individuals and families in need.
        </p>

        <div className="hero-buttons">
          <Link to="/assistance" className="primary-btn">
            Request Assistance
          </Link>

          <Link to="/about" className="secondary-btn">
            Learn Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
