
import "./CSRPartnership.css";

export default function CSRPartnership() {
  const focusAreas = [
    "Education & Skill Development",
    "Healthcare Initiatives",
    "Child Welfare Programs",
    "Elderly Care Support",
    "Community Development",
    "Environmental Sustainability",
  ];

  return (
    <div className="csr-page">

      {/* Hero Section */}
      <section className="csr-hero">
        <div className="container">
          <span className="section-tag">
            CSR Partnerships
          </span>

          <h1>
            Partner With Us To Create Lasting Social Impact
          </h1>

          <p>
            Uvagai Foundation collaborates with corporates,
            institutions, and organizations to implement
            impactful CSR initiatives that transform lives
            and strengthen communities.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="why-partner">
        <div className="container">

          <div className="section-heading">
            <h2>Why Partner With Uvagai Foundation?</h2>

            <p>
              We help organizations achieve meaningful social impact
              through transparent, measurable, and sustainable programs.
            </p>
          </div>

          <div className="benefits-grid">

            <div className="benefit-card">
              <h3>📊 Measurable Impact</h3>
              <p>
                Detailed impact reporting and program outcomes.
              </p>
            </div>

            <div className="benefit-card">
              <h3>🤝 Trusted Partnerships</h3>
              <p>
                Collaborate with experienced social impact teams.
              </p>
            </div>

            <div className="benefit-card">
              <h3>🌍 Sustainable Development</h3>
              <p>
                Long-term community transformation initiatives.
              </p>
            </div>

            <div className="benefit-card">
              <h3>👥 Employee Volunteering</h3>
              <p>
                Engage employees in meaningful social activities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Focus Areas */}
      <section className="focus-areas">
        <div className="container">

          <div className="section-heading">
            <h2>CSR Focus Areas</h2>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <div className="focus-card" key={index}>
                {area}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Partnership Process */}
      <section className="process-section">
        <div className="container">

          <div className="section-heading">
            <h2>How We Work Together</h2>
          </div>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <h3>Consultation</h3>
              <p>
                Understand your CSR goals and priorities.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Program Design</h3>
              <p>
                Develop customized social impact initiatives.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Implementation</h3>
              <p>
                Execute programs with transparency and efficiency.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
              <h3>Impact Reporting</h3>
              <p>
                Share measurable results and outcomes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="csr-cta">
        <div className="container">

          <h2>
            Let's Build Stronger Communities Together
          </h2>

          <p>
            Partner with Uvagai Foundation and make a meaningful
            contribution toward sustainable social development.
          </p>

          <div className="cta-buttons">
            <a href="/contact" className="primary-btn">
              Become a Partner
            </a>

            <a href="/donate" className="secondary-btn">
              Support Our Mission
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

