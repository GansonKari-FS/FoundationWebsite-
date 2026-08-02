import "./About.css";
import PageHeader from "../components/layout/PageHeader";
import smile from "../assets/images/antonie-smile.jpg";

import Housing from "./pages/resources/Housing";
import Food from "./pages/resources/Food";
import MentalHealth from "./pages/resources/MentalHealth";
import Healthcare from "./pages/resources/Healthcare";
import Education from "./pages/resources/Education";
import Employment from "./pages/resources/Employment";
import FamilySupport from "./pages/resources/FamilySupport";
import CommunityPrograms from "./pages/resources/CommunityPrograms";

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
            The Antoine Dwayne Wattz Foundation exists to continue Antoine's
            dream of serving others through faith, compassion, mentorship, and
            community outreach.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <img
            src="/antoine-allKids.jpg"
            alt="Antoine Dwayne Wattz with his daughters"
            className="story-photo"
          />

          <div className="story-content">
            <span className="section-tag">OUR STORY</span>

            <h2>A Legacy Built on Love, Faith & Service</h2>

            <p>
              Antoine Dwayne Wattz was more than the inspiration behind this
              foundation. He was a devoted husband, a loving father, a mentor,
              and a man whose faith shaped the way he lived every day.
            </p>

            <p>
              Antoine experienced unimaginable hardships throughout his life.
              After losing his mother at only nine years old, he and his
              siblings spent much of their childhood in foster care. As he grew
              older, difficult circumstances led him through juvenile detention
              centers and prison.
            </p>

            <p>
              Yet Antoine refused to let his past define him. While
              incarcerated, he became a mentor to other inmates, encouraging
              them to pursue hope, faith, and positive change. After his
              release, he continued mentoring others and dedicated himself to
              helping people who simply needed someone to believe in them.
            </p>

            <p>
              Today, the Antoine Dwayne Wattz Foundation carries that same
              mission forward by providing hope, encouragement, and support to
              individuals and families throughout our community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
