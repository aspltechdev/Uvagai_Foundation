
import "./AnnualReports.css";

export default function AnnualReports() {
  const reports = [
    {
      year: "2025 - 2026",
      title: "Annual Impact Report",
      file: "/reports/annual-report-2025.pdf",
    },
    {
      year: "2024 - 2025",
      title: "Annual Impact Report",
      file: "/reports/annual-report-2024.pdf",
    },
    {
      year: "2023 - 2024",
      title: "Annual Impact Report",
      file: "/reports/annual-report-2023.pdf",
    },
    {
      year: "2025 - 2026",
      title: "Audited Financial Statement",
      file: "/reports/audit-report-2025.pdf",
    },
  ];

  return (
    <div className="annual-reports-page">

      <section className="reports-hero">
        <div className="container">
          <span className="section-tag">
            Transparency & Accountability
          </span>

          <h1>Annual Reports</h1>

          <p>
            Explore our annual reports, financial statements,
            and impact documents to understand how we create
            meaningful change within communities.
          </p>
        </div>
      </section>

      <section className="reports-section">
        <div className="container">

          <div className="reports-grid">
            {reports.map((report, index) => (
              <div className="report-card" key={index}>

                <div className="report-year">
                  {report.year}
                </div>

                <h3>{report.title}</h3>

                <a
                  href={report.file}
                  target="_blank"
                  rel="noreferrer"
                  className="download-btn"
                >
                  Download PDF
                </a>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

