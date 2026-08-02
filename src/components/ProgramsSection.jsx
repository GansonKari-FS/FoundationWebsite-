import {
  FaHandsHelping,
  FaGraduationCap,
  FaHeartbeat,
  FaUsers,
} from "react-icons/fa";
import "./ProgramsSection.css";

const programs = [
  {
    icon: <FaHandsHelping />,
    title: "Emergency Assistance",
    text: "Helping individuals and families during difficult times.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Educational Support",
    text: "Supporting students with school supplies and educational opportunities.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Community Outreach",
    text: "Connecting people with resources and essential services.",
  },
  {
    icon: <FaUsers />,
    title: "Family Support",
    text: "Strengthening families through compassion and community.",
  },
];

function ProgramsSection() {
  return (
    <section className="programs">
      <div className="container">
        <h2>How We Help</h2>

        <div className="program-grid">
          {programs.map((program) => (
            <div className="program-card" key={program.title}>
              <div className="icon">{program.icon}</div>

              <h3>{program.title}</h3>

              <p>{program.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
