import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <span className="hero-tag">
          HONORING THE LEGACY OF ANTOINE DWAYNE WATTS
        </span>

        <h1>
          Honoring a Legacy.
          <br />
          Serving Our
          <br />
          Community.
        </h1>

        <p>
          The Antoine Dwayne Watts Foundation is dedicated to continuing
          Antoine's legacy of compassion, mentorship, and service by providing
          hope, resources, and support to individuals and families in need.
        </p>

        <div className="hero-buttons">
          <a href="/assistance" className="primary-btn">
            Request Assistance
          </a>

          <a href="/about" className="secondary-btn">
            Learn Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
