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

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">ABOUT THE FOUNDATION</span>

          <h1>Continuing Antoine's Legacy</h1>

          <p>
            The Antoine Dwayne Wattz Foundation was created to continue the
            legacy of a man whose life was built on faith, compassion,
            mentorship, and service to others. Through community outreach,
            family support, and advocacy, we strive to provide hope and
            opportunity for those facing difficult circumstances.
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

            <h2>A Legacy Built on Love, Faith, and Service</h2>

            <p>
              Antoine Dwayne Wattz believed that every person deserved hope,
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
              The Antoine Dwayne Wattz Foundation exists to honor that legacy by
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

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="container">
          <span className="section-tag">OUR PURPOSE</span>

          <h2>Serving Louisiana Families</h2>

          <p>
            Our foundation works to connect individuals with housing assistance,
            food resources, healthcare, education, employment opportunities,
            mental health services, family support, and community programs. By
            building partnerships with local organizations, we aim to strengthen
            communities while preserving Antoine's legacy of service.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
