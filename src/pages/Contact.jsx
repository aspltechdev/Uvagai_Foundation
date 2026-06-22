import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const contactInfo = [
    {
      label: "Office Address",
      value: "Chennai, Tamil Nadu, India",
      detail: "Uvagai Foundation",
    },
    {
      label: "Phone",
      value: "+91 XXXXX XXXXX",
    },
    {
      label: "Email",
      value: "info@uvagai.org",
    },
    {
      label: "Website",
      value: "www.uvagai.org",
    },
    {
      label: "Working Hours",
      value: "Monday - Saturday",
      detail: "9:00 AM – 6:00 PM",
    },
  ];

  const connectOptions = [
    {
      title: "Volunteer",
      description: "Join our volunteer community and create meaningful impact.",
      accent: "red",
      link: "/volunteer",
    },
    {
      title: "Donate",
      description: "Support initiatives that transform lives and communities.",
      accent: "green",
      link: "/donate",
    },
    {
      title: "CSR Partnership",
      description: "Collaborate with us on impactful social responsibility programs.",
      accent: "blue",
      link: "/csr-partnership",
    },
    {
      title: "Community Programs",
      description: "Participate in sustainable development and outreach initiatives.",
      accent: "red",
      link: "/programs",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="contact-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-glow contact-hero-glow-1" />
        <div className="contact-hero-glow contact-hero-glow-2" />
        
        <div className="contact-container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="contact-hero-tag">
              <span className="contact-hero-tag-line" />
              <span className="contact-hero-tag-text">Contact Uvagai Foundation</span>
            </div>

            <h1 className="contact-hero-headline">
              Let's Create
              <span className="contact-hero-headline-accent"> Impact Together</span>
            </h1>

            <p className="contact-hero-subtitle">
              Whether you would like to volunteer, donate, partner with us,
              support our initiatives, or learn more about our work,
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main-section">
        <div className="contact-container">
          <motion.div 
            className="contact-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Contact Information */}
            <motion.div 
              className="contact-info"
              variants={fadeUpVariants}
            >
              <div className="contact-info-header">
                <h2 className="contact-info-title">Get In Touch</h2>
                <p className="contact-info-intro">
                  Reach out to our team for partnerships, volunteering,
                  donations, CSR collaborations, community initiatives,
                  or general inquiries.
                </p>
              </div>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    className="contact-info-card"
                    key={index}
                    whileHover={{ x: 4 }}
                  >
                    <div className="contact-info-card-accent" />
                    <div className="contact-info-card-content">
                      <span className="contact-info-card-label">{info.label}</span>
                      <span className="contact-info-card-value">{info.value}</span>
                      {info.detail && (
                        <span className="contact-info-card-detail">{info.detail}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-wrapper"
              variants={fadeUpVariants}
            >
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send Us A Message</h2>
                  <p className="contact-form-subtitle">
                    Fill out the form below and our team will get back
                    to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="volunteer">Volunteer Program</option>
                        <option value="donation">Donation Support</option>
                        <option value="csr">CSR Partnership</option>
                        <option value="community">Community Program</option>
                        <option value="media">Media & Press</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Your Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit" 
                    className="form-submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Connect */}
      <section className="contact-connect-section">
        <div className="contact-connect-bg" />
        <div className="contact-container">
          <motion.div 
            className="contact-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="contact-section-tag">
              <span className="contact-section-tag-line" />
              <span className="contact-section-tag-text">Connect With Us</span>
            </div>
            <h2 className="contact-section-headline">Ways You Can Get Involved</h2>
          </motion.div>

          <motion.div 
            className="contact-connect-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {connectOptions.map((option, index) => (
              <motion.a
                href={option.link}
                className={`contact-connect-card connect-${option.accent}`}
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
              >
                <div className="connect-card-accent" />
                <h3 className="connect-card-title">{option.title}</h3>
                <p className="connect-card-description">{option.description}</p>
                <div className="connect-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-container">
          <motion.div 
            className="contact-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="contact-section-headline">Visit Our Office</h2>
            <p className="contact-section-subtitle">
              We welcome volunteers, partners, donors, and supporters
              to connect with us and learn more about our initiatives.
            </p>
          </motion.div>

          <motion.div 
            className="contact-map-placeholder"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="map-placeholder-content">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4C16.28 4 10 10.28 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.28 31.72 4 24 4Z" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="18" r="6" stroke="#DC2626" strokeWidth="2.5"/>
              </svg>
              <span className="map-placeholder-text">Chennai, Tamil Nadu, India</span>
              <span className="map-placeholder-subtext">Google Map Integration</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-cta-bg" />
        <div className="contact-cta-glow" />
        
        <div className="contact-container">
          <motion.div 
            className="contact-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="contact-cta-headline">
              Together We Can Create Positive Change
            </h2>
            <p className="contact-cta-description">
              Every partnership, contribution, and act of support helps
              us build stronger communities and create lasting impact.
            </p>
            <div className="contact-cta-buttons">
              <a href="/volunteer" className="contact-cta-primary">
                <span>Become A Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="contact-cta-secondary">
                Support Our Mission
                <span className="contact-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}