import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./CSRPartnership.css";

export default function CSRPartnersHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

  const csrPartners = [
    { name: "TechForGood Inc.", category: "Technology Partner", accent: "red", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop&q=80" },
    { name: "HealthFirst Foundation", category: "Healthcare Partner", accent: "green", logo: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=200&h=200&fit=crop&q=80" },
    { name: "EduBright Partners", category: "Education Partner", accent: "red", logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=200&fit=crop&q=80" },
    { name: "GreenEarth Alliance", category: "Environment Partner", accent: "green", logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=200&fit=crop&q=80" },
    { name: "CommunityFirst Corp", category: "Community Partner", accent: "blue", logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop&q=80" },
    { name: "VolunteerConnect", category: "Volunteer Partner", accent: "blue", logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&q=80" },
    { name: "ImpactInvest Group", category: "CSR Partner", accent: "red", logo: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=200&h=200&fit=crop&q=80" },
    { name: "WellnessWorks", category: "Healthcare Partner", accent: "green", logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop&q=80" },
  ];

  const benefits = [
    { title: "Transparent Reporting", description: "Regular updates and impact documentation for every initiative.", accent: "red" },
    { title: "Employee Engagement", description: "Meaningful volunteering opportunities that inspire teams.", accent: "green" },
    { title: "Customized Solutions", description: "CSR programs aligned with your organizational objectives.", accent: "blue" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 1.1, clipPath: 'inset(0% 0% 100% 0%)' },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <section className="csr-redesign" ref={sectionRef}>
      
      <motion.div className="csr-redesign-bg" style={{ y: bgY }} />
      <motion.div className="csr-redesign-orb csr-redesign-orb-1" style={{ opacity: glowOpacity }} />
      <motion.div className="csr-redesign-orb csr-redesign-orb-2" style={{ opacity: glowOpacity }} />
      <motion.div className="csr-redesign-orb csr-redesign-orb-3" style={{ opacity: glowOpacity }} />

      <div className="csr-redesign-container">
        
        {/* Header */}
        <motion.div 
          className="csr-redesign-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <motion.div 
            className="csr-redesign-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span className="csr-redesign-eyebrow-line" />
            <span>CSR Partnerships</span>
            <motion.span className="csr-redesign-eyebrow-line" />
          </motion.div>

          <motion.h2 
            className="csr-redesign-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Partner With Us For{" "}
            <span className="text-red">Meaningful</span>{" "}
            <span className="text-green">Impact</span>
          </motion.h2>

          <motion.p 
            className="csr-redesign-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Collaborate with Uvagai Foundation to create sustainable social 
            impact through education, healthcare, and community development.
          </motion.p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div 
          className="csr-redesign-benefits"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              className={`csr-redesign-benefit benefit-${benefit.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="csr-redesign-benefit-number">0{index + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <div className="csr-redesign-benefit-line" />
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logo Grid */}
        <motion.div 
          className="csr-redesign-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {csrPartners.map((partner, index) => (
            <motion.div 
              className={`csr-redesign-card card-${partner.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <motion.div 
                className="csr-redesign-card-logo"
                variants={imageRevealVariants}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="csr-redesign-card-fallback" style={{ display: 'none' }}>
                  <span>{partner.name.charAt(0)}</span>
                </div>
              </motion.div>
              <div className="csr-redesign-card-info">
                <h4>{partner.name}</h4>
                <span>{partner.category}</span>
              </div>
              <motion.div 
                className="csr-redesign-card-hover"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPartner === index ? 1 : 0 }}
              >
                <span>View Profile</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          className="csr-redesign-banner"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="csr-redesign-banner-content">
            <div className="csr-redesign-banner-text">
              <h3>Ready to Create Impact Together?</h3>
              <p>
                Join hands with Uvagai Foundation to build sustainable social 
                impact through education, healthcare, and community development.
              </p>
            </div>
            <motion.a 
              href="/csr-partnership" 
              className="csr-redesign-banner-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a CSR Partner
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
          <div className="csr-redesign-banner-orb banner-orb-red" />
          <div className="csr-redesign-banner-orb banner-orb-green" />
          <div className="csr-redesign-banner-orb banner-orb-blue" />
        </motion.div>

      </div>
    </section>
  );
}