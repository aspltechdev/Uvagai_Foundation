// // import "./Course.css";
// // import english from "../assets/english.png";
// // import computer from "../assets/computer.png";
// // import graphic from "../assets/graphic.png";
// // import marketing from "../assets/marketing.png";
// // import web from "../assets/web.png";
// // import leadership from "../assets/leadership.png";

// // export default function Course() {
// //   const internships = [
// //     {

// //       title: "Spoken English & Communication Skills",
// //       duration: "3 Months",
// //       image: english,
// //       delay: "0.1s"
// //     },
// //     {

// //       title: "Digital Literacy & Computer Basics",
// //       duration: "3 Months",
// //       image: computer,
// //       delay: "0.2s"
// //     },
// //     {

// //       title: "Graphic Design",
// //       duration: "3 Months",
// //       image: graphic,
// //       delay: "0.3s"
// //     },
// //     {

// //       title: "Digital Marketing Fundamentals",
// //       duration: "3 Months",
// //       image: marketing,
// //       delay: "0.4s"
// //     },
// //     {

// //       title: "Web Development Basics",
// //       duration: "4 Months",
// //       image: web,
// //       delay: "0.5s"
// //     },
// //     {

// //       title: "Leadership & Community Engagement",
// //       duration: "2 Months",
// //       image: leadership,
// //       delay: "0.6s"
// //     },
// //   ];

// //   // Using english image as hero background
// //   const heroBackground = english;

// //   // Function to handle Apply Now click
// //   const handleApplyClick = () => {
// //     const contactSection = document.getElementById('contact');
// //     if (contactSection) {
// //       contactSection.scrollIntoView({ 
// //         behavior: 'smooth',
// //         block: 'start'
// //       });
// //     } else {
// //       console.log("Apply Now clicked - Redirect to contact");
// //     }
// //   };

// //   return (
// //     <div className="course-page">
// //       {/* HERO SECTION with Background Image */}
// //       <section 
// //         className="hero-section"
// //         style={{
// //           backgroundImage: `url(${heroBackground})`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //           backgroundRepeat: 'no-repeat'
// //         }}
// //       >
// //         <div className="hero-overlay"></div>
// //         <div className="hero-container">
// //           <div className="hero-content">
// //             <div className="hero-text">
// //               <span className="hero-tag">SKILL DEVELOPMENT PROGRAMS</span>
// //                   <h1>Build Your Future <br />With Our Courses</h1>
// //               <p className="hero-subtitle">
// //                 Ensuring dignity and care for every senior citizen
// //               </p>
// //               <p className="hero-description">
// //                Gain practical skills, earn certifications, and launch your career 
// //                 with industry-recognized programs designed for your success.
// //               </p>
// //               <button className="hero-cta" onClick={handleApplyClick}>
// //                 Join the Course→
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* COURSES SECTION */}
// //       <section id="courses" className="courses-section">
// //         <span className="Course-tag">Skills for a Better Future</span>
// //         <div className="container">
// //           <div className="courses-grid">

// //             {internships.map((internship, index) => (
// //               <div 
// //                 className="course-card" 
// //                 key={index}
// //                 style={{ animationDelay: internship.delay }}
// //               >
// //                 <div className="card-image-wrapper">
// //                   <img
// //                     src={internship.image}
// //                     alt={internship.title}
// //                     className="card-image"
// //                   />
// //                   <div className="card-overlay">
// //                     <div className="card-number">{internship.id}</div>
// //                     <h3>{internship.title}</h3>
// //                     <div className="card-duration">
// //                       <span>{internship.duration}</span>
// //                     </div>
// //                     <button className="apply-btn" onClick={handleApplyClick}>
// //                       Apply Now →
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



// // import "./Course.css";
// // import { useNavigate } from "react-router-dom";

// // import english from "../assets/english.png";
// // import computer from "../assets/computer.png";
// // import graphic from "../assets/graphic.png";
// // import marketing from "../assets/marketing.jpeg";
// // import web from "../assets/web.png";
// // import leadership from "../assets/leadership.png";
// // import entrepreneurship from "../assets/entrepreneurship.jpeg";
// // import Career from "../assets/Career.jpeg";
// // import Artificial from "../assets/Artificial.jpeg";

