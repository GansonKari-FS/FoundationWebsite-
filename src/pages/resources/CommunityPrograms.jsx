import ResourcePage from "../ResourcePage";

function CommunityPrograms() {
  return (
    <ResourcePage
      title="Community Programs"
      description="Volunteer opportunities, youth mentoring, outreach programs, and community events."
      resources={[
        {
          name: "United Way of Acadiana",
          description: "Volunteer and community support programs.",
        },
        {
          name: "Antoine Dwayne Wattz Foundation",
          description: "Community outreach, mentoring, and family support.",
        },
      ]}
    />
  );
}

export default CommunityPrograms;
