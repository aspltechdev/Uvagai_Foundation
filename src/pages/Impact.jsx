// // import "./Impact.css";

// // export default function Impact() {
// //   const impactStats = [
// //     {
// //       number: "5000+",
// //       title: "Lives Impacted",
// //     },
// //     {
// //       number: "300+",
// //       title: "Students Supported",
// //     },
// //     {
// //       number: "150+",
// //       title: "Community Programs",
// //     },
// //     {
// //       number: "500+",
// //       title: "Dedicated Volunteers",
// //     },
// //     {
// //       number: "50+",
// //       title: "Villages Reached",
// //     },
// //     {
// //       number: "25+",
// //       title: "CSR Partners",
// //     },
// //   ];

// //   const focusAreas = [
// //     {
// //       title: "Education",
// //       description:
// //         "Providing scholarships, educational resources, digital learning opportunities, and mentorship to help students achieve their dreams.",
// //     },
// //     {
// //       title: "Healthcare",
// //       description:
// //         "Organizing medical camps, health awareness initiatives, and access to essential healthcare services in underserved communities.",
// //     },
// //     {
// //       title: "Child Welfare",
// //       description:
// //         "Ensuring every child has access to nutrition, education, protection, and opportunities for holistic development.",
// //     },
// //     {
// //       title: "Elderly Care",
// //       description:
// //         "Supporting senior citizens through healthcare assistance, emotional well-being programs, and community engagement.",
// //     },
// //     {
// //       title: "Community Development",
// //       description:
// //         "Empowering rural communities through sustainable development, skill training, sanitation, and livelihood initiatives.",
// //     },
// //     {
// //       title: "Humanitarian Aid",
// //       description:
// //         "Providing timely relief, food distribution, emergency support, and rehabilitation during disasters and crises.",
// //     },
// //   ];

// //   return (
// //     <div className="impact-page">

// //       {/* Hero Section */}
// //       <section className="impact-hero">
// //         <div className="container">

// //           <span className="section-tag">
// //             Our Impact
// //           </span>

// //           <h1>
// //             Transforming Lives,
// //             <br />
// //             Building Stronger Communities
// //           </h1>

// //           <p>
// //             Every initiative, every volunteer, and every contribution helps us
// //             create meaningful and sustainable impact for communities in need.
// //           </p>

// //         </div>
// //       </section>

// //       {/* Statistics */}
// //       <section className="impact-stats-section">
// //         <div className="container">

// //           <div className="stats-grid">
// //             {impactStats.map((item, index) => (
// //               <div className="stat-card" key={index}>
// //                 <h2>{item.number}</h2>
// //                 <p>{item.title}</p>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //       {/* Story */}
// //       <section className="impact-story">
// //         <div className="container">

// //           <div className="story-grid">

// //             <div className="story-image">
// //               <img
// //                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
// //                 alt="Students supported by Uvagai Foundation"
// //               />
// //             </div>

// //             <div className="story-content">

// //               <span className="section-tag">
// //                 Success Story
// //               </span>

// //               <h2>
// //                 Creating Opportunities Through Education
// //               </h2>

// //               <p>
// //                 Through scholarships, learning resources, mentoring, and
// //                 community support, Uvagai Foundation has empowered hundreds of
// //                 students to continue their education and pursue meaningful
// //                 careers.
// //               </p>

// //               <p>
// //                 Our commitment extends beyond immediate support—we strive to
// //                 create sustainable opportunities that uplift families and build
// //                 stronger communities for generations to come.
// //               </p>

// //             </div>

// //           </div>

// //         </div>
// //       </section>

// //       {/* Areas of Impact */}
// //       <section className="focus-section">
// //         <div className="container">

// //           <div className="section-header">
// //             <h2>Areas of Impact</h2>
// //           </div>

// //           <div className="focus-grid">
// //             {focusAreas.map((area, index) => (
// //               <div className="focus-card" key={index}>
// //                 <h3>{area.title}</h3>
// //                 <p>{area.description}</p>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="impact-cta-section">

// //         <div className="container">

// //           <h2>
// //             Be Part of the Change
// //           </h2>

// //           <p>
// //             Together we can transform lives, strengthen communities, and create
// //             a brighter future. Join us by volunteering or supporting our
// //             mission.
// //           </p>

// //           <div className="cta-buttons">

// //             <a
// //               href="/volunteer"
// //               className="primary-btn"
// //             >
// //               Volunteer
// //             </a>

