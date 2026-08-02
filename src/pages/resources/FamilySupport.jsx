import "./ResourcePage.css";

function Employment() {
  return (
    <main className="resource-page">
      <div className="container">
        <div className="page-title">
          <h1>Employment Resources</h1>

          <p>
            Finding meaningful employment can create new opportunities for
            individuals and families. The organizations below provide job search
            assistance, career counseling, workforce training, resume
            assistance, and educational opportunities throughout St. Landry
            Parish.
          </p>
        </div>

        <div className="resource-list">
          <div className="resource-item">
            <h2>💼 St. Landry Business & Career Solutions Center</h2>

            <p>
              A Louisiana Workforce Commission Career Center helping job seekers
              connect with employers while offering free employment services and
              workforce development programs.
            </p>

            <ul>
              <li>Job Search Assistance</li>
              <li>Career Counseling</li>
              <li>Resume Assistance</li>
              <li>Interview Preparation</li>
              <li>Computer Access</li>
              <li>Job Fairs</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              627 Creswell Lane
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 948-0220
            </p>
          </div>

          <div className="resource-item">
            <h2>🏛 Louisiana Workforce Commission</h2>

            <p>
              Provides employment services, unemployment assistance,
              apprenticeships, workforce training, and connections to employers
              across Louisiana.
            </p>

            <ul>
              <li>Louisiana Job Portal</li>
              <li>Workforce Training</li>
              <li>Apprenticeships</li>
              <li>Career Exploration</li>
              <li>Unemployment Assistance</li>
            </ul>
          </div>

          <div className="resource-item">
            <h2>🎓 South Louisiana Community College</h2>

            <p>
              Offers workforce certifications and technical training in
              high-demand career fields throughout Acadiana.
            </p>

            <ul>
              <li>Welding</li>
              <li>HVAC</li>
              <li>Electrical Technology</li>
              <li>Certified Nursing Assistant (CNA)</li>
              <li>Commercial Driver's License (CDL)</li>
              <li>Information Technology</li>
            </ul>

            <p>
              <strong>Address</strong>
              <br />
              332 E South Street
              <br />
              Opelousas, LA 70570
            </p>

            <p>
              <strong>Phone:</strong> (337) 943-1518
            </p>
          </div>

          <div className="resource-item">
            <h2>📄 Resume & Interview Assistance</h2>

            <p>
              Free assistance is available through local workforce offices to
              help job seekers build professional resumes and prepare for
              interviews.
            </p>

            <ul>
              <li>Resume Building</li>
              <li>Cover Letters</li>
              <li>Interview Coaching</li>
              <li>Professional Development</li>
            </ul>
          </div>

          <div className="resource-item">
            <h2>💰 Financial Aid & Job Training</h2>

            <p>
              Many workforce certification programs qualify for Pell Grants,
              scholarships, and other financial assistance for eligible
              students.
            </p>

            <ul>
              <li>Federal Pell Grants</li>
              <li>TOPS Tech Opportunities</li>
              <li>Scholarships</li>
              <li>Workforce Innovation Funding</li>
            </ul>
          </div>

          <div className="resource-item">
            <h2>🚀 Tips for Job Seekers</h2>

            <ul>
              <li>Keep your resume updated.</li>
              <li>Dress professionally for interviews.</li>
              <li>Arrive 10–15 minutes early.</li>
              <li>Follow up after interviews with a thank-you email.</li>
              <li>Continue developing your skills through training.</li>
            </ul>

            <p>
              Persistence and preparation are key to finding meaningful
              employment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employment;