// // export default function Course() {
// //   const navigate = useNavigate();
// //   const internships = [
// //     {
// //       title: "Spoken English & Communication Skills",
// //       duration: "3 Months",
// //       image: english,
// //       delay: "0.1s",
// //       rating: "4.8",
// //       students: "1,234",
// //       lessons: "32"
// //     },
// //     {
// //       title: "Digital Literacy & Computer Basics",
// //       duration: "3 Months",
// //       image: computer,
// //       delay: "0.2s",
// //       rating: "4.6",
// //       students: "892",
// //       lessons: "28"
// //     },
// //     {
// //       title: "Graphic Design",
// //       duration: "3 Months",
// //       image: graphic,
// //       delay: "0.3s",
// //       rating: "4.9",
// //       students: "1,567",
// //       lessons: "45"
// //     },
// //     {
// //       title: "Digital Marketing Fundamentals",
// //       duration: "3 Months",
// //       image: marketing,
// //       delay: "0.4s",
// //       rating: "4.7",
// //       students: "2,103",
// //       lessons: "38"
// //     },
// //     {
// //       title: "Web Development Basics",
// //       duration: "4 Months",
// //       image: web,
// //       delay: "0.5s",
// //       rating: "4.9",
// //       students: "934",
// //       lessons: "40"
// //     },
// //     {
// //       title: "Leadership & Community Engagement",
// //       duration: "2 Months",
// //       image: leadership,
// //       delay: "0.6s",
// //       rating: "4.8",
// //       students: "567",
// //       lessons: "24"
// //     },
// //       {
// //       title: "Entrepreneurship & Business Skills",
// //       duration: "2 Months",
// //       image: entrepreneurship,
// //       delay: "0.6s",
// //       rating: "4.8",
// //       students: "567",
// //       lessons: "24"
// //     },
// //       {
// //       title: "Career Readiness & Employability Skills",
// //       duration: "2 Months",
// //       image: Career,
// //       delay: "0.6s",
// //       rating: "4.8",
// //       students: "567",
// //       lessons: "24"
// //     },
// //       {
// //       title: "Artificial Intelligence & Emerging Technologies",
// //       duration: "2 Months",
// //       image:Artificial ,
// //       delay: "0.6s",
// //       rating: "4.8",
// //       students: "567",
// //       lessons: "24"
// //     },
// //   ];

// //   const heroBackground = english;

// //   const handleApplyClick = () => {
// //     navigate("/contact");
// //   };

// //   return (
// //     <div className="course-page">
// //       {/* HERO SECTION */}
// //       <section
// //         className="hero-section"
// //         style={{
// //           backgroundImage: `url(${heroBackground})`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //           backgroundRepeat: 'no-repeat'
// //         }}
// //       >
// //         <div className="hero-overlay"></div>
// //         <div className="hero-container">
// //           <div className="hero-content">
// //             <div className="hero-text">
// //               <span className="hero-tag">SKILL DEVELOPMENT PROGRAMS</span>
// //               <h1>Build Your Future <br />With Our Courses</h1>
// //               <button className="hero-cta" onClick={handleApplyClick}>
// //                 Join the Course →
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* COURSES SECTION */}
// //       <section id="courses" className="courses-section">
// //         <div className="container">
// //           {/* Section Header */}
// //           <div className="section-header-wrapper">
// //             <div className="section-header-left">
// //               <h2 className="section-main-title">Browse Our Courses</h2>
// //               <p className="section-main-description">
// //                 Explore 500+ hours of expert-led courses and learn at your own place.
// //               </p>
// //             </div>
// //           </div>

// //           <div className="courses-grid">
// //             {internships.map((internship, index) => (
// //               <div
// //                 className="course-card"
// //                 key={index}
// //                 style={{ animationDelay: internship.delay }}
// //               >
// //                 <div className="card-image-wrapper">
// //                   <img
// //                     src={internship.image}
// //                     alt={internship.title}
// //                     className="card-image"
// //                   />
// //                   <div className="card-title-overlay">
// //                     <h3>{internship.title}</h3>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA SECTION */}
// //       <section className="cta-section"> 
// //         <div className="container">
// //           <div className="cta-wrapper">
// //             <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>

// //             <button className="cta-button" onClick={handleApplyClick}>
// //               Apply Now →
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, useInView } from "framer-motion";
// import "./Course.css";

