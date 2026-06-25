import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./VisionMission.css";

export default function VisionMission() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: visionProgress } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: missionProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"],
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0.3]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 100]);

  const visionImageScale = useTransform(visionProgress, [0, 0.6], [1.2, 1]);
  const visionContentY = useTransform(visionProgress, [0, 0.5], [60, 0]);
  const visionContentOpacity = useTransform(visionProgress, [0, 0.4], [0, 1]);

  const missionImageScale = useTransform(missionProgress, [0, 0.6], [1.2, 1]);
  const missionContentY = useTransform(missionProgress, [0, 0.5], [60, 0]);
  const missionContentOpacity = useTransform(missionProgress, [0, 0.4], [0, 1]);

  const values = [
    {
      image: "/images/value-compassion.jpg",
      title: "Compassion",
      description: "Serving humanity with empathy, kindness, and deep respect for every individual's dignity and worth.",
      accent: "red",
    },
    {
      image: "/images/value-integrity.jpg",
      title: "Integrity",
      description: "Maintaining unwavering transparency, accountability, and ethical practices in everything we do.",
      accent: "green",
    },
    {
      image: "/images/value-inclusivity.jpg",
      title: "Inclusivity",
      description: "Creating equal opportunities and embracing the beautiful diversity within our communities.",
      accent: "blue",
    },
    {
      image: "/images/value-collaboration.jpg",
      title: "Collaboration",
      description: "Working hand in hand with partners, volunteers, and communities to maximize our collective impact.",
      accent: "red",
    },
    {
      image: "/images/value-sustainability.jpg",
      title: "Sustainability",
      description: "Building enduring solutions that create lasting positive change for generations to come.",
      accent: "green",
    },
    {
      image: "/images/value-impact.jpg",
      title: "Impact",
      description: "Delivering meaningful, measurable programs that genuinely improve lives and strengthen communities.",
      accent: "blue",
    },
  ];

  const objectives = [
    {
      image: "/images/objective-education.jpg",
      title: "Education & Youth Empowerment",
      description: "Promote quality education, digital literacy, skill development, mentorship, and learning opportunities for children and youth.",
      accent: "red",
    },
    {
      image: "/images/objective-healthcare.jpg",
      title: "Healthcare & Wellness",
      description: "Improve community health through medical camps, awareness programs, preventive healthcare, and wellness initiatives.",
      accent: "green",
    },
    {
      image: "/images/objective-child.jpg",
      title: "Child Welfare & Protection",
      description: "Support children through education, nutrition, protection, healthcare, and holistic development programs.",
      accent: "blue",
    },
    {
      image: "/images/objective-elderly.jpg",
      title: "Elderly Care & Dignity",
      description: "Enhance the well-being, dignity, and quality of life of senior citizens through compassionate care initiatives.",
      accent: "red",
    },
    {
      image: "/images/objective-environment.jpg",
      title: "Environmental Sustainability",
      description: "Promote environmental awareness through tree plantation drives, sustainability campaigns, and eco-friendly initiatives.",
      accent: "green",
    },
    {
      image: "/images/objective-community.jpg",
      title: "Community Development",
      description: "Strengthen communities through social welfare initiatives, volunteer engagement, and sustainable development programs.",
      accent: "blue",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 1.15, clipPath: 'inset(0% 0% 100% 0%)' },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="vision-mission-page" ref={sectionRef}>
      
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="vm-hero" ref={heroRef}>
        <motion.div 
          className="vm-hero-bg-image"
          style={{ 
            backgroundImage: `url(/images/vision-hero.jpg)`,
            scale: heroScale,
            opacity: heroOpacity,
          }}
        />
        <div className="vm-hero-overlay" />
        <div className="vm-hero-gradient" />
        
        {/* Floating particles */}
        <div className="vm-hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="vm-hero-particle"
              animate={{
                y: [0, -60 - Math.random() * 40, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="vm-hero-content"
          style={{ y: heroY }}
        >
          <motion.div 
            className="vm-hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="vm-hero-badge-dot" />
            Our Purpose
          </motion.div>

          <motion.h1 
            className="vm-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Inspiring Hope,
            <br />
            <span className="vm-hero-title-red">Empowering</span> Lives,
            <br />
            <span className="vm-hero-title-green">Transforming</span> Communities
          </motion.h1>

          <motion.p 
            className="vm-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Every child deserves education. Every family deserves healthcare. 
            Every community deserves the opportunity to thrive. This is the 
            world we're building — together.
          </motion.p>
        </motion.div>

        <motion.div 
          className="vm-hero-scroll"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll to discover</span>
          <div className="vm-hero-scroll-line" />
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* VISION SECTION */}
      {/* ============================================ */}
      <section className="vm-vision" ref={visionRef}>
        <div className="vm-vision-container">
          <motion.div 
            className="vm-vision-image"
            style={{ scale: visionImageScale }}
          >
            <motion.div 
              className="vm-vision-image-wrapper"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src="/images/vision-image.jpg" alt="Our Vision" />
              <div className="vm-vision-image-overlay" />
            </motion.div>
            
            {/* Floating stat */}
            <motion.div 
              className="vm-vision-stat"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <span className="vm-vision-stat-number">2019</span>
              <span className="vm-vision-stat-label">Founded with purpose</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="vm-vision-content"
            style={{ y: visionContentY, opacity: visionContentOpacity }}
          >
            <span className="vm-section-label">01 — Our Vision</span>
            <h2 className="vm-section-title">
              A world where every life
              <span className="text-red"> matters</span>
            </h2>
            <div className="vm-section-text">
              <p>
                We envision a society where every individual — regardless of 
                their background, circumstance, or geography — has access to 
                quality education, compassionate healthcare, and the opportunities 
                needed to lead a dignified and fulfilling life.
              </p>
              <p>
                Our vision extends beyond immediate relief. We're building 
                resilient, self-sustaining communities that can drive their 
                own growth and inspire change for generations to come.
              </p>
              <p>
                A world where compassion isn't just a value — it's the 
                foundation of every action we take. Where every child dreams 
                freely, every elder lives with dignity, and every community 
                thrives together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MISSION SECTION */}
      {/* ============================================ */}
      <section className="vm-mission" ref={missionRef}>
        <div className="vm-mission-container">
          <motion.div 
            className="vm-mission-content"
            style={{ y: missionContentY, opacity: missionContentOpacity }}
          >
            <span className="vm-section-label">02 — Our Mission</span>
            <h2 className="vm-section-title">
              Turning compassion into
              <span className="text-green"> action</span>
            </h2>
            <div className="vm-section-text">
              <p>
                Uvagai Foundation is committed to empowering underserved 
                communities through impactful initiatives in education, 
                healthcare, child welfare, elderly care, environmental 
                sustainability, and community development.
              </p>
              <p>
                We collaborate with volunteers, institutions, corporate 
                partners, and local communities to design and implement 
                programs that create meaningful, measurable social impact.
              </p>
            </div>

            {/* Motto */}
            <motion.div 
              className="vm-mission-motto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="vm-mission-motto-line" />
              <p className="vm-mission-motto-text">
                "Empowering Communities. Transforming Lives."
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="vm-mission-image"
            style={{ scale: missionImageScale }}
          >
            <motion.div 
              className="vm-mission-image-wrapper"
              variants={imageRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src="/images/mission-image.jpg" alt="Our Mission" />
              <div className="vm-mission-image-overlay" />
            </motion.div>

            {/* Floating stat */}
            <motion.div 
              className="vm-mission-stat"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <span className="vm-mission-stat-number">50K+</span>
              <span className="vm-mission-stat-label">Lives impacted</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OBJECTIVES SECTION */}
      {/* ============================================ */}
      <section className="vm-objectives">
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="vm-section-eyebrow">What We Focus On</span>
            <h2 className="vm-section-heading">Our Core Objectives</h2>
            <p className="vm-section-description">
              Six pillars that guide our work and drive meaningful change 
              in communities across the nation.
            </p>
          </motion.div>

          <motion.div 
            className="vm-objectives-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {objectives.map((item, index) => (
              <motion.div 
                className={`vm-objective-card card-${item.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <motion.div 
                  className="vm-objective-image"
                  variants={imageRevealVariants}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="vm-objective-image-gradient" />
                  <span className={`vm-objective-badge badge-${item.accent}`}>
                    {item.title.split('&')[0].trim().split(' ')[0]}
                  </span>
                </motion.div>
                <div className="vm-objective-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VALUES SECTION */}
      {/* ============================================ */}
      <section className="vm-values">
        <div className="vm-values-bg" />
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="vm-section-eyebrow">What We Stand For</span>
            <h2 className="vm-section-heading">Our Core Values</h2>
            <p className="vm-section-description">
              The principles that guide every decision, every program, 
              and every interaction.
            </p>
          </motion.div>

          <motion.div 
            className="vm-values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                className={`vm-value-card value-${value.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="vm-value-image">
                  <img src={value.image} alt={value.title} />
                  <div className="vm-value-overlay" />
                  <div className="vm-value-number">0{index + 1}</div>
                </div>
                <div className="vm-value-content">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EMOTIONAL CTA */}
      {/* ============================================ */}
      <section className="vm-emotional-cta">
        <motion.div 
          className="vm-emotional-bg"
          style={{ backgroundImage: `url(/images/cta-emotional.jpg)` }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        />
        <div className="vm-emotional-overlay" />
        
        <motion.div 
          className="vm-emotional-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <h2 className="vm-emotional-title">
            Together, we can rewrite
            <br />
            <span className="vm-emotional-title-red">the future</span>
          </h2>
          <p className="vm-emotional-text">
            Every child educated. Every patient treated. Every life touched. 
            It starts with a single act of kindness. It grows with your support. 
            It transforms into a movement.
          </p>
          <div className="vm-emotional-actions">
            <motion.a 
              href="/volunteer" 
              className="vm-emotional-btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join the Movement
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a 
              href="/donate" 
              className="vm-emotional-btn-secondary"
              whileHover={{ x: 4 }}
            >
              Make a Donation <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}