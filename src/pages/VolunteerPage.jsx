// import { useEffect, useRef, useState } from "react";
// import "./VolunteerPage.css";
// import childwelfareImg from "../assets/childwelfare.jpg";
// import communityImg from "../assets/community.jpg";
// import digitalImg from "../assets/digital.jpg";
// import educationImg from "../assets/education.jpg";
// import eldeImg from "../assets/elde.jpg";
// import environmentImg from "../assets/environment.jpg";
// import eventImg from "../assets/event.jpg";
// import eventsImg from "../assets/events.jpg";
// import healthcareImg from "../assets/healthcare.jpg";
// import applyImg from "../assets/apply.jpg";
// import getmatchImg from "../assets/getmatch.jpg";
// import orientationImg from "../assets/orientation.jpg";

// const opportunities = [
//   {
//     category: "blue",
//     label: "Education",
//     title: "Education & Mentorship Volunteer",
//     description:
//       "Support students through mentoring, tutoring, career guidance, digital literacy programs, and educational workshops that help shape brighter futures.",
//     points: ["Mentoring & tutoring", "Career guidance", "Digital literacy workshops"],
//     image: educationImg,
//   },
//   {
//     category: "green",
//     label: "Healthcare",
//     title: "Healthcare Volunteer",
//     description:
//       "Assist during medical camps, health awareness drives, blood donation initiatives, wellness programs, and community healthcare outreach activities.",
//     points: ["Medical camp support", "Blood donation drives", "Wellness outreach"],
//     image: healthcareImg,
//   },
//   {
//     category: "blue",
//     label: "Child Welfare",
//     title: "Child Welfare Volunteer",
//     description:
//       "Participate in programs focused on child education, nutrition, personal development, creative learning activities, and well-being support.",
//     points: ["Child education support", "Nutrition programs", "Creative learning"],
//     image: childwelfareImg,
//   },
//   {
//     category: "red",
//     label: "Elderly Care",
//     title: "Elderly Care Volunteer",
//     description:
//       "Spend time with senior citizens, support welfare programs, assist during events, and contribute to initiatives that promote dignity and care.",
//     points: ["Companionship visits", "Welfare program support", "Event assistance"],
//     image: eldeImg,
//   },
//   {
//     category: "green",
//     label: "Environment",
//     title: "Environmental Volunteer",
//     description:
//       "Join tree plantation drives, sustainability campaigns, clean-up activities, and environmental awareness initiatives.",
//     points: ["Tree plantation drives", "Clean-up campaigns", "Sustainability awareness"],
//     image: environmentImg,
//   },
//   {
//     category: "red",
//     label: "Community Outreach",
//     title: "Community Outreach Volunteer",
//     description:
//       "Work directly with communities, support awareness programs, social campaigns, and community development projects.",
//     points: ["Awareness programs", "Social campaigns", "Community development"],
//     image: communityImg,
//   },
//   {
//     category: "blue",
//     label: "Events & Campaigns",
//     title: "Event & Campaign Volunteer",
//     description:
//       "Help organize social events, fundraising campaigns, workshops, awareness drives, and foundation activities.",
//     points: ["Event organization", "Fundraising support", "Workshop coordination"],
//     image: eventImg,
//   },
//   {
//     category: "green",
//     label: "Digital & Creative",
//     title: "Digital & Creative Volunteer",
//     description:
//       "Contribute your skills in graphic design, content creation, photography, videography, social media, and digital marketing.",
//     points: ["Graphic design", "Content & photography", "Social media support"],
//     image: digitalImg,
//   },
// ];

// const steps = [
//   {
//     number: "01",
//     title: "Apply Online",
//     description: "Fill out our short volunteer interest form — it takes less than five minutes.",
//     image: applyImg,
//   },
//   {
//     number: "02",
//     title: "Get Matched",
//     description: "Our team connects you with a program that fits your skills, interests, and availability.",
//     image: getmatchImg,
//   },
//   {
//     number: "03",
//     title: "Attend Orientation",
//     description: "Join a quick orientation session to understand our work, safety guidelines, and expectations.",
//     image: orientationImg,
//   },
//   {
//     number: "04",
//     title: "Start Volunteering",
//     description: "Begin contributing to real projects alongside our team and fellow volunteers.",
//     image: environmentImg,
//   },
// ];

