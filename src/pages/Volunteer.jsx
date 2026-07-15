import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./Volunteer.css";

import benefitImg1 from "../assets/secondimage.png";
import benefitImg2 from "../assets/anotherimage.png";
import benefitImg3 from "../assets/newfrstimage.png";

export default function VolunteerHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const benefits = [
    {
      image: benefitImg1,
      title: "Make a Difference",
      description: "Your time and skills can directly impact lives and create lasting positive change in communities.",
      accent: "red",
    },
    {
      image: benefitImg2,
      title: "Grow Personally",
      description: "Develop new skills, gain valuable experience, and discover your true potential through meaningful service.",
      accent: "green",
    },
    {
      image: benefitImg3,
      title: "Build Community",
      description: "Connect with like-minded individuals who share your passion for creating positive social change.",
      accent: "blue",
    },
  ];

  const ways = [
    { title: "Individual Volunteering", description: "Contribute your time and skills to various community initiatives.", accent: "red" },
    { title: "Group Volunteering", description: "Bring friends, family, or colleagues for a meaningful group experience.", accent: "green" },
    { title: "Corporate Volunteering", description: "Engage your organization in structured programs that create impact.", accent: "blue" },
    { title: "Skill-Based Volunteering", description: "Use your professional expertise to strengthen our programs.", accent: "red" },
  ];

  return (
    <section className="vlt-section" ref={sectionRef}>
      <div className="vlt-container">
        
        {/* Header */}
        <motion.div
          className="vlt-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="vlt-header-tag">
            <span className="vlt-header-tag-line" />
            <span className="vlt-header-tag-text">Get Involved</span>
          </div>
          <h2 className="vlt-header-title">
            Volunteer Your <span className="vlt-text-red">Time</span>, Change a{" "}
            <span className="vlt-text-green">Life</span>
          </h2>
          <p className="vlt-header-desc">
            Join a passionate community dedicated to making a difference. Every 
            hour you give creates ripples of positive change.
          </p>
        </motion.div>

        {/* Benefits Cards with Images */}
        <motion.div
          className="vlt-benefits"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              className={`vlt-benefit-card vlt-benefit-${benefit.accent}`}
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -5 }}
            >
              <div className="vlt-benefit-media">
                <img src={benefit.image} alt={benefit.title} />
                <div className="vlt-benefit-media-shade" />
                <span className={`vlt-benefit-badge vlt-badge-${benefit.accent}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="vlt-benefit-body">
                <h3 className="vlt-benefit-title">{benefit.title}</h3>
                <p className="vlt-benefit-text">{benefit.description}</p>
              </div>
              <div className={`vlt-benefit-line vlt-line-${benefit.accent}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Ways to Volunteer */}
        <motion.div
          className="vlt-ways"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
          }}
        >
          <h3 className="vlt-ways-title">
            Ways to <span className="vlt-text-red">Get Involved</span>
          </h3>
          <div className="vlt-ways-grid">
            {ways.map((way, index) => (
              <motion.div
                className={`vlt-way-card vlt-way-${way.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -3 }}
              >
                <h4 className="vlt-way-title">{way.title}</h4>
                <p className="vlt-way-text">{way.description}</p>
                <div className={`vlt-way-line vlt-line-${way.accent}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="vlt-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="vlt-cta-card">
            <div className="vlt-cta-content">
              <h3>Ready to Make a Difference?</h3>
              <p>Join hundreds of volunteers creating lasting impact in communities across India.</p>
            </div>
            <div className="vlt-cta-buttons">
              <Link to="/volunteers" className="vlt-cta-btn-primary">
                <span>Become a Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/contact" className="vlt-cta-btn-secondary">
                Contact Us
                <span className="vlt-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}