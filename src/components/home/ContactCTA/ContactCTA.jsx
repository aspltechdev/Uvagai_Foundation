
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">

        <div className="cta-content">

          <span className="cta-tag">
            Join Our Mission
          </span>

          <h2>
            Together We Can Create Lasting Change
          </h2>

          <p>
            Your support can help transform lives through education,
            healthcare, community welfare, and humanitarian initiatives.
            Become a volunteer, partner with us, or contribute to our cause.
          </p>

          <div className="cta-buttons">
            <a href="/volunteer" className="btn-primary">
              Become a Volunteer
            </a>

            <a href="/donate" className="btn-secondary">
              Donate Now
            </a>

            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

