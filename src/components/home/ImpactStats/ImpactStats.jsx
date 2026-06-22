import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ImpactStats.css";

export default function ImpactStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const stats = [
    {
      number: "2019",
      label: "Foundation Established",
      description: "Years of dedicated service",
      accent: "red",
    },
    {
      number: "06+",
      label: "Core Social Impact Areas",
      description: "Comprehensive approach",
      accent: "green",
    },
    {
      number: "Education",
      label: "Child & Youth Empowerment",
      description: "Building future leaders",
      accent: "blue",
    },
    {
      number: "Healthcare",
      label: "Community Wellness",
      description: "Accessible medical support",
      accent: "red",
    },
    {
      number: "Elder Care",
      label: "Dignity & Support Programs",
      description: "Honoring our seniors",
      accent: "green",
    },
    {
      number: "CSR",
      label: "Partnership Opportunities",
      description: "Collaborative impact",
      accent: "blue",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.33, 0.1, 0.25, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="impact-stats" ref={sectionRef}>
      {/* Background */}
      <div className="impact-bg" />
      
      {/* Ambient elements */}
      <div className="impact-ambient impact-ambient-1" />
      <div className="impact-ambient impact-ambient-2" />

      {/* Grid texture */}
      <div className="impact-grid-texture" />

      <div className="impact-container">
        {/* Section Heading */}
        <motion.div 
          className="impact-heading"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="impact-tag">
            <span className="impact-tag-line" />
            <span className="impact-tag-text">Our Focus Areas</span>
          </div>

          <h2 className="impact-headline">
            Creating Lasting Social Impact Through
            <span className="impact-headline-accent"> Compassion & Action</span>
          </h2>

          <p className="impact-subtitle">
            Uvagai Foundation works towards building stronger communities
            through education, healthcare, child welfare, elderly care,
            environmental responsibility, humanitarian support, and
            sustainable development initiatives.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="impact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((item, index) => (
            <motion.div 
              className={`impact-card impact-card-${item.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: [0.33, 0.1, 0.25, 1] },
              }}
            >
              {/* Card top accent line */}
              <div className="impact-card-accent" />
              
              {/* Card content */}
              <div className="impact-card-content">
                <span className="impact-card-number">
                  {item.number}
                </span>
                <span className="impact-card-label">
                  {item.label}
                </span>
                <span className="impact-card-description">
                  {item.description}
                </span>
              </div>

              {/* Card bottom indicator */}
              <div className="impact-card-indicator" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="impact-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <a href="/our-work" className="impact-cta">
            <span>Explore Our Impact Areas</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}