// //             <a
// //               href="/donate"
// //               className="secondary-btn"
// //             >
// //               Donate Now
// //             </a>

// //           </div>

// //         </div>

// //       </section>

// //     </div>
// //   );
// // }



// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import "./Impact.css";

// export default function Impact() {
//   const statsRef = useRef(null);
//   const storyRef = useRef(null);
//   const focusRef = useRef(null);
  
//   const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
//   const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
//   const focusInView = useInView(focusRef, { once: true, margin: "-80px" });

//   const impactStats = [
//     { number: "5,000+", title: "Lives Impacted", accent: "red" },
//     { number: "300+", title: "Students Supported", accent: "green" },
//     { number: "150+", title: "Community Programs", accent: "blue" },
//     { number: "500+", title: "Dedicated Volunteers", accent: "red" },
//     { number: "50+", title: "Villages Reached", accent: "green" },
//     { number: "25+", title: "CSR Partners", accent: "blue" },
//   ];

//   const focusAreas = [
//     {
//       title: "Education",
//       description: "Providing scholarships, educational resources, digital learning opportunities, and mentorship to help students achieve their dreams.",
//       image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
//       accent: "red",
//     },
//     {
//       title: "Healthcare",
//       description: "Organizing medical camps, health awareness initiatives, and access to essential healthcare services in underserved communities.",
//       image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
//       accent: "green",
//     },
//     {
//       title: "Child Welfare",
//       description: "Ensuring every child has access to nutrition, education, protection, and opportunities for holistic development.",
//       image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80",
//       accent: "blue",
//     },
//     {
//       title: "Elderly Care",
//       description: "Supporting senior citizens through healthcare assistance, emotional well-being programs, and community engagement.",
//       image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&q=80",
//       accent: "red",
//     },
//     {
//       title: "Community Development",
//       description: "Empowering rural communities through sustainable development, skill training, sanitation, and livelihood initiatives.",
//       image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
//       accent: "green",
//     },
//     {
//       title: "Humanitarian Aid",
//       description: "Providing timely relief, food distribution, emergency support, and rehabilitation during disasters and crises.",
//       image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
//       accent: "blue",
//     },
//   ];

//   return (
//     <div className="imp-page">
//       {/* Hero Section */}
//       <section className="imp-hero">
//         <div className="imp-hero-overlay" />
//         <div className="imp-container">
//           <motion.div
//             className="imp-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="imp-hero-tag">
//               <span className="imp-hero-tag-line" />
//               <span className="imp-hero-tag-text">Our Impact</span>
//             </div>
//             <h1 className="imp-hero-title">
//               Transforming Lives, Building Stronger Communities
//             </h1>
//             <p className="imp-hero-desc">
//               Every initiative, every volunteer, and every contribution helps us
//               create meaningful and sustainable impact for communities in need.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="imp-stats" ref={statsRef}>
//         <div className="imp-container">
//           <motion.div
//             className="imp-stats-grid"
//             initial="hidden"
//             animate={statsInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
//             }}
//           >
//             {impactStats.map((item, index) => (
//               <motion.div
//                 className={`imp-stat-card imp-stat-${item.accent}`}
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } },
//                 }}
//                 whileHover={{ y: -6 }}
//               >
//                 <h2 className="imp-stat-number">{item.number}</h2>
//                 <p className="imp-stat-title">{item.title}</p>
//                 <div className={`imp-stat-line imp-stat-line-${item.accent}`} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="imp-story" ref={storyRef}>
//         <div className="imp-container">
//           <div className="imp-story-grid">
//             <motion.div
//               className="imp-story-image"
//               initial={{ opacity: 0, x: -40 }}
//               animate={storyInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="imp-story-image-frame">
//                 <img
//                   src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
//                   alt="Students supported by Uvagai Foundation"
//                 />
//                 <div className="imp-story-image-border" />
//               </div>
//             </motion.div>

