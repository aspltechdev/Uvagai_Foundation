
import "./VisionMission.css";

export default function VisionMission() {
  return (
    <div className="vision-mission-page">
      
      {/* Hero Section */}
      <section className="vm-hero">
        <div className="container">
          <span className="section-tag">Vision & Mission</span>

          <h1>
            Building Stronger Communities Through Compassion,
            Inclusion, and Sustainable Development
          </h1>

          <p>
            At Uvagai Foundation, our vision and mission guide every
            initiative we undertake to create meaningful and lasting
            social impact.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">

          <div className="vm-card">
            <div className="vm-icon">🌍</div>

            <h2>Our Vision</h2>

            <p>
              To create an inclusive, empowered, and sustainable society
              where every individual has equal access to education,
              healthcare, opportunities, dignity, and a better quality
              of life.
            </p>

            <p>
              We envision communities that thrive through collective
              growth, social responsibility, and compassionate action.
            </p>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">

          <div className="vm-card">
            <div className="vm-icon">🎯</div>

            <h2>Our Mission</h2>

            <p>
              To uplift underserved communities through impactful
              programs focused on education, healthcare, child welfare,
              elderly care, humanitarian support, and community
              development.
            </p>

            <p>
              Through partnerships, volunteer engagement, awareness
              initiatives, and sustainable interventions, we strive to
              create measurable and meaningful social change.
            </p>
          </div>

        </div>
      </section>

      {/* Core Objectives */}
      <section className="objectives-section">
        <div className="container">

          <h2>Our Core Objectives</h2>

          <div className="objectives-grid">

            <div className="objective-card">
              <h3>📚 Education</h3>
              <p>
                Promote quality education, scholarships, digital literacy,
                and skill development opportunities.
              </p>
            </div>

            <div className="objective-card">
              <h3>🏥 Healthcare</h3>
              <p>
                Improve community health through medical camps,
                awareness programs, and healthcare support.
              </p>
            </div>

            <div className="objective-card">
              <h3>👶 Child Welfare</h3>
              <p>
                Support children through nutrition, education,
                protection, and development initiatives.
              </p>
            </div>

            <div className="objective-card">
              <h3>👵 Elderly Care</h3>
              <p>
                Enhance the well-being and dignity of senior citizens
                through care and support programs.
              </p>
            </div>

            <div className="objective-card">
              <h3>🤝 Community Development</h3>
              <p>
                Empower local communities through sustainable
                development and livelihood initiatives.
              </p>
            </div>

            <div className="objective-card">
              <h3>❤️ Humanitarian Support</h3>
              <p>
                Respond to emergencies and support vulnerable
                communities during times of need.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">

          <h2>Our Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h3>Compassion</h3>
              <p>Serving humanity with empathy and kindness.</p>
            </div>

            <div className="value-card">
              <h3>Integrity</h3>
              <p>Maintaining transparency and accountability.</p>
            </div>

            <div className="value-card">
              <h3>Inclusivity</h3>
              <p>Creating opportunities for all individuals.</p>
            </div>

            <div className="value-card">
              <h3>Impact</h3>
              <p>Delivering sustainable and measurable change.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="vm-cta">
        <div className="container">

          <h2>Be Part of the Change</h2>

          <p>
            Together, we can create a brighter future and build
            stronger communities for generations to come.
          </p>

          <div className="cta-buttons">
            <a href="/volunteer" className="primary-btn">
              Become a Volunteer
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

