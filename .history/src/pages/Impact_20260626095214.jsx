
import "./Impact.css";

export default function Impact() {
  const impactStats = [
    {
      number: "5000+",
      title: "Lives Impacted",
    },
    {
      number: "300+",
      title: "Students Supported",
    },
    {
      number: "150+",
      title: "Community Programs",
    },
    {
      number: "500+",
      title: "Volunteers",
    },
    {
      number: "50+",
      title: "Villages Reached",
    },
    {
      number: "25+",
      title: "CSR Partners",
    },
  ];

  return (
    <div className="impact-page">

      {/* Hero Section */}
      <section className="impact-hero">
        <div className="container">

          <span className="section-tag">
            Our Impact
          </span>

          <h1>
            Transforming Lives, Building Stronger Communities
          </h1>

          <p>
            Every initiative, every volunteer, and every contribution
            helps us create meaningful and sustainable social impact.
          </p>

        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact-stats-section">
        <div className="container">

          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h2>{stat.number}</h2>
                <p>{stat.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Impact Story */}
      <section className="impact-story">
        <div className="container">

          <div className="story-grid">

            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000"
                alt="Impact Story"
              />
            </div>

            <div className="story-content">
              <span className="section-tag">
                Success Story
              </span>

              <h2>
                Creating Opportunities Through Education
              </h2>

              <p>
                Through educational support programs, scholarships,
                and mentorship initiatives, Uvagai Foundation has
                empowered hundreds of students to continue their
                education and pursue their dreams.
              </p>

              <p>
                Our mission is not only to provide support but to
                create lasting opportunities for future generations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Focus Areas */}
      <section className="focus-section">
        <div className="container">

          <div className="section-header">
            <h2>Areas of Impact</h2>
          </div>

          <div className="focus-grid">

            <div className="focus-card">
              📚
              <h3>Education</h3>
            </div>

            <div className="focus-card">
              🏥
              <h3>Healthcare</h3>
            </div>

            <div className="focus-card">
              👶
              <h3>Child Welfare</h3>
            </div>

            <div className="focus-card">
              👵
              <h3>Elderly Care</h3>
            </div>

            <div className="focus-card">
              🤝
              <h3>Community Development</h3>
            </div>

            <div className="focus-card">
              ❤️
              <h3>Humanitarian Aid</h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="impact-cta">
        <div className="container">

          <h2>
            Be Part of the Change
          </h2>

          <p>
            Together we can create lasting impact and build
            a brighter future for communities in need.
          </p>

          <div className="cta-buttons">
            <a href="/volunteer" className="primary-btn">
              Volunteer
            </a>

            <a href="/donate" className="secondary-btn">
              Donate Now
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

