// import { useRef } from "react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import "./VisionMission.css";

// export default function VisionMissionHome() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
//   const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
//   const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
//   const visionImageScale = useTransform(scrollYProgress, [0, 0.6], [1.15, 1]);
//   const missionImageScale = useTransform(scrollYProgress, [0.3, 0.8], [1.15, 1]);
//   const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

//   const corePrinciples = [
//     {
//       title: "Education First",
//       description: "Every child deserves quality learning opportunities to build a brighter future.",
//       accent: "red",
//     },
//     {
//       title: "Healthcare Access",
//       description: "Quality medical care should reach every community, regardless of geography.",
//       accent: "green",
//     },
//     {
//       title: "Community Led",
//       description: "Sustainable change happens when communities lead their own transformation.",
//       accent: "blue",
//     },
//     {
//       title: "Inclusive Growth",
//       description: "Leaving no one behind — empowering women, children, elderly, and vulnerable groups.",
//       accent: "red",
//     },
//   ];

//   const impactPillars = [
//     {
//       image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
//       title: "Education",
//       description: "Scholarships, digital classrooms, mentorship, and skill development programs.",
//       accent: "red",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
//       title: "Healthcare",
//       description: "Medical camps, preventive care, health awareness, and wellness initiatives.",
//       accent: "green",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
//       title: "Child Welfare",
//       description: "Nutrition support, education access, and holistic development for children.",
//       accent: "blue",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&q=80",
//       title: "Elderly Care",
//       description: "Healthcare assistance, companionship, and dignity programs for senior citizens.",
//       accent: "red",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
//       title: "Environment",
//       description: "Tree plantation, sustainability campaigns, and green community projects.",
//       accent: "green",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
//       title: "Community",
//       description: "Livelihood programs, awareness campaigns, and social development initiatives.",
//       accent: "blue",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
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
//       transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
//     },
//   };

//   return (
//     <section className="vm-elaborate" ref={sectionRef}>
      
//       <motion.div className="vm-elaborate-bg" style={{ y: bgY }} />
//       <motion.div className="vm-elaborate-orb vm-elaborate-orb-red" style={{ opacity: glowOpacity }} />
//       <motion.div className="vm-elaborate-orb vm-elaborate-orb-green" style={{ opacity: glowOpacity }} />
//       <motion.div className="vm-elaborate-orb vm-elaborate-orb-blue" style={{ opacity: glowOpacity }} />

//       <div className="vm-elaborate-container">
        
//         {/* Section Header */}
//         <motion.div 
//           className="vm-elaborate-header"
//           style={{ y: headingY, opacity: headingOpacity }}
//         >
//           <motion.div 
//             className="vm-elaborate-eyebrow"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <motion.span className="vm-elaborate-eyebrow-line" />
//             <span>Our Purpose & Promise</span>
//             <motion.span className="vm-elaborate-eyebrow-line" />
//           </motion.div>

//           <motion.h2 
//             className="vm-elaborate-title"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Guided by <span className="text-red">Vision</span>, Driven by{" "}
//             <span className="text-green">Mission</span>
//           </motion.h2>

//           <motion.p 
//             className="vm-elaborate-subtitle"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Since 2019, Uvagai Foundation has been dedicated to empowering 
//             children, families, and communities through education, healthcare, 
//             social welfare, environmental responsibility, and sustainable 
//             development initiatives.
//           </motion.p>
//         </motion.div>

//         {/* Vision & Mission Cards */}
//         <motion.div 
//           className="vm-elaborate-cards"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
          
//           {/* Vision Card */}
//           <motion.div 
//             className="vm-elaborate-card vm-vision-elaborate"
//             variants={cardVariants}
//             whileHover={{ y: -6 }}
//           >
//             <motion.div 
//               className="vm-elaborate-card-image"
//               style={{ scale: visionImageScale }}
//             >
//               <motion.div className="vm-elaborate-card-image-wrap" variants={imageRevealVariants}>
//                 <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80" alt="Our Vision" />
//                 <div className="vm-elaborate-card-overlay" />
//               </motion.div>
//               <div className="vm-elaborate-card-badge badge-red">Our Vision</div>
//             </motion.div>

