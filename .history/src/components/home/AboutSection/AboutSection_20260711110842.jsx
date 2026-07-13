import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./AboutSection.css";
import about1 from "../../../assets/about11.png";
import about2 from "../../../assets/about22.png";
import about3 from "../../../assets/about3.png";
import about4 from "../../../assets/about4.png";

export default function AboutSection() {
  const sectionRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  
  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Cinematic transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentX = useTransform(scrollYProgress, [0, 0.4], [-40, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0, 0.4], [40, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0.5, 0.5, 0]);

  // Floating badge parallax
  const badgeY = useTransform(scrollYProgress, [0, 1], [20, -20]);

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const imageRevealVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1,
      clipPath: 'inset(0% 0% 0% 100%)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.3,
      },
    },
  };

  const galleryImages = [
    {
      src: about1,
      alt: "Education Initiative",
      accent: "#DC2626",
      label: "Education",
    },
    {
      src: about2,
      alt: "Healthcare Program",
      accent: "#059669",
      label: "Healthcare",
    },
    {
      src: about3,
      alt: "Community Development",
      accent: "#1E3A8A",
      label: "Community",
    },
    {
      src: about4,
      alt: "Volunteer Engagement",
      accent: "#DC2626",
      label: "Volunteers",
    },
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      
      {/* Cinematic Background */}
      <motion.div 
        className="about-bg-layer"
        style={{ y: bgY }}
      />
      
      {/* Floating Orbs */}
      <motion.div 
        className="about-orb about-orb-red"
        style={{ opacity: glowOpacity }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="about-orb about-orb-green"
        style={{ opacity: glowOpacity }}
        animate={{ scale: [0.9, 1.1, 0.9], rotate: [-20, 0, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="about-orb about-orb-blue"
        style={{ opacity: glowOpacity }}
        animate={{ scale: [1.05, 0.9, 1.05], rotate: [15, -15, 15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Floating Particles */}
      <div className="about-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="about-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 40, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="about-container">
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* LEFT: Text Content */}
          <motion.div 
            className="about-content"
            style={{ x: contentX, opacity: contentOpacity }}
          >
            {/* Section Tag */}
            <motion.div 
              className="about-tag"
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
              Creating 
              <span className="about-headline-red"> Positive </span>
              Change Through
              <br />
              <span className="about-headline-green"> Education</span>, 
              <span className="about-headline-blue"> Healthcare </span>
              & 
              <span className="about-headline-red"> Compassion</span>
            </motion.h2>

            {/* Description */}
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
              sustainability, volunteer engagement, and CSR partnerships.
            </motion.p>

            {/* CTA Button */}
            <motion.a 
              href="/about-us" 
              className="about-cta"
              variants={fadeUpVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Explore Our Journey</span>
              <motion.span
                className="about-cta-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </motion.a>
          </motion.div>

          {/* RIGHT: Image Gallery */}
          <motion.div 
            className="about-gallery"
            style={{ x: imageX, scale: imageScale }}
          >
            {/* Main Large Image */}
            <motion.div 
              className="about-gallery-main"
              variants={imageRevealVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="about-gallery-frame">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="about-gallery-image"
                />
                <div className="about-gallery-overlay" />
                
                {/* Label */}
                <motion.div 
                  className="about-gallery-label"
                  style={{ background: galleryImages[0].accent }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {galleryImages[0].label}
                </motion.div>

                {/* Glow Border */}
                <motion.div 
                  className="about-gallery-glow"
                  style={{ boxShadow: `inset 0 0 0 2px ${galleryImages[0].accent}40` }}
                  animate={{ 
                    boxShadow: [
                      `inset 0 0 0 2px ${galleryImages[0].accent}15`,
                      `inset 0 0 0 2px ${galleryImages[0].accent}45`,
                      `inset 0 0 0 2px ${galleryImages[0].accent}15`,
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Secondary Images Grid */}
            <div className="about-gallery-secondary">
              {galleryImages.slice(1, 4).map((image, index) => (
                <motion.div
                  key={index}
                  className="about-gallery-small"
                  variants={imageRevealVariants}
                  custom={0.15 * (index + 1)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="about-gallery-frame">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="about-gallery-image"
                    />
                    <div className="about-gallery-overlay" />
                    
                    <motion.div 
                      className="about-gallery-label about-gallery-label-small"
                      style={{ background: image.accent }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                    >
                      {image.label}
                    </motion.div>

                    <motion.div 
                      className="about-gallery-glow"
                      style={{ boxShadow: `inset 0 0 0 2px ${image.accent}40` }}
                      animate={{ 
                        boxShadow: [
                          `inset 0 0 0 2px ${image.accent}15`,
                          `inset 0 0 0 2px ${image.accent}45`,
                          `inset 0 0 0 2px ${image.accent}15`,
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              className="about-badge"
              style={{ y: badgeY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
            >
              <div className="about-badge-inner">
                <motion.span 
                  className="about-badge-number"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  2019
                </motion.span>
                <span className="about-badge-text">Established</span>
              </div>
              <div className="about-badge-line" />
            </motion.div>

            {/* Floating Impact Badge */}
            <motion.div 
              className="about-badge about-badge-impact"
              style={{ y: badgeY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
            >
              <div className="about-badge-inner">
                <motion.span 
                  className="about-badge-number"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  50K+
                </motion.span>
                <span className="about-badge-text">Lives Impacted</span>
              </div>
              <div className="about-badge-line" />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}