// import english from "../assets/english.png";
// import computer from "../assets/computer.png";
// import graphic from "../assets/graphic.png";
// import marketing from "../assets/marketing.jpeg";
// import web from "../assets/web.png";
// import leadership from "../assets/leadership.png";
// import entrepreneurship from "../assets/entrepreneurship.jpeg";
// import Career from "../assets/Career.jpeg";
// import Artificial from "../assets/Artificial.jpeg";

// export default function Course() {
//   const navigate = useNavigate();
//   const coursesRef = useRef(null);
//   const isInView = useInView(coursesRef, { once: true, margin: "-80px" });

//   const internships = [
//     {
//       title: "Spoken English & Communication Skills",
//       duration: "3 Months",
//       image: english,
//       accent: "red",
//     },
//     {
//       title: "Digital Literacy & Computer Basics",
//       duration: "3 Months",
//       image: computer,
//       accent: "green",
//     },
//     {
//       title: "Graphic Design",
//       duration: "3 Months",
//       image: graphic,
//       accent: "blue",
//     },
//     {
//       title: "Digital Marketing Fundamentals",
//       duration: "3 Months",
//       image: marketing,
//       accent: "red",
//     },
//     {
//       title: "Web Development Basics",
//       duration: "4 Months",
//       image: web,
//       accent: "green",
//     },
//     {
//       title: "Leadership & Community Engagement",
//       duration: "2 Months",
//       image: leadership,
//       accent: "blue",
//     },
//     {
//       title: "Entrepreneurship & Business Skills",
//       duration: "2 Months",
//       image: entrepreneurship,
//       accent: "red",
//     },
//     {
//       title: "Career Readiness & Employability Skills",
//       duration: "2 Months",
//       image: Career,
//       accent: "green",
//     },
//     {
//       title: "Artificial Intelligence & Emerging Technologies",
//       duration: "2 Months",
//       image: Artificial,
//       accent: "blue",
//     },
//   ];

//   const handleApplyClick = () => {
//     navigate("/contact");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="course-page">
//       {/* Hero Section */}
//       <section className="course-hero">
//         <div className="course-hero-bg" />
//         <div className="course-hero-glow course-hero-glow-1" />
//         <div className="course-hero-glow course-hero-glow-2" />

//         <div className="course-container">
//           <motion.div 
//             className="course-hero-content"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="course-hero-tag">
//               <span className="course-hero-tag-line" />
//               <span className="course-hero-tag-text">Skill Development Programs</span>
//             </div>

//             <h1 className="course-hero-headline">
//               Build Your Future With
//               <span className="course-hero-headline-accent"> Our Courses</span>
//             </h1>

//             <p className="course-hero-subtitle">
//               Gain practical skills, earn certifications, and launch your career 
//               with industry-recognized programs designed for your success.
//             </p>

//             <motion.button 
//               className="course-hero-cta"
//               onClick={handleApplyClick}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span>Apply Now</span>
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section className="course-grid-section" ref={coursesRef}>
//         <div className="course-container">
//           <motion.div 
//             className="course-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="course-section-tag">
//               <span className="course-section-tag-line" />
//               <span className="course-section-tag-text">Our Programs</span>
//             </div>
//             <h2 className="course-section-headline">Browse Our Courses</h2>
//             <p className="course-section-subtitle">
//               Explore expert-led courses and learn at your own pace with practical, hands-on training.
//             </p>
//           </motion.div>

//           <motion.div 
//             className="course-grid"
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.08, delayChildren: 0.15 },
//               },
//             }}
//           >
//             {internships.map((internship, index) => (
//               <motion.div
//                 className={`course-card card-${internship.accent}`}
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
//                   },
//                 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="course-card-image">
//                   <img src={internship.image} alt={internship.title} />
//                   <div className="course-card-overlay" />

//                   <div className="course-card-duration">
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                       <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
//                       <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                     </svg>
//                     <span>{internship.duration}</span>
//                   </div>
//                 </div>

//                 <div className="course-card-content">
//                   <h3 className="course-card-title">{internship.title}</h3>
//                 </div>

//                 <div className={`course-card-accent accent-${internship.accent}`} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="course-cta-section">
//         <div className="course-cta-bg" />
//         <div className="course-cta-glow" />

