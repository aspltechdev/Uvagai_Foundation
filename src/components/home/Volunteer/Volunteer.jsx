import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Volunteer.css";

export default function Volunteer() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    opportunity: "",
    message: "",
  });

  const opportunities = [
    {
      title: "Education & Mentorship Volunteer",
      description:
        "Support students through mentoring, tutoring, career guidance, digital literacy programs, and educational workshops that help shape brighter futures.",
      accent: "red",
    },
    {
      title: "Healthcare Volunteer",
      description:
        "Assist during medical camps, health awareness drives, blood donation initiatives, wellness programs, and community healthcare outreach activities.",
      accent: "green",
    },
    {
      title: "Child Welfare Volunteer",
      description:
        "Participate in programs focused on child education, nutrition, personal development, creative learning activities, and well-being support.",
      accent: "blue",
    },
    {
      title: "Elderly Care Volunteer",
      description:
        "Spend time with senior citizens, support welfare programs, assist during events, and contribute to initiatives that promote dignity and care.",
      accent: "red",
    },
    {
      title: "Environmental Volunteer",
      description:
        "Join tree plantation drives, sustainability campaigns, clean-up activities, and environmental awareness initiatives.",
      accent: "green",
    },
    {
      title: "Community Outreach Volunteer",
      description:
        "Work directly with communities, support awareness programs, social campaigns, and community development projects.",
      accent: "blue",
    },
    {
      title: "Event & Campaign Volunteer",
      description:
        "Help organize social events, fundraising campaigns, workshops, awareness drives, and foundation activities.",
      accent: "red",
    },
    {
      title: "Digital & Creative Volunteer",
      description:
        "Contribute your skills in graphic design, content creation, photography, videography, social media, and digital marketing.",
      accent: "green",
    },
  ];

  const benefits = [
    {
      title: "Create Lasting Impact",
      description:
        "Make a meaningful difference in the lives of children, families, senior citizens, and communities.",
    },
    {
      title: "Connect With Changemakers",
      description:
        "Collaborate with passionate volunteers, professionals, and community leaders.",
    },
    {
      title: "Recognition & Certification",
      description:
        "Receive volunteer certificates and appreciation for your valuable contributions.",
    },
    {
      title: "Develop Valuable Skills",
      description:
        "Strengthen leadership, communication, teamwork, project management, and social responsibility skills.",
    },
    {
      title: "Serve With Purpose",
      description:
        "Contribute your time and talents to initiatives that create real and measurable social impact.",
    },
    {
      title: "Personal Growth",
      description:
        "Gain new experiences, broaden perspectives, and become part of a purpose-driven journey.",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="volunteer-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="volunteer-hero">
        <div className="volunteer-hero-bg" />
        <div className="volunteer-hero-glow volunteer-hero-glow-1" />
        <div className="volunteer-hero-glow volunteer-hero-glow-2" />
        
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="volunteer-hero-tag">
              <span className="volunteer-hero-tag-line" />
              <span className="volunteer-hero-tag-text">Volunteer With Uvagai Foundation</span>
            </div>

            <h1 className="volunteer-hero-headline">
              Together We Can Create
              <span className="volunteer-hero-headline-accent"> Positive Change</span>
            </h1>

            <p className="volunteer-hero-subtitle">
              Become part of a passionate community of changemakers
              dedicated to empowering lives, strengthening communities,
              and creating sustainable social impact through meaningful action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="volunteer-opportunities-section">
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="volunteer-section-tag">
              <span className="volunteer-section-tag-line" />
              <span className="volunteer-section-tag-text">Volunteer Opportunities</span>
            </div>
            <h2 className="volunteer-section-headline">Find A Meaningful Way To Contribute</h2>
            <p className="volunteer-section-subtitle">
              Whether you're a student, professional, retiree, or
              passionate individual, there's a place for you in our mission.
            </p>
          </motion.div>

          <motion.div 
            className="volunteer-opportunities-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {opportunities.map((item, index) => (
              <motion.div 
                className={`volunteer-opportunity-card opportunity-${item.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="opportunity-card-number">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="opportunity-card-title">{item.title}</h3>
                <p className="opportunity-card-description">{item.description}</p>
                <div className="opportunity-card-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="volunteer-form-section" id="volunteer-form">
        <div className="volunteer-form-bg" />
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-form-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="form-card-header">
              <h2 className="form-card-title">Volunteer Registration</h2>
              <p className="form-card-subtitle">
                Join our volunteer community and contribute your skills,
                time, and passion to create meaningful social impact.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="volunteer-form">
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
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Volunteer Opportunity</label>
                  <select
                    name="opportunity"
                    value={formData.opportunity}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select an opportunity</option>
                    <option value="education">Education & Mentorship</option>
                    <option value="healthcare">Healthcare Volunteer</option>
                    <option value="child">Child Welfare Volunteer</option>
                    <option value="elderly">Elderly Care Volunteer</option>
                    <option value="environmental">Environmental Volunteer</option>
                    <option value="community">Community Outreach</option>
                    <option value="event">Event & Campaign</option>
                    <option value="digital">Digital & Creative</option>
                  </select>
                </div>
              </div>

              <div className="form-group form-group-full">
                <label className="form-label">About You</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about yourself, your interests, skills, and how you would like to contribute."
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
                <span>Submit Application</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="volunteer-benefits-section">
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="volunteer-section-tag">
              <span className="volunteer-section-tag-line" />
              <span className="volunteer-section-tag-text">Volunteer Benefits</span>
            </div>
            <h2 className="volunteer-section-headline">Why Volunteer With Us?</h2>
            <p className="volunteer-section-subtitle">
              Volunteering is more than giving your time—it's about
              creating impact, learning, growing, and becoming part of
              something bigger than yourself.
            </p>
          </motion.div>

          <motion.div 
            className="volunteer-benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                className="volunteer-benefit-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="benefit-card-number">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-description">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="volunteer-cta-section">
        <div className="volunteer-cta-bg" />
        <div className="volunteer-cta-glow" />
        
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="volunteer-cta-headline">
              Start Your Volunteer Journey Today
            </h2>
            <p className="volunteer-cta-description">
              Every act of kindness matters. Join Uvagai Foundation and
              become a catalyst for positive change in communities that
              need it most.
            </p>
            <a href="#volunteer-form" className="volunteer-cta-btn">
              <span>Become A Volunteer</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}