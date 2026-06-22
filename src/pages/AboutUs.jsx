
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">About Uvagai Foundation</span>

          <h1>
            Empowering Communities Through Compassion,
            Education & Sustainable Development
          </h1>

          <p>
            Uvagai Foundation is a non-profit organization committed to
            transforming lives through education, healthcare, elderly care,
            child welfare, humanitarian support, and community development
            initiatives across Tamil Nadu and beyond.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-content">
        <div className="container">

          <div className="about-grid">

            <div className="about-image">
              <img
                src="/images/about-foundation.jpg"
                alt="Uvagai Foundation"
              />
            </div>

            <div className="about-text">
              <h2>Who We Are</h2>

              <p>
                Uvagai Foundation believes that every individual deserves
                access to opportunities, dignity, healthcare, education,
                and a supportive community.
              </p>

              <p>
                Through collaborative initiatives, volunteer programs,
                partnerships, and community engagement activities, we
                strive to uplift underprivileged communities and create
                meaningful social impact.
              </p>

              <p>
                Our efforts span education support, healthcare camps,
                elderly welfare programs, child development initiatives,
                environmental awareness campaigns, and humanitarian relief.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Vision Mission */}
      <section className="vision-mission">
        <div className="container">

          <div className="card">
            <h3>Our Vision</h3>

            <p>
              To build an inclusive and empowered society where every
              individual has access to education, healthcare, dignity,
              and opportunities for a better future.
            </p>
          </div>

          <div className="card">
            <h3>Our Mission</h3>

            <p>
              To drive sustainable community development through impactful
              programs in education, healthcare, welfare, and humanitarian
              support while fostering volunteerism and social responsibility.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <div className="container">

          <h2>Our Core Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h4>Compassion</h4>
              <p>
                Serving communities with empathy and care.
              </p>
            </div>

            <div className="value-card">
              <h4>Integrity</h4>
              <p>
                Maintaining transparency and accountability.
              </p>
            </div>

            <div className="value-card">
              <h4>Inclusivity</h4>
              <p>
                Creating opportunities for everyone regardless of background.
              </p>
            </div>

            <div className="value-card">
              <h4>Impact</h4>
              <p>
                Delivering measurable and sustainable social change.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-stats">
        <div className="container">

          <h2>Our Impact</h2>

          <div className="stats-grid">

            <div className="stat">
              <h3>5000+</h3>
              <p>Lives Impacted</p>
            </div>

            <div className="stat">
              <h3>300+</h3>
              <p>Students Supported</p>
            </div>

            <div className="stat">
              <h3>100+</h3>
              <p>Community Programs</p>
            </div>

            <div className="stat">
              <h3>500+</h3>
              <p>Volunteers</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">

          <h2>Join Our Mission</h2>

          <p>
            Together we can create meaningful change and build stronger,
            healthier, and more empowered communities.
          </p>

          <div className="cta-buttons">
            <a href="/volunteer" className="btn-primary">
              Become a Volunteer
            </a>

            <a href="/donate" className="btn-secondary">
              Donate Now
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

