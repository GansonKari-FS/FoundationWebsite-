import "./Mission.css";
import missionPhoto from "../assets/images/antoine-smile.jpg";

function Mission() {
  return (
    <main className="mission-page">
      {/* Hero */}
      <section className="mission-hero">
        <div className="container">
          <span className="section-tag">OUR MISSION</span>

          <h1>Serving With Faith, Hope & Love</h1>

          <p>
            The Antonie Dwayne Wattz Foundation exists to uplift individuals and
            families through compassion, mentorship, community outreach, and
            unwavering faith.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mission-content">
        <div className="container mission-grid">
          <img
            src={missionPhoto}
            alt="Antonie Dwayne Wattz"
            className="mission-photo"
          />

          <div className="mission-text">
            <span className="section-tag">WHAT WE BELIEVE</span>

            <h2>Our Mission</h2>

            <p>
              We strive to provide hope, encouragement, and practical support to
              individuals and families facing life's challenges. Through acts of
              service, mentorship, and community partnerships, we work to make a
              lasting difference in every life we touch.
            </p>

            <h2>Our Vision</h2>

            <p>
              We envision stronger communities where every person has access to
              encouragement, opportunity, and the support needed to thrive,
              regardless of their circumstances.
            </p>

            <h2>Our Core Values</h2>

            <ul className="values-list">
              <li>Faith in God</li>
              <li>Compassion for Others</li>
              <li>Integrity & Honesty</li>
              <li>Service Before Self</li>
              <li>Community Partnership</li>
              <li>Hope for Every Family</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="mission-cta">
        <div className="container">
          <h2>Together We Can Make a Difference</h2>

          <p>
            Whether through volunteering, donating, or simply sharing our
            mission, every act of kindness helps us continue Antoine's legacy of
            faith, compassion, and service.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Mission;
