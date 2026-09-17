import "./PageHeader.css";

function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="page-header-overlay"></div>

      <div className="container page-header-content">
        <span className="page-header-tag">ANTOINE DWAYNE WATTS FOUNDATION</span>

        <h1>{title}</h1>

        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default PageHeader;
