// // import { useState, useEffect, useRef } from "react";
// // import { motion, useInView } from "framer-motion";
// // import "./CSRPartnerDetails.css";

// // const heroVideos = [
// //   {
// //     src: "/videos/education.mp4",
// //     title: "Empowering Minds Through Education",
// //     subtitle: "Every child deserves access to quality learning. We're building classrooms, digital labs, and scholarship programs that transform lives and create equal opportunities for all.",
// //     tag: "Education Initiative"
// //   },
// //   {
// //     src: "/videos/healthcare.mp4",
// //     title: "Healing Communities, One Life at a Time",
// //     subtitle: "From rural health camps to preventive care programs, we're ensuring that quality healthcare reaches every doorstep, bringing hope and wellness to underserved communities.",
// //     tag: "Healthcare Mission"
// //   },
// //   {
// //     src: "/videos/environment.mp4",
// //     title: "Protecting Our Planet for Future Generations",
// //     subtitle: "Through tree plantations, sustainability campaigns, and green initiatives, we're nurturing a healthier planet and inspiring communities to embrace environmental responsibility.",
// //     tag: "Environmental Action"
// //   }
// // ];

// // export default function CSRPartnerDetails() {
// //   const sectionRef = useRef(null);
// //   const isInView = useInView(sectionRef, {
// //     once: true,
// //     margin: "-80px",
// //   });
// //   const [currentVideo, setCurrentVideo] = useState(0);

// //   // Refs for scroll animations
// //   const benefitsRef = useRef(null);
// //   const partnersRef = useRef(null);
// //   const processRef = useRef(null);
// //   const opportunitiesRef = useRef(null);
// //   const ctaRef = useRef(null);

// //   const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
// //   const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" });
// //   const processInView = useInView(processRef, { once: true, margin: "-100px" });
// //   const opportunitiesInView = useInView(opportunitiesRef, { once: true, margin: "-100px" });
// //   const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
// //     }, 8000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const benefits = [
// //     {
// //       title: "Measurable Impact",
// //       description: "Structured programs with transparent reporting, documentation, and impact assessment.",
// //       number: "01"
// //     },
// //     {
// //       title: "Trusted Collaboration",
// //       description: "Work with a dedicated team committed to creating meaningful social change.",
// //       number: "02"
// //     },
// //     {
// //       title: "Sustainable Development",
// //       description: "Long-term initiatives focused on education, healthcare, welfare, and community growth.",
// //       number: "03"
// //     },
// //     {
// //       title: "Employee Volunteering",
// //       description: "Create opportunities for employees to actively participate in impactful social initiatives.",
// //       number: "04"
// //     },
// //     {
// //       title: "CSR Compliance Support",
// //       description: "Assistance in planning and executing CSR projects aligned with organizational objectives.",
// //       number: "05"
// //     },
// //     {
// //       title: "Community Recognition",
// //       description: "Strengthen your brand reputation through meaningful contributions to society.",
// //       number: "06"
// //     }
// //   ];

// //   const partners = [
// //     {
// //       name: "Only Interns",
// //       type: "Strategic MoU Partner",
// //       description: "Signed an MoU to provide internships, skill development, mentorship, learn-and-earn opportunities, and career readiness programs."
// //     },
// //     {
// //       name: "Trinetra Educational Summit 2026",
// //       type: "Supporting Partner",
// //       description: "Supporting partner focused on education, career guidance and student development."
// //     },
// //     {
// //       name: "OneYes Startup Fest & Awards 2026",
// //       type: "NGO Partner",
// //       description: "Official NGO partner for startup and innovation initiatives."
// //     },
// //     {
// //       name: "BRAIIL Academy",
// //       type: "Program Collaboration",
// //       description: "Collaborator in mental wellness, emotional resilience and holistic development programs."
// //     },
// //     {
// //       name: "Tamil Nadu Skill Development Corporation",
// //       type: "Government Engagement",
// //       description: "Engagement focused on education, youth empowerment and skill development."
// //     },
// //     {
// //       name: "Naan Mudhalvan",
// //       type: "Government Program Collaboration",
// //       description: "Educational and employability initiatives for students."
// //     }
// //   ];