//             <motion.div
//               className="imp-story-content"
//               initial={{ opacity: 0, x: 40 }}
//               animate={storyInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="imp-story-tag">
//                 <span className="imp-story-tag-line" />
//                 <span>Success Story</span>
//               </div>
//               <h2 className="imp-story-title">Creating Opportunities Through Education</h2>
//               <p className="imp-story-text">
//                 Through scholarships, learning resources, mentoring, and
//                 community support, Uvagai Foundation has empowered hundreds of
//                 students to continue their education and pursue meaningful
//                 careers.
//               </p>
//               <p className="imp-story-text">
//                 Our commitment extends beyond immediate support—we strive to
//                 create sustainable opportunities that uplift families and build
//                 stronger communities for generations to come.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Areas of Impact */}
//       <section className="imp-focus" ref={focusRef}>
//         <div className="imp-focus-bg" />
//         <div className="imp-container">
//           <motion.div
//             className="imp-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={focusInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="imp-section-tag">
//               <span className="imp-section-tag-line" />
//               <span className="imp-section-tag-text">What We Do</span>
//             </div>
//             <h2 className="imp-section-title">Areas of Impact</h2>
//           </motion.div>

//           <motion.div
//             className="imp-focus-grid"
//             initial="hidden"
//             animate={focusInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
//             }}
//           >
//             {focusAreas.map((area, index) => (
//               <motion.div
//                 className={`imp-focus-card imp-focus-${area.accent}`}
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } },
//                 }}
//                 whileHover={{ y: -6 }}
//               >
//                 <div className="imp-focus-card-img">
//                   <img src={area.image} alt={area.title} />
//                   <div className="imp-focus-card-shade" />
//                 </div>
//                 <div className="imp-focus-card-body">
//                   <h3 className="imp-focus-card-title">{area.title}</h3>
//                   <p className="imp-focus-card-text">{area.description}</p>
//                 </div>
//                 <div className={`imp-focus-card-bar imp-focus-bar-${area.accent}`} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="imp-cta">
//         <div className="imp-cta-bg" />
//         <div className="imp-cta-glow" />
//         <div className="imp-container">
//           <motion.div
//             className="imp-cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="imp-cta-title">Be Part of the Change</h2>
//             <p className="imp-cta-text">
//               Together we can transform lives, strengthen communities, and create
//               a brighter future. Join us by volunteering or supporting our mission.
//             </p>
//             <div className="imp-cta-buttons">
//               <a href="/volunteer" className="imp-cta-btn-primary">
//                 <span>Volunteer</span>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </a>
//               <a href="/donate" className="imp-cta-btn-secondary">
//                 Donate Now
//                 <span className="imp-cta-btn-arrow">→</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Impact.css";

import healthcare1 from "../assets/healthcare1.jpg";
import volunteer1 from "../assets/volunteer1.jpg";
import educationImg from "../assets/education.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.png";
import childImg from "../assets/childd.png";
import elderlyImg from "../assets/elder.png";
import environmentImg from "../assets/environment.jpg";
import foodImg from "../assets/food1.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/skill1.jpg";

const heroSlides = [
  {
    image: educationImg,
    title: "Education & Youth Empowerment",
    tag: "Our Impact",
    accent: "red",
  },
  {
    image: healthcare1,
    title: "Healthcare & Wellness",
    tag: "Community Health",
    accent: "green",
  },
  {
    image: csrImg,
    title: "Community Development",
    tag: "Social Change",
    accent: "blue",
  },
];

