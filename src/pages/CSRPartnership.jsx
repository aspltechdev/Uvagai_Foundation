import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CSRPartnership.css";

export default function CSRPartnership() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const benefits = [
    {
      title: "Measurable Impact",
      description:
        "Structured programs with transparent reporting, documentation, and impact assessment.",
      accent: "red",
    },
    {
      title: "Trusted Collaboration",
      description:
        "Work with a dedicated team committed to creating meaningful social change.",
      accent: "green",
    },
    {
      title: "Sustainable Development",
      description:
        "Long-term initiatives focused on education, healthcare, welfare, and community growth.",
      accent: "blue",
    },
    {
      title: "Employee Volunteering",
      description:
        "Create opportunities for employees to actively participate in impactful social initiatives.",
      accent: "red",
    },
    {
      title: "CSR Compliance Support",
      description:
        "Assistance in planning and executing CSR projects aligned with organizational objectives.",
      accent: "green",
    },
    {
      title: "Community Recognition",
      description:
        "Strengthen your brand reputation through meaningful contributions to society.",
      accent: "blue",
    },
  ];

  const focusAreas = [
    {
      title: "Education & Youth Empowerment",
      description:
        "Support quality education, digital literacy, scholarships, mentorship programs, and skill development initiatives for students and youth.",
      accent: "red",
    },
    {
      title: "Healthcare & Community Wellness",
      description:
        "Collaborate on medical camps, health awareness programs, preventive healthcare initiatives, and community wellness projects.",
      accent: "green",
    },
    {
      title: "Child Welfare & Development",
      description:
        "Enable programs that focus on child education, nutrition, protection, healthcare, and overall development.",
      accent: "blue",
    },
    {
      title: "Elderly Care & Support",
      description:
        "Enhance the quality of life of senior citizens through healthcare, welfare support, and community engagement activities.",
      accent: "red",
    },
    {
      title: "Community Development",
      description:
        "Empower communities through livelihood support, awareness campaigns, social welfare initiatives, and sustainable development programs.",
      accent: "green",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Promote environmental responsibility through tree plantation drives, sustainability campaigns, and green community projects.",
      accent: "blue",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Understand your CSR objectives, priorities, and social impact goals.",
    },
    {
      step: "02",
      title: "Program Design",
      description: "Create customized initiatives aligned with your organization's CSR vision.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute projects efficiently through community engagement and local partnerships.",
    },
    {
      step: "04",
      title: "Impact Reporting",
      description: "Share progress reports, outcomes, and measurable social impact insights.",
    },
  ];

  const partnershipOpportunities = [
    {
      title: "Education Projects",
      description: "School support, digital learning, scholarships and youth development.",
      accent: "red",
    },
    {
      title: "Health Programs",
      description: "Medical camps, wellness initiatives and healthcare awareness.",
      accent: "green",
    },
    {
      title: "Sustainability Projects",
      description: "Environmental awareness, tree plantation and green initiatives.",
      accent: "blue",
    },
    {
      title: "Employee Engagement",
      description: "Volunteer programs that strengthen community participation.",
      accent: "red",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="csr-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="csr-hero">
        <div className="csr-hero-bg" />
        <div className="csr-hero-glow csr-hero-glow-1" />
        <div className="csr-hero-glow csr-hero-glow-2" />
        
        <div className="csr-container">
          <motion.div 
            className="csr-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="csr-hero-tag">
              <span className="csr-hero-tag-line" />
              <span className="csr-hero-tag-text">CSR Partnerships</span>
            </div>

            <h1 className="csr-hero-headline">
              Partner With Us To Create Meaningful &
              <span className="csr-hero-headline-accent"> Sustainable Social Impact</span>
            </h1>

            <p className="csr-hero-subtitle">
              Uvagai Foundation collaborates with corporates,
              institutions, CSR leaders, and philanthropic organizations
              to design and implement impactful initiatives that improve
              lives, strengthen communities, and drive long-term change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="csr-why-section">
        <div className="csr-container">
          <motion.div 
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Why Choose Uvagai Foundation</span>
            </div>
            <h2 className="csr-section-headline">Building Purpose-Driven Partnerships</h2>
            <p className="csr-section-subtitle">
              We help organizations achieve their CSR goals through
              transparent implementation, community engagement,
              measurable outcomes, and sustainable impact.
            </p>
          </motion.div>

          <motion.div 
            className="csr-benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                className={`csr-benefit-card benefit-${benefit.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="benefit-card-stripe" />
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-description">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="csr-focus-section">
        <div className="csr-focus-bg" />
        <div className="csr-container">
          <motion.div 
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Focus Areas</span>
            </div>
            <h2 className="csr-section-headline">CSR Programs That Create Real Impact</h2>
            <p className="csr-section-subtitle">
              Partner with us across multiple social impact domains
              that contribute to stronger, healthier, and more
              empowered communities.
            </p>
          </motion.div>

          <motion.div 
            className="csr-focus-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {focusAreas.map((area, index) => (
              <motion.div 
                className={`csr-focus-card focus-${area.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="focus-card-number">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="focus-card-title">{area.title}</h3>
                <p className="focus-card-description">{area.description}</p>
                <div className="focus-card-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="csr-process-section">
        <div className="csr-container">
          <motion.div 
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Partnership Journey</span>
            </div>
            <h2 className="csr-section-headline">How We Work Together</h2>
          </motion.div>

          <motion.div 
            className="csr-process-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                className="csr-process-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="process-card-connector">
                  {index < processSteps.length - 1 && (
                    <div className="process-card-line" />
                  )}
                </div>
                <span className="process-card-step">{step.step}</span>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="csr-opportunities-section">
        <div className="csr-opportunities-bg" />
        <div className="csr-container">
          <motion.div 
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="csr-section-headline">Partnership Opportunities</h2>
          </motion.div>

          <motion.div 
            className="csr-opportunities-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {partnershipOpportunities.map((opportunity, index) => (
              <motion.div 
                className={`csr-opportunity-card opportunity-${opportunity.accent}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="opportunity-card-accent" />
                <h3 className="opportunity-card-title">{opportunity.title}</h3>
                <p className="opportunity-card-description">{opportunity.description}</p>
                <div className="opportunity-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="csr-cta-section">
        <div className="csr-cta-bg" />
        <div className="csr-cta-glow" />
        
        <div className="csr-container">
          <motion.div 
            className="csr-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="csr-cta-headline">
              Let's Build Stronger Communities Together
            </h2>
            <p className="csr-cta-description">
              Join hands with Uvagai Foundation to create sustainable
              social impact through education, healthcare, welfare,
              community development, and environmental responsibility.
            </p>
            <div className="csr-cta-buttons">
              <a href="/contact" className="csr-cta-primary">
                <span>Become a CSR Partner</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/volunteer" className="csr-cta-secondary">
                Explore Opportunities
                <span className="csr-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}