import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutSection.css";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 0.1, 0.25, 1],
      },
    },
  };

  const imageRevealVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.08,
      clipPath: 'inset(0% 0% 0% 100%)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const features = [
    "Education Support & Child Welfare",
    "Healthcare & Community Wellness Programs",
    "Elderly Care & Humanitarian Assistance",
    "CSR Partnerships & Volunteer Engagement",
    "Environmental Sustainability Initiatives",
    "Inclusive Community Development Programs",
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      {/* Background */}
      <div className="about-bg" />
      
      {/* Subtle ambient glows */}
      <div className="about-ambient-glow about-ambient-glow-top" />
      <div className="about-ambient-glow about-ambient-glow-bottom" />

      {/* Grid texture */}
      <div className="about-grid-texture">
        <div className="about-grid-line" style={{ top: '20%' }} />
        <div className="about-grid-line" style={{ top: '40%' }} />
        <div className="about-grid-line" style={{ top: '60%' }} />
        <div className="about-grid-line" style={{ top: '80%' }} />
      </div>

      <div className="about-container">
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Left: Image */}
          <motion.div 
            className="about-image-column"
            variants={fadeUpVariants}
          >
            <div className="about-image-wrapper">
              {/* Glow behind image */}
              <div className="about-image-glow" />
              
              {/* Image with reveal animation */}
              <motion.div 
                className="about-image-frame"
                variants={imageRevealVariants}
              >
                <img
                  src="/images/about-foundation.jpg"
                  alt="Uvagai Foundation"
                  className="about-image"
                />
              </motion.div>

              {/* Border accent */}
              <div className="about-image-border" />

              {/* Experience badge */}
              <motion.div 
                className="about-badge"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
              >
                <div className="about-badge-content">
                  <span className="about-badge-number">2019</span>
                  <span className="about-badge-label">Established</span>
                </div>
                <div className="about-badge-line" />
              </motion.div>

              {/* Impact badge */}
              <motion.div 
                className="about-badge about-badge-impact"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
              >
                <div className="about-badge-content">
                  <span className="about-badge-number">50K+</span>
                  <span className="about-badge-label">Lives Impacted</span>
                </div>
                <div className="about-badge-line" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="about-content-column">
            {/* Section tag */}
            <motion.div 
              className="about-section-tag"
              variants={fadeUpVariants}
            >
              <span className="about-tag-line" />
              <span className="about-tag-text">About Uvagai Foundation</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              className="about-headline"
              variants={fadeUpVariants}
            >
              Creating Positive Change Through
              <span className="about-headline-highlight"> Education, Healthcare & Compassion</span>
            </motion.h2>

            {/* Description paragraphs */}
            <motion.p 
              className="about-description"
              variants={fadeUpVariants}
            >
              Founded in 2019, Uvagai Foundation is a non-profit organization
              committed to empowering children, families, and communities through
              impactful social initiatives. Guided by the belief that education
              and healthcare are fundamental rights, we work to create
              opportunities that improve lives and build stronger communities.
            </motion.p>

            <motion.p 
              className="about-description"
              variants={fadeUpVariants}
            >
              Our efforts span education support, child welfare, elderly care,
              healthcare initiatives, humanitarian aid, environmental
              sustainability, volunteer engagement, and CSR partnerships. Every
              project is driven by compassion, responsibility, and a commitment
              to creating long-term social impact.
            </motion.p>

            {/* Features list */}
            <motion.div 
              className="about-features"
              variants={fadeUpVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="about-feature-item"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="about-feature-marker">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="about-feature-text">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a 
              href="/about-us" 
              className="about-cta"
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Our Journey</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}