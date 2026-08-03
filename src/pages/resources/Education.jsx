import ResourcePage from "../ResourcePage";

function Education() {
  return (
    <ResourcePage
      title="Education"
      description="Educational opportunities for youth and adults."
      resources={[
        {
          name: "South Louisiana Community College",
          description: "Career training and degree programs.",
        },
        {
          name: "St. Landry Parish Library",
          description: "Free educational resources and tutoring.",
        },
      ]}
    />
  );
}

export default Education;