// //   const processSteps = [
// //     {
// //       step: "01",
// //       title: "Consultation",
// //       description: "Understand your CSR objectives, priorities, and social impact goals."
// //     },
// //     {
// //       step: "02",
// //       title: "Program Design",
// //       description: "Create customized initiatives aligned with your organization's CSR vision."
// //     },
// //     {
// //       step: "03",
// //       title: "Implementation",
// //       description: "Execute projects efficiently through community engagement and local partnerships."
// //     },
// //     {
// //       step: "04",
// //       title: "Impact Reporting",
// //       description: "Share progress reports, outcomes, and measurable social impact insights."
// //     }
// //   ];

// //   const partnershipOpportunities = [
// //     {
// //       title: "Education Projects",
// //       description: "School support, digital learning, scholarships and youth development.",
// //       image: "/src/assets/images/education.png",
// //       alt: "Children in classroom learning"
// //     },
// //     {
// //       title: "Health Programs",
// //       description: "Medical camps, wellness initiatives and healthcare awareness.",
// //       image: "/src/assets/images/healthcare.png",
// //       alt: "Medical camp serving community"
// //     },
// //     {
// //       title: "Sustainability Projects",
// //       description: "Environmental awareness, tree plantation and green initiatives.",
// //       image: "/src/assets/images/sustainability.png",
// //       alt: "Tree plantation drive"
// //     },
// //     {
// //       title: "Employee Engagement",
// //       description: "Volunteer programs that strengthen community participation.",
// //       image: "/src/assets/images/volunteer.png",
// //       alt: "Volunteers helping community"
// //     }
// //   ];

// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.1, delayChildren: 0.15 },
// //     },
// //   };

// //   const cardVariants = {
// //     hidden: { 
// //       opacity: 0, 
// //       y: 40,
// //     },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { 
// //         duration: 0.6, 
// //         ease: [0.22, 0.61, 0.36, 1],
// //       },
// //     },
// //   };

// //   return (
// //     <div className="csr-page" ref={sectionRef}>
// //       {/* Hero Section */}
// //       <section className="csr-hero">
// //         <div className="csr-hero-video-wrapper">
// //           <video
// //             key={currentVideo}
// //             autoPlay
// //             muted
// //             loop
// //             playsInline
// //             className="csr-hero-video"
// //           >
// //             <source src={heroVideos[currentVideo].src} type="video/mp4" />
// //           </video>
// //           <div className="csr-hero-overlay" />
// //         </div>

// //         <div className="csr-container">
// //           <motion.div
// //             className="csr-hero-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
// //           >
// //             <div className="csr-hero-tag">
// //               <span className="csr-hero-tag-line" />
// //               <span className="csr-hero-tag-text">{heroVideos[currentVideo].tag}</span>
// //             </div>

// //             <h1 className="csr-hero-headline">
// //               {heroVideos[currentVideo].title}
// //             </h1>

// //             <p className="csr-hero-subtitle">
// //               {heroVideos[currentVideo].subtitle}
// //             </p>

// //             <div className="csr-hero-indicators">
// //               {heroVideos.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   className={`csr-hero-indicator ${index === currentVideo ? 'active' : ''}`}
// //                   onClick={() => setCurrentVideo(index)}
// //                   aria-label={`Switch to ${heroVideos[index].tag}`}
// //                 />
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Why Partner Section */}
// //       <section className="csr-why-section" ref={benefitsRef}>
// //         <div className="csr-container">
// //           <motion.div
// //             className="csr-section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
// //           >
// //             <div className="csr-section-tag">
// //               <span className="csr-section-tag-line" />
// //               <span className="csr-section-tag-text">Why Choose Uvagai Foundation</span>
// //             </div>
// //             <h2 className="csr-section-headline">Building Purpose-Driven Partnerships</h2>
// //             <p className="csr-section-subtitle">
// //               We help organizations achieve their CSR goals through transparent implementation, 
// //               community engagement, measurable outcomes, and sustainable impact.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             className="csr-benefits-grid"
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate={benefitsInView ? "visible" : "hidden"}
// //           >
// //             {benefits.map((benefit, index) => (
// //               <motion.div
// //                 className="csr-benefit-card"
// //                 key={index}
// //                 variants={cardVariants}
// //                 whileHover={{ y: -8, transition: { duration: 0.3 } }}
// //               >
// //                 <div className="benefit-card-stripe" />
// //                 <div className="benefit-card-number">{benefit.number}</div>
// //                 <h3 className="benefit-card-title">{benefit.title}</h3>
// //                 <p className="benefit-card-description">{benefit.description}</p>
// //                 <div className="benefit-card-shimmer" />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Partners Section */}
// //       <section className="csr-partners-section" ref={partnersRef}>
// //         <div className="csr-container">
// //           <motion.div
// //             className="csr-section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={partnersInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
// //           >
// //             <div className="csr-section-tag">
// //               <span className="csr-section-tag-line" />
// //               <span className="csr-section-tag-text">Trusted Collaborations</span>
// //             </div>
// //             <h2 className="csr-section-headline">Our Partners</h2>
// //             <p className="csr-section-subtitle">
// //               Collaborating with institutions, corporates, government bodies, and innovation 
// //               leaders to create meaningful and sustainable social impact.
// //             </p>
// //           </motion.div>