// const heroMarqueeImages = [
//   educationImg,
//   healthcareImg,
//   childwelfareImg,
//   eldeImg,
//   environmentImg,
//   communityImg,
//   eventImg,
//   eventsImg,
//   digitalImg,
// ];

// /** Triggers a class toggle every time the section enters/leaves the viewport */
// function useScrollReveal() {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => setVisible(entry.isIntersecting),
//       { threshold: 0.2 }
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   return [ref, visible];
// }

// /** Cycles through 0..totalSteps-1 every `interval` ms, only while active */
// function useAutoStep(totalSteps, interval, isActive) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (!isActive) return;
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % totalSteps);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [isActive, totalSteps, interval]);

//   return activeIndex;
// }

// /** Looping marquee row used under the hero */
// function HeroMarqueeRow({ images, direction = "left", speed = 38 }) {
//   const looped = [...images, ...images];
//   return (
//     <div className="vol-hero-marquee-row">
//       <div
//         className={`vol-hero-marquee-track vol-hero-marquee-${direction}`}
//         style={{ animationDuration: `${speed}s` }}
//       >
//         {looped.map((src, index) => (
//           <div className="vol-hero-marquee-cell" key={index}>
//             <img src={src} alt="" loading="lazy" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function VolunteerPage() {
//   const [oppRef, oppVisible] = useScrollReveal();
//   const [stepsRef, stepsVisible] = useScrollReveal();
//   const activeStep = useAutoStep(steps.length, 4000, stepsVisible);

//   return (
//     <main className="vol-page">
//       {/* Hero */}
//       <section className="vol-hero vol-hero-photo">
//         <div className="vol-hero-bg-gradient" aria-hidden="true" />
//         <div className="vol-hero-bg-photo" aria-hidden="true" />
//         <div className="vol-hero-overlay" aria-hidden="true" />
//         <div className="vol-hero-glow vol-hero-glow-1" aria-hidden="true" />
//         <div className="vol-hero-glow vol-hero-glow-2" aria-hidden="true" />
//         <div className="vol-hero-glow vol-hero-glow-3" aria-hidden="true" />
//         <div className="vol-hero-inner">
//           <p className="vol-eyebrow vol-eyebrow-light">
//             <span className="vol-eyebrow-line vol-eyebrow-line-light" />
//             VOLUNTEER WITH UVAGAI FOUNDATION
//           </p>
//           <h1 className="vol-hero-title vol-hero-title-light">
//             Together We Can Create <span className="vol-accent-bright">Positive Change</span>
//           </h1>
//           <p className="vol-hero-subtitle vol-hero-subtitle-light">
//             Become part of a passionate community of changemakers dedicated to
//             empowering lives, strengthening communities, and creating
//             sustainable social impact through meaningful action.
//           </p>
//           <div className="vol-hero-cta-row">
//             <button className="vol-hero-btn vol-hero-btn-primary" type="button">
//               Become A Volunteer
//             </button>
            
//           </div>
//         </div>
//       </section>

//       {/* Marquee strip — fills the blank gap below the hero */}
//       <section className="vol-hero-marquee-strip" aria-hidden="true">
//         <HeroMarqueeRow images={heroMarqueeImages} direction="left" speed={36} />
//       </section>

//       {/* Opportunities — full-bleed photo cards with overlay text */}
//       <section className="vol-opportunities" ref={oppRef}>
//         <div className="vol-blob vol-blob-red" aria-hidden="true" />
//         <div className="vol-blob vol-blob-green" aria-hidden="true" />
//         <div className="vol-blob vol-blob-blue" aria-hidden="true" />

