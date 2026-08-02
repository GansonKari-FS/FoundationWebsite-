import "./Resources.css";
import { Link } from "react-router-dom";

function Resources() {
  const resources = [
    {
      icon: "🏠",
      title: "Housing Assistance",
      description:
        "Find emergency shelters, rental assistance, and affordable housing resources for individuals and families.",
    },
    {
      icon: "🍽️",
      title: "Food Assistance",
      description:
        "Locate food banks, meal programs, and community organizations providing food assistance.",
    },
    {
      icon: "💙",
      title: "Mental Health",
      description:
        "Connect with counseling services, crisis intervention, and mental health support programs.",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description:
        "Access community clinics, medical care, prescription assistance, and health education.",
    },
    {
      icon: "🎓",
      title: "Education",
      description:
        "Explore tutoring programs, school supply assistance, scholarships, and educational opportunities.",
    },
    {
      icon: "💼",
      title: "Employment",
      description:
        "Find job training, resume assistance, interview preparation, and career development resources.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Support",
      description:
        "Programs that strengthen families through parenting classes, mentoring, and community services.",
    },
    {
      icon: "🤝",
      title: "Community Programs",
      description:
        "Discover nonprofit organizations, volunteer opportunities, and local outreach programs.",
    },
  ];

  return (
    <main className="resources-page">
      <section className="resources-hero">
        <div className="container">
          <span className="section-tag">COMMUNITY RESOURCES</span>

          <h1>Helping You Find Support</h1>

          <p>
            The Antonie Dwayne Wattz Foundation believes no one should face
            life's challenges alone. Below are categories of resources that may
            help individuals and families connect with services in their
            community.
          </p>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div className="resource-card" key={index}>
                <div className="resource-icon">{resource.icon}</div>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <Link
                  to={`/resources/${resource.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="resource-button"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-footer">
        <div className="container">
          <h2>Need Additional Help?</h2>

          <p>
            If you are unable to find the resource you're looking for, please
            contact the Antonie Dwayne Wattz Foundation. We're continually
            building partnerships to better serve our community.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Resources;
