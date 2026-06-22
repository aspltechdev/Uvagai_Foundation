import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Programs.css";

export default function Programs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const highlightCards = [
    {
      title: "Education",
      subtitle: "Empowering Future Generations",
      accent: "red",
    },
    {
      title: "Healthcare",
      subtitle: "Promoting Community Wellness",
      accent: "green",
    },
    {
      title: "Community",
      subtitle: "Building Sustainable Growth",
      accent: "blue",
    },
    {
      title: "Volunteerism",
      subtitle: "Creating Collective Impact",
      accent: "red",
    },
  ];

  const programs = [
    {
      title: "Education & Youth Empowerment",
      description:
        "Supporting students through educational assistance, learning resources, mentorship programs, skill development initiatives, and opportunities that help build brighter futures.",
      accent: "red",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Organizing medical camps, health awareness drives, preventive healthcare initiatives, blood donation campaigns, and community wellness programs.",
      accent: "green",
    },
    {
      title: "Child Welfare & Development",
      description:
        "Promoting child welfare through nutrition support, educational programs, health initiatives, and activities that encourage holistic growth and development.",
      accent: "blue",
    },
    {
      title: "Elderly Care & Support",
      description:
        "Enhancing the quality of life for senior citizens through healthcare support, community engagement, welfare programs, and compassionate care initiatives.",
      accent: "red",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Creating awareness about environmental responsibility through tree plantation drives, sustainability campaigns, clean-up initiatives, and green community projects.",
      accent: "green",
    },
    {
      title: "Community Development",
      description:
        "Empowering communities through social welfare programs, livelihood support, awareness campaigns, volunteer engagement, and sustainable development initiatives.",
      accent: "blue",
    },
    {
      title: "Humanitarian Assistance",
      description:
        "Providing support during emergencies, disaster relief efforts, humanitarian aid activities, and assistance to vulnerable individuals and families in need.",
      accent: "red",
    },
    {
      title: "CSR & Volunteer Partnerships",
      description:
        "Collaborating with corporates, institutions, volunteers, and social organizations to create meaningful and long-lasting community impact.",
      accent: "green",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.33, 0.1, 0.25, 1],
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.33, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="programs-section" ref={sectionRef}>
      {/* Background */}
      <div className="programs-bg" />
      
      {/* Ambient glows */}
      <div className="programs-glow programs-glow-1" />
      <div className="programs-glow programs-glow-2" />

      {/* Grid texture */}
      <div className="programs-grid-texture" />

      <div className="programs-container">
        {/* Section Header */}
        <motion.div 
          className="programs-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="programs-tag">
            <span className="programs-tag-line" />
            <span className="programs-tag-text">Our Focus Areas</span>
          </div>

          <h2 className="programs-headline">
            Driving Positive Change Through
            <span className="programs-headline-accent"> Purpose-Driven Programs</span>
          </h2>

          <p className="programs-subtitle">
            Uvagai Foundation works across education, healthcare, child welfare,
            elderly care, environmental sustainability, humanitarian support,
            and community development to create meaningful social impact.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div 
          className="programs-highlights"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlightCards.map((card, index) => (
            <motion.div 
              className={`programs-highlight-card highlight-${card.accent}`}
              key={index}
              variants={highlightVariants}
              custom={index}
              whileHover={{ y: -4 }}
            >
              <div className="highlight-card-accent" />
              <div className="highlight-card-content">
                <h3 className="highlight-card-title">{card.title}</h3>
                <p className="highlight-card-subtitle">{card.subtitle}</p>
              </div>
              <div className="highlight-card-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {programs.map((program, index) => (
            <motion.div 
              className={`programs-card card-${program.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Card top border */}
              <div className="card-top-border" />
              
              {/* Card content */}
              <div className="card-content">
                <h3 className="card-title">{program.title}</h3>
                <p className="card-description">{program.description}</p>
              </div>

              {/* Card footer */}
              <div className="card-footer">
                <span className="card-link">
                  Learn More
                </span>
                <span className="card-link-arrow">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M2 7.5H13M13 7.5L8.5 3M13 7.5L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              {/* Hover indicator */}
              <div className="card-hover-line" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="programs-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <a href="/programs" className="programs-cta">
            <span>View All Programs</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}