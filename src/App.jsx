import "./About.css";
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

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">ABOUT THE FOUNDATION</span>

          <h1>Continuing Antoine's Legacy</h1>

          <p>
            The Antoine Dwayne Wattz Foundation exists to honor Antoine's life
            by serving others through faith, compassion, mentorship, and
            community outreach. Our mission is to provide hope and connect
            families with the resources they need to build stronger futures.
          </p>

          <img
            src={smile}
            alt="Antoine Dwayne Wattz smiling"
            className="hero-image"
          />
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-image">
            <img
              src={family}
              alt="Antoine Dwayne Wattz with family"
              className="story-photo"
            />
          </div>

          <div className="story-content">
            <span className="section-tag">OUR STORY</span>

            <h2>A Legacy Built on Love, Faith & Service</h2>

            <p>
              Antoine Dwayne Wattz believed in lifting others up regardless of
              their circumstances. His compassion, leadership, and unwavering
              faith inspired those around him and continue to guide this
              foundation today.
            </p>

            <p>
              Throughout his life, Antoine dedicated himself to mentoring
              others, strengthening families, and encouraging people to never
              give up on themselves. His legacy continues through programs that
              serve individuals and families across Louisiana.
            </p>

            <p>
              The Antoine Dwayne Wattz Foundation was established to continue
              that mission by connecting people with housing assistance, food
              resources, healthcare, education, employment opportunities, family
              support, and community programs.
            </p>

            <p>
              We believe that every person deserves hope, dignity, and the
              opportunity to succeed. Through partnerships with local
              organizations and community leaders, we strive to make a lasting
              difference one family at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <span className="section-tag">OUR PURPOSE</span>

          <h2>Serving Louisiana Families</h2>

          <p>
            The Antoine Dwayne Wattz Foundation works to connect individuals and
            families with valuable community resources, promote educational
            opportunities, encourage healthy living, and inspire positive change
            through service, faith, and compassion.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
