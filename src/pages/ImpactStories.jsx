
import "./ImpactSection.css";

export default function ImpactSection() {
  const stats = [
    {
      number: "5000+",
      label: "Lives Impacted",
    },
    {
      number: "300+",
      label: "Students Supported",
    },
    {
      number: "150+",
      label: "Programs Conducted",
    },
    {
      number: "500+",
      label: "Volunteers",
    },
  ];

  return (
    <section className="impact-section">
      <div className="container">

        <div className="impact-content">

          <div className="impact-left">
            <span className="section-tag">
              Our Impact
            </span>

            <h2>
              Creating Lasting Change Through Community Action
            </h2>

            <p>
              Every initiative undertaken by Uvagai Foundation contributes
              to improving lives and building stronger communities through
              education, healthcare, welfare programs, and humanitarian support.
            </p>

            <a href="/impact" className="impact-btn">
              View Full Impact →
            </a>
          </div>

          <div className="impact-right">

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div className="stat-card" key={index}>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