//         <div className="course-container">
//           <motion.div 
//             className="course-cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="course-cta-headline">
//               Ready to Start Your Learning Journey?
//             </h2>
//             <p className="course-cta-description">
//               Join our programs and gain the skills you need to build a brighter future.
//             </p>
//             <motion.button 
//               className="course-cta-btn"
//               onClick={handleApplyClick}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span>Apply Now</span>
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import "./Course.css";

// import english from "../assets/english.png";
// import computer from "../assets/computer.jpeg";
// import graphic from "../assets/graphic.jpeg";
// import marketing from "../assets/marketing.jpeg";
// import web from "../assets/web.png";
// import leadership from "../assets/leadership.png";
// import entrepreneurship from "../assets/entrepreneurship.jpeg";
// import Career from "../assets/Career.jpeg";
// import Artificial from "../assets/Artificial.jpeg";

// export default function Course() {
//   const navigate = useNavigate();
//   const coursesRef = useRef(null);
//   const isInView = useInView(coursesRef, { once: true, margin: "-80px" });

//   const internships = [
//     {
//       title: "Spoken English & Communication Skills",
//       duration: "3 Months",
//       image: english,
//       accent: "red",
//     },
//     {
//       title: "Digital Literacy & Computer Basics",
//       duration: "3 Months",
//       image: computer,
//       accent: "green",
//     },
//     {
//       title: "Graphic Design",
//       duration: "3 Months",
//       image: graphic,
//       accent: "blue",
//     },
//     {
//       title: "Digital Marketing Fundamentals",
//       duration: "3 Months",
//       image: marketing,
//       accent: "red",
//     },
//     {
//       title: "Web Development Basics",
//       duration: "4 Months",
//       image: web,
//       accent: "green",
//     },
//     {
//       title: "Leadership & Community Engagement",
//       duration: "2 Months",
//       image: leadership,
//       accent: "blue",
//     },
//     {
//       title: "Entrepreneurship & Business Skills",
//       duration: "2 Months",
//       image: entrepreneurship,
//       accent: "red",
//     },
//     {
//       title: "Career Readiness & Employability Skills",
//       duration: "2 Months",
//       image: Career,
//       accent: "green",
//     },
//     {
//       title: "Artificial Intelligence & Emerging Technologies",
//       duration: "2 Months",
//       image: Artificial,
//       accent: "blue",
//     },
//   ];

//   // Hero slideshow
//   const [current, setCurrent] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!isHovered) {
//       const timer = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % internships.length);
//       }, 4000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered, internships.length]);

//   const currentSlide = internships[current];

//   const handleApplyClick = () => {
//     navigate("/contact");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="course-page">
//       {/* Hero Section with Background Slideshow */}
//       <section
//         className="course-hero"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Background Slides */}
//         <div className="course-slides-container">
//           {internships.map((internship, index) => (
//             <motion.div
//               key={index}
//               className={`course-slide-bg ${index === current ? 'active' : ''}`}
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: index === current ? 1 : 0,
//                 scale: index === current ? 1 : 1.08,
//               }}
//               transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <img src={internship.image} alt={internship.title} />
//             </motion.div>
//           ))}
//         </div>

//         {/* Overlay System */}
//         <div className="course-overlay-dark" />
//         <div className="course-overlay-gradient" />
//         <div className="course-overlay-vignette" />

//         {/* Centered Content */}
//         <div className="course-hero-container">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               className="course-hero-content"
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -25 }}
//               transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="course-hero-tag">
//                 <span className="course-hero-tag-line" />
//                 <span className="course-hero-tag-text">Skill Development Programs</span>
//               </div>

//               <h1 className="course-hero-headline">
//                 Build Your Future With
//                 <span className="course-hero-headline-accent"> Our Courses</span>
//               </h1>

//               <p className="course-hero-subtitle">
//                 Gain practical skills, earn certifications, and launch your career
//                 with industry-recognized programs designed for your success.
//               </p>

//               {/* Current Course Info */}
//               <motion.div
//                 className={`course-hero-info info-${currentSlide.accent}`}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.25, duration: 0.4 }}
//               >
//                 <span className="course-hero-info-duration">
//                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
//                     <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                   </svg>
//                   {currentSlide.duration}
//                 </span>
//                 <span className="course-hero-info-title">{currentSlide.title}</span>
//               </motion.div>

