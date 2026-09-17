import { Link } from "react-router-dom";

function Assistance() {
  return (
    <main>
      <section
        style={{
          background: "linear-gradient(135deg, #2149b3, #5f7ed6)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <div className="container" style={{ maxWidth: "850px" }}>
          <span
            className="section-tag"
            style={{
              color: "white",
              background: "rgba(255,255,255,0.15)",
              padding: "10px 22px",
              borderRadius: "999px",
            }}
          >
            WE'RE HERE TO HELP
          </span>

          <h1 style={{ color: "white", marginBottom: "25px" }}>
            Request Assistance
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.95)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            If you or your family are facing a difficult situation, the Antoine
            Dwayne Watts Foundation wants to help connect you with resources,
            support, and organizations in our community.
          </p>
        </div>
      </section>

      <section style={{ background: "#f8f9fc" }}>
        <div
          className="container"
          style={{
            maxWidth: "1000px",
            textAlign: "center",
          }}
        >
          <span className="section-tag">FIND SUPPORT</span>

          <h2 style={{ color: "#2149b3" }}>How Can We Help?</h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto 40px",
            }}
          >
            Our goal is to help individuals and families find the right
            resources during challenging times. You can explore our community
            resource directory or contact the foundation for additional
            assistance.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/resources" className="primary-btn">
              View Community Resources
            </Link>

            <Link
              to="/"
              style={{
                display: "inline-block",
                padding: "16px 34px",
                borderRadius: "999px",
                border: "2px solid #2149b3",
                color: "#2149b3",
                fontWeight: "700",
              }}
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Assistance;