// //           <motion.div 
// //             className="partners-grid"
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate={partnersInView ? "visible" : "hidden"}
// //           >
// //             {partners.map((partner, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="partner-rectangle"
// //                 variants={cardVariants}
// //                 whileHover={{ y: -6, transition: { duration: 0.3 } }}
// //               >
// //                 <div className="partner-rectangle-accent" />
// //                 <div className="partner-rectangle-content">
// //                   <span className="partner-rectangle-type">{partner.type}</span>
// //                   <h3 className="partner-rectangle-name">{partner.name}</h3>
// //                   <p className="partner-rectangle-description">{partner.description}</p>
// //                   <div className="partner-rectangle-arrow">→</div>
// //                 </div>
// //                 <div className="partner-rectangle-shimmer" />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Process Section */}
// //       <section className="csr-process-section" ref={processRef}>
// //         <div className="csr-container">
// //           <motion.div
// //             className="csr-section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={processInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
// //           >
// //             <div className="csr-section-tag">
// //               <span className="csr-section-tag-line" />
// //               <span className="csr-section-tag-text">Partnership Journey</span>
// //             </div>
// //             <h2 className="csr-section-headline">How We Work Together</h2>
// //             <p className="csr-section-subtitle">
// //               Our collaborative approach ensures transparency, efficiency, and lasting impact at every step
// //             </p>
// //           </motion.div>

// //           <div className="csr-process-timeline">
// //             {processSteps.map((step, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="csr-timeline-step"
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={processInView ? { opacity: 1, y: 0 } : {}}
// //                 transition={{ duration: 0.6, delay: index * 0.15 }}
// //               >
// //                 <div className="csr-timeline-number-circle">{step.step}</div>
// //                 <div className="csr-timeline-content">
// //                   <h3 className="csr-timeline-title">{step.title}</h3>
// //                   <p className="csr-timeline-description">{step.description}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Opportunities Section */}
// //       <section className="csr-opportunities-section" ref={opportunitiesRef}>
// //         <div className="csr-container">
// //           <motion.div
// //             className="csr-section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={opportunitiesInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
// //           >
// //             <div className="csr-section-tag">
// //               <span className="csr-section-tag-line" />
// //               <span className="csr-section-tag-text">Get Involved</span>
// //             </div>
// //             <h2 className="csr-section-headline">Partnership Opportunities</h2>
// //             <p className="csr-section-subtitle">
// //               Choose from our diverse range of impact areas and make a difference
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             className="csr-opportunities-grid"
// //             variants={staggerContainer}
// //             initial="hidden"
// //             animate={opportunitiesInView ? "visible" : "hidden"}
// //           >
// //             {partnershipOpportunities.map((opportunity, index) => (
// //               <motion.div
// //                 className="csr-opportunity-card"
// //                 key={index}
// //                 variants={cardVariants}
// //                 whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
// //                 style={{
// //                   backgroundImage: `url(${opportunity.image})`,
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center'
// //                 }}
// //               >
// //                 <div className="opportunity-card-accent" />
// //                 <div className="opportunity-card-number">0{index + 1}</div>
// //                 <h3 className="opportunity-card-title">{opportunity.title}</h3>
// //                 <p className="opportunity-card-description">{opportunity.description}</p>
// //                 <div className="opportunity-card-arrow">→</div>
// //                 <div className="opportunity-card-shimmer" />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="csr-cta-section" ref={ctaRef}>
// //         <div className="csr-container">
// //           <motion.div
// //             className="csr-cta-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={ctaInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
// //           >
// //             <h2 className="csr-cta-headline">Let's Build Stronger Communities Together</h2>
// //             <p className="csr-cta-description">
// //               Join hands with Uvagai Foundation to create sustainable social impact through 
// //               education, healthcare, welfare, community development, and environmental responsibility.
// //             </p>
// //             <motion.div 
// //               className="csr-cta-buttons"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={ctaInView ? { opacity: 1, y: 0 } : {}}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //             >
// //               <a href="/contact" className="csr-cta-primary">
// //                 <span>Become a CSR Partner</span>
// //                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //                 </svg>
// //               </a>
// //               <a href="/volunteer" className="csr-cta-secondary">
// //                 Explore Opportunities
// //                 <span className="csr-cta-secondary-arrow">→</span>
// //               </a>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { Link } from "react-router-dom";
// import "./CSRPartnerDetails.css";
// import {
//   FiBookOpen,
//   FiHeart,
//   FiUsers,
//   FiShield,
// } from "react-icons/fi";


