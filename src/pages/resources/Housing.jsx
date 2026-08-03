import ResourcePage from "../ResourcePage";

function Housing() {
  return (
    <ResourcePage
      title="Housing Assistance"
      description="Find emergency shelters, rental assistance, affordable housing programs, and homelessness prevention resources throughout St. Landry Parish and Louisiana."
      resources={[
        {
          name: "St. Landry Parish Housing Authority",
          description:
            "Public housing and Housing Choice Voucher (Section 8) assistance.",
          phone: "(337) 948-3654",
        },
        {
          name: "Louisiana Housing Corporation",
          description:
            "Rental assistance, homebuyer programs, and affordable housing.",
          website: "https://www.lhc.la.gov",
        },
      ]}
    />
  );
}

export default Housing;