//               <motion.div
//                 className="course-hero-cta-wrapper"
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.4 }}
//               >
//                 <motion.button
//                   className="course-hero-cta"
//                   onClick={handleApplyClick}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <span>Apply Now</span>
//                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Slide Navigation Dots */}
//         <div className="course-slide-nav">
//           {internships.map((_, index) => (
//             <button
//               key={index}
//               className={`course-slide-dot ${index === current ? 'active' : ''}`}
//               onClick={() => setCurrent(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               <motion.span
//                 className="course-slide-dot-fill"
//                 initial={{ width: '0%' }}
//                 animate={{
//                   width: index === current && !isHovered ? '100%' : '0%',
//                 }}
//                 transition={{
//                   duration: index === current ? 4 : 0.3,
//                   ease: "linear",
//                 }}
//               />
//             </button>
//           ))}
//         </div>

//         {/* Slide Counter */}
//         <div className="course-slide-counter">
//           <span className="course-counter-current">
//             {(current + 1).toString().padStart(2, '0')}
//           </span>
//           <span className="course-counter-sep">/</span>
//           <span className="course-counter-total">
//             {internships.length.toString().padStart(2, '0')}
//           </span>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section className="course-grid-section" ref={coursesRef}>
//         <div className="course-container">
//           <motion.div
//             className="course-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="course-section-tag">
//               <span className="course-section-tag-line" />
//               <span className="course-section-tag-text">Our Programs</span>
//             </div>
//             <h2 className="course-section-headline">Browse Our Courses</h2>
//             <p className="course-section-subtitle">
//               Explore expert-led courses and learn at your own pace with practical, hands-on training.
//             </p>
//           </motion.div>

