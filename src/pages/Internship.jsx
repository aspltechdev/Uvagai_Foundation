
import "./Internship.css";

export default function Internship() {
  const internships = [
    {
      title: "Social Media Intern",
      duration: "3 Months",
      mode: "Remote / Hybrid",
    },
    {
      title: "Content Writing Intern",
      duration: "3 Months",
      mode: "Remote",
    },
    {
      title: "Graphic Design Intern",
      duration: "3 Months",
      mode: "Hybrid",
    },
    {
      title: "Community Outreach Intern",
      duration: "6 Months",
      mode: "Field Work",
    },
    {
      title: "NGO Operations Intern",
      duration: "3 Months",
      mode: "On-site",
    },
    {
      title: "Fundraising & CSR Intern",
      duration: "3 Months",
      mode: "Hybrid",
    },
  ];

  return (
    <div className="internship-page">

      {/* Hero Section */}
      <section className="internship-hero">
        <div className="container">

          <span className="section-tag">
            Internship Opportunities
          </span>

          <h1>
            Learn, Contribute & Create Social Impact
          </h1>

          <p>
            Join Uvagai Foundation as an intern and gain hands-on
            experience while contributing to meaningful social
            initiatives that transform communities.
          </p>

        </div>
      </section>

      {/* Opportunities */}
      <section className="internship-section">
        <div className="container">

          <div className="section-heading">
            <h2>Available Internship Programs</h2>
          </div>

          <div className="internship-grid">

            {internships.map((internship, index) => (
              <div className="internship-card" key={index}>

                <h3>{internship.title}</h3>

                <p>
                  <strong>Duration:</strong> {internship.duration}
                </p>

                <p>
                  <strong>Mode:</strong> {internship.mode}
                </p>

                <button className="apply-btn">
                  Apply Now
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">

          <div className="section-heading">
            <h2>Why Join Our Internship Program?</h2>
          </div>

          <div className="benefits-grid">

            <div className="benefit-card">
              🎓
              <h3>Practical Learning</h3>
              <p>
                Gain real-world experience in NGO and social impact projects.
              </p>
            </div>

            <div className="benefit-card">
              📜
              <h3>Internship Certificate</h3>
              <p>
                Receive a certificate upon successful completion.
              </p>
            </div>

            <div className="benefit-card">
              🤝
              <h3>Mentorship</h3>
              <p>
                Work closely with experienced professionals and mentors.
              </p>
            </div>

            <div className="benefit-card">
              🌍
              <h3>Social Impact</h3>
              <p>
                Contribute directly to community development initiatives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="internship-cta">
        <div className="container">

          <h2>
            Start Your Social Impact Journey Today
          </h2>

          <p>
            Apply for an internship and become part of a mission
            that creates positive change in society.
          </p>

          <a href="/contact" className="cta-btn">
            Apply for Internship
          </a>

        </div>
      </section>

    </div>
  );
}

