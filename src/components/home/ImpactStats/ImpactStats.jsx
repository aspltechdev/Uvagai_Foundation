import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./ImpactStats.css";

export default function ImpactStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Cinematic transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0.5, 0.5, 0]);

  // const stats = [
  //   {
  //     image: "/images/impact-education.jpg",
  //     number: "5,284+",
  //     label: "Scholarships Awarded",
  //     description: "Empowering children through quality education and learning resources across communities",
  //     accent: "red",
  //   },
  //   {
  //     image: "/images/impact-healthcare.jpg",
  //     number: "50,000+",
  //     label: "Patients Treated",
  //     description: "Bringing accessible healthcare and medical support to underserved communities",
  //     accent: "green",
  //   },
  //   {
  //     image: "/images/impact-nutrition.jpg",
  //     number: "10,000+",
  //     label: "Meals Served Daily",
  //     description: "Fighting hunger and malnutrition with nutritious meals for children and families",
  //     accent: "blue",
  //   },
  //   {
  //     image: "/images/impact-women.jpg",
  //     number: "25,000+",
  //     label: "Women Empowered",
  //     description: "Building financial independence through skill development and entrepreneurship",
  //     accent: "red",
  //   },
  //   {
  //     image: "/images/impact-environment.jpg",
  //     number: "1 Million+",
  //     label: "Trees Planted",
  //     description: "Creating sustainable environments and combating climate change for future generations",
  //     accent: "green",
  //   },
  //   {
  //     image: "/images/impact-volunteers.jpg",
  //     number: "500+",
  //     label: "Active Volunteers",
  //     description: "Passionate individuals driving meaningful change across communities nationwide",
  //     accent: "blue",
  //   },
  // ];


const stats = [
  {
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    number: "2019",
    label: "Founded",
    description:
      "Serving communities through education, healthcare, and social impact initiatives since 2019.",
    accent: "red",
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    number: "08+",
    label: "Focus Areas",
    description:
      "Working across education, healthcare, child welfare, elderly care, environment, CSR, humanitarian aid, and volunteer engagement.",
    accent: "green",
  },
  {
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    number: "100+",
    label: "Community Initiatives",
    description:
      "Driving meaningful programs that support children, families, and underserved communities.",
    accent: "blue",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    number: "500+",
    label: "Volunteers & Supporters",
    description:
      "Passionate individuals contributing time, skills, and resources to create positive social change.",
    accent: "red",
  },
  {
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    number: "1000+",
    label: "Lives Impacted",
    description:
      "Supporting people through education support, healthcare access, welfare programs, and community development.",
    accent: "green",
  },
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
    number: "01",
    label: "Shared Mission",
    description:
      "Creating hope, dignity, opportunity, and sustainable change through compassion and collective action.",
    accent: "blue",
  },
];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const imageRevealVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.12,
      clipPath: 'inset(0% 0% 100% 0%)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <section className="impact-section" ref={sectionRef}>
      
      {/* Cinematic Background */}
      <motion.div 
        className="impact-bg-layer"
        style={{ y: bgY }}
      />
      
      {/* Floating Orbs */}
      <motion.div 
        className="impact-orb impact-orb-red"
        style={{ opacity: glowOpacity }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="impact-orb impact-orb-green"
        style={{ opacity: glowOpacity }}
        animate={{ scale: [0.95, 1.1, 0.95], rotate: [-15, 0, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="impact-orb impact-orb-blue"
        style={{ opacity: glowOpacity }}
        animate={{ scale: [1.05, 0.9, 1.05], rotate: [10, -10, 10] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating Particles */}
      <div className="impact-particles">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="impact-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -35 - Math.random() * 35, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="impact-container">
        {/* Section Heading */}
        <motion.div 
          className="impact-heading"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <motion.div 
            className="impact-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span 
              className="impact-tag-line"
              animate={{ width: [24, 40, 24] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="impact-tag-text">Our Impact in Numbers</span>
            <motion.span 
              className="impact-tag-line"
              animate={{ width: [24, 40, 24] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>

          <motion.h2 
            className="impact-headline"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Creating Lasting 
            <span className="impact-headline-red"> Social Impact </span>
            Through
            <br />
            <span className="impact-headline-green"> Compassion </span>
            &
            <span className="impact-headline-blue"> Action</span>
          </motion.h2>

          <motion.p 
            className="impact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every number represents a life touched, a community transformed, 
            and a step towards a more equitable world.
          </motion.p>
        </motion.div>

        {/* Stats Cards Grid */}
        <motion.div 
          className="impact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((item, index) => (
            <motion.div 
              className={`impact-card impact-card-${item.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.4, ease: [0.33, 0.1, 0.25, 1] },
              }}
            >
              {/* Card Image with Reveal */}
              <motion.div 
                className="impact-card-image-wrapper"
                variants={imageRevealVariants}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="impact-card-image"
                />
                <div className="impact-card-image-overlay" />
                
                {/* Category Badge */}
                <motion.div 
                  className="impact-card-category"
                  style={{ 
                    background: item.accent === 'red' 
                      ? 'rgba(220, 38, 38, 0.9)' 
                      : item.accent === 'green' 
                        ? 'rgba(5, 150, 105, 0.9)' 
                        : 'rgba(30, 58, 138, 0.9)'
                  }}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {item.label.split(' ')[0]}
                </motion.div>
              </motion.div>

              {/* Card Content */}
              <div className="impact-card-content">
                {/* Number with spring animation */}
                <motion.div 
                  className="impact-card-number-wrapper"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    type: "spring", 
                    stiffness: 180, 
                    delay: 0.5 + index * 0.1 
                  }}
                >
                  <span className="impact-card-number">
                    {item.number}
                  </span>
                </motion.div>

                <span className="impact-card-label">
                  {item.label}
                </span>
                
                <span className="impact-card-description">
                  {item.description}
                </span>
              </div>

              {/* Card Accent Border */}
              <motion.div 
                className="impact-card-glow"
                animate={{ 
                  boxShadow: [
                    `0 0 0 1px ${item.accent === 'red' ? '#DC2626' : item.accent === 'green' ? '#059669' : '#1E3A8A'}15`,
                    `0 0 0 1px ${item.accent === 'red' ? '#DC2626' : item.accent === 'green' ? '#059669' : '#1E3A8A'}35`,
                    `0 0 0 1px ${item.accent === 'red' ? '#DC2626' : item.accent === 'green' ? '#059669' : '#1E3A8A'}15`,
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="impact-cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <motion.a 
            href="/impact" 
            className="impact-cta"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>View Full Impact Report</span>
            <motion.span
              className="impact-cta-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}