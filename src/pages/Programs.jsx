// import { useRef } from "react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import "./Programs.css";

// export default function ProgramsHome() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
//   const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
//   const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
//   const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

//   const featuredPrograms = [
//     {
//       image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
//       title: "Education & Youth Empowerment",
//       description: "Scholarships, digital classrooms, mentorship, and skill development programs that create pathways for brighter futures.",
//       accent: "red",
//       stat: "5,284+",
//       statLabel: "Students Supported",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
//       title: "Healthcare & Community Wellness",
//       description: "Medical camps, health awareness drives, preventive care initiatives, and wellness programs for underserved communities.",
//       accent: "green",
//       stat: "50,000+",
//       statLabel: "Patients Treated",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
//       title: "Child Welfare & Development",
//       description: "Nutrition support, educational programs, health initiatives, and holistic development for children in need.",
//       accent: "blue",
//       stat: "10,000+",
//       statLabel: "Children Reached",
//     },
//   ];

//   const allPrograms = [
//     { title: "Elderly Care & Support", description: "Healthcare assistance, social support, and community engagement for senior citizens.", accent: "red" },
//     { title: "Women Empowerment", description: "Skill development, leadership training, and entrepreneurship opportunities for women.", accent: "green" },
//     { title: "Environmental Sustainability", description: "Tree plantation drives, awareness campaigns, and eco-friendly community initiatives.", accent: "blue" },
//     { title: "Community Development", description: "Livelihood support, awareness programs, and sustainable development projects.", accent: "red" },
//     { title: "Humanitarian Assistance", description: "Emergency relief, disaster recovery, and aid for vulnerable communities in crisis.", accent: "green" },
//     { title: "CSR & Volunteer Programs", description: "Corporate partnerships and volunteer engagement for meaningful community impact.", accent: "blue" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
//     },
//   };

//   const imageRevealVariants = {
//     hidden: { opacity: 0, scale: 1.1, clipPath: 'inset(0% 0% 100% 0%)' },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       clipPath: 'inset(0% 0% 0% 0%)',
//       transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
//     },
//   };

//   return (
//     <section className="programs-home" ref={sectionRef}>
      
//       <motion.div className="programs-home-bg" style={{ y: bgY }} />
      
//       <motion.div className="programs-home-orb programs-home-orb-red" style={{ opacity: glowOpacity }} />
//       <motion.div className="programs-home-orb programs-home-orb-green" style={{ opacity: glowOpacity }} />
//       <motion.div className="programs-home-orb programs-home-orb-blue" style={{ opacity: glowOpacity }} />

//       <div className="programs-home-container">
        
//         {/* Header */}
//         <motion.div 
//           className="programs-home-header"
//           style={{ y: headingY, opacity: headingOpacity }}
//         >
//           <motion.div 
//             className="programs-home-eyebrow"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <motion.span className="programs-home-eyebrow-line" />
//             <span>Programs & Initiatives</span>
//             <motion.span className="programs-home-eyebrow-line" />
//           </motion.div>

//           <motion.h2 
//             className="programs-home-title"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Creating Impact Through
//             <span className="text-red"> Purpose-Driven </span>
//             <span className="text-green">Programs</span>
//           </motion.h2>

//           <motion.p 
//             className="programs-home-subtitle"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Comprehensive initiatives across education, healthcare, child welfare, 
//             and community development that create lasting social change.
//           </motion.p>
//         </motion.div>

//         {/* Featured Programs - 3 Cards with Images */}
//         <motion.div 
//           className="programs-home-featured"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {featuredPrograms.map((program, index) => (
//             <motion.div 
//               className={`programs-home-card card-${program.accent}`}
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -8 }}
//             >
//               <motion.div 
//                 className="programs-home-card-image"
//                 variants={imageRevealVariants}
//               >
//                 <img src={program.image} alt={program.title} />
//                 <div className="programs-home-card-overlay" />
//                 <span className={`programs-home-card-badge badge-${program.accent}`}>
//                   {program.title.split('&')[0].trim().split(' ')[0]}
//                 </span>
//               </motion.div>
              
//               <div className="programs-home-card-body">
//                 <h3>{program.title}</h3>
//                 <p>{program.description}</p>
                
//                 <div className="programs-home-card-footer">
//                   <div className="programs-home-card-stat">
//                     <span className="programs-home-stat-number">{program.stat}</span>
//                     <span className="programs-home-stat-label">{program.statLabel}</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* All Programs Grid */}
//         <motion.div 
//           className="programs-home-grid"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {allPrograms.map((program, index) => (
//             <motion.div 
//               className={`programs-home-grid-card grid-${program.accent}`}
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -4, scale: 1.02 }}
//             >
//               <span className="programs-home-grid-number">0{index + 4}</span>
//               <h4>{program.title}</h4>
//               <p>{program.description}</p>
//               <div className="programs-home-grid-line" />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Banner */}
//         <motion.div 
//           className="programs-home-banner"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.6 }}
//         >
//           <div className="programs-home-banner-content">
//             <div className="programs-home-banner-text">
//               <h3>Together We Create Positive Change</h3>
//               <p>
//                 Through volunteers, community leaders, CSR partners, and supporters, 
//                 we continue to create meaningful opportunities for those who need it most.
//               </p>
//             </div>
//             <div className="programs-home-banner-actions">
//               <motion.a 
//                 href="/programs" 
//                 className="programs-home-banner-cta"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore All Programs
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </motion.a>
//               <motion.a 
//                 href="/volunteer" 
//                 className="programs-home-banner-secondary"
//                 whileHover={{ x: 4 }}
//               >
//                 Get Involved <span>→</span>
//               </motion.a>
//             </div>
//           </div>
          
