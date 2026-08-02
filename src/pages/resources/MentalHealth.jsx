import "./ResourcePage.css";

function Food() {
  return (
    <main className="resource-page">
      <div className="container">
        <div className="page-title">
          <h1>Food Assistance</h1>

          <p>
            No family should have to worry about where their next meal will come
            from. Below are organizations serving St. Landry Parish that provide
            emergency food assistance, food pantries, senior nutrition programs,
            and help applying for food benefits.
          </p>
        </div>

        <div className="resource-list">
          <div className="resource-item">
            <h2>🍞 I.C.O.N.S. Food Distribution Center</h2>

            <p>
              Provides food assistance for individuals and families throughout
              St. Landry Parish.
            </p>

            <ul>
              <li>Emergency food assistance</li>
              <li>Community food distributions</li>
              <li>Volunteer opportunities</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              1411 N Market Street
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 594-8845
            </p>
          </div>

          <div className="resource-item">
            <h2>🥫 St. Landry Parish Community Action Agency</h2>

            <p>
              Provides emergency food boxes, monthly mobile food pantries,
              senior food distribution, and other assistance programs when
              funding is available.
            </p>

            <ul>
              <li>Emergency Food Boxes</li>
              <li>Second Harvest Mobile Food Pantry</li>
              <li>Senior Food Program</li>
              <li>Utility Assistance (LIHEAP)</li>
              <li>Prescription Assistance</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              1065 Highway 749 Suite E<br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 948-3651
            </p>
          </div>

          <div className="resource-item">
            <h2>🥕 SNAP (Food Stamp Program)</h2>

            <p>
              SNAP helps eligible Louisiana households purchase groceries each
              month using an EBT card.
            </p>

            <ul>
              <li>Monthly food benefits</li>
              <li>Expedited benefits for qualifying households</li>
              <li>Online application available</li>
            </ul>

            <p>
              Contact your local Louisiana Department of Health office or apply
              online through the Louisiana SNAP program.
            </p>
          </div>

          <div className="resource-item">
            <h2>👵 St. Landry Council on Aging</h2>

            <p>
              Provides nutrition services for seniors including home-delivered
              meals and congregate meal sites throughout St. Landry Parish.
            </p>

            <ul>
              <li>Meals on Wheels</li>
              <li>Senior Nutrition</li>
              <li>Wellness Programs</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              2419 James Eaglin Lane
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 942-1938
            </p>
          </div>

          <div className="resource-item">
            <h2>🥣 Eunice Food Bank</h2>

            <p>
              Food assistance for families living in Eunice and surrounding
              communities.
            </p>

            <ul>
              <li>Emergency groceries</li>
              <li>Food pantry assistance</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              2101 W Ash Avenue
              <br />
              Eunice, LA 70535
            </p>

            <p>
              <strong>Phone:</strong> (337) 457-7541
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Food;
