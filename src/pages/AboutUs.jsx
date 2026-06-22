import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutUs.css";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const values = [
    {
      title: "Compassion",
      description:
        "Serving communities with empathy, care, and a genuine commitment to improving lives.",
      accent: "red",
    },
    {
      title: "Integrity",
      description:
        "Maintaining transparency, accountability, and ethical practices in everything we do.",
      accent: "green",
    },
    {
      title: "Inclusivity",
      description:
        "Creating equal opportunities and embracing diversity across all communities.",
      accent: "blue",
    },
    {
      title: "Impact",
      description:
        "Delivering sustainable and meaningful change through purpose-driven initiatives.",
      accent: "red",
    },
  ];

  const focusAreas = [
    {
      title: "Education",
      description:
        "Supporting learning opportunities, mentorship, skill development, and youth empowerment.",
      accent: "red",
    },
    {
      title: "Healthcare",
      description:
        "Promoting community wellness through healthcare initiatives and awareness programs.",
      accent: "green",
    },
    {
      title: "Child Welfare",
      description:
        "Creating opportunities for children through education, nutrition, and development programs.",
      accent: "blue",
    },
    {
      title: "Elderly Care",
      description:
        "Enhancing the dignity, well-being, and quality of life of senior citizens.",
      accent: "red",
    },
    {
      title: "Sustainability",
      description:
        "Encouraging environmental responsibility through awareness and action.",
      accent: "green",
    },
    {
      title: "Community Development",
      description:
        "Building stronger and more resilient communities through collaborative initiatives.",
      accent: "blue",
    },
  ];

  const stats = [
    { number: "2019", label: "Foundation Established", accent: "red" },
    { number: "06+", label: "Core Impact Areas", accent: "green" },
    { number: "CSR", label: "Partnership Opportunities", accent: "blue" },
    { number: "100%", label: "Community Focused", accent: "red" },
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
    <div className="about-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-glow about-hero-glow-1" />
        <div className="about-hero-glow about-hero-glow-2" />
        
        <div className="about-container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="about-hero-tag">
              <span className="about-hero-tag-line" />
              <span className="about-hero-tag-text">About Uvagai Foundation</span>
            </div>

            <h1 className="about-hero-headline">
              Creating Hope, Empowering Lives &
              <span className="about-hero-headline-accent"> Building Stronger Communities</span>
            </h1>

            <p className="about-hero-subtitle">
              Founded in 2019, Uvagai Foundation is a non-profit
              organization dedicated to creating meaningful social impact
              through education, healthcare, child welfare, elderly care,
              environmental sustainability, humanitarian assistance, and
              community development initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-who-section">
        <div className="about-container">
          <motion.div 
            className="about-who-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Image */}
            <motion.div 
              className="about-who-image"
              variants={fadeUpVariants}
            >
              <div className="about-who-image-wrapper">
                <div className="about-who-image-glow" />
                <div className="about-who-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
                    alt="Uvagai Foundation Community Impact"
                  />
                </div>
                <div className="about-who-image-border" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="about-who-content"
              variants={fadeUpVariants}
            >
              <div className="about-section-tag">
                <span className="about-section-tag-line" />
                <span className="about-section-tag-text">Who We Are</span>
              </div>

              <h2 className="about-section-headline">
                A Foundation Built On
                <span className="about-section-headline-accent"> Compassion & Purpose</span>
              </h2>

              <div className="about-who-text">
                <p>
                  Uvagai Foundation was established with a vision to create
                  an inclusive society where every individual has access to
                  opportunities, dignity, education, healthcare, and the
                  support needed to thrive.
                </p>

                <p>
                  We work closely with communities, volunteers,
                  institutions, corporate partners, and social leaders to
                  implement programs that address real societal challenges
                  and promote sustainable development.
                </p>

                <p>
                  Our initiatives focus on empowering children, supporting
                  senior citizens, improving community health, encouraging
                  volunteerism, promoting environmental responsibility, and
                  strengthening underserved communities.
                </p>

                <p>
                  Through compassion-driven action and collaborative
                  partnerships, we strive to create lasting positive change
                  and contribute to a better future for all.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vm-section">
        <div className="about-vm-bg" />
        <div className="about-container">
          <motion.div 
            className="about-vm-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Vision Card */}
            <motion.div 
              className="about-vm-card about-vision-card"
              variants={fadeUpVariants}
              whileHover={{ y: -4 }}
            >
              <div className="about-vm-card-accent" />
              <div className="about-vm-card-label">01</div>
              <h3 className="about-vm-card-title">Our Vision</h3>
              <p className="about-vm-card-text">
                To create an inclusive, empowered, and sustainable society
                where every individual has equal access to education,
                healthcare, opportunities, dignity, and a better quality
                of life.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="about-vm-card about-mission-card"
              variants={fadeUpVariants}
              whileHover={{ y: -4 }}
            >
              <div className="about-vm-card-accent" />
              <div className="about-vm-card-label">02</div>
              <h3 className="about-vm-card-title">Our Mission</h3>
              <p className="about-vm-card-text">
                To uplift underserved communities through impactful
                programs focused on education, healthcare, child welfare,
                elderly care, environmental sustainability, and community
                development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="about-focus-section">
        <div className="about-container">
          <motion.div 
            className="about-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="about-section-tag">
              <span className="about-section-tag-line" />
              <span className="about-section-tag-text">Our Focus Areas</span>
            </div>
            <h2 className="about-section-headline">Driving Sustainable Social Impact</h2>
          </motion.div>

          <motion.div 
            className="about-focus-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {focusAreas.map((area, index) => (
              <motion.div 
                className={`about-focus-card focus-${area.accent}`}
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -4 }}
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

      {/* Core Values */}
      <section className="about-values-section">
        <div className="about-values-bg" />
        <div className="about-container">
          <motion.div 
            className="about-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="about-section-tag">
              <span className="about-section-tag-line" />
              <span className="about-section-tag-text">Our Values</span>
            </div>
            <h2 className="about-section-headline">Principles That Guide Our Work</h2>
          </motion.div>

          <motion.div 
            className="about-values-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div 
                className={`about-value-card value-${value.accent}`}
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -4 }}
              >
                <div className="value-card-stripe" />
                <div className="value-card-number">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h4 className="value-card-title">{value.title}</h4>
                <p className="value-card-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="about-container">
          <motion.div 
            className="about-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="about-section-tag">
              <span className="about-section-tag-line" />
              <span className="about-section-tag-text">Foundation Highlights</span>
            </div>
            <h2 className="about-section-headline">Building Impact Through Action</h2>
          </motion.div>

          <motion.div 
            className="about-stats-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div 
                className={`about-stat-card stat-${stat.accent}`}
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -4 }}
              >
                <span className="about-stat-number">{stat.number}</span>
                <span className="about-stat-label">{stat.label}</span>
                <div className="about-stat-accent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-bg" />
        <div className="about-cta-glow" />
        
        <div className="about-container">
          <motion.div 
            className="about-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="about-cta-headline">
              Join Us In Creating Positive Change
            </h2>
            <p className="about-cta-description">
              Together, we can empower lives, strengthen communities,
              and build a brighter future through compassion, action,
              and collaboration.
            </p>
            <div className="about-cta-buttons">
              <a href="/volunteer" className="about-cta-primary">
                <span>Become a Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="about-cta-secondary">
                Support Our Mission
                <span className="about-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}