function About() {
  return (
    <main className="container" style={{ padding: "80px 20px" }}>
      <section
        className="two-column"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="/family-photo.jpg"
            alt="Antoine Dwayne Wattz Foundation"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,.15)",
            }}
          />
        </div>

        <div>
          <span className="section-tag">OUR STORY</span>

          <h1
            style={{
              fontSize: "3rem",
              margin: "20px 0",
              color: "#1f2937",
            }}
          >
            Honoring Antoine's Legacy
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.9",
              color: "#555",
              marginBottom: "24px",
            }}
          >
            Antoine Dwayne Wattz was a devoted husband, loving father, man of
            God, mentor, and servant to his community. Although he faced many
            hardships throughout his life—including time in foster care,
            juvenile detention, and prison—he transformed his experiences into
            opportunities to encourage and guide others.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.9",
              color: "#555",
              marginBottom: "24px",
            }}
          >
            While incarcerated, Antoine became a mentor to those around him.
            After his release, he continued dedicating his life to helping
            others, offering hope, wisdom, and encouragement to anyone in need.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.9",
              color: "#555",
              marginBottom: "24px",
            }}
          >
            The Antoine Dwayne Wattz Foundation was established to continue his
            dream of serving individuals and families regardless of race,
            religion, economic status, or background. Through compassion,
            outreach, education, and community support, the foundation strives
            to keep Antoine's legacy alive for generations to come.
          </p>

          <blockquote
            style={{
              borderLeft: "5px solid #1d4ed8",
              paddingLeft: "20px",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "#1f2937",
              marginTop: "30px",
            }}
          >
            "Helping others wasn't something Antoine did—it was who he was."
          </blockquote>
        </div>
      </section>
    </main>
  );
}

export default About;
