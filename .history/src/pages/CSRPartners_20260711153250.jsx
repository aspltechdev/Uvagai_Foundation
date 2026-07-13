import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./CSRPartners.css";

// 👇 Move your logo files from Downloads into src/assets/ and rename them
// to match these filenames (or edit the names below to match your files)
import techforgoodLogo from "../assets/OIP.jpg";
import healthfirstLogo from "../assets/B.png";
import edubrightLogo from "../assets/tn.png";
import greenearthLogo from "../assets/s.png";
import communityfirstLogo from "../assets/naan.jpg";


export default function CSRPartnersHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

  // Partner data with local logo imports
  const csrPartners = [
    { 
      name: "only interns", 
      logo: techforgoodLogo,
      category: "Technology",
      accent: "red" 
    },
    { 
      name: "HealthFirst", 
      logo: healthfirstLogo,
      category: "Healthcare",
      accent: "green" 
    },
    { 
      name: "EduBright", 
      logo: edubrightLogo,
      category: "Education",
      accent: "red" 
    },
    { 
      name: "GreenEarth", 
      logo: greenearthLogo,
      category: "Environment",
      accent: "green" 
    },
    { 
      name: "CommunityFirst", 
      logo: communityfirstLogo,
      category: "Community",
      accent: "blue" 
    },
    
  ];

  const partnershipStats = [
    { number: "CSR", label: "Corporate Partnerships", accent: "red" },
    { number: "NGO", label: "Implementation Partners", accent: "green" },
    { number: "Govt", label: "Community Collaborations", accent: "blue" },
    { number: "500+", label: "Volunteer Network", accent: "red" },
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

  const marqueePartners = [...csrPartners, ...csrPartners];
  const marqueePartnersReversed = [...csrPartners].reverse().concat([...csrPartners].reverse());

  return (
    <section className="csr-partners" ref={sectionRef}>
      
      <motion.div className="csr-partners-bg" style={{ y: bgY }} />
      
      <motion.div className="csr-partners-orb csr-partners-orb-red" style={{ opacity: glowOpacity }} />
      <motion.div className="csr-partners-orb csr-partners-orb-green" style={{ opacity: glowOpacity }} />

      <div className="csr-partners-container">
        
        {/* Section Header */}
        <motion.div 
          className="csr-partners-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <motion.div 
            className="csr-partners-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span 
              className="csr-partners-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span>Our Partners</span>
            <motion.span 
              className="csr-partners-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          <motion.h2 
            className="csr-partners-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Trusted By <span className="text-red">Partners</span> Who Believe In
            <span className="text-green"> Social Impact</span>
          </motion.h2>

          <motion.p 
            className="csr-partners-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Uvagai Foundation collaborates with corporates, institutions,
            volunteers, and community organizations to create sustainable
            development and meaningful social change.
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="csr-partners-stats"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {partnershipStats.map((stat, index) => (
            <motion.div 
              className={`csr-partners-stat-card stat-${stat.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <span className="csr-partners-stat-number">{stat.number}</span>
              <span className="csr-partners-stat-label">{stat.label}</span>
              <div className="csr-partners-stat-line" />
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logo Grid */}
        <motion.div 
          className="csr-partners-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {csrPartners.map((partner, index) => (
            <motion.div 
              className={`csr-partners-logo-card card-${partner.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="csr-partners-logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="csr-partners-logo-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="csr-partners-logo-fallback" style={{ display: 'none' }}>
                  <span>{partner.name.charAt(0)}</span>
                </div>
              </div>
              <div className="csr-partners-logo-info">
                <h4>{partner.name}</h4>
                <span>{partner.category}</span>
              </div>
              <div className="csr-partners-logo-accent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="csr-partners-marquee-wrapper">
          <motion.div 
            className="csr-partners-marquee"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {marqueePartners.map((partner, index) => (
              <motion.div 
                className={`csr-partners-marquee-card card-${partner.accent}`}
                key={`marquee1-${index}`}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="csr-partners-marquee-logo">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="csr-partners-marquee-fallback" style={{ display: 'none' }}>
                    <span>{partner.name.charAt(0)}</span>
                  </div>
                </div>
                <span className="csr-partners-marquee-name">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 */}
        <div className="csr-partners-marquee-wrapper">
          <motion.div 
            className="csr-partners-marquee"
            animate={{
              x: [-50 + "%", 0],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {marqueePartnersReversed.map((partner, index) => (
              <motion.div 
                className={`csr-partners-marquee-card card-${partner.accent}`}
                key={`marquee2-${index}`}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="csr-partners-marquee-logo">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="csr-partners-marquee-fallback" style={{ display: 'none' }}>
                    <span>{partner.name.charAt(0)}</span>
                  </div>
                </div>
                <span className="csr-partners-marquee-name">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="csr-partners-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="/csr-partnership" 
            className="csr-partners-cta"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Become a Partner</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}