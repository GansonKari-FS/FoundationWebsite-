import "./Memory.css";

import portrait from "../assets/images/antoine-portrait.jpg";
import smile from "../assets/images/antoine-smile.jpg";
import family from "../assets/images/antonie-allKids.jpg";

function Memory() {
  return (
    <main className="memory-page">
      {/* ================= HERO ================= */}

      <section className="memory-hero">
        <div className="container">
          <span className="section-tag">ANTOINE'S LEGACY</span>

          <img src={portrait} alt="Antoine Dwayne Wattz" className="portrait" />

          <h1>Antoine Dwayne Wattz</h1>

          <p className="hero-text">
            A devoted husband, loving father, mentor, man of God, and friend
            whose life continues to inspire faith, compassion, and service
            through the Antonie Dwayne Wattz Foundation.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}

      <section className="memory-story">
        <div className="container">
          <span className="section-tag">HIS STORY</span>

          <h2>A Life That Continues to Inspire</h2>

          <p>
            Antoine Dwayne Wattz was a devoted husband, loving father, mentor,
            and man of God whose life continues to inspire everyone who knew
            him. Although he experienced tremendous hardships throughout his
            life, he chose faith, compassion, and service over bitterness.
          </p>

          <p>
            After losing his mother at just nine years old, Antoine and his
            siblings spent much of their childhood in foster care. As he grew
            older, difficult circumstances led him through juvenile detention
            centers and prison.
          </p>

          <p>
            While incarcerated, Antoine became a mentor to those around him,
            encouraging others to believe that their past did not determine
            their future. Following his release, he continued mentoring others
            and dedicated himself to helping people find hope, purpose, and
            encouragement.
          </p>

          <p>
            Today, the Antonie Dwayne Wattz Foundation continues his dream by
            serving individuals and families through compassion, mentorship,
            faith, and community outreach.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}

      <section className="timeline-section">
        <div className="container">
          <span className="section-tag">A LIFE OF PERSEVERANCE</span>

          <h2>Antoine's Journey</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>Childhood</h3>

                <p>
                  Antoine and his siblings spent much of their childhood in
                  foster care. At only nine years old, he experienced the
                  heartbreaking loss of his mother.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>Finding Purpose</h3>

                <p>
                  During incarceration, Antoine became a mentor, encouraging
                  others to pursue faith, hope, and positive change.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>Serving Others</h3>

                <p>
                  After his release, Antoine continued mentoring people in his
                  community, living a life centered on family, faith, and
                  service.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>His Legacy</h3>

                <p>
                  Today, the Antonie Dwayne Wattz Foundation proudly carries
                  Antoine's dream forward by helping those in need throughout
                  our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEGACY ================= */}

      <section className="legacy-grid">
        <div className="container">
          <div className="legacy-card">
            ❤️
            <h3>Loving Father</h3>
            <p>
              Antoine's greatest joy was his family, and he always placed them
              first.
            </p>
          </div>

          <div className="legacy-card">
            🙏
            <h3>Man of Faith</h3>
            <p>
              His relationship with God guided his life and inspired those
              around him.
            </p>
          </div>

          <div className="legacy-card">
            🤝
            <h3>Mentor</h3>
            <p>
              He believed every person deserved encouragement, guidance, and a
              second chance.
            </p>
          </div>

          <div className="legacy-card">
            🌎
            <h3>Community Servant</h3>
            <p>
              Antoine dedicated his life to helping others and making a
              difference in his community.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery">
        <div className="container">
          <span className="section-tag">PHOTO GALLERY</span>

          <h2>Remembering Antoine</h2>

          <div className="gallery-grid">
            <img src={family} alt="Antoine with his daughters" />

            <img src={smile} alt="Antoine smiling" />

            <img src={portrait} alt="Portrait of Antoine" />
          </div>
        </div>
      </section>

      {/* ================= FINAL PRAYER ================= */}

      <section className="memory-story">
        <div className="container">
          <span className="section-tag">COMING SOON</span>

          <h2>Antoine's Final Prayer</h2>

          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            Stacey has shared that Antoine wrote a final prayer before his
            passing. Once the family approves sharing it publicly, this page
            will honor his words in a dedicated section.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Memory;
