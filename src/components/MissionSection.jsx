import "./MissionSection.css";

function MissionSection() {
  return (
    <section className="mission-section">
      <div className="container">
        <h2>Our Mission</h2>

        <p className="mission-text">
          To help those in need regardless of race, religion, economic standing,
          or background.
        </p>

        <div className="values-grid">
          <div className="value-card">
            ❤️
            <h3>Compassion</h3>
            <p>Serving others with kindness, dignity, and respect.</p>
          </div>

          <div className="value-card">
            🤝
            <h3>Community</h3>
            <p>Building stronger communities through outreach and support.</p>
          </div>

          <div className="value-card">
            ✝️
            <h3>Faith</h3>
            <p>Guided by faith, hope, and love in everything we do.</p>
          </div>

          <div className="value-card">
            🌟
            <h3>Second Chances</h3>
            <p>
              Believing every life has purpose and every person deserves hope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
