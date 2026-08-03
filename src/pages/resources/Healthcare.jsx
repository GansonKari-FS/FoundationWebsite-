import ResourcePage from "../ResourcePage";

function MentalHealth() {
  return (
    <ResourcePage
      title="Mental Health"
      description="Mental health counseling, crisis intervention, and behavioral health services."
      resources={[
        {
          name: "Beacon Behavioral Hospital",
          description: "Mental health treatment and crisis care.",
        },
        {
          name: "988 Suicide & Crisis Lifeline",
          description: "24/7 confidential crisis support.",
          phone: "988",
        },
      ]}
    />
  );
}

export default MentalHealth;