// import whyEducationImg from "../assets/images/education.png";
// import whyHealthcareImg from "../assets/images/healthcare.png";
// import whySustainabilityImg from "../assets/images/sustainability.png";
// import whyVolunteerImg from "../assets/images/volunteer.png";

// import educationImg from "../assets/education.jpg";
// import healthcareImg from "../assets/healthcare.jpg";
// import environmentImg from "../assets/environment.jpg";

// const heroSlides = [
//   {
//     image: educationImg,
//     title: "Empowering Minds Through Education",
//     subtitle: "Every child deserves access to quality learning. We're building classrooms, digital labs, and scholarship programs that transform lives and create equal opportunities for all.",
//     tag: "Education Initiative",
//     accent: "red"
//   },
//   {
//     image: healthcareImg,
//     title: "Healing Communities, One Life at a Time",
//     subtitle: "From rural health camps to preventive care programs, we're ensuring that quality healthcare reaches every doorstep, bringing hope and wellness to underserved communities.",
//     tag: "Healthcare Mission",
//     accent: "green"
//   },
//   {
//     image: environmentImg,
//     title: "Protecting Our Planet for Future Generations",
//     subtitle: "Through tree plantations, sustainability campaigns, and green initiatives, we're nurturing a healthier planet and inspiring communities to embrace environmental responsibility.",
//     tag: "Environmental Action",
//     accent: "green"
//   }
// ];

// const whyChooseCards = [
//   {
//     title: "Measurable Impact",
//     description:
//       "Delivering transparent CSR initiatives with structured planning, measurable outcomes, and long-term social impact that creates meaningful change in communities.",
//     image: whyEducationImg,
//   },
//   {
//     title: "Trusted Collaboration",
//     description:
//       "Building reliable partnerships through open communication, accountability, and a shared commitment to creating sustainable social development.",
//     image: whyHealthcareImg,
//   },
//   {
//     title: "Sustainable Development",
//     description:
//       "Our initiatives focus on strengthening communities by improving access to education, healthcare services, skill development, and essential welfare programs that create meaningful, long-lasting change.",
//     image: whySustainabilityImg,
//   },
//   {
//     title: "Employee Volunteering",
//     description:
//       "Empowering employees to actively participate in impactful volunteering programs that strengthen communities and foster a culture of social responsibility.",
//     image: whyVolunteerImg,
//   },
// ];

// const sliderImages = [
//   {
//     image: whyEducationImg,
//     title: "Education",
//     subtitle: "Creating brighter futures through quality education."
//   },
//   {
//     image: whyHealthcareImg,
//     title: "Healthcare",
//     subtitle: "Accessible healthcare for healthier communities."
//   },
//   {
//     image: whySustainabilityImg,
//     title: "Sustainability",
//     subtitle: "Building greener and more sustainable communities."
//   },
//   {
//     image: whyVolunteerImg,
//     title: "Volunteering",
//     subtitle: "Employees making a real social impact."
//   }
// ];


// export default function CSRPartnerDetails() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

//   const [current, setCurrent] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Why Choose Us Image Slider
  

  

//   const benefitsRef = useRef(null);
//   const partnersRef = useRef(null);
//   const processRef = useRef(null);
//   const opportunitiesRef = useRef(null);
//   const ctaRef = useRef(null);

//   const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
//   const partnersInView = useInView(partnersRef, { once: true, margin: "-80px" });
//   const processInView = useInView(processRef, { once: true, margin: "-80px" });
//   const opportunitiesInView = useInView(opportunitiesRef, { once: true, margin: "-80px" });
//   const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

//   useEffect(() => {
//     if (!isHovered) {
//       const timer = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % heroSlides.length);
//       }, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered]);

//   const currentSlide = heroSlides[current];