//         <div className={`vol-section-header ${oppVisible ? "vol-reveal-up is-visible" : "vol-reveal-up"}`}>
//           <p className="vol-eyebrow">
//             <span className="vol-eyebrow-line" />
//             VOLUNTEER OPPORTUNITIES
//           </p>
//           <h2 className="vol-section-title">Find A Meaningful Way To Contribute</h2>
//           <p className="vol-section-subtitle">
//             Whether you're a student, professional, retiree, or passionate
//             individual, there's a place for you in our mission.
//           </p>
//         </div>

//         <div className="vol-cards-grid">
//           {opportunities.map((item, index) => (
//             <article
//               className={`vol-card vol-card-${item.category} ${
//                 oppVisible ? "vol-card-reveal is-visible" : "vol-card-reveal"
//               }`}
//               style={{ transitionDelay: oppVisible ? `${index * 100}ms` : "0ms" }}
//               key={item.title}
//             >
//               <div className="vol-card-inner vol-card-photo-inner">
//                 <img
//                   className="vol-card-bg-image"
//                   src={item.image}
//                   alt={item.title}
//                   loading="lazy"
//                 />
//                 <div className="vol-card-photo-overlay" aria-hidden="true" />
//                 <div className="vol-card-shine" aria-hidden="true" />

//                 <span className="vol-card-label-overlay">{item.label}</span>

//                 <div className="vol-card-body-overlay">
//                   <div className="vol-card-title-row">
//                     <h3 className="vol-card-title-overlay">{item.title}</h3>
//                     <span className="vol-card-arrow" aria-hidden="true">
//                       &#8594;
//                     </span>
//                   </div>

//                   <div className="vol-card-hidden-content">
//                     <p className="vol-card-text-overlay">{item.description}</p>
//                     <ul className="vol-card-points-overlay">
//                       {item.points.map((point) => (
//                         <li key={point}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* How it works — one image card per step, auto-advancing every 4s */}
//       <section className="vol-steps" ref={stepsRef}>
//         <div className={`vol-section-header ${stepsVisible ? "vol-reveal-up is-visible" : "vol-reveal-up"}`}>
//           <p className="vol-eyebrow">
//             <span className="vol-eyebrow-line" />
//             HOW IT WORKS
//           </p>
//           <h2 className="vol-section-title">Getting Started Is Simple</h2>
//         </div>

//         <div className="vol-timeline">
//           <div className={`vol-timeline-track ${stepsVisible ? "is-drawn" : ""}`} aria-hidden="true" />

//           {steps.map((step, index) => (
//             <div
//               className={`vol-timeline-step ${stepsVisible ? "vol-step-reveal is-visible" : "vol-step-reveal"} ${
//                 stepsVisible && index === activeStep ? "is-active-step" : ""
//               }`}
//               style={{ transitionDelay: stepsVisible ? `${index * 160}ms` : "0ms" }}
//               key={step.number}
//             >
//               <div className={`vol-timeline-node ${stepsVisible && index === activeStep ? "is-pulsing" : ""}`}>
//                 <span className="vol-timeline-number">{step.number}</span>
//               </div>

//               {index < steps.length - 1 && (
//                 <span className="vol-timeline-arrow" aria-hidden="true">
//                   &#8594;
//                 </span>
//               )}

//               <div className="vol-step-image-card">
//                 <div
//                   className={`vol-step-image-wrap ${stepsVisible && index === activeStep ? "is-loaded" : ""}`}
//                 >
//                   <img src={step.image} alt={step.title} loading="lazy" />
//                   <div className="vol-step-image-overlay" aria-hidden="true" />
//                   {stepsVisible && index === activeStep && (
//                     <span className="vol-step-progress-bar" key={`progress-${activeStep}`}>
//                       <span className="vol-step-progress-fill" />
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="vol-timeline-card">
//                 <h3 className="vol-step-title">{step.title}</h3>
//                 <p className="vol-step-text">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="vol-cta">
//         <div className="vol-cta-inner">
//           <h2 className="vol-cta-title">Ready To Make A Difference?</h2>
//           <p className="vol-cta-text">
//             Join hundreds of volunteers already working with us to build
//             stronger, healthier communities.
//           </p>
//           <button className="vol-cta-button" type="button">
//             Apply To Volunteer
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default VolunteerPage;

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./VolunteerPage.css";

