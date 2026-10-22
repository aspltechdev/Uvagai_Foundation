import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./CSRPartners.css";

import onlyInternsLogo from "../assets/OIP.jpg";
import braiilLogo from "../assets/end.jpeg";
import tnGovtLogo from "../assets/tn.png";
import dicLogo from "../assets/logo2.png";
import neyeLogo from "../assets/naan.jpg";

export default function CSRPartnersHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const csrPartners = [
    { name: "Only Interns (OXI)", logo: onlyInternsLogo, category: "Internship Platform", accent: "red" },
    { name: "Endless Transformation Academy", logo: braiilLogo, category: "Partner Organization", accent: "green" },
    { name: "Govt of Tamil Nadu", logo: tnGovtLogo, category: "State Government", accent: "blue" },
    { name: "District Industries Centre", logo: dicLogo, category: "MSME / Government", accent: "red" },
    { name: "Neye Startup Fest", logo: neyeLogo, category: "Startup Ecosystem", accent: "green" },
  ];

  const stats = [
    { number: "CSR", label: "Corporate Partners", accent: "red" },
    { number: "NGO", label: "Implementation Partners", accent: "green" },
    { number: "Govt", label: "Government Collaborations", accent: "blue" },
    { number: "500+", label: "Volunteer Network", accent: "red" },
  ];

  return (
    <section className="cpr-section" ref={sectionRef}>
      <div className="cpr-container">
        
        {/* Header */}
        <motion.div
          className="cpr-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="cpr-header-tag">
            <span className="cpr-header-tag-line" />
            <span className="cpr-header-tag-text">Our Partners</span>
          </div>
          <h2 className="cpr-header-title">
            Trusted By Partners Who Believe In{" "}
            <span className="cpr-text-red">Social Impact</span>
          </h2>
          <p className="cpr-header-desc">
            Uvagai Foundation collaborates with corporates, institutions, 
            and community organizations to create sustainable development 
            and meaningful social change.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="cpr-stats"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              className={`cpr-stat-card cpr-stat-${stat.accent}`}
              key={index}
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -4 }}
            >
              <span className="cpr-stat-number">{stat.number}</span>
              <span className="cpr-stat-label">{stat.label}</span>
              <div className={`cpr-stat-line cpr-line-${stat.accent}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logo Grid */}
        <motion.div
          className="cpr-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
          }}
        >
          {csrPartners.map((partner, index) => (
            <motion.div
              className={`cpr-card cpr-card-${partner.accent}`}
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -5 }}
            >
              <div
                className="cpr-card-logo"
                style={{
                  width: "120px",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="cpr-card-fallback"
                  style={{
                    display: 'none',
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                  }}
                >
                  <span>{partner.name.charAt(0)}</span>
                </div>
              </div>
              <div className="cpr-card-info">
                <h4 className="cpr-card-name">{partner.name}</h4>
                <span className="cpr-card-category">{partner.category}</span>
              </div>
              <div className={`cpr-card-accent cpr-accent-${partner.accent}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="cpr-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/csr-partnership" className="cpr-cta-btn">
            <span>Partner With Us</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}