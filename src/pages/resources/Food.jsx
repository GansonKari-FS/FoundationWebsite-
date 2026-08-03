import ResourcePage from "../ResourcePage";

function Food() {
  return (
    <ResourcePage
      title="Food Assistance"
      description="Food pantries, meal programs, SNAP assistance, and emergency food resources."
      resources={[
        {
          name: "St. Landry Parish Food Pantry",
          description: "Emergency food assistance for families in need.",
        },
        {
          name: "Second Harvest Food Bank",
          description: "Food distribution and community partnerships.",
          website: "https://no-hunger.org",
        },
      ]}
    />
  );
}

export default Food;