//           <div className="programs-home-banner-orb banner-orb-red" />
//           <div className="programs-home-banner-orb banner-orb-green" />
//         </motion.div>

//       </div>
//     </section>
//   );
// }



import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import "./Programs.css";

export default function ProgramsHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

  const categories = ["All Programs", "Education", "Healthcare", "Community", "Environment"];

  const allPrograms = [
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      title: "Education & Youth Empowerment",
      category: "Education",
      description: "Scholarships, digital classrooms, mentorship, and skill development programs for brighter futures.",
      accent: "red",
      impact: "5,284+ Students",
    },
    {
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      title: "Healthcare & Wellness",
      category: "Healthcare",
      description: "Medical camps, health awareness, preventive care, and community wellness initiatives.",
      accent: "green",
      impact: "50,000+ Patients",
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      title: "Child Welfare & Nutrition",
      category: "Community",
      description: "Nutrition support, education access, and holistic development for children in need.",
      accent: "blue",
      impact: "10,000+ Children",
    },
    {
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80",
      title: "Elderly Care & Support",
      category: "Community",
      description: "Healthcare assistance, companionship, and dignity programs for senior citizens.",
      accent: "red",
      impact: "2,500+ Seniors",
    },
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      title: "Environmental Action",
      category: "Environment",
      description: "Tree plantation drives, sustainability campaigns, and green community projects.",
      accent: "green",
      impact: "1M+ Trees",
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      title: "Women Empowerment",
      category: "Education",
      description: "Skill development, leadership training, and entrepreneurship for women.",
      accent: "blue",
      impact: "25,000+ Women",
    },
  ];

  // Marquee programs
  const marqueePrograms = [
    { title: "Education Support", accent: "red" },
    { title: "Healthcare Camps", accent: "green" },
    { title: "Child Nutrition", accent: "blue" },
    { title: "Elderly Care", accent: "red" },
    { title: "Tree Plantation", accent: "green" },
    { title: "Women Empowerment", accent: "blue" },
    { title: "Skill Development", accent: "red" },
    { title: "Community Wellness", accent: "green" },
  ];

  const filteredPrograms = activeTab === 0 
    ? allPrograms 
    : allPrograms.filter(p => p.category === categories[activeTab]);

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
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <section className="programs-new" ref={sectionRef}>
      
      <motion.div className="programs-new-bg" style={{ y: bgY }} />
      <motion.div className="programs-new-orb programs-new-orb-1" style={{ opacity: glowOpacity }} />
      <motion.div className="programs-new-orb programs-new-orb-2" style={{ opacity: glowOpacity }} />
      <motion.div className="programs-new-orb programs-new-orb-3" style={{ opacity: glowOpacity }} />

      <div className="programs-new-container">
        
        {/* Header - Left Aligned */}
        <motion.div 
          className="programs-new-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <div className="programs-new-header-grid">
            <div className="programs-new-header-left">
              <motion.span 
                className="programs-new-eyebrow"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="programs-new-eyebrow-accent" />
                What We Do
              </motion.span>
              
              <motion.h2 
                className="programs-new-title"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Programs that{" "}
                <span className="text-red">transform</span>{" "}
                communities
              </motion.h2>
            </div>
            
            <motion.p 
              className="programs-new-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Comprehensive initiatives across education, healthcare, child welfare, 
              and community development that create lasting social change across India.
            </motion.p>
          </div>
        </motion.div>

        {/* Marquee Strip */}
        <div className="programs-new-marquee-wrap">
          <motion.div 
            className="programs-new-marquee"
            animate={{ x: [0, -50 + "%"] }}
            transition={{ x: { duration: 20, repeat: Infinity, ease: "linear" } }}
          >
            {[...marqueePrograms, ...marqueePrograms].map((item, index) => (
              <div key={index} className={`programs-new-marquee-item marquee-${item.accent}`}>
                <span className="programs-new-marquee-dot" />
                {item.title}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          className="programs-new-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              className={`programs-new-tab ${activeTab === index ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
              {activeTab === index && (
                <motion.div 
                  className="programs-new-tab-indicator"
                  layoutId="programTab"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          className="programs-new-grid"
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredPrograms.map((program, index) => (
              <motion.div 
                className={`programs-new-card card-${program.accent}`}
                key={program.title}
                variants={cardVariants}
                layout
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="programs-new-card-image">
                  <motion.img 
                    src={program.image} 
                    alt={program.title}
                    animate={{ scale: hoveredCard === index ? 1.08 : 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="programs-new-card-overlay" />
                  
                  <div className="programs-new-card-badges">
                    <span className={`programs-new-card-category category-${program.accent}`}>
                      {program.category}
                    </span>
                    <span className="programs-new-card-impact">
                      {program.impact}
                    </span>
                  </div>
                </div>
                
                <div className="programs-new-card-body">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  
                  <motion.span 
                    className={`programs-new-card-link link-${program.accent}`}
                    whileHover={{ x: 4 }}
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="programs-new-stats"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { number: "08+", label: "Program Areas", accent: "red" },
            { number: "50K+", label: "Lives Touched", accent: "green" },
            { number: "200+", label: "Initiatives", accent: "blue" },
            { number: "100%", label: "Transparency", accent: "red" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className={`programs-new-stat stat-${stat.accent}`}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <motion.span 
                className="programs-new-stat-number"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
              >
                {stat.number}
              </motion.span>
              <span className="programs-new-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}