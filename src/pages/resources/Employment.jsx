import ResourcePage from "../ResourcePage";

function Employment() {
  return (
    <ResourcePage
      title="Employment"
      description="Career assistance, workforce development, and job placement."
      resources={[
        {
          name: "Louisiana Workforce Commission",
          description: "Job search assistance and career services.",
        },
        {
          name: "American Job Center",
          description: "Resume assistance and employment resources.",
        },
      ]}
    />
  );
}

export default Employment;
