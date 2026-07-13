import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import "./Volunteer.css";

export default function VolunteerHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

  // Volunteer stories/moments for slider
  const volunteerMoments = [
    {
      image: "https://images.unsplash.com/photo-1652971876875-05db98fab376?w=1200&q=80",
      quote: "The best way to find yourself is to lose yourself in the service of others.",
      author: "Our Volunteer Community",
      accent: "red",
    },
    {
      image: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?w=1200&q=80",
      quote: "Volunteering is the ultimate exercise in democracy. You vote in elections once a year, but when you volunteer, you vote every day about the kind of community you want.",
      author: "Uvagai Foundation",
      accent: "green",
    },
    {
      image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=1200&q=80",
      quote: "Small acts, when multiplied by millions of people, can transform the world.",
      author: "Community Changemakers",
      accent: "blue",
    },
  ];

  // Why volunteer benefits
  const benefits = [
    {
      image: "https://images.pexels.com/photos/36713463/pexels-photo-36713463.jpeg",
      title: "Make a Difference",
      description: "Your time and skills can directly impact lives and create lasting positive change in communities.",
      accent: "red",
    },
    {
      image: "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Grow Personally",
      description: "Develop new skills, gain valuable experience, and discover your true potential through service.",
      accent: "green",
    },
    {
      image: "https://images.unsplash.com/photo-1656311879551-562fe942a8ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Build Community",
      description: "Connect with like-minded individuals who share your passion for creating positive change.",
      accent: "blue",
    },
  ];

  // Ways to volunteer
  const ways = [
    {
      title: "Individual Volunteering",
      description: "Join as an individual and contribute your time and skills to various community initiatives.",
      accent: "red",
    },
    {
      title: "Group Volunteering",
      description: "Bring your friends, family, or colleagues together for a meaningful group experience.",
      accent: "green",
    },
    {
      title: "Corporate Volunteering",
      description: "Engage your organization in structured volunteering programs that create impact.",
      accent: "blue",
    },
    {
      title: "Remote Volunteering",
      description: "Contribute from anywhere with virtual volunteering opportunities that fit your schedule.",
      accent: "red",
    },
    {
      title: "Skill-Based Volunteering",
      description: "Use your professional expertise to support our programs and strengthen our impact.",
      accent: "green",
    },
    {
      title: "Event Volunteering",
      description: "Participate in one-time events, campaigns, and special initiatives throughout the year.",
      accent: "blue",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === volunteerMoments.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, volunteerMoments.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === volunteerMoments.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? volunteerMoments.length - 1 : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

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
    <section className="volunteer-section" ref={sectionRef}>
      
      <motion.div className="volunteer-section-bg" style={{ y: bgY }} />
      <motion.div className="volunteer-section-orb volunteer-section-orb-1" style={{ opacity: glowOpacity }} />
      <motion.div className="volunteer-section-orb volunteer-section-orb-2" style={{ opacity: glowOpacity }} />

      <div className="volunteer-section-container">
        
        {/* Header */}
        <motion.div 
          className="volunteer-section-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <motion.div 
            className="volunteer-section-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span 
              className="volunteer-section-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span>Get Involved</span>
            <motion.span 
              className="volunteer-section-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          <motion.h2 
            className="volunteer-section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Volunteer Your <span className="text-red">Time</span>,
            <br />
            Change a <span className="text-green">Life</span>
          </motion.h2>

          <motion.p 
            className="volunteer-section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join a passionate community of individuals dedicated to making a 
            difference. Every hour you give creates ripples of positive change.
          </motion.p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div 
          className="volunteer-section-benefits"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              className={`volunteer-section-benefit-card card-${benefit.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <motion.div 
                className="volunteer-section-benefit-image"
                variants={imageRevealVariants}
              >
                <img src={benefit.image} alt={benefit.title} />
                <div className="volunteer-section-benefit-overlay" />
              </motion.div>
              <div className="volunteer-section-benefit-body">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Slider */}
        <div 
          className="volunteer-section-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="volunteer-section-slider-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className={`volunteer-section-slide slide-${volunteerMoments[currentSlide].accent}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="volunteer-section-slide-image">
                  <img src={volunteerMoments[currentSlide].image} alt="" />
                  <div className="volunteer-section-slide-overlay" />
                </div>
                <div className="volunteer-section-slide-content">
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{volunteerMoments[currentSlide].quote}"
                  </motion.blockquote>
                  <motion.span
                    className="volunteer-section-slide-author"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    — {volunteerMoments[currentSlide].author}
                  </motion.span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <motion.button 
            className="volunteer-section-arrow volunteer-section-prev"
            onClick={goPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <motion.button 
            className="volunteer-section-arrow volunteer-section-next"
            onClick={goNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          {/* Dots */}
          <div className="volunteer-section-dots">
            {volunteerMoments.map((slide, index) => (
              <motion.button
                key={index}
                className={`volunteer-section-dot ${index === currentSlide ? 'dot-active' : ''}`}
                onClick={() => goToSlide(index)}
                animate={{
                  width: index === currentSlide ? 28 : 8,
                  backgroundColor: index === currentSlide ? slide.accent === 'red' ? '#DC2626' : slide.accent === 'green' ? '#059669' : '#1E3A8A' : 'rgba(0,0,0,0.2)',
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Ways to Volunteer */}
        <motion.div 
          className="volunteer-section-ways"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="volunteer-section-ways-title">
            Ways to <span className="text-red">Get Involved</span>
          </h3>
          
          <div className="volunteer-section-ways-grid">
            {ways.map((way, index) => (
              <motion.div 
                className={`volunteer-section-way-card way-${way.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <h4>{way.title}</h4>
                <p>{way.description}</p>
                <div className="volunteer-section-way-line" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          className="volunteer-section-banner"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="volunteer-section-banner-content">
            <div className="volunteer-section-banner-text">
              <h3>Ready to Make a Difference?</h3>
              <p>
                Join hundreds of volunteers creating lasting impact in communities 
                across India. Your time can change lives.
              </p>
            </div>
            <div className="volunteer-section-banner-actions">
              
              <motion.a 
                href="/contact" 
                className="volunteer-section-banner-secondary"
                whileHover={{ x: 4 }}
              >
                Contact Us <span>→</span>
              </motion.a>
            </div>
          </div>
          
          <div className="volunteer-section-banner-orb banner-orb-red" />
          <div className="volunteer-section-banner-orb banner-orb-green" />
        </motion.div>

      </div>
    </section>
  );
}