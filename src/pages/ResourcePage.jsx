import "./ResourcePage.css";
import { Link } from "react-router-dom";

function ResourcePage({ title, description, resources }) {
  // If title/resources were passed in, display an individual resource page.
  if (title && resources) {
    return (
      <main className="resources-page">
        <section className="resources-hero">
          <div className="container">
            <span className="section-tag">COMMUNITY RESOURCES</span>

            <h1>{title}</h1>

            <p>{description}</p>
          </div>
        </section>

        <section className="resources-section">
          <div className="container">
            <div className="resource-detail-list">
              {resources.map((resource, index) => (
                <div className="resource-detail-card" key={index}>
                  <h2>{resource.name}</h2>

                  {resource.description && <p>{resource.description}</p>}

                  {resource.address && (
                    <p>
                      <strong>Address:</strong> {resource.address}
                    </p>
                  )}

                  {resource.phone && (
                    <p>
                      <strong>Phone:</strong>{" "}
                      <a href={`tel:${resource.phone}`}>{resource.phone}</a>
                    </p>
                  )}

                  {resource.website && (
                    <p>
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-website-button"
                      >
                        Visit Website
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="back-to-resources">
              <Link to="/resources" className="resource-button">
                Back to All Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Main /resources landing page.
  const resourceCategories = [
    {
      icon: "🏠",
      title: "Housing Assistance",
      description:
        "Find emergency shelters, rental assistance, and affordable housing resources for individuals and families.",
      path: "/resources/housing-assistance",
    },
    {
      icon: "🍽️",
      title: "Food Assistance",
      description:
        "Locate food banks, meal programs, and community organizations providing food assistance.",
      path: "/resources/food-assistance",
    },
    {
      icon: "💙",
      title: "Mental Health",
      description:
        "Connect with counseling services, crisis intervention, and mental health support programs.",
      path: "/resources/mental-health",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description:
        "Access community clinics, medical care, prescription assistance, and health education.",
      path: "/resources/healthcare",
    },
    {
      icon: "🎓",
      title: "Education",
      description:
        "Explore educational programs, career training, tutoring, and other learning opportunities.",
      path: "/resources/education",
    },
    {
      icon: "💼",
      title: "Employment",
      description:
        "Find job training, resume assistance, interview preparation, and career development resources.",
      path: "/resources/employment",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Support",
      description:
        "Find programs designed to strengthen and support children, parents, caregivers, and families.",
      path: "/resources/family-support",
    },
    {
      icon: "🤝",
      title: "Community Programs",
      description:
        "Discover nonprofit organizations, volunteer opportunities, outreach programs, and community support.",
      path: "/resources/community-programs",
    },
  ];

  return (
    <main className="resources-page">
      <section className="resources-hero">
        <div className="container">
          <span className="section-tag">COMMUNITY RESOURCES</span>

          <h1>Helping You Find Support</h1>

          <p>
            The Antoine Dwayne Watts Foundation believes no one should face
            life's challenges alone. Explore resources available to individuals
            and families in St. Landry Parish and surrounding communities.
          </p>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <div className="resources-grid">
            {resourceCategories.map((resource) => (
              <div className="resource-card" key={resource.path}>
                <div className="resource-icon">{resource.icon}</div>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <Link to={resource.path} className="resource-button">
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
            contact the Antoine Dwayne Watts Foundation. We're continually
            building partnerships to better serve our community.
          </p>

          <Link to="/assistance" className="resource-button">
            Request Assistance
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ResourcePage;
