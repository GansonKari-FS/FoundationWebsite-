import ResourcePage from "../ResourcePage";

function FamilySupport() {
  return (
    <ResourcePage
      title="Family Support"
      description="Programs supporting children and families."
      resources={[
        {
          name: "St. Landry Parish Community Action",
          description: "Family assistance and emergency services.",
        },
        {
          name: "Louisiana DCFS",
          description: "Child welfare and family services.",
        },
      ]}
    />
  );
}

export default FamilySupport;
