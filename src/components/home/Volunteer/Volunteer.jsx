
import "./Volunteer.css";

export default function Volunteer() {
  return (
    <section className="volunteer-section">
      <div className="container">

        <div className="volunteer-content">

          <span className="section-tag">
            Become a Volunteer
          </span>

          <h2>
            Your Time Can Change Someone's Life
          </h2>

          <p>
            Join Uvagai Foundation's volunteer network and help us
            create positive social impact through education,
            healthcare, community welfare, environmental initiatives,
            and humanitarian support programs.
          </p>

          <div className="volunteer-features">

            <div className="feature-card">
              <span>🤝</span>
              <h4>Community Service</h4>
              <p>
                Participate in meaningful community outreach programs.
              </p>
            </div>

            <div className="feature-card">
              <span>📚</span>
              <h4>Education Support</h4>
              <p>
                Mentor and support students through learning initiatives.
              </p>
            </div>

            <div className="feature-card">
              <span>🏥</span>
              <h4>Healthcare Drives</h4>
              <p>
                Assist in medical camps and health awareness programs.
              </p>
            </div>

          </div>

          <div className="volunteer-buttons">
            <a href="/volunteer" className="primary-btn">
              Register as Volunteer
            </a>

            <a href="/contact" className="secondary-btn">
              Contact Us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

