import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./Programs.css";
import program1 from "../../../assets/program1.png";
import program2 from "../../../assets/program2.png";
import program3 from "../../../assets/program44.png";
import program4 from "../../../assets/program3.png";
import program5 from "../../../assets/program5.png";
import program6 from "../../../assets/program5.png";
export default function Programs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const categories = ["All Programs", "Education", "Healthcare", "Community", "Environment"];

const programs = [
  {
    id: 1,
    category: "Education",
   image: program1,
    title: "Education & Youth Empowerment",
    description:
      "Supporting students through educational assistance, learning resources, mentorship programs, and opportunities that help build brighter futures.",
    accent: "red",
    stat: "Core Initiative",
    statLabel: "Education",
  },
  {
    id: 2,
    category: "Healthcare",
   image: program2,
    title: "Healthcare & Wellness",
    description:
      "Organizing medical camps, health awareness drives, preventive healthcare initiatives, and community wellness programs for underserved communities.",
    accent: "green",
    stat: "Community Care",
    statLabel: "Healthcare",
  },
  {
    id: 3,
    category: "Child Welfare",
   image: program3,
    title: "Child Welfare & Development",
    description:
      "Promoting child welfare through nutrition support, educational programs, health initiatives, and activities that encourage holistic development.",
    accent: "blue",
    stat: "Future Focus",
    statLabel: "Child Welfare",
  },
  {
    id: 4,
    category: "Elderly Care",
    image: program4,
    title: "Elderly Care & Support",
    description:
      "Enhancing the quality of life for senior citizens through healthcare support, community engagement, welfare programs, and compassionate care initiatives.",
    accent: "red",
    stat: "Dignity & Care",
    statLabel: "Senior Support",
  },
  {
    id: 5,
    category: "Environment",
    image: program4,
    title: "Environmental Sustainability",
    description:
      "Creating awareness about environmental responsibility through tree plantation drives, sustainability campaigns, clean-up initiatives, and green community projects.",
    accent: "green",
    stat: "Green Future",
    statLabel: "Environment",
  },
  {
    id: 6,
    category: "CSR & Partnerships",
    image: program6,
    title: "CSR & Volunteer Partnerships",
    description:
      "Collaborating with corporates, institutions, volunteers, and social organizations to create meaningful and long-lasting community impact.",
    accent: "blue",
    stat: "Collaborative Impact",
    statLabel: "Partnerships",
  },
];


  const filteredPrograms = activeTab === 0 
    ? programs 
    : programs.filter(p => p.category === categories[activeTab]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="programs-pro" ref={sectionRef}>
      
      {/* Subtle Background */}
      <motion.div className="programs-pro-bg" style={{ y: bgY }} />
      <div className="programs-pro-grid-overlay" />

      <div className="programs-pro-container">
        
        {/* Header Row */}
        <motion.div 
          className="programs-pro-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <div className="programs-pro-header-left">
            <motion.span 
              className="programs-pro-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-accent" />
              What We Do
            </motion.span>
            
            <motion.h2 
              className="programs-pro-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Programs that{" "}
              <span className="title-red">transform</span>{" "}
              communities and{" "}
              <span className="title-green">change</span>{" "}
              lives
            </motion.h2>
          </div>

          <motion.p 
            className="programs-pro-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We design and execute high-impact initiatives across education, 
            healthcare, community development, and environmental sustainability 
            — creating measurable, lasting change.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="programs-pro-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              className={`programs-pro-tab ${activeTab === index ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
              {activeTab === index && (
                <motion.div 
                  className="tab-indicator"
                  layoutId="tabIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          className="programs-pro-grid"
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPrograms.map((program) => (
            <motion.article
              key={program.id}
              className={`programs-pro-card card-${program.accent}`}
              variants={cardVariants}
              layout
            >
              {/* Image Container */}
              <div className="programs-pro-card-media">
                <motion.img 
                  src={program.image} 
                  alt={program.title}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.33, 0.1, 0.25, 1] }}
                />
                <div className="programs-pro-card-overlay" />
                
                {/* Top Badge */}
                <span className={`programs-pro-card-category category-${program.accent}`}>
                  {program.category}
                </span>
              </div>

              {/* Content */}
              <div className="programs-pro-card-body">
                <h3 className="programs-pro-card-title">
                  {program.title}
                </h3>
                <p className="programs-pro-card-text">
                  {program.description}
                </p>

                {/* Footer Row */}
                <div className="programs-pro-card-footer">
                  <div className="programs-pro-card-stat">
                    <span className="stat-number">{program.stat}</span>
                    <span className="stat-label">{program.statLabel}</span>
                  </div>
                  
                  <motion.a 
                    href="#" 
                    className={`programs-pro-card-link link-${program.accent}`}
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="programs-pro-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="/programs" 
            className="programs-pro-cta"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View all programs</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}