import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Contact.css";
import img1 from  "../assets/communityy.png";
import img2 from  "../assets/humanitarian.png";
import img3 from  "../assets/ndimagee.png";

const heroSlides = [
  {
    image: img1,
    title: "Let's Create Impact Together",
    subtitle: "Whether you would like to volunteer, donate, partner with us, support our initiatives, or learn more about our work, we'd love to hear from you.",
    tag: "Contact Uvagai Foundation",
    accent: "red"
  },
  {
    image: img2,
    title: "Your Support Transforms Lives",
    subtitle: "Every partnership, contribution, and act of support helps us build stronger communities and create lasting impact for those who need it most.",
    tag: "Get In Touch",
    accent: "green"
  },
  {
    image: img3,
    title: "Together We Can Build Tomorrow",
    subtitle: "Join hands with us to create sustainable social impact through education, healthcare, and community development initiatives across communities.",
    tag: "Reach Out To Us",
    accent: "blue"
  }
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const contactInfo = [
    { label: "Office Address", value: "Chennai, Tamil Nadu, India", detail: "Uvagai Foundation" },
    { label: "Phone", value: "+91 99440 02040" },
    { label: "Email", value: "info@uvagai.org" },
    { label: "Website", value: "www.uvagai.org" },
    { label: "Working Hours", value: "Monday - Saturday", detail: "9:00 AM – 6:00 PM" },
  ];

  const connectOptions = [
    { title: "Volunteer", description: "Join our volunteer community and create meaningful impact.", accent: "red", link: "/volunteer" },
    { title: "Donate", description: "Support initiatives that transform lives and communities.", accent: "green", link: "/donate" },
    { title: "CSR Partnership", description: "Collaborate with us on impactful social responsibility programs.", accent: "blue", link: "/csr-partnership" },
    { title: "Community Programs", description: "Participate in sustainable development and outreach initiatives.", accent: "red", link: "/programs" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const filteredValue = value.replace(/[^A-Za-z\s]/g, "");

      setFormData((prev) => ({
        ...prev,
        name: filteredValue,
      }));
      return;
    }

    if (name === "phone") {
      const filteredValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: filteredValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim().length < 3) {
      setStatus({
        show: true,
        type: "error",
        message: "Please enter a valid full name.",
      });
      return;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        show: true,
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setStatus({
        show: true,
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({
        show: true,
        type: "error",
        message: "Please enter a meaningful message.",
      });
      return;
    }

    setLoading(true);

    const data = {
      access_key: "d2e618b7-c616-458f-8837-ca64bb0cd1d3",
      subject: "New Contact Form Submission - Uvagai Foundation",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      inquiryType: formData.inquiryType,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          show: true,
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. Our team will contact you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        });
      } else {
        setStatus({
          show: true,
          type: "error",
          message: result.message || "Failed to send your message.",
        });
      }
    } catch (error) {
      setStatus({
        show: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatus({
          show: false,
          type: "",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="contact-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section
        className="contact-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="contact-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`contact-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="contact-overlay-dark" />
        <div className="contact-overlay-gradient" />
        <div className="contact-overlay-vignette" />

        <div className="contact-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="contact-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="contact-hero-tag">
                <span className="contact-hero-tag-line" />
                <span className="contact-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="contact-hero-headline">{currentSlide.title}</h1>
              <p className="contact-hero-subtitle">{currentSlide.subtitle}</p>

              <motion.div
                className="contact-hero-cta-wrapper"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <a href="#contact-form" className="contact-hero-cta">
                  <span>Send Us A Message</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="contact-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`contact-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="contact-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="contact-slide-counter">
          <span className="contact-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="contact-counter-sep">/</span>
          <span className="contact-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main-section" id="contact-form">
        <div className="contact-container">
          <motion.div
            className="contact-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            <motion.div
              className="contact-info"
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
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
                      {info.detail && <span className="contact-info-card-detail">{info.detail}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            >
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send Us A Message</h2>
                  <p className="contact-form-subtitle">
                    Fill out the form below and our team will get back to you as soon as possible.
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
                        minLength={3}
                        maxLength={50}
                        pattern="[A-Za-z ]+"
                        title="Name should contain only letters"
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
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$"
                        title="Please enter a valid email address"
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
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Inquiry Type</label>
                      <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="form-select">
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
                    <textarea name="message" rows="5" placeholder="Tell us how we can help you..." value={formData.message} onChange={handleChange} required className="form-textarea"></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="form-submit-btn"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>

                    {!loading && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M3 9H15M15 9L10 4M15 9L10 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </motion.button>

                  {status.show && (
                    <div
                      className={`contact-status ${status.type === "success"
                          ? "contact-success"
                          : "contact-error"
                        }`}
                    >
                      <div className="contact-status-title">
                        {status.type === "success"
                          ? "✓ Success"
                          : "⚠ Error"}
                      </div>

                      <div className="contact-status-message">
                        {status.message}
                      </div>
                    </div>
                  )}
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
            transition={{ duration: 0.7 }}
          >
            <div className="contact-section-tag">
              <span className="contact-section-tag-line" />
              <span className="contact-section-tag-text">Connect With Us</span>
            </div>
            <h2 className="contact-section-headline">Ways You Can Get Involved</h2>
          </motion.div>

          <motion.div
            className="contact-connect-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
          >
            {connectOptions.map((option, index) => (
              <motion.a
                href={option.link}
                className={`contact-connect-card connect-${option.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -5 }}
              >
                <div className="connect-card-accent" />
                <h3 className="connect-card-title">{option.title}</h3>
                <p className="connect-card-description">{option.description}</p>
                <div className="connect-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            transition={{ duration: 0.7 }}
          >
            <h2 className="contact-section-headline">Visit Our Office</h2>
            <p className="contact-section-subtitle">
              We welcome volunteers, partners, donors, and supporters to connect with us and learn more about our initiatives.
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
                <path d="M24 4C16.28 4 10 10.28 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.28 31.72 4 24 4Z" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="18" r="6" stroke="#DC2626" strokeWidth="2.5" />
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="contact-cta-headline">Together We Can Create Positive Change</h2>
            <p className="contact-cta-description">
              Every partnership, contribution, and act of support helps us build stronger communities and create lasting impact.
            </p>
            <div className="contact-cta-buttons">
              <a href="/volunteer" className="contact-cta-primary">
                <span>Become A Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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