import childwelfareImg from "../assets/childwelfare.jpg";
import communityImg from "../assets/community.jpg";
import digitalImg from "../assets/digital.jpg";
import educationImg from "../assets/education.jpg";
import eldeImg from "../assets/elde.jpg";
import environmentImg from "../assets/environment.jpg";
import eventImg from "../assets/event.jpg";
import eventsImg from "../assets/events.jpg";
import healthcareImg from "../assets/healthcare.jpg";

const opportunities = [
  {
    accent: "red",
    title: "Education & Mentorship Volunteer",
    description:
      "Support students through mentoring, tutoring, career guidance, digital literacy programs, and educational workshops that help shape brighter futures.",
    image: educationImg,
  },
  {
    accent: "green",
    title: "Healthcare Volunteer",
    description:
      "Assist during medical camps, health awareness drives, blood donation initiatives, wellness programs, and community healthcare outreach activities.",
    image: healthcareImg,
  },
  {
    accent: "blue",
    title: "Child Welfare Volunteer",
    description:
      "Participate in programs focused on child education, nutrition, personal development, creative learning activities, and well-being support.",
    image: childwelfareImg,
  },
  {
    accent: "red",
    title: "Elderly Care Volunteer",
    description:
      "Spend time with senior citizens, support welfare programs, assist during events, and contribute to initiatives that promote dignity and care.",
    image: eldeImg,
  },
  {
    accent: "green",
    title: "Environmental Volunteer",
    description:
      "Join tree plantation drives, sustainability campaigns, clean-up activities, and environmental awareness initiatives.",
    image: environmentImg,
  },
  {
    accent: "blue",
    title: "Community Outreach Volunteer",
    description:
      "Work directly with communities, support awareness programs, social campaigns, and community development projects.",
    image: communityImg,
  },
  {
    accent: "red",
    title: "Event & Campaign Volunteer",
    description:
      "Help organize social events, fundraising campaigns, workshops, awareness drives, and foundation activities.",
    image: eventImg,
  },
  {
    accent: "green",
    title: "Digital & Creative Volunteer",
    description:
      "Contribute your skills in graphic design, content creation, photography, videography, social media, and digital marketing.",
    image: digitalImg,
  },
];

const heroSlides = [
  { image: educationImg, title: "Education & Mentorship", accent: "red" },
  { image: healthcareImg, title: "Healthcare Support", accent: "green" },
  { image: childwelfareImg, title: "Child Welfare", accent: "blue" },
  { image: eldeImg, title: "Elderly Care", accent: "red" },
  { image: environmentImg, title: "Environmental Action", accent: "green" },
  { image: communityImg, title: "Community Outreach", accent: "blue" },
];

