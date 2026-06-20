import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
          Empowering Communities • Transforming Lives
        </span>

        <h1>
          Creating a Better Tomorrow Through
          <span> Education, Healthcare & Community Welfare</span>
        </h1>

        <p>
          Uvagai Foundation is committed to uplifting children, elderly
          citizens, women, and underserved communities through impactful
          social initiatives across Tamil Nadu and beyond.
        </p>

        <div className="hero-buttons">
          <a href="/donate" className="btn-primary">
            Donate Now
          </a>

          <a href="/volunteer" className="btn-secondary">
            Become a Volunteer
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>5000+</h3>
            <p>Lives Impacted</p>
          </div>

          <div>
            <h3>150+</h3>
            <p>Programs Conducted</p>
          </div>

          <div>
            <h3>100+</h3>
            <p>Volunteers</p>
          </div>

          <div>
            <h3>25+</h3>
            <p>Partner Organizations</p>
          </div>
        </div>
      </div>
    </section>
  );
}