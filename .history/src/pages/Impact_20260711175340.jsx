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
      title: "Dedicated Volunteers",
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

  const focusAreas = [
    {
      title: "Education",
      description:
        "Providing scholarships, educational resources, digital learning opportunities, and mentorship to help students achieve their dreams.",
    },
    {
      title: "Healthcare",
      description:
        "Organizing medical camps, health awareness initiatives, and access to essential healthcare services in underserved communities.",
    },
    {
      title: "Child Welfare",
      description:
        "Ensuring every child has access to nutrition, education, protection, and opportunities for holistic development.",
    },
    {
      title: "Elderly Care",
      description:
        "Supporting senior citizens through healthcare assistance, emotional well-being programs, and community engagement.",
    },
    {
      title: "Community Development",
      description:
        "Empowering rural communities through sustainable development, skill training, sanitation, and livelihood initiatives.",
    },
    {
      title: "Humanitarian Aid",
      description:
        "Providing timely relief, food distribution, emergency support, and rehabilitation during disasters and crises.",
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
            Transforming Lives,
            <br />
            Building Stronger Communities
          </h1>

          <p>
            Every initiative, every volunteer, and every contribution helps us
            create meaningful and sustainable impact for communities in need.
          </p>

        </div>
      </section>

      {/* Statistics */}
      <section className="impact-stats-section">
        <div className="container">

          <div className="stats-grid">
            {impactStats.map((item, index) => (
              <div className="stat-card" key={index}>
                <h2>{item.number}</h2>
                <p>{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Story */}
      <section className="impact-story">
        <div className="container">

          <div className="story-grid">

            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
                alt="Students supported by Uvagai Foundation"
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
                Through scholarships, learning resources, mentoring, and
                community support, Uvagai Foundation has empowered hundreds of
                students to continue their education and pursue meaningful
                careers.
              </p>

              <p>
                Our commitment extends beyond immediate support—we strive to
                create sustainable opportunities that uplift families and build
                stronger communities for generations to come.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Areas of Impact */}
      <section className="focus-section">
        <div className="container">

          <div className="section-header">
            <h2>Areas of Impact</h2>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <div className="focus-card" key={index}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="impact-cta-section">

        <div className="container">

          <h2>
            Be Part of the Change
          </h2>

          <p>
            Together we can transform lives, strengthen communities, and create
            a brighter future. Join us by volunteering or supporting our
            mission.
          </p>

          <div className="cta-buttons">

            <a
              href="/volunteer"
              className="primary-btn"
            >
              Volunteer
            </a>

            <a
              href="/donate"
              className="secondary-btn"
            >
              Donate Now
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}