import ResourcePage from "../ResourcePage";

function Healthcare() {
  return (
    <ResourcePage
      title="Healthcare Resources"
      description="Find healthcare, primary care, hospital services, public health programs, and medical assistance available to individuals and families in St. Landry Parish."
      resources={[
        {
          name: "Opelousas General Health System",
          description:
            "Provides hospital care, emergency services, diagnostic services, specialty care, and other medical services for residents of St. Landry Parish and surrounding communities.",
          phone: "(337) 948-3011",
          website: "https://www.opelousasgeneral.com",
        },
        {
          name: "Southwest Louisiana Primary Health Care Center",
          description:
            "Provides primary medical care and other healthcare services for individuals and families, including services for patients who may have limited access to healthcare.",
          website: "https://swlphc.org",
        },
        {
          name: "St. Landry Parish Health Unit",
          description:
            "Provides public health services through the Louisiana Department of Health, including preventive health programs and services for families.",
          website: "https://ldh.la.gov",
        },
        {
          name: "Louisiana Medicaid",
          description:
            "Provides health coverage for eligible Louisiana residents, including qualifying children, adults, pregnant women, seniors, and people with disabilities.",
          website: "https://ldh.la.gov/medicaid",
        },
      ]}
    />
  );
}

export default Healthcare;
