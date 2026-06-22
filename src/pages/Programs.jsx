import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Programs.css";

export default function Programs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const programs = [
    {
      title: "Education & Youth Empowerment",
      description:
        "Providing educational support, learning resources, digital literacy, mentorship, scholarships, and skill development opportunities that help students achieve their full potential.",
      accent: "red",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Conducting health awareness campaigns, medical camps, preventive healthcare programs, wellness initiatives, and community health outreach activities.",
      accent: "green",
    },
    {
      title: "Child Welfare & Development",
      description:
        "Supporting children's education, nutrition, protection, healthcare, and overall development through child-focused welfare initiatives.",
      accent: "blue",
    },
    {
      title: "Elderly Care & Support",
      description:
        "Enhancing the well-being of senior citizens through healthcare assistance, social support programs, community engagement, and care initiatives.",
      accent: "red",
    },
    {
      title: "Community Development",
      description:
        "Empowering communities through livelihood support, awareness programs, social welfare initiatives, and sustainable development projects.",
      accent: "green",
    },
    {
      title: "Humanitarian Assistance",
      description:
        "Providing relief support, emergency response assistance, disaster recovery efforts, and aid for vulnerable communities.",
      accent: "blue",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Promoting environmental responsibility through tree plantation drives, awareness campaigns, sustainability programs, and eco-friendly initiatives.",
      accent: "red",
    },
    {
      title: "Women Empowerment",
      description:
        "Supporting women through skill development, leadership training, entrepreneurship opportunities, and empowerment programs.",
      accent: "green",
    },
  ];

  const objectives = [
    { title: "Education", description: "Improve access to learning opportunities and skill development.", accent: "red" },
    { title: "Wellness", description: "Promote community health and preventive healthcare practices.", accent: "green" },
    { title: "Inclusion", description: "Ensure equal opportunities for vulnerable and underserved communities.", accent: "blue" },
    { title: "Sustainability", description: "Encourage environmentally responsible and sustainable development.", accent: "red" },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="programs-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-bg" />
        <div className="programs-hero-glow programs-hero-glow-1" />
        <div className="programs-hero-glow programs-hero-glow-2" />
        
        <div className="programs-container">
          <motion.div 
            className="programs-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="programs-hero-tag">
              <span className="programs-hero-tag-line" />
              <span className="programs-hero-tag-text">Programs & Initiatives</span>
            </div>

            <h1 className="programs-hero-headline">
              Creating Sustainable Impact Through
              <span className="programs-hero-headline-accent"> Purpose-Driven Programs</span>
            </h1>

            <p className="programs-hero-subtitle">
              Uvagai Foundation works across education, healthcare,
              child welfare, elderly care, environmental sustainability,
              humanitarian assistance, and community development to
              create meaningful social impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="programs-intro-section">
        <div className="programs-container">
          <motion.div 
            className="programs-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="programs-section-tag">
              <span className="programs-section-tag-line" />
              <span className="programs-section-tag-text">What We Do</span>
            </div>
            <h2 className="programs-section-headline">Empowering Communities Through Action</h2>
            <p className="programs-section-subtitle">
              Every initiative is designed to improve lives, create
              opportunities, strengthen communities, and foster
              sustainable development for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid-section">
        <div className="programs-container">
          <motion.div 
            className="programs-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {programs.map((program, index) => (
              <motion.div 
                className={`program-card card-${program.accent}`}
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
              >
                <div className="program-card-number">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="program-card-title">{program.title}</h3>
                <p className="program-card-description">{program.description}</p>
                <div className="program-card-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="programs-objectives-section">
        <div className="programs-objectives-bg" />
        <div className="programs-container">
          <motion.div 
            className="programs-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="programs-section-headline">Our Program Objectives</h2>
          </motion.div>

          <motion.div 
            className="programs-objectives-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {objectives.map((objective, index) => (
              <motion.div 
                className={`programs-objective-card objective-${objective.accent}`}
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -5 }}
              >
                <div className="objective-card-accent" />
                <h3 className="objective-card-title">{objective.title}</h3>
                <p className="objective-card-description">{objective.description}</p>
                <div className="objective-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="programs-impact-section">
        <div className="programs-impact-bg" />
        <div className="programs-impact-glow" />
        
        <div className="programs-container">
          <motion.div 
            className="programs-impact-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="programs-impact-headline">
              Together We Are Creating Positive Change
            </h2>
            <p className="programs-impact-description">
              Through volunteers, community leaders, CSR partners,
              donors, and supporters, we continue to create meaningful
              opportunities and lasting impact for those who need it most.
            </p>
            <div className="programs-impact-buttons">
              <a href="/volunteer" className="programs-impact-primary">
                <span>Join Our Mission</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="programs-impact-secondary">
                Support Our Programs
                <span className="programs-impact-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}