//   const benefits = [
//     { title: "Measurable Impact", description: "Structured programs with transparent reporting, documentation, and impact assessment.", accent: "red" },
//     { title: "Trusted Collaboration", description: "Work with a dedicated team committed to creating meaningful social change.", accent: "green" },
//     { title: "Sustainable Development", description: "Long-term initiatives focused on education, healthcare, welfare, and community growth.", accent: "blue" },
//     { title: "Employee Volunteering", description: "Create opportunities for employees to actively participate in impactful social initiatives.", accent: "red" },
//     { title: "CSR Compliance Support", description: "Assistance in planning and executing CSR projects aligned with organizational objectives.", accent: "green" },
//     { title: "Community Recognition", description: "Strengthen your brand reputation through meaningful contributions to society.", accent: "blue" },
//   ];

//   const partners = [
//     { name: "Only Interns", type: "Strategic MoU Partner", description: "Signed an MoU to provide internships, skill development, mentorship, and career readiness programs." },
//     { name: "Trinetra Educational Summit 2026", type: "Supporting Partner", description: "Supporting partner focused on education, career guidance and student development." },
//     { name: "OneYes Startup Fest & Awards 2026", type: "NGO Partner", description: "Official NGO partner for startup and innovation initiatives." },
//     { name: "BRAIIL Academy", type: "Program Collaboration", description: "Collaborator in mental wellness, emotional resilience and holistic development programs." },
//     { name: "Tamil Nadu Skill Development Corporation", type: "Government Engagement", description: "Engagement focused on education, youth empowerment and skill development." },
//     { name: "Naan Mudhalvan", type: "Government Program Collaboration", description: "Educational and employability initiatives for students." },
//   ];

//   const processSteps = [
//     { step: "01", title: "Consultation", description: "Understand your CSR objectives, priorities, and social impact goals." },
//     { step: "02", title: "Program Design", description: "Create customized initiatives aligned with your organization's CSR vision." },
//     { step: "03", title: "Implementation", description: "Execute projects efficiently through community engagement and local partnerships." },
//     { step: "04", title: "Impact Reporting", description: "Share progress reports, outcomes, and measurable social impact insights." },
//   ];

//   const partnershipOpportunities = [
//     { title: "Education Projects", description: "School support, digital learning, scholarships and youth development.", accent: "red" },
//     { title: "Health Programs", description: "Medical camps, wellness initiatives and healthcare awareness.", accent: "green" },
//     { title: "Sustainability Projects", description: "Environmental awareness, tree plantation and green initiatives.", accent: "blue" },
//     { title: "Employee Engagement", description: "Volunteer programs that strengthen community participation.", accent: "red" },
//   ];
//   const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 70,
//     scale: 0.96,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

//   return (
//     <div className="csr-page" ref={sectionRef}>
//       {/* Hero Section with Background Slideshow */}
//       <section 
//         className="csr-hero"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="csr-slides-container">
//           {heroSlides.map((slide, index) => (
//             <motion.div
//               key={index}
//               className={`csr-slide-bg ${index === current ? 'active' : ''}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
//               transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <img src={slide.image} alt={slide.title} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="csr-overlay-dark" />
//         <div className="csr-overlay-gradient" />
//         <div className="csr-overlay-vignette" />

//         <div className="csr-hero-container">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               className="csr-hero-content"
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -25 }}
//               transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="csr-hero-tag">
//                 <span className="csr-hero-tag-line" />
//                 <span className="csr-hero-tag-text">{currentSlide.tag}</span>
//               </div>

//               <h1 className="csr-hero-headline">{currentSlide.title}</h1>
//               <p className="csr-hero-subtitle">{currentSlide.subtitle}</p>

//               <motion.div 
//                 className="csr-hero-cta-wrapper"
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.4 }}
//               >
//                 <a href="/contact" className="csr-hero-cta">
//                   <span>Become a CSR Partner</span>
//                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </a>
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="csr-slide-nav">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               className={`csr-slide-dot ${index === current ? 'active' : ''}`}
//               onClick={() => setCurrent(index)}
//             >
//               <motion.span
//                 className="csr-slide-dot-fill"
//                 initial={{ width: '0%' }}
//                 animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
//                 transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
//               />
//             </button>
//           ))}
//         </div>

//         <div className="csr-slide-counter">
//           <span className="csr-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
//           <span className="csr-counter-sep">/</span>
//           <span className="csr-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
//         </div>
//       </section>

//     <section className="why-choose">
//   <div className="container">

//     <span className="section-tag">WHY PARTNER WITH US</span>

//     <h2>Why Choose Us</h2>

