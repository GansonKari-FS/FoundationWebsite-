import "./About.css";
import PageHeader from "../components/layout/PageHeader";

import smile from "../assets/images/antonie-smile.jpg";
import family from "../assets/images/antonie-allKids.jpg";

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <PageHeader
        title="Continuing Antoine's Legacy"
        subtitle="Learn more about the foundation and its mission to serve others."
      />

      <section className="about-hero">
        <div className="container">
          <span className="section-tag">ABOUT THE FOUNDATION</span>

          <h1>Continuing Antoine's Legacy</h1>

          <p>
            The Antonie Dwayne Wattz Foundation exists to continue Antonie's
            dream of serving others through faith, compassion, mentorship, and
            community outreach.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <img
            src={family}
            alt="Antonie Dwayne Wattz with his family"
            className="story-photo"
          />

          <div className="story-content">
            <span className="section-tag">OUR STORY</span>

            <h2>A Legacy Built on Love, Faith & Service</h2>

            <p>
              Antonie Dwayne Wattz was more than the inspiration behind this
              foundation. He was a devoted husband, loving father, mentor, and a
              man whose faith shaped every part of his life.
            </p>

            <p>
              Antonie experienced unimaginable hardships throughout his life.
              After losing his mother at only nine years old, he and his
              siblings spent much of their childhood in foster care. As he grew
              older, difficult circumstances led him through juvenile detention
              centers and prison.
            </p>

            <p>
              Yet Antonie refused to let his past define him. While
              incarcerated, he became a mentor to other inmates, encouraging
              them to pursue hope, faith, and positive change. After his
              release, he continued mentoring others and dedicated himself to
              helping people who simply needed someone to believe in them.
            </p>

            <p>
              Today, the Antonie Dwayne Wattz Foundation carries that same
              mission forward by providing hope, encouragement, mentorship, and
              support to individuals and families throughout our community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-image">
            <img src={smile} alt="Antonie smiling" />
          </div>

          <div className="mission-content">
            <span className="section-tag">OUR MISSION</span>

            <h2>Serving With Faith, Compassion & Hope</h2>

            <p>
              We believe that everyone deserves encouragement, support, and an
              opportunity to build a brighter future. Through outreach,
              mentorship, resource referrals, and community partnerships, we
              strive to make a lasting impact throughout St. Landry Parish and
              beyond.
            </p>

            <p>
              Every program, event, and volunteer effort is dedicated to
              honoring Antonie's legacy of loving others, serving selflessly,
              and inspiring hope in every life we touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
