
import "./ImpactStats.css";

export default function ImpactStats() {
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
      label: "Volunteers Engaged",
    },
    {
      number: "25+",
      label: "CSR & Community Partners",
    },
    {
      number: "50+",
      label: "Communities Reached",
    },
  ];

  return (
    <section className="impact-stats">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Our Impact</span>

          <h2>
            Creating Meaningful Change Through Community Action
          </h2>

          <p>
            Every initiative we undertake contributes to building
            stronger communities and transforming lives across
            Tamil Nadu and beyond.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

