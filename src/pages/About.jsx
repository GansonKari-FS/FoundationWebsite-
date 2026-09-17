import "./About.css";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader";

import smile from "../assets/images/antoine-smile.jpg";
import family from "../assets/images/antoine-allKids.jpg";

function About() {
  return (
    <main className="about-page">
      <PageHeader
        title="Continuing Antoine's Legacy"
        subtitle="Learn more about the foundation and the story behind our mission."
      />

      <section className="about-hero">
        <div className="container">
          <span className="section-tag">ABOUT THE FOUNDATION</span>

          <h1>Continuing Antoine's Legacy</h1>

          <p>
            The Antoine Dwayne Watts Foundation was created to continue the
            legacy of a man whose life was built on faith, compassion,
            mentorship, and service to others. Through community outreach,
            family support, and advocacy, we strive to provide hope and
            opportunity for those facing difficult circumstances.
          </p>

          <img src={smile} alt="Antoine Dwayne Watts" className="hero-image" />
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <div className="story-image">
            <img
              src={family}
              alt="Antoine Dwayne Watts with his family"
              className="story-photo"
            />
          </div>

          <div className="story-content">
            <span className="story-tag">OUR STORY</span>

            <h2>A Legacy Built on Love, Faith & Service</h2>

            <p>
              Antoine Dwayne Watts believed that every person deserved hope,
              encouragement, and someone willing to believe in them. His life
              reflected kindness, perseverance, and a genuine desire to help
              others overcome adversity.
            </p>

            <p>
              Despite facing tremendous hardships throughout his childhood and
              adult life, Antoine remained committed to mentoring others,
              strengthening families, and sharing his faith with those around
              him. His compassion inspired countless people and continues to
              impact lives today.
            </p>

            <p>
              The Antoine Dwayne Watts Foundation exists to honor that legacy by
              connecting individuals and families with vital resources,
              educational opportunities, community programs, and support
              services throughout Louisiana.
            </p>

            <p>
              We believe lasting change begins with compassion, strong
              communities, and people willing to serve one another. Every
              program we develop is rooted in Antoine's belief that one act of
              kindness can change a life.
            </p>
          </div>
        </div>
      </section>

      <section className="commitment-section">
        <div className="container">
          <div className="commitment-heading">
            <span className="section-tag">OUR COMMITMENT</span>

            <h2>Supporting Louisiana Families</h2>

            <p>
              Antoine's legacy continues through meaningful service. Our
              foundation is committed to helping individuals and families find
              resources, encouragement, opportunity, and a stronger connection
              to their community.
            </p>
          </div>

          <div className="commitment-grid">
            <div className="commitment-card">
              <div className="commitment-icon">♥</div>
              <h3>Resources & Assistance</h3>
              <p>
                Connecting individuals and families with essential resources
                during difficult times.
              </p>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">★</div>
              <h3>Education & Opportunity</h3>
              <p>
                Encouraging educational growth, personal development, and
                opportunities for a brighter future.
              </p>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">◆</div>
              <h3>Family Support</h3>
              <p>
                Strengthening families through compassion, encouragement,
                guidance, and community support.
              </p>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">●</div>
              <h3>Community Connection</h3>
              <p>
                Building relationships with organizations and people who share
                our commitment to serving Louisiana communities.
              </p>
            </div>
          </div>

          <div className="commitment-actions">
            <Link to="/assistance" className="about-light-button">
              Request Assistance
            </Link>

            <Link to="/resources" className="about-outline-button">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
