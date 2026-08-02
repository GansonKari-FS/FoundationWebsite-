function AboutSection() {
  return (
    <section className="container" style={{ padding: "100px 20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <img
          src="/family-photo.jpg"
          alt="Antoine Dwayne Wattz Foundation"
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,.15)",
          }}
        />

        <div>
          <span className="section-tag">WHO WE ARE</span>

          <h2>Honoring a Legacy of Faith, Hope, and Service</h2>

          <p>
            The Antoine Dwayne Wattz Foundation was created to continue
            Antoine's mission of helping individuals and families in need
            regardless of race, religion, or background.
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
