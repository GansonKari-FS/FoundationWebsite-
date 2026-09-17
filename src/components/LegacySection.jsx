import { Link } from "react-router-dom";
import "./LegacySection.css";

function LegacySection() {
  return (
    <section className="legacy-section">
      <div className="container legacy-grid">
        <div className="legacy-image">
          <img
            src="/family-photo.jpg"
            alt="Antoine Dwayne Watts with his family"
          />
        </div>

        <div className="legacy-content">
          <span className="section-tag">HIS LEGACY</span>

          <h2>A Life That Continues to Inspire</h2>

          <p>
            Antoine Dwayne Watts believed everyone deserved compassion,
            encouragement, and a second chance. Throughout his life, he became a
            mentor, a devoted husband, a loving father, and a man of faith
            committed to helping others overcome life's challenges.
          </p>

          <p>
            Today, the Antoine Dwayne Watts Foundation honors his memory by
            continuing the work he cared deeply about—serving individuals,
            strengthening families, and bringing hope to communities in need.
          </p>

          <Link to="/memory" className="primary-btn">
            Read Antoine's Story
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LegacySection;