//     <p className="section-description">
//       Together we create meaningful impact through education,
//       healthcare, volunteering, and CSR sponsorships.
//     </p>

//     <div className="why-grid">

//       <div className="why-card">
//         <div className="why-icon">
//           <FiBookOpen />
//         </div>
//         <h3>Education</h3>
//         <p>
//           Supporting quality education through scholarships,
//           learning initiatives, and skill development.
//         </p>
//       </div>

//       <div className="why-card">
//         <div className="why-icon">
//           <FiHeart />
//         </div>
//         <h3>Healthcare</h3>
//         <p>
//           Promoting healthier communities through medical camps,
//           awareness programs, and healthcare support.
//         </p>
//       </div>

//       <div className="why-card">
//         <div className="why-icon">
//           <FiUsers />
//         </div>
//         <h3>Volunteering</h3>
//         <p>
//           Bringing together passionate volunteers and corporate
//           teams to create positive social impact.
//         </p>
//       </div>

//       <div className="why-card">
//         <div className="why-icon">
//           <FiShield />
//         </div>
//         <h3>CSR Sponsorship</h3>
//         <p>
//           Building strong CSR partnerships that fund sustainable
//           projects and empower communities.
//         </p>
//       </div>

//     </div>

//   </div>
// </section>

//       {/* Partners Section */}
//       <section className="csr-partners-section" ref={partnersRef}>
//         <div className="csr-partners-bg" />
//         <div className="csr-container">
//           <motion.div
//             className="csr-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={partnersInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="csr-section-tag">
//               <span className="csr-section-tag-line" />
//               <span className="csr-section-tag-text">Trusted Collaborations</span>
//             </div>
//             <h2 className="csr-section-headline">Our Partners</h2>
//             <p className="csr-section-subtitle">
//               Collaborating with institutions, corporates, government bodies, and innovation 
//               leaders to create meaningful and sustainable social impact.
//             </p>
//           </motion.div>

//           <motion.div 
//             className="csr-partners-grid"
//             initial="hidden"
//             animate={partnersInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
//             }}
//           >
//             {partners.map((partner, index) => (
//               <motion.div
//                 className="csr-partner-card"
//                 key={index}
//                 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
//                 whileHover={{ y: -4 }}
//               >
//                 <span className="csr-partner-type">{partner.type}</span>
//                 <h3 className="csr-partner-name">{partner.name}</h3>
//                 <p className="csr-partner-description">{partner.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="csr-process-section" ref={processRef}>
//         <div className="csr-container">
//           <motion.div
//             className="csr-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={processInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="csr-section-tag">
//               <span className="csr-section-tag-line" />
//               <span className="csr-section-tag-text">Partnership Journey</span>
//             </div>
//             <h2 className="csr-section-headline">How We Work Together</h2>
//           </motion.div>

//           <motion.div 
//             className="csr-process-grid"
//             initial="hidden"
//             animate={processInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
//             }}
//           >
//             {processSteps.map((step, index) => (
//               <motion.div
//                 className="csr-process-card"
//                 key={index}
//                 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
//                 whileHover={{ y: -4 }}
//               >
//                 <div className="csr-process-number">{step.step}</div>
//                 <h3 className="csr-process-title">{step.title}</h3>
//                 <p className="csr-process-description">{step.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Opportunities Section */}
//       <section className="csr-opportunities-section" ref={opportunitiesRef}>
//         <div className="csr-opportunities-bg" />
//         <div className="csr-container">
//           <motion.div
//             className="csr-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={opportunitiesInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="csr-section-tag">
//               <span className="csr-section-tag-line" />
//               <span className="csr-section-tag-text">Get Involved</span>
//             </div>
//             <h2 className="csr-section-headline">Partnership Opportunities</h2>
//             <p className="csr-section-subtitle">
//               Choose from our diverse range of impact areas and make a difference
//             </p>
//           </motion.div>