export default function VolunteerPage() {
  const navigate = useNavigate();
  const oppRef = useRef(null);
  const isOppInView = useInView(oppRef, { once: true, margin: "-80px" });
  
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered, heroSlides.length]);

  const currentSlide = heroSlides[current];

  const steps = [
    { number: "01", title: "Apply Online", description: "Fill out our short volunteer interest form — it takes less than five minutes." },
    { number: "02", title: "Get Matched", description: "Our team connects you with a program that fits your skills, interests, and availability." },
    { number: "03", title: "Attend Orientation", description: "Join a quick orientation session to understand our work, safety guidelines, and expectations." },
    { number: "04", title: "Start Volunteering", description: "Begin contributing to real projects alongside our team and fellow volunteers." },
  ];

  return (
    <div className="volunteer-page">
      {/* Hero Section with Background Slideshow */}
      <section 
        className="volunteer-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Slides */}
        <div className="volunteer-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`volunteer-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.08,
              }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        {/* Overlay System */}
        <div className="volunteer-overlay-dark" />
        <div className="volunteer-overlay-gradient" />
        <div className="volunteer-overlay-vignette" />

        {/* Centered Content */}
        <div className="volunteer-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="volunteer-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="volunteer-hero-tag">
                <span className="volunteer-hero-tag-line" />
                <span className="volunteer-hero-tag-text">Volunteer With Uvagai Foundation</span>
              </div>

              <h1 className="volunteer-hero-headline">
                Together We Can Create
                <span className="volunteer-hero-headline-accent"> Positive Change</span>
              </h1>

              <p className="volunteer-hero-subtitle">
                Become part of a passionate community of changemakers dedicated to
                empowering lives, strengthening communities, and creating
                sustainable social impact through meaningful action.
              </p>

              {/* Current Focus */}
              <motion.div 
                className={`volunteer-hero-focus focus-${currentSlide.accent}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <span className="volunteer-hero-focus-text">{currentSlide.title}</span>
              </motion.div>

              <motion.div 
                className="volunteer-hero-cta-wrapper"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <button 
                  className="volunteer-hero-cta"
                  onClick={() => navigate("/contact")}
                >
                  <span>Become A Volunteer</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Navigation Dots */}
        <div className="volunteer-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`volunteer-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.span
                className="volunteer-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ 
                  width: index === current && !isHovered ? '100%' : '0%',
                }}
                transition={{ 
                  duration: index === current ? 4 : 0.3,
                  ease: "linear",
                }}
              />
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="volunteer-slide-counter">
          <span className="volunteer-counter-current">
            {(current + 1).toString().padStart(2, '0')}
          </span>
          <span className="volunteer-counter-sep">/</span>
          <span className="volunteer-counter-total">
            {heroSlides.length.toString().padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="volunteer-opp-section" ref={oppRef}>
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="volunteer-section-tag">
              <span className="volunteer-section-tag-line" />
              <span className="volunteer-section-tag-text">Volunteer Opportunities</span>
            </div>
            <h2 className="volunteer-section-headline">Find A Meaningful Way To Contribute</h2>
            <p className="volunteer-section-subtitle">
              Whether you're a student, professional, retiree, or passionate
              individual, there's a place for you in our mission.
            </p>
          </motion.div>

          <motion.div 
            className="volunteer-cards-grid"
            initial="hidden"
            animate={isOppInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
          >
            {opportunities.map((item, index) => (
              <motion.div
                className={`volunteer-card card-${item.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
                  },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="volunteer-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="volunteer-card-overlay" />
                </div>

                <div className="volunteer-card-content">
                  <h3 className="volunteer-card-title">{item.title}</h3>
                  <p className="volunteer-card-description">{item.description}</p>
                </div>

                <div className={`volunteer-card-accent accent-${item.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="volunteer-steps-section">
        <div className="volunteer-steps-bg" />
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="volunteer-section-tag">
              <span className="volunteer-section-tag-line" />
              <span className="volunteer-section-tag-text">How It Works</span>
            </div>
            <h2 className="volunteer-section-headline">Getting Started Is Simple</h2>
          </motion.div>

          <motion.div 
            className="volunteer-steps-grid"
            initial="hidden"
            animate={isOppInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                className="volunteer-step-card"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="volunteer-step-number">{step.number}</div>
                <h3 className="volunteer-step-title">{step.title}</h3>
                <p className="volunteer-step-description">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="volunteer-step-connector">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="volunteer-cta-section">
        <div className="volunteer-cta-bg" />
        <div className="volunteer-cta-glow" />
        
        <div className="volunteer-container">
          <motion.div 
            className="volunteer-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="volunteer-cta-headline">Ready To Make A Difference?</h2>
            <p className="volunteer-cta-description">
              Join hundreds of volunteers already working with us to build
              stronger, healthier communities.
            </p>
            <button 
              className="volunteer-cta-btn"
              onClick={() => navigate("/contact")}
            >
              <span>Apply To Volunteer</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}