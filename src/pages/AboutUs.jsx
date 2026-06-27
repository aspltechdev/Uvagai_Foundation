import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./AboutUs.css";

export default function AboutUsHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.15, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

  const stats = [
    { number: "2019", label: "Established", accent: "red" },
    { number: "06+", label: "Focus Areas", accent: "green" },
    { number: "100+", label: "Community Initiatives", accent: "blue" },
    { number: "500+", label: "Volunteers & Supporters", accent: "red" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
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
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <section className="about-home" ref={sectionRef}>
      
      <motion.div className="about-home-bg" style={{ y: bgY }} />
      
      <motion.div className="about-home-orb about-home-orb-red" style={{ opacity: glowOpacity }} />
      <motion.div className="about-home-orb about-home-orb-green" style={{ opacity: glowOpacity }} />

      <div className="about-home-container">
        
        {/* Header */}
        <motion.div 
          className="about-home-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <motion.div 
            className="about-home-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span 
              className="about-home-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span>About Uvagai Foundation</span>
            <motion.span 
              className="about-home-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          <motion.h2 
            className="about-home-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Creating <span className="text-red">Hope</span>, Empowering{" "}
            <span className="text-green">Lives</span>
          </motion.h2>

          <motion.p 
            className="about-home-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Since 2019, Uvagai Foundation has been dedicated to creating 
            meaningful social impact through education, healthcare, child 
            welfare, and community development initiatives across India.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="about-home-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Left: Image */}
          <motion.div 
            className="about-home-image"
            style={{ scale: imageScale }}
          >
            <motion.div 
              className="about-home-image-wrapper"
              variants={imageRevealVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80" 
                alt="Uvagai Foundation" 
              />
              <div className="about-home-image-overlay" />
            </motion.div>
            
            <motion.div 
              className="about-home-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <span className="about-home-badge-number">2019</span>
              <span className="about-home-badge-label">Founded</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            className="about-home-content"
            variants={cardVariants}
          >
            <p className="about-home-text">
              Uvagai Foundation was established with a vision to create an 
              inclusive society where every individual has access to quality 
              education, healthcare, and opportunities to lead a dignified life.
            </p>
            
            <p className="about-home-text">
              We work closely with communities, volunteers, and partners to 
              implement programs that address real societal challenges and 
              promote sustainable development across multiple sectors.
            </p>

            {/* Our Purpose */}
            <div className="about-home-purpose">
              <h4>Why We Exist</h4>
              <p>
                At Uvagai Foundation, we believe that every individual deserves 
                access to opportunities that improve quality of life. Through 
                education, healthcare, social welfare, and environmental 
                initiatives, we work towards building stronger and more 
                resilient communities.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Areas of Impact */}
        <motion.div 
          className="about-home-services"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="about-home-services-title">Our Areas of Impact</h3>
          <div className="about-home-services-grid">
            {[
              "Education & Youth Empowerment",
              "Healthcare & Wellness",
              "Child Welfare",
              "Elderly Care",
              "Environmental Sustainability",
              "CSR & Volunteer Partnerships",
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={`about-home-service-item service-${index < 2 ? 'red' : index < 4 ? 'green' : 'blue'}`}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <span className="about-home-service-number">0{index + 1}</span>
                <span className="about-home-service-text">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Foundation Highlights */}
        <motion.div 
          className="about-home-highlights"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { title: "2019", desc: "Founded with a vision to create meaningful social impact.", accent: "red" },
            { title: "06+", desc: "Core focus areas serving communities across multiple sectors.", accent: "green" },
            { title: "Community First", desc: "Driven by compassion, inclusion, and sustainable development.", accent: "blue" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className={`about-home-highlight highlight-${item.accent}`}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="about-home-highlight-line" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div 
          className="about-home-quote"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <blockquote>
            "Empowering Communities. Transforming Lives."
          </blockquote>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="about-home-stats"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              className={`about-home-stat stat-${stat.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <motion.span 
                className="about-home-stat-number"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
              >
                {stat.number}
              </motion.span>
              <span className="about-home-stat-label">{stat.label}</span>
              <div className="about-home-stat-line" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="about-home-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="/about-us" 
            className="about-home-cta"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}