//           <motion.div
//             className="csr-opportunities-grid"
//             initial="hidden"
//             animate={opportunitiesInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
//             }}
//           >
//             {partnershipOpportunities.map((opportunity, index) => (
//               <motion.div
//                 className={`csr-opportunity-card opp-${opportunity.accent}`}
//                 key={index}
//                 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="opp-card-accent" />
//                 <h3 className="opp-card-title">{opportunity.title}</h3>
//                 <p className="opp-card-description">{opportunity.description}</p>
//                 <div className="opp-card-arrow">
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="csr-cta-section" ref={ctaRef}>
//         <div className="csr-cta-bg" />
//         <div className="csr-cta-glow" />
//         <div className="csr-container">
//           <motion.div
//             className="csr-cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={ctaInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="csr-cta-headline">Let's Build Stronger Communities Together</h2>
//             <p className="csr-cta-description">
//               Join hands with Uvagai Foundation to create sustainable social impact through 
//               education, healthcare, welfare, community development, and environmental responsibility.
//             </p>
//             <div className="csr-cta-buttons">
//               <a href="/contact" className="csr-cta-primary">
//                 <span>Become a CSR Partner</span>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </a>
//               <a href="/volunteer" className="csr-cta-secondary">
//                 Explore Opportunities
//                 <span className="csr-cta-secondary-arrow">→</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./CSRPartnerDetails.css";

import whyCardEducation from "../assets/educationsupport.png";
import whyCardHealth from "../assets/healthcamp.png";
import whyCardVolunteers from "../assets/skill2.png";
import whyCardSupport from "../assets/support.png";


import educationImg from "../assets/education.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import environmentImg from "../assets/environment.jpg";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo6 from "../assets/logo6.png";

// Motion-enabled Link so the whole card can animate AND navigate
const MotionLink = motion(Link);

const heroSlides = [
  {
    image: educationImg,
    title: "Empowering Minds Through Education",
    subtitle: "Every child deserves access to quality learning. We're building classrooms, digital labs, and scholarship programs that transform lives and create equal opportunities for all.",
    tag: "Education Initiative",
    accent: "red"
  },
  {
    image: healthcareImg,
    title: "Healing Communities, One Life at a Time",
    subtitle: "From rural health camps to preventive care programs, we're ensuring that quality healthcare reaches every doorstep, bringing hope and wellness to underserved communities.",
    tag: "Healthcare Mission",
    accent: "green"
  },
  {
    image: environmentImg,
    title: "Protecting Our Planet for Future Generations",
    subtitle: "Through tree plantations, sustainability campaigns, and green initiatives, we're nurturing a healthier planet and inspiring communities to embrace environmental responsibility.",
    tag: "Environmental Action",
    accent: "green"
  }
];

// Partner logos used in the "Our Partners" marquee
const partnerLogos = [logo1, logo2, logo3, logo4, logo6];


