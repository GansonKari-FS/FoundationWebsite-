import "./ImpactSection.css";

const stats = [
  {
    number: "100%",
    label: "Committed",
  },
  {
    number: "Community",
    label: "Focused",
  },
  {
    number: "Hope",
    label: "Driven",
  },
  {
    number: "Together",
    label: "We Serve",
  },
];

function ImpactSection() {
  return (
    <section className="impact">
      <div className="container">
        <h2>Our Commitment</h2>

        <div className="impact-grid">
          {stats.map((stat) => (
            <div className="impact-card" key={stat.label}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
