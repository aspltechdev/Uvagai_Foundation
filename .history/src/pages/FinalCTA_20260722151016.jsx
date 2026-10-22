import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./FinalCTA.css";

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section className="fct-section" ref={sectionRef}>
      <div className="fct-container">
        
        <motion.div
          className="fct-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="fct-card-bg" />
          <div className="fct-card-glow fct-glow-red" />
          <div className="fct-card-glow fct-glow-green" />

          <div className="fct-content">
            <div className="fct-tag">
              <span className="fct-tag-line" />
              <span className="fct-tag-text">Join Our Mission</span>
            </div>

            <h2 className="fct-title">
              Together, We Can Build A{" "}
              <span className="fct-text-red">Better Tomorrow</span>
            </h2>

            <p className="fct-desc">
              Join us in empowering lives, supporting communities, and creating 
              sustainable social change through your generosity and action.
            </p>

            <div className="fct-buttons">
              <Link to="/contact" className="fct-btn-primary">
                <span>Partner with us</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/volunteers" className="fct-btn-secondary">
                Contact Us
                <span className="fct-btn-arrow">→</span>
              </Link>
              {/* <Link to="/contact" className="fct-btn-outline">
                Contact Us
              </Link> */}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}