export default function CSRPartnerDetails() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const benefitsRef = useRef(null);
  const partnersRef = useRef(null);
  const processRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const ctaRef = useRef(null);

  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const opportunitiesInView = useInView(opportunitiesRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const benefits = [
    { title: "Measurable Impact", description: "Structured programs with transparent reporting, documentation, and impact assessment.", accent: "red" },
    { title: "Trusted Collaboration", description: "Work with a dedicated team committed to creating meaningful social change.", accent: "green" },
    { title: "Sustainable Development", description: "Long-term initiatives focused on education, healthcare, welfare, and community growth.", accent: "blue" },
    { title: "Employee Volunteering", description: "Create opportunities for employees to actively participate in impactful social initiatives.", accent: "red" },
    { title: "CSR Compliance Support", description: "Assistance in planning and executing CSR projects aligned with organizational objectives.", accent: "green" },
    { title: "Community Recognition", description: "Strengthen your brand reputation through meaningful contributions to society.", accent: "blue" },
  ];

  const processSteps = [
    { step: "01", title: "Consultation", description: "Understand your CSR objectives, priorities, and social impact goals." },
    { step: "02", title: "Program Design", description: "Create customized initiatives aligned with your organization's CSR vision." },
    { step: "03", title: "Implementation", description: "Execute projects efficiently through community engagement and local partnerships." },
    { step: "04", title: "Impact Reporting", description: "Share progress reports, outcomes, and measurable social impact insights." },
  ];

  const partnershipOpportunities = [
    { title: "Education Projects", description: "School support, digital learning, scholarships and youth development.", accent: "red" },
    { title: "Health Programs", description: "Medical camps, wellness initiatives and healthcare awareness.", accent: "green" },
    { title: "Sustainability Projects", description: "Environmental awareness, tree plantation and green initiatives.", accent: "blue" },
    { title: "Employee Engagement", description: "Volunteer programs that strengthen community participation.", accent: "red" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 70,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="csr-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section 
        className="csr-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="csr-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`csr-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="csr-overlay-dark" />
        <div className="csr-overlay-gradient" />
        <div className="csr-overlay-vignette" />

        <div className="csr-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="csr-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="csr-hero-tag">
                <span className="csr-hero-tag-line" />
                <span className="csr-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="csr-hero-headline">{currentSlide.title}</h1>
              <p className="csr-hero-subtitle">{currentSlide.subtitle}</p>

              <motion.div 
                className="csr-hero-cta-wrapper"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <a href="/contact" className="csr-hero-cta">
                  <span>Become a CSR Partner</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="csr-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`csr-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="csr-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="csr-slide-counter">
          <span className="csr-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="csr-counter-sep">/</span>
          <span className="csr-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

    <section className="why-choose">
  <div className="container">

    <span className="section-tag">WHY PARTNER WITH US</span>

    <h2>Why Choose Us</h2>

    <p className="section-description">
      Together we create meaningful impact through education,
      healthcare, volunteering, and CSR sponsorships.
    </p>

    <div className="why-grid">

      <div className="why-card">
        <div className="why-img">
          <img src={whyCardEducation} alt="Education support" />
        </div>
        <div className="why-card-content">
          <h3>Education</h3>
          <p>
            Supporting quality education through scholarships,
            learning initiatives, and skill development programs.
          </p>
        </div>
      </div>

      <div className="why-card">
        <div className="why-img">
          <img src={whyCardHealth} alt="Health camp" />
        </div>
        <div className="why-card-content">
          <h3>Healthcare</h3>
          <p>
            Promoting healthier communities through medical camps,
            awareness drives, and accessible healthcare support.
          </p>
        </div>
      </div>

      <div className="why-card">
        <div className="why-img">
          <img src={whyCardVolunteers} alt="Volunteers" />
        </div>
        <div className="why-card-content">
          <h3>Skill Development</h3>
          <p>
           Empowering youth and women through vocational training, digital literacy, career guidance, and employability programs.
          </p>
        </div>
      </div>

      <div className="why-card">
        <div className="why-img">
          <img src={whyCardSupport} alt="CSR support" />
        </div>
        <div className="why-card-content">
          <h3>Elderly & Orphanage Care</h3>
          <p>
            Supporting senior citizens and orphaned children through healthcare, education, nutrition, emotional care, and community initiatives.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* Partners Section - Logo Marquee */}
      <section className="csr-partners-section" ref={partnersRef}>
        <div className="csr-partners-bg" />
        <div className="csr-container">
          <motion.div
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Trusted Collaborations</span>
            </div>
            <h2 className="csr-section-headline">Our Partners</h2>
            <p className="csr-section-subtitle">
              Collaborating with institutions, corporates, government bodies, and innovation 
              leaders to create meaningful and sustainable social impact.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="csr-logo-marquee"
          initial={{ opacity: 0 }}
          animate={partnersInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <div className="csr-logo-track">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div className="csr-logo-item" key={index}>
                <img
                  src={logo}
                  alt={`Partner logo ${(index % partnerLogos.length) + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="csr-process-section" ref={processRef}>
        <div className="csr-container">
          <motion.div
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
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
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                className="csr-process-card"
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -4 }}
              >
                <div className="csr-process-number">{step.step}</div>
                <h3 className="csr-process-title">{step.title}</h3>
                <p className="csr-process-description">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="csr-opportunities-section" ref={opportunitiesRef}>
        <div className="csr-opportunities-bg" />
        <div className="csr-container">
          <motion.div
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={opportunitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Get Involved</span>
            </div>
            <h2 className="csr-section-headline">Partnership Opportunities</h2>
            <p className="csr-section-subtitle">
              Choose from our diverse range of impact areas and make a difference
            </p>
          </motion.div>

          <motion.div
            className="csr-opportunities-grid"
            initial="hidden"
            animate={opportunitiesInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {partnershipOpportunities.map((opportunity, index) => (
              <MotionLink
                to="/contact"
                className={`csr-opportunity-card opp-${opportunity.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -5 }}
              >
                <div className="opp-card-accent" />
                <h3 className="opp-card-title">{opportunity.title}</h3>
                <p className="opp-card-description">{opportunity.description}</p>
                <div className="opp-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </MotionLink>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="csr-cta-section" ref={ctaRef}>
        <div className="csr-cta-bg" />
        <div className="csr-cta-glow" />
        <div className="csr-container">
          <motion.div
            className="csr-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="csr-cta-headline">Let's Build Stronger Communities Together</h2>
            <p className="csr-cta-description">
              Join hands with Uvagai Foundation to create sustainable social impact through 
              education, healthcare, welfare, community development, and environmental responsibility.
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