//             <div className="vm-elaborate-card-body">
//               <span className="vm-elaborate-card-number">01</span>
//               <h3 className="vm-elaborate-card-title">
//                 A World of <span className="text-red">Hope</span>,{" "}
//                 <span className="text-green">Opportunity</span> & Dignity
//               </h3>
//               <p className="vm-elaborate-card-text">
//                 To create a society where every child, family, and individual 
//                 has access to quality education, healthcare, and opportunities 
//                 that empower them to lead a dignified and fulfilling life.
//               </p>
//               <p className="vm-elaborate-card-text">
//                 We envision inclusive communities built on compassion, equality, 
//                 sustainability, and collective responsibility, ensuring that 
//                 no one is left behind.
//               </p>
//               <div className="vm-elaborate-motto">
//                 <span className="vm-elaborate-motto-quote">"</span>
//                 <p>Creating Hope. Inspiring Change.</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Mission Card */}
//           <motion.div 
//             className="vm-elaborate-card vm-mission-elaborate"
//             variants={cardVariants}
//             whileHover={{ y: -6 }}
//           >
//             <motion.div 
//               className="vm-elaborate-card-image"
//               style={{ scale: missionImageScale }}
//             >
//               <motion.div className="vm-elaborate-card-image-wrap" variants={imageRevealVariants}>
//                 <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80" alt="Our Mission" />
//                 <div className="vm-elaborate-card-overlay" />
//               </motion.div>
//               <div className="vm-elaborate-card-badge badge-green">Our Mission</div>
//             </motion.div>

//             <div className="vm-elaborate-card-body">
//               <span className="vm-elaborate-card-number">02</span>
//               <h3 className="vm-elaborate-card-title">
//                 Turning <span className="text-green">Compassion</span> Into Action
//               </h3>
//               <p className="vm-elaborate-card-text">
//                 Through education support, healthcare initiatives, child welfare, 
//                 elderly care, environmental sustainability, humanitarian assistance, 
//                 and community development programs, we create meaningful 
//                 opportunities for individuals and families.
//               </p>
//               <p className="vm-elaborate-card-text">
//                 By working alongside volunteers, institutions, communities, and 
//                 CSR partners, we strive to deliver measurable social impact and 
//                 sustainable transformation where it is needed most.
//               </p>
//               <div className="vm-elaborate-motto">
//                 <span className="vm-elaborate-motto-quote">"</span>
//                 <p>Empowering Communities. Transforming Lives.</p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Core Principles */}
//         <motion.div 
//           className="vm-elaborate-principles"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <h3 className="vm-elaborate-principles-title">Our Core Principles</h3>
//           <div className="vm-elaborate-principles-grid">
//             {corePrinciples.map((principle, index) => (
//               <motion.div 
//                 key={index} 
//                 className={`vm-elaborate-principle principle-${principle.accent}`}
//                 variants={cardVariants}
//                 whileHover={{ y: -3, scale: 1.02 }}
//               >
//                 <span className="vm-elaborate-principle-number">0{index + 1}</span>
//                 <h4>{principle.title}</h4>
//                 <p>{principle.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Impact Pillars */}
//         <motion.div 
//           className="vm-elaborate-pillars"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <h3 className="vm-elaborate-pillars-title">Our Impact Pillars</h3>
//           <div className="vm-elaborate-pillars-grid">
//             {impactPillars.map((pillar, index) => (
//               <motion.div 
//                 key={index} 
//                 className={`vm-elaborate-pillar pillar-${pillar.accent}`}
//                 variants={cardVariants}
//                 whileHover={{ y: -5 }}
//               >
//                 <motion.div className="vm-elaborate-pillar-image" variants={imageRevealVariants}>
//                   <img src={pillar.image} alt={pillar.title} />
//                   <div className="vm-elaborate-pillar-overlay" />
//                   <span className={`vm-elaborate-pillar-badge badge-${pillar.accent}`}>
//                     {pillar.title}
//                   </span>
//                 </motion.div>
//                 <div className="vm-elaborate-pillar-body">
//                   <p>{pillar.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div 
//           className="vm-elaborate-bottom"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.7 }}
//         >
//           <motion.a 
//             href="/vision-mission" 
//             className="vm-elaborate-cta"
//             whileHover={{ scale: 1.02, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Discover How We're Creating Lasting Impact
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </motion.a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./VisionMission.css";


