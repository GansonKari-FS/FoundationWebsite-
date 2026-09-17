function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div className="about-image">
          <img src={family} alt="Antoine Dwayne Watts Foundation" />
        </div>

        <div className="about-content">
          <h2>Honoring a Legacy of Faith, Hope, and Service</h2>

          <p>
            The Antoine Dwayne Watts Foundation was created to continue
            Antoine's mission of helping individuals and families in need
            through compassion, faith, mentorship, and community service.
          </p>

          <p>
            We believe every person deserves hope, encouragement, and the
            opportunity to build a brighter future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
