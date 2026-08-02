import "./ResourcePage.css";

function MentalHealth() {
  return (
    <main className="resource-page">
      <div className="container">
        <div className="page-title">
          <h1>Mental Health Resources</h1>

          <p>
            Your mental health is just as important as your physical health.
            Whether you're experiencing anxiety, depression, grief, addiction,
            or simply need someone to talk to, there are compassionate
            professionals and organizations ready to help.
          </p>
        </div>

        <div className="resource-list">
          <div className="resource-item">
            <h2>🧠 Opelousas Behavioral Health Clinic</h2>

            <p>
              Outpatient behavioral health clinic providing counseling,
              psychiatric evaluations, medication management, crisis
              intervention, and substance use treatment for children,
              adolescents, and adults.
            </p>

            <ul>
              <li>Individual Counseling</li>
              <li>Medication Management</li>
              <li>Substance Abuse Treatment</li>
              <li>Crisis Intervention</li>
              <li>Family Services</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              220 South Market Street
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 948-0226
            </p>
          </div>

          <div className="resource-item">
            <h2>💙 Path Behavioral Healthcare</h2>

            <p>
              Provides outpatient behavioral health services including
              assessments, individual therapy, family therapy, psychiatric
              services, medication management, and case management.
            </p>

            <ul>
              <li>Therapy</li>
              <li>Psychiatric Services</li>
              <li>Medication Management</li>
              <li>Family Counseling</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              1211 W Vine Street
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 678-3201
            </p>
          </div>

          <div className="resource-item">
            <h2>🏥 Opelousas General Behavioral Health Unit</h2>

            <p>
              Adult inpatient behavioral health treatment for individuals
              experiencing serious mental health conditions requiring hospital
              care. Outpatient referrals are also available.
            </p>

            <ul>
              <li>24-Hour Assessment</li>
              <li>Adult Inpatient Care</li>
              <li>Psychiatric Treatment</li>
            </ul>

            <p>
              <strong>Phone:</strong> (337) 500-1274
            </p>
          </div>

          <div className="resource-item">
            <h2>📞 Louisiana 988 Crisis Lifeline</h2>

            <p>
              Available 24 hours a day, 7 days a week for anyone experiencing
              emotional distress, thoughts of suicide, anxiety, depression,
              substance use concerns, or any mental health crisis.
            </p>

            <ul>
              <li>Call 988</li>
              <li>Text 988</li>
              <li>24/7 Confidential Support</li>
            </ul>

            <p>Free and confidential crisis support for anyone in Louisiana.</p>
          </div>

          <div className="resource-item">
            <h2>❤️ Acadiana Area Human Services District</h2>

            <p>
              Coordinates public behavioral health and developmental disability
              services throughout the Acadiana region, including St. Landry
              Parish.
            </p>

            <ul>
              <li>Mental Health Services</li>
              <li>Substance Abuse Services</li>
              <li>Developmental Disability Services</li>
              <li>Case Management</li>
            </ul>
          </div>

          <div className="resource-item">
            <h2>🤝 NAMI Acadiana</h2>

            <p>
              Offers free education, family support groups, peer support,
              advocacy, and community programs for individuals and families
              affected by mental illness.
            </p>

            <ul>
              <li>Peer Support Groups</li>
              <li>Family Education</li>
              <li>Mental Health Advocacy</li>
              <li>Community Programs</li>
            </ul>

            <p>
              <strong>Phone:</strong> (337) 504-4752
            </p>
          </div>
        </div>

        <div
          className="resource-item"
          style={{
            marginTop: "50px",
            background: "#eaf4ff",
            borderLeft: "6px solid #2149b3",
          }}
        >
          <h2>🚨 In a Mental Health Emergency</h2>

          <p>
            If you or someone you know is in immediate danger of harming
            themselves or others:
          </p>

          <ul>
            <li>📞 Call 911 immediately.</li>
            <li>
              📞 Call or text <strong>988</strong> for crisis support.
            </li>
            <li>
              Go to the nearest emergency room if immediate medical attention is
              needed.
            </li>
          </ul>

          <p>You are not alone. Help is available 24 hours a day.</p>
        </div>
      </div>
    </main>
  );
}

export default MentalHealth;
