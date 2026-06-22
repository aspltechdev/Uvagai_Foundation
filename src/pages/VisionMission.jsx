import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./VisionMission.css";

export default function VisionMission() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const objectives = [
    {
      title: "Education & Youth Empowerment",
      description:
        "Promote quality education, digital literacy, skill development, mentorship, and learning opportunities for children and youth.",
      accent: "red",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Improve community health through medical camps, awareness programs, preventive healthcare, and wellness initiatives.",
      accent: "green",
    },
    {
      title: "Child Welfare",
      description:
        "Support children through education, nutrition, protection, healthcare, and holistic development programs.",
      accent: "blue",
    },
    {
      title: "Elderly Care",
      description:
        "Enhance the well-being, dignity, and quality of life of senior citizens through care and support initiatives.",
      accent: "red",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Promote environmental awareness through tree plantation drives, sustainability campaigns, and eco-friendly initiatives.",
      accent: "green",
    },
    {
      title: "Community Development",
      description:
        "Strengthen communities through social welfare initiatives, volunteer engagement, and sustainable development programs.",
      accent: "blue",
    },
  ];

  const values = [
    {
      title: "Compassion",
      description:
        "Serving humanity with empathy, kindness, and respect for every individual.",
    },
    {
      title: "Integrity",
      description:
        "Maintaining transparency, accountability, and ethical practices in everything we do.",
    },
    {
      title: "Inclusivity",
      description:
        "Creating equal opportunities and embracing diversity within communities.",
    },
    {
      title: "Collaboration",
      description:
        "Working together with partners, volunteers, and communities to maximize impact.",
    },
    {
      title: "Sustainability",
      description:
        "Building long-term solutions that create lasting positive change.",
    },
    {
      title: "Impact",
      description:
        "Delivering meaningful programs that improve lives and strengthen communities.",
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="vision-mission-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="vm-hero">
        <div className="vm-hero-bg" />
        <div className="vm-hero-glow vm-hero-glow-1" />
        <div className="vm-hero-glow vm-hero-glow-2" />
        
        <div className="vm-container">
          <motion.div 
            className="vm-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="vm-hero-tag">
              <span className="vm-hero-tag-line" />
              <span className="vm-hero-tag-text">Vision • Mission • Values</span>
            </div>

            <h1 className="vm-hero-headline">
              Inspiring Hope, Empowering Lives &
              <span className="vm-hero-headline-accent"> Creating Sustainable Social Impact</span>
            </h1>

            <p className="vm-hero-subtitle">
              Our vision and mission guide every initiative we undertake
              to empower communities, improve lives, and create lasting
              positive change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vm-core-section">
        <div className="vm-container">
          <motion.div 
            className="vm-core-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Vision Card */}
            <motion.div 
              className="vm-core-card vm-vision-card"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="vm-core-card-accent" />
              <div className="vm-core-card-header">
                <span className="vm-core-card-label">01</span>
                <h2 className="vm-core-card-title">Our Vision</h2>
              </div>
              <div className="vm-core-card-body">
                <p>
                  To create a society where every individual, regardless of
                  their background, has access to quality education,
                  healthcare, opportunities, and the support needed to lead
                  a dignified and fulfilling life.
                </p>
                <p>
                  We envision empowered communities that thrive through
                  compassion, equality, sustainability, and collective
                  responsibility, fostering positive change for present and
                  future generations.
                </p>
                <p>
                  Our vision extends beyond immediate support—we aim to build
                  resilient communities capable of driving their own growth,
                  development, and social transformation.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="vm-core-card vm-mission-card"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="vm-core-card-accent" />
              <div className="vm-core-card-header">
                <span className="vm-core-card-label">02</span>
                <h2 className="vm-core-card-title">Our Mission</h2>
              </div>
              <div className="vm-core-card-body">
                <p>
                  Uvagai Foundation is committed to empowering underserved
                  communities through impactful initiatives in education,
                  healthcare, child welfare, elderly care, environmental
                  sustainability, humanitarian assistance, and community
                  development.
                </p>
                <p>
                  We collaborate with volunteers, institutions, corporate
                  partners, and local communities to design and implement
                  programs that create meaningful and measurable social
                  impact.
                </p>
                <p>
                  Through awareness, innovation, inclusivity, and
                  sustainable interventions, we strive to uplift lives,
                  strengthen communities, and contribute towards a more
                  equitable and compassionate society.
                </p>

                <div className="vm-motto">
                  <span className="vm-motto-label">Our Motto</span>
                  <p className="vm-motto-text">
                    "Empowering Communities. Transforming Lives."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="vm-pillars-section">
        <div className="vm-pillars-bg" />
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">Strategic Framework</span>
            </div>
            <h2 className="vm-section-headline">Our Strategic Pillars</h2>
          </motion.div>

          <motion.div 
            className="vm-pillars-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { title: "Education", description: "Creating opportunities through learning, mentorship, and skill development.", accent: "red" },
              { title: "Healthcare", description: "Promoting wellness and accessible healthcare support.", accent: "green" },
              { title: "Community", description: "Building resilient and self-sustaining communities.", accent: "blue" },
              { title: "Sustainability", description: "Encouraging environmentally responsible growth and community development.", accent: "red" },
            ].map((pillar, index) => (
              <motion.div 
                className={`vm-pillar-card pillar-${pillar.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="pillar-card-number">0{index + 1}</div>
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <p className="pillar-card-description">{pillar.description}</p>
                <div className="pillar-card-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="vm-objectives-section">
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">What We Do</span>
            </div>
            <h2 className="vm-section-headline">Our Core Objectives</h2>
          </motion.div>

          <motion.div 
            className="vm-objectives-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {objectives.map((item, index) => (
              <motion.div 
                className={`vm-objective-card objective-${item.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="objective-card-stripe" />
                <h3 className="objective-card-title">{item.title}</h3>
                <p className="objective-card-description">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="vm-values-section">
        <div className="vm-values-bg" />
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">Guiding Principles</span>
            </div>
            <h2 className="vm-section-headline">Our Core Values</h2>
          </motion.div>

          <motion.div 
            className="vm-values-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div 
                className="vm-value-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="value-card-number">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="value-card-title">{value.title}</h3>
                <p className="value-card-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vm-cta-section">
        <div className="vm-cta-bg" />
        <div className="vm-cta-glow" />
        
        <div className="vm-container">
          <motion.div 
            className="vm-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="vm-cta-headline">
              Together, We Can Transform Lives
            </h2>
            <p className="vm-cta-description">
              Join us in creating opportunities, empowering communities,
              and building a brighter future for generations to come.
              Every contribution, partnership, and act of kindness makes
              a meaningful difference.
            </p>
            <div className="vm-cta-buttons">
              <a href="/volunteer" className="vm-cta-primary">
                <span>Become a Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="vm-cta-secondary">
                Support Our Mission
                <span className="vm-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}