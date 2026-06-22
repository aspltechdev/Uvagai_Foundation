
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">

        <div className="about-grid">

          <div className="about-image">
            <img
              src="/images/about-foundation.jpg"
              alt="Uvagai Foundation"
            />
          </div>

          <div className="about-content">

            <span className="section-tag">
              About Uvagai Foundation
            </span>

            <h2>
              Empowering Communities Through Compassion,
              Education & Sustainable Development
            </h2>

            <p>
              Uvagai Foundation is a non-profit organization dedicated
              to creating positive social impact through education,
              healthcare, child welfare, elderly care, humanitarian
              support, and community development initiatives.
            </p>

            <p>
              We believe that every individual deserves access to
              opportunities, dignity, and a better quality of life.
              Through partnerships, volunteers, and community-driven
              programs, we strive to build stronger and more resilient
              communities.
            </p>

            <div className="about-features">

              <div className="feature">
                <span>✓</span>
                <p>Education & Skill Development</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Healthcare & Medical Support</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Child & Elderly Welfare Programs</p>
              </div>

              <div className="feature">
                <span>✓</span>
                <p>Community Development Initiatives</p>
              </div>

            </div>

            <a href="/about-us" className="about-btn">
              Learn More About Us
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

