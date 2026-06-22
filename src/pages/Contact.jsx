
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">

          <span className="section-tag">
            Get In Touch
          </span>

          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Whether you want to volunteer,
            donate, partner with us, or learn more about our initiatives,
            our team is here to help.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">

          <div className="contact-grid">

            {/* Contact Info */}
            <div className="contact-info">

              <h2>Contact Information</h2>

              <div className="info-card">
                <h4>📍 Address</h4>
                <p>
                  Chennai, Tamil Nadu, India
                </p>
              </div>

              <div className="info-card">
                <h4>📞 Phone</h4>
                <p>
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div className="info-card">
                <h4>✉️ Email</h4>
                <p>
                  info@uvagai.org
                </p>
              </div>

              <div className="info-card">
                <h4>🌐 Website</h4>
                <p>
                  www.uvagai.org
                </p>
              </div>

            </div>

            {/* Contact Form */}
            <div className="contact-form">

              <h2>Send a Message</h2>

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
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button type="submit">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">

          <h2>Visit Our Office</h2>

          <div className="map-placeholder">
            Google Map Location
          </div>

        </div>
      </section>

    </div>
  );
}

