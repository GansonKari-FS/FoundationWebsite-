import "./ResourcePage.css";

function Housing() {
  return (
    <main className="resource-page">
      <div className="container">
        <div className="page-title">
          <h1>Housing Assistance</h1>

          <p>
            Everyone deserves a safe place to call home. The organizations below
            provide housing assistance, rental assistance, emergency shelter,
            and affordable housing resources for residents of St. Landry Parish.
          </p>
        </div>

        <div className="resource-list">
          <div className="resource-item">
            <h2>🏠 St. Landry Parish Housing Authority</h2>

            <p>
              Provides affordable housing opportunities through Public Housing
              and the Housing Choice Voucher (Section 8) Program.
            </p>

            <ul>
              <li>Public Housing</li>
              <li>Section 8 Housing Choice Vouchers</li>
              <li>Affordable Housing Programs</li>
            </ul>

            <p>
              <strong>Address:</strong>
              <br />
              509 Carriere Street
              <br />
              Washington, LA 70589
            </p>

            <p>
              <strong>Phone:</strong> (337) 826-7207
            </p>
          </div>

          <div className="resource-item">
            <h2>🏡 Opelousas Housing Authority</h2>

            <p>
              Offers public housing and affordable rental opportunities for
              qualifying families within Opelousas.
            </p>

            <ul>
              <li>Public Housing</li>
              <li>Rental Assistance</li>
              <li>Housing Programs</li>
            </ul>

            <p>
              <strong>Address:</strong>
              <br />
              1119 A Fredrick Douglass Ave
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 942-5693
            </p>
          </div>

          <div className="resource-item">
            <h2>🏘️ Community Action Agency</h2>

            <p>
              Helps qualifying residents with emergency rent assistance, utility
              assistance, weatherization, and housing-related services when
              funding is available.
            </p>

            <ul>
              <li>Emergency Rent Assistance</li>
              <li>LIHEAP Utility Assistance</li>
              <li>Weatherization Programs</li>
              <li>Housing Referrals</li>
            </ul>

            <p>
              <strong>Address:</strong>
              <br />
              1065 Highway 749
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 948-3651
            </p>
          </div>

          <div className="resource-item">
            <h2>🏠 Louisiana Housing Corporation</h2>

            <p>
              Statewide housing programs that include rental assistance,
              homebuyer education, down payment assistance, and disaster
              recovery programs.
            </p>

            <ul>
              <li>Rental Assistance</li>
              <li>Homebuyer Programs</li>
              <li>Down Payment Assistance</li>
            </ul>

            <p>
              Visit the Louisiana Housing Corporation website for current
              program availability.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Housing;