//           <motion.div
//             className="course-grid"
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.08, delayChildren: 0.15 },
//               },
//             }}
//           >
//             {internships.map((internship, index) => (
//               <motion.div
//                 className={`course-card card-${internship.accent}`}
//                 // key={index}
//                 // onClick={() => handleApplyClick(internship)}
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     transition: {
//                       duration: 0.6,
//                       ease: [0.33, 0.1, 0.25, 1],
//                     },
//                   },
//                 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <div className="course-card-image">
//                   <img src={internship.image} alt={internship.title} />
//                   <div className="course-card-overlay" />

//                   <div className="course-card-duration">
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                       <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
//                       <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                     </svg>
//                     <span>{internship.duration}</span>
//                   </div>
//                 </div>

//                 <div className="course-card-content">
//                   <h3 className="course-card-title">{internship.title}</h3>
//                 </div>

//                 <div className={`course-card-accent accent-${internship.accent}`} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="course-cta-section">
//         <div className="course-cta-bg" />
//         <div className="course-cta-glow" />

//         <div className="course-container">
//           <motion.div
//             className="course-cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="course-cta-headline">
//               Ready to Start Your Learning Journey?
//             </h2>
//             <p className="course-cta-description">
//               Join our programs and gain the skills you need to build a brighter future.
//             </p>
//             <motion.button
//               className="course-cta-btn"
//               onClick={handleApplyClick}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span>Apply Now</span>
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Course.css";

import english from "../assets/english.png";
import computer from "../assets/computer.jpeg";
import graphic from "../assets/graphic.jpeg";
import marketing from "../assets/marketing.jpeg";
import web from "../assets/web.png";
import leadership from "../assets/leadership.png";
import entrepreneurship from "../assets/entrepreneurship.jpeg";
import Career from "../assets/Career.jpeg";
import Artificial from "../assets/Artificial.jpeg";

export default function Course() {
  const navigate = useNavigate();
  const coursesRef = useRef(null);
  const isInView = useInView(coursesRef, { once: true, margin: "-80px" });

  const internships = [
    {
      title: "Spoken English & Communication Skills",
      duration: "3 Months",
      image: english,
      accent: "red",
    },
    {
      title: "Digital Literacy & Computer Basics",
      duration: "3 Months",
      image: computer,
      accent: "green",
    },
    {
      title: "Graphic Design",
      duration: "3 Months",
      image: graphic,
      accent: "blue",
    },
    {
      title: "Digital Marketing Fundamentals",
      duration: "3 Months",
      image: marketing,
      accent: "red",
    },
    {
      title: "Web Development Basics",
      duration: "4 Months",
      image: web,
      accent: "green",
    },
    {
      title: "Leadership & Community Engagement",
      duration: "2 Months",
      image: leadership,
      accent: "blue",
    },
    {
      title: "Entrepreneurship & Business Skills",
      duration: "2 Months",
      image: entrepreneurship,
      accent: "red",
    },
    {
      title: "Career Readiness & Employability Skills",
      duration: "2 Months",
      image: Career,
      accent: "green",
    },
    {
      title: "Artificial Intelligence & Emerging Technologies",
      duration: "2 Months",
      image: Artificial,
      accent: "blue",
    },
  ];

  // Hero slideshow
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % internships.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered, internships.length]);

  const currentSlide = internships[current];

  const handleApplyClick = (course) => {
    navigate("/contact", {
      state: {
        course: course.title,
        duration: course.duration,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="course-page">
      {/* Hero Section with Background Slideshow */}
      <section
        className="course-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Slides */}
        <div className="course-slides-container">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className={`course-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.08,
              }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={internship.image} alt={internship.title} />
            </motion.div>
          ))}
        </div>

        {/* Overlay System */}
        <div className="course-overlay-dark" />
        <div className="course-overlay-gradient" />
        <div className="course-overlay-vignette" />

        {/* Centered Content */}
        <div className="course-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="course-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="course-hero-tag">
                <span className="course-hero-tag-line" />
                <span className="course-hero-tag-text">Skill Development Programs</span>
              </div>

              <h1 className="course-hero-headline">
                Build Your Future With
                <span className="course-hero-headline-accent"> Our Courses</span>
              </h1>

              <p className="course-hero-subtitle">
                Gain practical skills, earn certifications, and launch your career
                with industry-recognized programs designed for your success.
              </p>

              {/* Current Course Info */}
              <motion.div
                className={`course-hero-info info-${currentSlide.accent}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <span className="course-hero-info-duration">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {currentSlide.duration}
                </span>
                <span className="course-hero-info-title">{currentSlide.title}</span>
              </motion.div>

              <motion.div
                className="course-hero-cta-wrapper"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <motion.button
                  className="course-hero-cta"
                  onClick={() => handleApplyClick(currentSlide)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Apply Now</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Navigation Dots */}
        <div className="course-slide-nav">
          {internships.map((_, index) => (
            <button
              key={index}
              className={`course-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.span
                className="course-slide-dot-fill"
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
        <div className="course-slide-counter">
          <span className="course-counter-current">
            {(current + 1).toString().padStart(2, '0')}
          </span>
          <span className="course-counter-sep">/</span>
          <span className="course-counter-total">
            {internships.length.toString().padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* Courses Section */}
      <section className="course-grid-section" ref={coursesRef}>
        <div className="course-container">
          <motion.div
            className="course-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="course-section-tag">
              <span className="course-section-tag-line" />
              <span className="course-section-tag-text">Our Programs</span>
            </div>
            <h2 className="course-section-headline">Browse Our Courses</h2>
            <p className="course-section-subtitle">
              Explore expert-led courses and learn at your own pace with practical, hands-on training.
            </p>
          </motion.div>

          <motion.div
            className="course-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
          >
            {internships.map((internship, index) => (
              <motion.div
                className={`course-card card-${internship.accent}`}
                key={index}
                onClick={() => handleApplyClick(internship)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.33, 0.1, 0.25, 1],
                    },
                  },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="course-card-image">
                  <img src={internship.image} alt={internship.title} />
                  <div className="course-card-overlay" />

                  <div className="course-card-duration">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>{internship.duration}</span>
                  </div>
                </div>

                <div className="course-card-content">
                  <h3 className="course-card-title">{internship.title}</h3>
                  
                  {/* CTA Button on Card - Changed to "Explore Program" */}
                  <button
                    className={`course-card-cta cta-${internship.accent}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyClick(internship);
                    }}
                  >
                    Explore Program →
                  </button>
                </div>

                <div className={`course-card-accent accent-${internship.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="course-cta-section">
        <div className="course-cta-bg" />
        <div className="course-cta-glow" />

        <div className="course-container">
          <motion.div
            className="course-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="course-cta-headline">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="course-cta-description">
              Join our programs and gain the skills you need to build a brighter future.
            </p>
            <motion.button
              className="course-cta-btn"
              onClick={() => handleApplyClick(internships[0])}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Apply Now</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