import vision from "../assets/program44.png";
import mission from "../assets/program44.png";

const heroSlides = [
  {
    img: vision,
    title: "Inspiring Hope, Empowering Lives & Creating Sustainable Social Impact",
    subtitle:
      "Our vision and mission guide every initiative we undertake to empower communities, improve lives, and create lasting positive change.",
    tag: "Vision • Mission • Values",
    accent: "red",
  },
  {
    img: mission,
    title: "Guided by Vision, Driven by Mission",
    subtitle:
      "Since 2019, Uvagai Foundation has been dedicated to empowering children, families, and communities through education, healthcare, and sustainable development.",
    tag: "Our Purpose & Promise",
    accent: "green",
  },
  {
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    title: "Turning Compassion Into Action",
    subtitle:
      "Through education support, healthcare initiatives, child welfare, elderly care, and community development, we create meaningful opportunities for all.",
    tag: "Our Commitment",
    accent: "blue",
  },
];

export default function VisionMissionPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const corePrinciples = [
    { title: "Education First", description: "Every child deserves quality learning opportunities to build a brighter future.", accent: "red" },
    { title: "Healthcare Access", description: "Quality medical care should reach every community, regardless of geography.", accent: "green" },
    { title: "Community Led", description: "Sustainable change happens when communities lead their own transformation.", accent: "blue" },
    { title: "Inclusive Growth", description: "Leaving no one behind — empowering women, children, elderly, and vulnerable groups.", accent: "red" },
  ];

  const impactPillars = [
    { image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", title: "Education", description: "Scholarships, digital classrooms, mentorship, and skill development programs.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80", title: "Healthcare", description: "Medical camps, preventive care, health awareness, and wellness initiatives.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", title: "Child Welfare", description: "Nutrition support, education access, and holistic development for children.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&q=80", title: "Elderly Care", description: "Healthcare assistance, companionship, and dignity programs for senior citizens.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", title: "Environment", description: "Tree plantation, sustainability campaigns, and green community projects.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", title: "Community", description: "Livelihood programs, awareness campaigns, and social development initiatives.", accent: "blue" },
  ];

  const values = [
    { title: "Compassion", description: "Serving humanity with empathy, kindness, and respect for every individual." },
    { title: "Integrity", description: "Maintaining transparency, accountability, and ethical practices in everything we do." },
    { title: "Inclusivity", description: "Creating equal opportunities and embracing diversity within communities." },
    { title: "Collaboration", description: "Working together with partners, volunteers, and communities to maximize impact." },
    { title: "Sustainability", description: "Building long-term solutions that create lasting positive change." },
    { title: "Impact", description: "Delivering meaningful programs that improve lives and strengthen communities." },
  ];

  return (
    <div className="vm-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section 
        className="vm-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="vm-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`vm-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
<img src={slide.img} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="vm-overlay-dark" />
        <div className="vm-overlay-gradient" />
        <div className="vm-overlay-vignette" />

        <div className="vm-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="vm-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="vm-hero-tag">
                <span className="vm-hero-tag-line" />
                <span className="vm-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="vm-hero-headline">{currentSlide.title}</h1>
              <p className="vm-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="vm-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`vm-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="vm-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="vm-slide-counter">
          <span className="vm-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="vm-counter-sep">/</span>
          <span className="vm-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vm-core-section">
        <div className="vm-container">
          <motion.div 
            className="vm-core-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
          >
            {/* Vision Card */}
            <motion.div 
              className="vm-core-card vm-vision-card"
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              whileHover={{ y: -4 }}
            >
              <div className="vm-core-card-accent" />
              <div className="vm-core-card-header">
                <span className="vm-core-card-label">01</span>
                <h2 className="vm-core-card-title">Our Vision</h2>
              </div>
              <div className="vm-core-card-body">
                <p>
                  To create a society where every individual, regardless of their background, 
                  has access to quality education, healthcare, opportunities, and the support 
                  needed to lead a dignified and fulfilling life.
                </p>
                <p>
                  We envision empowered communities that thrive through compassion, equality, 
                  sustainability, and collective responsibility, fostering positive change for 
                  present and future generations.
                </p>
                <div className="vm-core-motto">
                  <span className="vm-core-motto-quote">"</span>
                  <p>Creating Hope. Inspiring Change.</p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="vm-core-card vm-mission-card"
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              whileHover={{ y: -4 }}
            >
              <div className="vm-core-card-accent" />
              <div className="vm-core-card-header">
                <span className="vm-core-card-label">02</span>
                <h2 className="vm-core-card-title">Our Mission</h2>
              </div>
              <div className="vm-core-card-body">
                <p>
                  Uvagai Foundation is committed to empowering underserved communities through 
                  impactful initiatives in education, healthcare, child welfare, elderly care, 
                  environmental sustainability, and community development.
                </p>
                <p>
                  We collaborate with volunteers, institutions, corporate partners, and local 
                  communities to design and implement programs that create meaningful and 
                  measurable social impact.
                </p>
                <div className="vm-core-motto vm-motto-green">
                  <span className="vm-core-motto-quote">"</span>
                  <p>Empowering Communities. Transforming Lives.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Pillars */}
      <section className="vm-pillars-section">
        <div className="vm-pillars-bg" />
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">Strategic Framework</span>
            </div>
            <h2 className="vm-section-headline">Our Impact Pillars</h2>
          </motion.div>

          <motion.div 
            className="vm-pillars-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {impactPillars.map((pillar, index) => (
              <motion.div 
                className={`vm-pillar-card pillar-${pillar.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -5 }}
              >
                <div className="vm-pillar-image">
                  <img src={slide.img} alt={slide.title} />
                  <div className="vm-pillar-overlay" />
                  <span className={`vm-pillar-badge badge-${pillar.accent}`}>{pillar.title}</span>
                </div>
                <div className="vm-pillar-content">
                  <p>{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="vm-principles-section">
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">Guiding Principles</span>
            </div>
            <h2 className="vm-section-headline">Our Core Principles</h2>
          </motion.div>

          <motion.div 
            className="vm-principles-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {corePrinciples.map((principle, index) => (
              <motion.div 
                className={`vm-principle-card principle-${principle.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -4 }}
              >
                <div className="vm-principle-stripe" />
                <span className="vm-principle-number">0{index + 1}</span>
                <h4 className="vm-principle-title">{principle.title}</h4>
                <p className="vm-principle-description">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="vm-values-section">
        <div className="vm-values-bg" />
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">What We Stand For</span>
            </div>
            <h2 className="vm-section-headline">Our Core Values</h2>
          </motion.div>

          <motion.div 
            className="vm-values-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {values.map((value, index) => (
              <motion.div 
                className="vm-value-card"
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -4 }}
              >
                <div className="vm-value-number">{(index + 1).toString().padStart(2, '0')}</div>
                <h3 className="vm-value-title">{value.title}</h3>
                <p className="vm-value-description">{value.description}</p>
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="vm-cta-headline">Together, We Can Transform Lives</h2>
            <p className="vm-cta-description">
              Join us in creating opportunities, empowering communities, and building 
              a brighter future for generations to come.
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