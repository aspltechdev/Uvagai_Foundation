
import "./Volunteer.css";

export default function Volunteer() {
  const opportunities = [
    {
      title: "Education Volunteer",
      description:
        "Support students through mentoring, tutoring, and educational activities.",
    },
    {
      title: "Healthcare Volunteer",
      description:
        "Assist in health camps, awareness drives, and community wellness programs.",
    },
    {
      title: "Event Volunteer",
      description:
        "Help organize and manage community events, workshops, and campaigns.",
    },
    {
      title: "Community Outreach Volunteer",
      description:
        "Engage with local communities and support development initiatives.",
    },
  ];

  return (
    <div className="volunteer-page">

      {/* Hero Section */}
      <section className="volunteer-hero">
        <div className="container">

          <span className="section-tag">
            Volunteer With Us
          </span>

          <h1>
            Be The Change You Wish To See
          </h1>

          <p>
            Join our volunteer network and contribute your time,
            skills, and passion to create meaningful social impact
            across communities.
          </p>

        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="opportunities-section">
        <div className="container">

          <div className="section-heading">
            <h2>Volunteer Opportunities</h2>
          </div>

          <div className="opportunities-grid">

            {opportunities.map((item, index) => (
              <div className="opportunity-card" key={index}>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Registration Form */}
      <section className="volunteer-form-section">
        <div className="container">

          <div className="form-card">

            <h2>Volunteer Registration</h2>

            <form>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="form-group">
                <select>
                  <option>Select Opportunity</option>
                  <option>Education Volunteer</option>
                  <option>Healthcare Volunteer</option>
                  <option>Event Volunteer</option>
                  <option>Community Outreach Volunteer</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  rows="5"
                  placeholder="Tell us about yourself"
                ></textarea>
              </div>

              <button type="submit">
                Submit Application
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">

          <div className="section-heading">
            <h2>Why Volunteer With Us?</h2>
          </div>

          <div className="benefits-grid">

            <div className="benefit-card">
              <span>🌍</span>
              <h3>Create Impact</h3>
              <p>
                Make a real difference in people's lives.
              </p>
            </div>

            <div className="benefit-card">
              <span>🤝</span>
              <h3>Build Connections</h3>
              <p>
                Collaborate with passionate changemakers.
              </p>
            </div>

            <div className="benefit-card">
              <span>📜</span>
              <h3>Recognition</h3>
              <p>
                Receive certificates and appreciation for contributions.
              </p>
            </div>

            <div className="benefit-card">
              <span>🚀</span>
              <h3>Develop Skills</h3>
              <p>
                Gain leadership, teamwork, and communication skills.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