export default function Impact() {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const focusRef = useRef(null);
  
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const focusInView = useInView(focusRef, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const impactStats = [
    { number: "5,000+", title: "Lives Impacted", accent: "red" },
    { number: "300+", title: "Students Supported", accent: "green" },
    { number: "150+", title: "Community Programs", accent: "blue" },
    { number: "500+", title: "Dedicated Volunteers", accent: "red" },
    { number: "50+", title: "Villages Reached", accent: "green" },
    { number: "25+", title: "CSR Partners", accent: "blue" },
  ];

  const focusAreas = [
    {
      title: "Education & Youth Empowerment",
      description: "Providing scholarships, educational resources, digital learning opportunities, and mentorship to help students achieve their dreams.",
      image: educationImg,
      accent: "red",
    },
    {
      title: "Healthcare & Wellness",
      description: "Organizing medical camps, health awareness initiatives, and access to essential healthcare services in underserved communities.",
      image: healthcare1,
      accent: "green",
    },
    {
      title: "Child Welfare & Development",
      description: "Ensuring every child has access to nutrition, education, protection, and opportunities for holistic development.",
      image: childImg,
      accent: "blue",
    },
    {
      title: "Elderly Care & Support",
      description: "Supporting senior citizens through healthcare assistance, emotional well-being programs, and community engagement.",
      image: elderlyImg,
      accent: "red",
    },
    {
      title: "Community Development",
      description: "Empowering rural communities through sustainable development, skill training, sanitation, and livelihood initiatives.",
      image: csrImg,
      accent: "green",
    },
    {
      title: "Humanitarian Aid & Relief",
      description: "Providing timely relief, food distribution, emergency support, and rehabilitation during disasters and crises.",
      image: environmentImg,
      accent: "blue",
    },
  ];

  const handleGetInvolved = () => {
    navigate("/contact", {
      state: {
        source: "impact-page",
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="imp-page">
      {/* Hero Section with Slideshow */}
      <section
        className="imp-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="imp-hero-slides-wrap">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="imp-hero-slide-item"
              initial={false}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="imp-hero-darken" />
        <div className="imp-hero-gradient" />

        <div className="imp-hero-inner">
          <div className="imp-hero-eyebrow">
            <span className="imp-hero-eyebrow-line" />
            <span className="imp-hero-eyebrow-label">Our Impact</span>
          </div>

          <h1 className="imp-hero-title">
            Transforming Lives, Building
            <span className="imp-hero-title-highlight"> Stronger Communities</span>
          </h1>

          <p className="imp-hero-desc">
            Every initiative, every volunteer, and every contribution helps us
            create meaningful and sustainable impact for communities in need.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`imp-hero-badge imp-hero-badge-${currentSlide.accent}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <span className="imp-hero-badge-text">{currentSlide.title}</span>
            </motion.div>
          </AnimatePresence>

          <div className="imp-hero-action">
            <button
              className="imp-hero-action-btn"
              onClick={handleGetInvolved}
            >
              <span>Get Involved</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="imp-hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`imp-hero-dot ${index === current ? 'imp-hero-dot-on' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="imp-hero-count">
          <span className="imp-hero-count-now">
            {(current + 1).toString().padStart(2, '0')}
          </span>
          <span className="imp-hero-count-div">/</span>
          <span className="imp-hero-count-all">
            {heroSlides.length.toString().padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="imp-stats" ref={statsRef}>
        <div className="imp-wrap">
          <motion.div
            className="imp-head"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="imp-head-tag">
              <span className="imp-head-tag-line" />
              <span className="imp-head-tag-text">By The Numbers</span>
            </div>
            <h2 className="imp-head-title">Measuring Our Impact</h2>
            <p className="imp-head-sub">
              Real numbers that reflect our commitment to creating lasting change
            </p>
          </motion.div>

          <motion.div
            className="imp-stats-grid"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {impactStats.map((item, index) => (
              <motion.div
                className={`imp-stat-card imp-stat-${item.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } },
                }}
                whileHover={{ y: -6 }}
              >
                <h2 className="imp-stat-number">{item.number}</h2>
                <p className="imp-stat-title">{item.title}</p>
                <div className={`imp-stat-line imp-stat-line-${item.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="imp-focus" ref={focusRef}>
        <div className="imp-focus-bg" />
        <div className="imp-wrap">
          <motion.div
            className="imp-head"
            initial={{ opacity: 0, y: 30 }}
            animate={focusInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="imp-head-tag">
              <span className="imp-head-tag-line" />
              <span className="imp-head-tag-text">What We Do</span>
            </div>
            <h2 className="imp-head-title">Areas of Impact</h2>
          </motion.div>

          <motion.div
            className="imp-focus-grid"
            initial="hidden"
            animate={focusInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {focusAreas.map((area, index) => (
              <motion.div
                className={`imp-focus-card imp-focus-${area.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="imp-focus-card-img">
                  <img src={area.image} alt={area.title} />
                  <div className="imp-focus-card-img-shade" />
                </div>
                <div className="imp-focus-card-body">
                  <h3 className="imp-focus-card-title">{area.title}</h3>
                  <p className="imp-focus-card-text">{area.description}</p>
                </div>
                <div className={`imp-focus-card-bar imp-focus-bar-${area.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="imp-final">
        <div className="imp-final-bg" />
        <div className="imp-final-glow" />
        <div className="imp-wrap">
          <motion.div
            className="imp-final-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="imp-final-title">Be Part of the Change</h2>
            <p className="imp-final-text">
              Together we can transform lives, strengthen communities, and create
              a brighter future. Join us by volunteering or supporting our mission.
            </p>
            <div className="imp-final-buttons">
              <a href="/volunteer" className="imp-final-btn-primary">
                <span>Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="imp-final-btn-secondary">
                Donate Now
                <span className="imp-final-btn-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}