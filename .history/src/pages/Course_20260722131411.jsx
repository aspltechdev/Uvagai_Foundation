// // // import "./Course.css";
// // // import english from "../assets/english.png";
// // // import computer from "../assets/computer.png";
// // // import graphic from "../assets/graphic.png";
// // // import marketing from "../assets/marketing.png";
// // // import web from "../assets/web.png";
// // // import leadership from "../assets/leadership.png";

// // // export default function Course() {
// // //   const internships = [
// // //     {

// // //       title: "Spoken English & Communication Skills",
// // //       duration: "3 Months",
// // //       image: english,
// // //       delay: "0.1s"
// // //     },
// // //     {

// // //       title: "Digital Literacy & Computer Basics",
// // //       duration: "3 Months",
// // //       image: computer,
// // //       delay: "0.2s"
// // //     },
// // //     {

// // //       title: "Graphic Design",
// // //       duration: "3 Months",
// // //       image: graphic,
// // //       delay: "0.3s"
// // //     },
// // //     {

// // //       title: "Digital Marketing Fundamentals",
// // //       duration: "3 Months",
// // //       image: marketing,
// // //       delay: "0.4s"
// // //     },
// // //     {

// // //       title: "Web Development Basics",
// // //       duration: "4 Months",
// // //       image: web,
// // //       delay: "0.5s"
// // //     },
// // //     {

// // //       title: "Leadership & Community Engagement",
// // //       duration: "2 Months",
// // //       image: leadership,
// // //       delay: "0.6s"
// // //     },
// // //   ];

// // //   // Using english image as hero background
// // //   const heroBackground = english;

// // //   // Function to handle Apply Now click
// // //   const handleApplyClick = () => {
// // //     const contactSection = document.getElementById('contact');
// // //     if (contactSection) {
// // //       contactSection.scrollIntoView({ 
// // //         behavior: 'smooth',
// // //         block: 'start'
// // //       });
// // //     } else {
// // //       console.log("Apply Now clicked - Redirect to contact");
// // //     }
// // //   };

// // //   return (
// // //     <div className="course-page">
// // //       {/* HERO SECTION with Background Image */}
// // //       <section 
// // //         className="hero-section"
// // //         style={{
// // //           backgroundImage: `url(${heroBackground})`,
// // //           backgroundSize: 'cover',
// // //           backgroundPosition: 'center',
// // //           backgroundRepeat: 'no-repeat'
// // //         }}
// // //       >
// // //         <div className="hero-overlay"></div>
// // //         <div className="hero-container">
// // //           <div className="hero-content">
// // //             <div className="hero-text">
// // //               <span className="hero-tag">SKILL DEVELOPMENT PROGRAMS</span>
// // //                   <h1>Build Your Future <br />With Our Courses</h1>
// // //               <p className="hero-subtitle">
// // //                 Ensuring dignity and care for every senior citizen
// // //               </p>
// // //               <p className="hero-description">
// // //                Gain practical skills, earn certifications, and launch your career 
// // //                 with industry-recognized programs designed for your success.
// // //               </p>
// // //               <button className="hero-cta" onClick={handleApplyClick}>
// // //                 Join the Course→
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* COURSES SECTION */}
// // //       <section id="courses" className="courses-section">
// // //         <span className="Course-tag">Skills for a Better Future</span>
// // //         <div className="container">
// // //           <div className="courses-grid">

// // //             {internships.map((internship, index) => (
// // //               <div 
// // //                 className="course-card" 
// // //                 key={index}
// // //                 style={{ animationDelay: internship.delay }}
// // //               >
// // //                 <div className="card-image-wrapper">
// // //                   <img
// // //                     src={internship.image}
// // //                     alt={internship.title}
// // //                     className="card-image"
// // //                   />
// // //                   <div className="card-overlay">
// // //                     <div className="card-number">{internship.id}</div>
// // //                     <h3>{internship.title}</h3>
// // //                     <div className="card-duration">
// // //                       <span>{internship.duration}</span>
// // //                     </div>
// // //                     <button className="apply-btn" onClick={handleApplyClick}>
// // //                       Apply Now →
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }



// // // import "./Course.css";
// // // import { useNavigate } from "react-router-dom";

// // // import english from "../assets/english.png";
// // // import computer from "../assets/computer.png";
// // // import graphic from "../assets/graphic.png";
// // // import marketing from "../assets/marketing.jpeg";
// // // import web from "../assets/web.png";
// // // import leadership from "../assets/leadership.png";
// // // import entrepreneurship from "../assets/entrepreneurship.jpeg";
// // // import Career from "../assets/Career.jpeg";
// // // import Artificial from "../assets/Artificial.jpeg";

// // // export default function Course() {
// // //   const navigate = useNavigate();
// // //   const internships = [
// // //     {
// // //       title: "Spoken English & Communication Skills",
// // //       duration: "3 Months",
// // //       image: english,
// // //       delay: "0.1s",
// // //       rating: "4.8",
// // //       students: "1,234",
// // //       lessons: "32"
// // //     },
// // //     {
// // //       title: "Digital Literacy & Computer Basics",
// // //       duration: "3 Months",
// // //       image: computer,
// // //       delay: "0.2s",
// // //       rating: "4.6",
// // //       students: "892",
// // //       lessons: "28"
// // //     },
// // //     {
// // //       title: "Graphic Design",
// // //       duration: "3 Months",
// // //       image: graphic,
// // //       delay: "0.3s",
// // //       rating: "4.9",
// // //       students: "1,567",
// // //       lessons: "45"
// // //     },
// // //     {
// // //       title: "Digital Marketing Fundamentals",
// // //       duration: "3 Months",
// // //       image: marketing,
// // //       delay: "0.4s",
// // //       rating: "4.7",
// // //       students: "2,103",
// // //       lessons: "38"
// // //     },
// // //     {
// // //       title: "Web Development Basics",
// // //       duration: "4 Months",
// // //       image: web,
// // //       delay: "0.5s",
// // //       rating: "4.9",
// // //       students: "934",
// // //       lessons: "40"
// // //     },
// // //     {
// // //       title: "Leadership & Community Engagement",
// // //       duration: "2 Months",
// // //       image: leadership,
// // //       delay: "0.6s",
// // //       rating: "4.8",
// // //       students: "567",
// // //       lessons: "24"
// // //     },
// // //       {
// // //       title: "Entrepreneurship & Business Skills",
// // //       duration: "2 Months",
// // //       image: entrepreneurship,
// // //       delay: "0.6s",
// // //       rating: "4.8",
// // //       students: "567",
// // //       lessons: "24"
// // //     },
// // //       {
// // //       title: "Career Readiness & Employability Skills",
// // //       duration: "2 Months",
// // //       image: Career,
// // //       delay: "0.6s",
// // //       rating: "4.8",
// // //       students: "567",
// // //       lessons: "24"
// // //     },
// // //       {
// // //       title: "Artificial Intelligence & Emerging Technologies",
// // //       duration: "2 Months",
// // //       image:Artificial ,
// // //       delay: "0.6s",
// // //       rating: "4.8",
// // //       students: "567",
// // //       lessons: "24"
// // //     },
// // //   ];

// // //   const heroBackground = english;

// // //   const handleApplyClick = () => {
// // //     navigate("/contact");
// // //   };

// // //   return (
// // //     <div className="course-page">
// // //       {/* HERO SECTION */}
// // //       <section
// // //         className="hero-section"
// // //         style={{
// // //           backgroundImage: `url(${heroBackground})`,
// // //           backgroundSize: 'cover',
// // //           backgroundPosition: 'center',
// // //           backgroundRepeat: 'no-repeat'
// // //         }}
// // //       >
// // //         <div className="hero-overlay"></div>
// // //         <div className="hero-container">
// // //           <div className="hero-content">
// // //             <div className="hero-text">
// // //               <span className="hero-tag">SKILL DEVELOPMENT PROGRAMS</span>
// // //               <h1>Build Your Future <br />With Our Courses</h1>
// // //               <button className="hero-cta" onClick={handleApplyClick}>
// // //                 Join the Course →
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* COURSES SECTION */}
// // //       <section id="courses" className="courses-section">
// // //         <div className="container">
// // //           {/* Section Header */}
// // //           <div className="section-header-wrapper">
// // //             <div className="section-header-left">
// // //               <h2 className="section-main-title">Browse Our Courses</h2>
// // //               <p className="section-main-description">
// // //                 Explore 500+ hours of expert-led courses and learn at your own place.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="courses-grid">
// // //             {internships.map((internship, index) => (
// // //               <div
// // //                 className="course-card"
// // //                 key={index}
// // //                 style={{ animationDelay: internship.delay }}
// // //               >
// // //                 <div className="card-image-wrapper">
// // //                   <img
// // //                     src={internship.image}
// // //                     alt={internship.title}
// // //                     className="card-image"
// // //                   />
// // //                   <div className="card-title-overlay">
// // //                     <h3>{internship.title}</h3>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA SECTION */}
// // //       <section className="cta-section"> 
// // //         <div className="container">
// // //           <div className="cta-wrapper">
// // //             <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>

// // //             <button className="cta-button" onClick={handleApplyClick}>
// // //               Apply Now →
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // import { useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion, useInView } from "framer-motion";
// // import "./Course.css";

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
// //   const coursesRef = useRef(null);
// //   const isInView = useInView(coursesRef, { once: true, margin: "-80px" });

// //   const internships = [
// //     {
// //       title: "Spoken English & Communication Skills",
// //       duration: "3 Months",
// //       image: english,
// //       accent: "red",
// //     },
// //     {
// //       title: "Digital Literacy & Computer Basics",
// //       duration: "3 Months",
// //       image: computer,
// //       accent: "green",
// //     },
// //     {
// //       title: "Graphic Design",
// //       duration: "3 Months",
// //       image: graphic,
// //       accent: "blue",
// //     },
// //     {
// //       title: "Digital Marketing Fundamentals",
// //       duration: "3 Months",
// //       image: marketing,
// //       accent: "red",
// //     },
// //     {
// //       title: "Web Development Basics",
// //       duration: "4 Months",
// //       image: web,
// //       accent: "green",
// //     },
// //     {
// //       title: "Leadership & Community Engagement",
// //       duration: "2 Months",
// //       image: leadership,
// //       accent: "blue",
// //     },
// //     {
// //       title: "Entrepreneurship & Business Skills",
// //       duration: "2 Months",
// //       image: entrepreneurship,
// //       accent: "red",
// //     },
// //     {
// //       title: "Career Readiness & Employability Skills",
// //       duration: "2 Months",
// //       image: Career,
// //       accent: "green",
// //     },
// //     {
// //       title: "Artificial Intelligence & Emerging Technologies",
// //       duration: "2 Months",
// //       image: Artificial,
// //       accent: "blue",
// //     },
// //   ];

// //   const handleApplyClick = () => {
// //     navigate("/contact");
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <div className="course-page">
// //       {/* Hero Section */}
// //       <section className="course-hero">
// //         <div className="course-hero-bg" />
// //         <div className="course-hero-glow course-hero-glow-1" />
// //         <div className="course-hero-glow course-hero-glow-2" />

// //         <div className="course-container">
// //           <motion.div 
// //             className="course-hero-content"
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
// //           >
// //             <div className="course-hero-tag">
// //               <span className="course-hero-tag-line" />
// //               <span className="course-hero-tag-text">Skill Development Programs</span>
// //             </div>

// //             <h1 className="course-hero-headline">
// //               Build Your Future With
// //               <span className="course-hero-headline-accent"> Our Courses</span>
// //             </h1>

// //             <p className="course-hero-subtitle">
// //               Gain practical skills, earn certifications, and launch your career 
// //               with industry-recognized programs designed for your success.
// //             </p>

// //             <motion.button 
// //               className="course-hero-cta"
// //               onClick={handleApplyClick}
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //             >
// //               <span>Apply Now</span>
// //               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //                 <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //               </svg>
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Courses Section */}
// //       <section className="course-grid-section" ref={coursesRef}>
// //         <div className="course-container">
// //           <motion.div 
// //             className="course-section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
// //           >
// //             <div className="course-section-tag">
// //               <span className="course-section-tag-line" />
// //               <span className="course-section-tag-text">Our Programs</span>
// //             </div>
// //             <h2 className="course-section-headline">Browse Our Courses</h2>
// //             <p className="course-section-subtitle">
// //               Explore expert-led courses and learn at your own pace with practical, hands-on training.
// //             </p>
// //           </motion.div>

// //           <motion.div 
// //             className="course-grid"
// //             initial="hidden"
// //             animate={isInView ? "visible" : "hidden"}
// //             variants={{
// //               hidden: { opacity: 0 },
// //               visible: {
// //                 opacity: 1,
// //                 transition: { staggerChildren: 0.08, delayChildren: 0.15 },
// //               },
// //             }}
// //           >
// //             {internships.map((internship, index) => (
// //               <motion.div
// //                 className={`course-card card-${internship.accent}`}
// //                 key={index}
// //                 variants={{
// //                   hidden: { opacity: 0, y: 30 },
// //                   visible: {
// //                     opacity: 1,
// //                     y: 0,
// //                     transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
// //                   },
// //                 }}
// //                 whileHover={{ y: -5 }}
// //               >
// //                 <div className="course-card-image">
// //                   <img src={internship.image} alt={internship.title} />
// //                   <div className="course-card-overlay" />

// //                   <div className="course-card-duration">
// //                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //                       <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
// //                       <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// //                     </svg>
// //                     <span>{internship.duration}</span>
// //                   </div>
// //                 </div>

// //                 <div className="course-card-content">
// //                   <h3 className="course-card-title">{internship.title}</h3>
// //                 </div>

// //                 <div className={`course-card-accent accent-${internship.accent}`} />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="course-cta-section">
// //         <div className="course-cta-bg" />
// //         <div className="course-cta-glow" />

// //         <div className="course-container">
// //           <motion.div 
// //             className="course-cta-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
// //           >
// //             <h2 className="course-cta-headline">
// //               Ready to Start Your Learning Journey?
// //             </h2>
// //             <p className="course-cta-description">
// //               Join our programs and gain the skills you need to build a brighter future.
// //             </p>
// //             <motion.button 
// //               className="course-cta-btn"
// //               onClick={handleApplyClick}
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //             >
// //               <span>Apply Now</span>
// //               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //                 <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //               </svg>
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// // import { useRef, useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion, AnimatePresence, useInView } from "framer-motion";
// // import "./Course.css";

// // import english from "../assets/english.png";
// // import computer from "../assets/computer.jpeg";
// // import graphic from "../assets/graphic.jpeg";
// // import marketing from "../assets/marketing.jpeg";
// // import web from "../assets/web.png";
// // import leadership from "../assets/leadership.png";
// // import entrepreneurship from "../assets/entrepreneurship.jpeg";
// // import Career from "../assets/Career.jpeg";
// // import Artificial from "../assets/Artificial.jpeg";

// // export default function Course() {
// //   const navigate = useNavigate();
// //   const coursesRef = useRef(null);
// //   const isInView = useInView(coursesRef, { once: true, margin: "-80px" });

// //   const internships = [
// //     {
// //       title: "Spoken English & Communication Skills",
// //       duration: "3 Months",
// //       image: english,
// //       accent: "red",
// //     },
// //     {
// //       title: "Digital Literacy & Computer Basics",
// //       duration: "3 Months",
// //       image: computer,
// //       accent: "green",
// //     },
// //     {
// //       title: "Graphic Design",
// //       duration: "3 Months",
// //       image: graphic,
// //       accent: "blue",
// //     },
// //     {
// //       title: "Digital Marketing Fundamentals",
// //       duration: "3 Months",
// //       image: marketing,
// //       accent: "red",
// //     },
// //     {
// //       title: "Web Development Basics",
// //       duration: "4 Months",
// //       image: web,
// //       accent: "green",
// //     },
// //     {
// //       title: "Leadership & Community Engagement",
// //       duration: "2 Months",
// //       image: leadership,
// //       accent: "blue",
// //     },
// //     {
// //       title: "Entrepreneurship & Business Skills",
// //       duration: "2 Months",
// //       image: entrepreneurship,
// //       accent: "red",
// //     },
// //     {
// //       title: "Career Readiness & Employability Skills",
// //       duration: "2 Months",
// //       image: Career,
// //       accent: "green",
// //     },
// //     {
// //       title: "Artificial Intelligence & Emerging Technologies",
// //       duration: "2 Months",
// //       image: Artificial,
// //       accent: "blue",
// //     },
// //   ];

// //   // Hero slideshow
// //   const [current, setCurrent] = useState(0);
// //   const [isHovered, setIsHovered] = useState(false);

// //   useEffect(() => {
// //     if (!isHovered) {
// //       const timer = setInterval(() => {
// //         setCurrent((prev) => (prev + 1) % internships.length);
// //       }, 4000);
// //       return () => clearInterval(timer);
// //     }
// //   }, [isHovered, internships.length]);

// //   const currentSlide = internships[current];

// //   const handleApplyClick = () => {
// //     navigate("/contact");
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <div className="course-page">
// //       {/* Hero Section with Background Slideshow */}
// //       <section
// //         className="course-hero"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >
// //         {/* Background Slides */}
// //         <div className="course-slides-container">
// //           {internships.map((internship, index) => (
// //             <motion.div
// //               key={index}
// //               className={`course-slide-bg ${index === current ? 'active' : ''}`}
// //               initial={{ opacity: 0 }}
// //               animate={{
// //                 opacity: index === current ? 1 : 0,
// //                 scale: index === current ? 1 : 1.08,
// //               }}
// //               transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
// //             >
// //               <img src={internship.image} alt={internship.title} />
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Overlay System */}
// //         <div className="course-overlay-dark" />
// //         <div className="course-overlay-gradient" />
// //         <div className="course-overlay-vignette" />

// //         {/* Centered Content */}
// //         <div className="course-hero-container">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={current}
// //               className="course-hero-content"
// //               initial={{ opacity: 0, y: 25 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -25 }}
// //               transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
// //             >
// //               <div className="course-hero-tag">
// //                 <span className="course-hero-tag-line" />
// //                 <span className="course-hero-tag-text">Skill Development Programs</span>
// //               </div>

// //               <h1 className="course-hero-headline">
// //                 Build Your Future With
// //                 <span className="course-hero-headline-accent"> Our Courses</span>
// //               </h1>

// //               <p className="course-hero-subtitle">
// //                 Gain practical skills, earn certifications, and launch your career
// //                 with industry-recognized programs designed for your success.
// //               </p>

// //               {/* Current Course Info */}
// //               <motion.div
// //                 className={`course-hero-info info-${currentSlide.accent}`}
// //                 initial={{ opacity: 0, y: 15 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.25, duration: 0.4 }}
// //               >
// //                 <span className="course-hero-info-duration">
// //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
// //                     <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
// //                   </svg>
// //                   {currentSlide.duration}
// //                 </span>
// //                 <span className="course-hero-info-title">{currentSlide.title}</span>
// //               </motion.div>

// //               <motion.div
// //                 className="course-hero-cta-wrapper"
// //                 initial={{ opacity: 0, y: 15 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4, duration: 0.4 }}
// //               >
// //                 <motion.button
// //                   className="course-hero-cta"
// //                   onClick={handleApplyClick}
// //                   whileHover={{ scale: 1.03 }}
// //                   whileTap={{ scale: 0.97 }}
// //                 >
// //                   <span>Apply Now</span>
// //                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //                     <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //                   </svg>
// //                 </motion.button>
// //               </motion.div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>

// //         {/* Slide Navigation Dots */}
// //         <div className="course-slide-nav">
// //           {internships.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`course-slide-dot ${index === current ? 'active' : ''}`}
// //               onClick={() => setCurrent(index)}
// //               aria-label={`Go to slide ${index + 1}`}
// //             >
// //               <motion.span
// //                 className="course-slide-dot-fill"
// //                 initial={{ width: '0%' }}
// //                 animate={{
// //                   width: index === current && !isHovered ? '100%' : '0%',
// //                 }}
// //                 transition={{
// //                   duration: index === current ? 4 : 0.3,
// //                   ease: "linear",
// //                 }}
// //               />
// //             </button>
// //           ))}
// //         </div>

// //         {/* Slide Counter */}
// //         <div className="course-slide-counter">
// //           <span className="course-counter-current">
// //             {(current + 1).toString().padStart(2, '0')}
// //           </span>
// //           <span className="course-counter-sep">/</span>
// //           <span className="course-counter-total">
// //             {internships.length.toString().padStart(2, '0')}
// //           </span>
// //         </div>
// //       </section>

// //       {/* Courses Section */}
// //       <section className="course-grid-section" ref={coursesRef}>
// //         <div className="course-container">
// //           <motion.div
// //             className="course-section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
// //           >
// //             <div className="course-section-tag">
// //               <span className="course-section-tag-line" />
// //               <span className="course-section-tag-text">Our Programs</span>
// //             </div>
// //             <h2 className="course-section-headline">Browse Our Courses</h2>
// //             <p className="course-section-subtitle">
// //               Explore expert-led courses and learn at your own pace with practical, hands-on training.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             className="course-grid"
// //             initial="hidden"
// //             animate={isInView ? "visible" : "hidden"}
// //             variants={{
// //               hidden: { opacity: 0 },
// //               visible: {
// //                 opacity: 1,
// //                 transition: { staggerChildren: 0.08, delayChildren: 0.15 },
// //               },
// //             }}
// //           >
// //             {internships.map((internship, index) => (
// //               <motion.div
// //                 className={`course-card card-${internship.accent}`}
// //                 // key={index}
// //                 // onClick={() => handleApplyClick(internship)}
// //                 variants={{
// //                   hidden: { opacity: 0, y: 30 },
// //                   visible: {
// //                     opacity: 1,
// //                     y: 0,
// //                     transition: {
// //                       duration: 0.6,
// //                       ease: [0.33, 0.1, 0.25, 1],
// //                     },
// //                   },
// //                 }}
// //                 whileHover={{ y: -8, scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //               >
// //                 <div className="course-card-image">
// //                   <img src={internship.image} alt={internship.title} />
// //                   <div className="course-card-overlay" />

// //                   <div className="course-card-duration">
// //                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //                       <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
// //                       <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
// //                     </svg>
// //                     <span>{internship.duration}</span>
// //                   </div>
// //                 </div>

// //                 <div className="course-card-content">
// //                   <h3 className="course-card-title">{internship.title}</h3>
// //                 </div>

// //                 <div className={`course-card-accent accent-${internship.accent}`} />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="course-cta-section">
// //         <div className="course-cta-bg" />
// //         <div className="course-cta-glow" />

// //         <div className="course-container">
// //           <motion.div
// //             className="course-cta-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
// //           >
// //             <h2 className="course-cta-headline">
// //               Ready to Start Your Learning Journey?
// //             </h2>
// //             <p className="course-cta-description">
// //               Join our programs and gain the skills you need to build a brighter future.
// //             </p>
// //             <motion.button
// //               className="course-cta-btn"
// //               onClick={handleApplyClick}
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //             >
// //               <span>Apply Now</span>
// //               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //                 <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //               </svg>
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// // import { useRef, useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion, AnimatePresence, useInView } from "framer-motion";
// // import "./Course.css";

// // import english from "../assets/english.png";
// // import computer from "../assets/computer.jpeg";
// // import graphic from "../assets/graphic.jpeg";
// // import marketing from "../assets/marketing.jpeg";
// // import web from "../assets/web.png";
// // import leadership from "../assets/leadership.png";
// // import entrepreneurship from "../assets/entrepreneurship.jpeg";
// // import Career from "../assets/career.jpeg";
// // import Artificial from "../assets/artificial.jpeg";

// // export default function Course() {
// //   const navigate = useNavigate();
// //   const coursesRef = useRef(null);
// //   const isInView = useInView(coursesRef, { once: true, margin: "-80px" });

// //   const internships = [
// //     {
// //       title: "Spoken English & Communication Skills",
// //       duration: "3 Months",
// //       image: english,
// //       accent: "red",
// //     },
// //     {
// //       title: "Digital Literacy & Computer Basics",
// //       duration: "3 Months",
// //       image: computer,
// //       accent: "green",
// //     },
// //     {
// //       title: "Graphic Design",
// //       duration: "3 Months",
// //       image: graphic,
// //       accent: "blue",
// //     },
// //     {
// //       title: "Digital Marketing Fundamentals",
// //       duration: "3 Months",
// //       image: marketing,
// //       accent: "red",
// //     },
// //     {
// //       title: "Web Development Basics",
// //       duration: "4 Months",
// //       image: web,
// //       accent: "green",
// //     },
// //     {
// //       title: "Leadership & Community Engagement",
// //       duration: "2 Months",
// //       image: leadership,
// //       accent: "blue",
// //     },
// //     {
// //       title: "Entrepreneurship & Business Skills",
// //       duration: "2 Months",
// //       image: entrepreneurship,
// //       accent: "red",
// //     },
// //     {
// //       title: "Career Readiness & Employability Skills",
// //       duration: "2 Months",
// //       image: Career,
// //       accent: "green",
// //     },
// //     {
// //       title: "Artificial Intelligence & Emerging Technologies",
// //       duration: "2 Months",
// //       image: Artificial,
// //       accent: "blue",
// //     },
// //   ];

// //   // Hero slideshow
// //   const [current, setCurrent] = useState(0);
// //   const [isHovered, setIsHovered] = useState(false);

// //   useEffect(() => {
// //     if (!isHovered) {
// //       const timer = setInterval(() => {
// //         setCurrent((prev) => (prev + 1) % internships.length);
// //       }, 4000);
// //       return () => clearInterval(timer);
// //     }
// //   }, [isHovered, internships.length]);

// //   const currentSlide = internships[current];

// //   const handleApplyClick = (course) => {
// //     navigate("/contact", {
// //       state: {
// //         course: course.title,
// //         duration: course.duration,
// //       },
// //     });
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <div className="course-page">
// //       {/* Hero Section with Background Slideshow */}
// //       <section
// //         className="course-hero"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >
// //         {/* Background Slides */}
// //         <div className="course-slides-container">
// //           {internships.map((internship, index) => (
// //             <motion.div
// //               key={index}
// //               className={`course-slide-bg ${index === current ? 'active' : ''}`}
// //               initial={{ opacity: 0 }}
// //               animate={{
// //                 opacity: index === current ? 1 : 0,
// //                 scale: index === current ? 1 : 1.08,
// //               }}
// //               transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
// //             >
// //               <img src={internship.image} alt={internship.title} />
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Overlay System */}
// //         <div className="course-overlay-dark" />
// //         <div className="course-overlay-gradient" />
// //         <div className="course-overlay-vignette" />

// //         {/* Centered Content */}
// //         <div className="course-hero-container">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={current}
// //               className="course-hero-content"
// //               initial={{ opacity: 0, y: 25 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -25 }}
// //               transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
// //             >
// //               <div className="course-hero-tag">
// //                 <span className="course-hero-tag-line" />
// //                 <span className="course-hero-tag-text">Skill Development Programs</span>
// //               </div>

// //               <h1 className="course-hero-headline">
// //                 Build Your Future With
// //                 <span className="course-hero-headline-accent"> Our Courses</span>
// //               </h1>

// //               <p className="course-hero-subtitle">
// //                 Gain practical skills, earn certifications, and launch your career
// //                 with industry-recognized programs designed for your success.
// //               </p>

// //               {/* Current Course Info */}
// //               <motion.div
// //                 className={`course-hero-info info-${currentSlide.accent}`}
// //                 initial={{ opacity: 0, y: 15 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.25, duration: 0.4 }}
// //               >
// //                 <span className="course-hero-info-duration">
// //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
// //                     <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
// //                   </svg>
// //                   {currentSlide.duration}
// //                 </span>
// //                 <span className="course-hero-info-title">{currentSlide.title}</span>
// //               </motion.div>

// //               <motion.div
// //                 className="course-hero-cta-wrapper"
// //                 initial={{ opacity: 0, y: 15 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4, duration: 0.4 }}
// //               >
// //                 <motion.button
// //                   className="course-hero-cta"
// //                   onClick={() => handleApplyClick(currentSlide)}
// //                   whileHover={{ scale: 1.03 }}
// //                   whileTap={{ scale: 0.97 }}
// //                 >
// //                   <span>Apply Now</span>
// //                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //                     <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //                   </svg>
// //                 </motion.button>
// //               </motion.div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>

// //         {/* Slide Navigation Dots */}
// //         <div className="course-slide-nav">
// //           {internships.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`course-slide-dot ${index === current ? 'active' : ''}`}
// //               onClick={() => setCurrent(index)}
// //               aria-label={`Go to slide ${index + 1}`}
// //             >
// //               <motion.span
// //                 className="course-slide-dot-fill"
// //                 initial={{ width: '0%' }}
// //                 animate={{
// //                   width: index === current && !isHovered ? '100%' : '0%',
// //                 }}
// //                 transition={{
// //                   duration: index === current ? 4 : 0.3,
// //                   ease: "linear",
// //                 }}
// //               />
// //             </button>
// //           ))}
// //         </div>

// //         {/* Slide Counter */}
// //         <div className="course-slide-counter">
// //           <span className="course-counter-current">
// //             {(current + 1).toString().padStart(2, '0')}
// //           </span>
// //           <span className="course-counter-sep">/</span>
// //           <span className="course-counter-total">
// //             {internships.length.toString().padStart(2, '0')}
// //           </span>
// //         </div>
// //       </section>

// //       {/* Courses Section */}
// //       <section className="course-grid-section" ref={coursesRef}>
// //         <div className="course-container">
// //           <motion.div
// //             className="course-section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
// //           >
// //             <div className="course-section-tag">
// //               <span className="course-section-tag-line" />
// //               <span className="course-section-tag-text">Our Programs</span>
// //             </div>
// //             <h2 className="course-section-headline">Browse Our Courses</h2>
// //             <p className="course-section-subtitle">
// //               Explore expert-led courses and learn at your own pace with practical, hands-on training.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             className="course-grid"
// //             initial="hidden"
// //             animate={isInView ? "visible" : "hidden"}
// //             variants={{
// //               hidden: { opacity: 0 },
// //               visible: {
// //                 opacity: 1,
// //                 transition: { staggerChildren: 0.08, delayChildren: 0.15 },
// //               },
// //             }}
// //           >
// //             {internships.map((internship, index) => (
// //               <motion.div
// //                 className={`course-card card-${internship.accent}`}
// //                 key={index}
// //                 onClick={() => handleApplyClick(internship)}
// //                 variants={{
// //                   hidden: { opacity: 0, y: 30 },
// //                   visible: {
// //                     opacity: 1,
// //                     y: 0,
// //                     transition: {
// //                       duration: 0.6,
// //                       ease: [0.33, 0.1, 0.25, 1],
// //                     },
// //                   },
// //                 }}
// //                 whileHover={{ y: -8, scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //               >
// //                 <div className="course-card-image">
// //                   <img src={internship.image} alt={internship.title} />
// //                   <div className="course-card-overlay" />

// //                   <div className="course-card-duration">
// //                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //                       <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
// //                       <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
// //                     </svg>
// //                     <span>{internship.duration}</span>
// //                   </div>
// //                 </div>

// //                 <div className="course-card-content">
// //                   <h3 className="course-card-title">{internship.title}</h3>
                  
// //                   {/* CTA Button on Card - Changed to "Explore Program" */}
// //                   <button
// //                     className={`course-card-cta cta-${internship.accent}`}
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleApplyClick(internship);
// //                     }}
// //                   >
// //                     Explore Program →
// //                   </button>
// //                 </div>

// //                 <div className={`course-card-accent accent-${internship.accent}`} />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="course-cta-section">
// //         <div className="course-cta-bg" />
// //         <div className="course-cta-glow" />

// //         <div className="course-container">
// //           <motion.div
// //             className="course-cta-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
// //           >
// //             <h2 className="course-cta-headline">
// //               Ready to Start Your Learning Journey?
// //             </h2>
// //             <p className="course-cta-description">
// //               Join our programs and gain the skills you need to build a brighter future.
// //             </p>
// //             <motion.button
// //               className="course-cta-btn"
// //               onClick={() => handleApplyClick(internships[0])}
// //               whileHover={{ scale: 1.03 }}
// //               whileTap={{ scale: 0.97 }}
// //             >
// //               <span>Apply Now</span>
// //               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //                 <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //               </svg>
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



// import { useRef, useState, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import "./Course.css";

// import english from "../assets/english.png";
// import computer from "../assets/computer.jpeg";
// import graphic from "../assets/graphic.jpeg";
// import marketing from "../assets/marketing.jpeg";
// import web from "../assets/web.png";
// import leadership from "../assets/leadership.png";
// import entrepreneurship from "../assets/entrepreneurship.jpeg";
// import Career from "../assets/career.jpeg";
// import Artificial from "../assets/artificial.jpeg";

// const heroSlides = [
//   {
//     image: english,
//     title: "Build Your Future With Skill Development Programs",
//     subtitle: "Gain practical skills, earn certifications, and launch your career with industry-recognized programs designed for your success.",
//     tag: "Skill Development Programs",
//     accent: "red",
//   },
//   {
//     image: computer,
//     title: "Learn From Industry Experts & Practitioners",
//     subtitle: "Our courses are designed and delivered by experienced professionals who bring real-world knowledge to every session.",
//     tag: "Expert-Led Training",
//     accent: "green",
//   },
//   {
//     image: web,
//     title: "Transform Your Career With Hands-On Learning",
//     subtitle: "Practical, project-based training that prepares you for the demands of today's competitive job market.",
//     tag: "Career Growth",
//     accent: "blue",
//   },
// ];

// export default function Course() {
//   const coursesRef = useRef(null);
//   const isInView = useInView(coursesRef, { once: true, margin: "-80px" });
//   const [current, setCurrent] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   useEffect(() => {
//     if (!isHovered) {
//       const timer = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % heroSlides.length);
//       }, 4000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered]);

//   const currentSlide = heroSlides[current];

//   const courses = [
//     {
//       title: "Spoken English & Communication Skills",
//       duration: "3 Months",
//       image: english,
//       accent: "red",
//       shortDesc: "Master English speaking, writing, and professional communication for career success.",
//       fullDesc: "Our Spoken English & Communication Skills program is designed to help you master the English language for professional and personal success. You'll learn grammar, vocabulary, pronunciation, public speaking, business writing, and interpersonal communication. Through interactive sessions, role-plays, and real-world practice, you'll build the confidence to communicate effectively in any situation.",
//     },
//     {
//       title: "Digital Literacy & Computer Basics",
//       duration: "3 Months",
//       image: computer,
//       accent: "green",
//       shortDesc: "Learn essential computer skills, MS Office, internet usage, and digital tools.",
//       fullDesc: "Our Digital Literacy & Computer Basics course provides comprehensive training in essential computer skills. From basic operations to Microsoft Office Suite (Word, Excel, PowerPoint), internet navigation, email management, and digital safety, this program ensures you're comfortable with technology in today's digital world. Perfect for beginners and those looking to upgrade their skills.",
//     },
//     {
//       title: "Graphic Design",
//       duration: "3 Months",
//       image: graphic,
//       accent: "blue",
//       shortDesc: "Create stunning visuals using industry-standard design tools and techniques.",
//       fullDesc: "Our Graphic Design program teaches you the fundamentals of visual communication and design. You'll learn color theory, typography, layout design, branding, and how to use professional tools like Adobe Photoshop, Illustrator, and Canva. Through hands-on projects, you'll build a portfolio that showcases your creativity and technical skills to potential employers.",
//     },
//     {
//       title: "Digital Marketing Fundamentals",
//       duration: "3 Months",
//       image: marketing,
//       accent: "red",
//       shortDesc: "Master social media, SEO, content marketing, and online advertising strategies.",
//       fullDesc: "Our Digital Marketing Fundamentals course covers the complete digital marketing landscape. Learn search engine optimization (SEO), social media marketing, content marketing, email marketing, Google Ads, Facebook Ads, and analytics. With practical assignments and real campaign experience, you'll be ready to help businesses grow their online presence and drive results.",
//     },
//     {
//       title: "Web Development Basics",
//       duration: "4 Months",
//       image: web,
//       accent: "green",
//       shortDesc: "Build responsive websites using HTML, CSS, JavaScript, and modern frameworks.",
//       fullDesc: "Our Web Development Basics program takes you from zero to building fully functional websites. You'll learn HTML5, CSS3, JavaScript, responsive design principles, and modern frameworks. Through project-based learning, you'll create real websites and web applications, building a strong foundation for a career in web development.",
//     },
//     {
//       title: "Leadership & Community Engagement",
//       duration: "2 Months",
//       image: leadership,
//       accent: "blue",
//       shortDesc: "Develop leadership skills, team management, and community building abilities.",
//       fullDesc: "Our Leadership & Community Engagement program helps you develop essential leadership qualities. You'll learn team management, conflict resolution, public speaking, project planning, and community organizing. Through workshops, group activities, and real community projects, you'll gain practical experience in leading teams and creating positive social change.",
//     },
//     {
//       title: "Entrepreneurship & Business Skills",
//       duration: "2 Months",
//       image: entrepreneurship,
//       accent: "red",
//       shortDesc: "Learn business planning, financial management, and startup fundamentals.",
//       fullDesc: "Our Entrepreneurship & Business Skills course equips you with the knowledge to start and grow your own business. You'll learn business planning, market research, financial management, fundraising, marketing strategies, and operations. Through case studies and mentorship, you'll develop the entrepreneurial mindset needed to turn ideas into successful ventures.",
//     },
//     {
//       title: "Career Readiness & Employability Skills",
//       duration: "2 Months",
//       image: Career,
//       accent: "green",
//       shortDesc: "Prepare for jobs with resume building, interview skills, and professional development.",
//       fullDesc: "Our Career Readiness & Employability Skills program prepares you for the competitive job market. You'll learn resume writing, cover letter creation, interview techniques, professional etiquette, workplace communication, time management, and networking skills. With mock interviews and career counseling, you'll be fully prepared to land your dream job.",
//     },
//     {
//       title: "Artificial Intelligence & Emerging Technologies",
//       duration: "2 Months",
//       image: Artificial,
//       accent: "blue",
//       shortDesc: "Explore AI, machine learning, and cutting-edge technologies shaping the future.",
//       fullDesc: "Our Artificial Intelligence & Emerging Technologies course introduces you to the exciting world of AI and future technologies. You'll learn AI fundamentals, machine learning concepts, data science basics, and explore technologies like blockchain, IoT, and cloud computing. This program is designed to give you a competitive edge in the rapidly evolving tech landscape.",
//     },
//   ];

//   const handleExploreClick = (course) => {
//     setSelectedCourse(course);
//     setFormSubmitted(false);
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   const handleCloseModal = () => {
//     setSelectedCourse(null);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//     console.log("Enrollment submitted:", formData, "Course:", selectedCourse?.title);
//   };

//   return (
//     <div className="crs-page">
//       {/* Hero Section */}
//       <section
//         className="crs-hero"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="crs-hero-slides">
//           {heroSlides.map((slide, index) => (
//             <motion.div
//               key={index}
//               className={`crs-hero-slide ${index === current ? 'crs-hero-slide-active' : ''}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.1 }}
//               transition={{ duration: 1.3, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <img src={slide.image} alt={slide.title} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="crs-hero-overlay-dark" />
//         <div className="crs-hero-overlay-gradient" />
//         <div className="crs-hero-overlay-vignette" />

//         <div className="crs-hero-content-wrap">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               className="crs-hero-content"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="crs-hero-tag">
//                 <span className="crs-hero-tag-line" />
//                 <span className="crs-hero-tag-text">{currentSlide.tag}</span>
//               </div>
//               <h1 className="crs-hero-headline">{currentSlide.title}</h1>
//               <p className="crs-hero-subtitle">{currentSlide.subtitle}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="crs-hero-nav">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               className={`crs-hero-dot ${index === current ? 'crs-hero-dot-active' : ''}`}
//               onClick={() => setCurrent(index)}
//             >
//               <motion.span
//                 className="crs-hero-dot-fill"
//                 initial={{ width: '0%' }}
//                 animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
//                 transition={{ duration: index === current ? 4 : 0.3, ease: "linear" }}
//               />
//             </button>
//           ))}
//         </div>

//         <div className="crs-hero-counter">
//           <span className="crs-hero-counter-curr">{(current + 1).toString().padStart(2, '0')}</span>
//           <span className="crs-hero-counter-sep">/</span>
//           <span className="crs-hero-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
//         </div>
//       </section>

//       {/* Courses Grid Section */}
//       <section className="crs-grid-section" ref={coursesRef}>
//         <div className="crs-container">
//           <motion.div
//             className="crs-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="crs-section-tag">
//               <span className="crs-section-tag-line" />
//               <span className="crs-section-tag-text">Our Programs</span>
//             </div>
//             <h2 className="crs-section-headline">Explore Our Courses</h2>
//             <p className="crs-section-subtitle">
//               Expert-led courses with practical, hands-on training to help you build real-world skills.
//             </p>
//           </motion.div>

//           <motion.div
//             className="crs-grid"
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
//             }}
//           >
//             {courses.map((course, index) => (
//               <motion.div
//                 className={`crs-card crs-card-${course.accent}`}
//                 key={index}
//                 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } } }}
//                 whileHover={{ y: -6 }}
//                 onClick={() => handleExploreClick(course)}
//               >
//                 <div className="crs-card-image">
//                   <img src={course.image} alt={course.title} />
//                   <div className="crs-card-image-overlay" />
//                   <div className="crs-card-duration">
//                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                       <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
//                       <path d="M6 3.5V6L7.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                     </svg>
//                     <span>{course.duration}</span>
//                   </div>
//                 </div>

//                 <div className="crs-card-body">
//                   <h3 className="crs-card-title">{course.title}</h3>
//                   <p className="crs-card-text">{course.shortDesc}</p>
                  
//                   <div className="crs-card-footer">
//                     <span className={`crs-card-cta crs-cta-${course.accent}`}>
//                       Explore Program
//                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                         <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>

//                 <div className={`crs-card-accent crs-accent-${course.accent}`} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Course Detail Modal */}
//       <AnimatePresence>
//         {selectedCourse && (
//           <motion.div 
//             className="crs-modal-overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleCloseModal}
//           >
//             <motion.div 
//               className="crs-modal"
//               initial={{ opacity: 0, y: 40, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 40, scale: 0.96 }}
//               transition={{ duration: 0.35, ease: [0.33, 0.1, 0.25, 1] }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button className="crs-modal-close" onClick={handleCloseModal}>
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                   <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </button>

//               <div className="crs-modal-grid">
//                 <div className="crs-modal-info">
//                   <span className={`crs-modal-badge crs-badge-${selectedCourse.accent}`}>
//                     {selectedCourse.duration}
//                   </span>
//                   <h2 className="crs-modal-title">{selectedCourse.title}</h2>
//                   <p className="crs-modal-desc">{selectedCourse.fullDesc}</p>
//                 </div>

//                 <div className="crs-modal-form-wrap">
//                   <h3 className="crs-modal-form-title">
//                     {formSubmitted ? "Thank You!" : "Enroll Now"}
//                   </h3>
                  
//                   {formSubmitted ? (
//                     <motion.div 
//                       className="crs-form-success"
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                     >
//                       <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                         <circle cx="24" cy="24" r="24" fill="#DCFCE7"/>
//                         <path d="M14 24L21 31L34 17" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                       <p>We've received your enrollment interest for <strong>{selectedCourse.title}</strong>. Our team will contact you within 24 hours.</p>
//                       <button className="crs-form-close-btn" onClick={handleCloseModal}>Close</button>
//                     </motion.div>
//                   ) : (
//                     <>
//                       <p className="crs-modal-form-subtitle">
//                         Interested in <strong>{selectedCourse.title}</strong>? Fill the form and we'll get in touch with enrollment details.
//                       </p>
//                       <form className="crs-form" onSubmit={handleSubmit}>
//                         <input 
//                           type="text" name="name" className="crs-form-input"
//                           placeholder="Full Name" value={formData.name}
//                           onChange={handleInputChange} required
//                         />
//                         <input 
//                           type="email" name="email" className="crs-form-input"
//                           placeholder="Email Address" value={formData.email}
//                           onChange={handleInputChange} required
//                         />
//                         <input 
//                           type="tel" name="phone" className="crs-form-input"
//                           placeholder="Phone Number" value={formData.phone}
//                           onChange={handleInputChange} required
//                         />
//                         <textarea 
//                           name="message" className="crs-form-textarea"
//                           placeholder="Any questions or specific requirements?" rows="3"
//                           value={formData.message} onChange={handleInputChange}
//                         />
//                         <button type="submit" className="crs-form-submit">
//                           Submit Enrollment
//                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                             <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                           </svg>
//                         </button>
//                       </form>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* CTA Section */}
//       <section className="crs-cta">
//         <div className="crs-cta-bg" />
//         <div className="crs-cta-glow" />
//         <div className="crs-container">
//           <motion.div
//             className="crs-cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="crs-cta-headline">Ready to Start Your Learning Journey?</h2>
//             <p className="crs-cta-description">
//               Join our programs and gain the skills you need to build a brighter future.
//             </p>
//             <div className="crs-cta-buttons">
//               <button className="crs-cta-btn-primary" onClick={() => handleExploreClick(courses[0])}>
//                 <span>Explore Courses</span>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
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
import "./Course.css";

import english from "../assets/english.png";
import computer from "../assets/computer.jpeg";
import graphic from "../assets/graphic.jpeg";
import marketing from "../assets/marketing.jpeg";
import web from "../assets/web.png";
import leadership from "../assets/leadership.png";
import entrepreneurship from "../assets/entrepreneurship.jpeg";
import Career from "../assets/career.jpeg";
import Artificial from "../assets/artificial.jpeg";

const heroSlides = [
  {
    image: english,
    title: "Build Your Future With Skill Development Programs",
    subtitle: "Gain practical skills, earn certifications, and launch your career with industry-recognized programs designed for your success.",
    tag: "Skill Development Programs",
    accent: "red",
  },
  {
    image: computer,
    title: "Learn From Industry Experts & Practitioners",
    subtitle: "Our courses are designed and delivered by experienced professionals who bring real-world knowledge to every session.",
    tag: "Expert-Led Training",
    accent: "green",
  },
  {
    image: web,
    title: "Transform Your Career With Hands-On Learning",
    subtitle: "Practical, project-based training that prepares you for the demands of today's competitive job market.",
    tag: "Career Growth",
    accent: "blue",
  },
];

export default function Course() {
  const navigate = useNavigate();
  const coursesRef = useRef(null);
  const isInView = useInView(coursesRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const courses = [
    {
      title: "Communication & Employability Skills",
      duration: "3 Months",
      image: english,
      accent: "red",
      overview: "Master English speaking, writing, and professional communication for career success.",
      description: "This comprehensive program covers grammar fundamentals, vocabulary building, pronunciation practice, public speaking techniques, business writing skills, and interpersonal communication strategies.",
      modules: [
        "Grammar & Sentence Structure",
        "Vocabulary Enhancement",
        "Pronunciation & Accent Training",
        "Public Speaking & Presentations",
        "Business Email & Report Writing",
        "Group Discussions & Debates",
        "Interview Communication Skills",
        "Professional Etiquette"
      ],
      eligibility: "Open to all - Basic English understanding recommended",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "In-Person & Online Sessions",
    },
    {
      title: "Digital Literacy & Computer Skills",
      duration: "3 Months",
      image: computer,
      accent: "green",
      overview: "Learn essential computer skills, MS Office, internet usage, and digital tools.",
      description: "From basic computer operations to mastering Microsoft Office Suite, internet navigation, email management, and digital safety practices - this course ensures you're comfortable with technology in today's digital world.",
      modules: [
        "Computer Fundamentals & Operating Systems",
        "Microsoft Word - Document Creation",
        "Microsoft Excel - Spreadsheets & Data",
        "Microsoft PowerPoint - Presentations",
        "Internet Browsing & Online Research",
        "Email Management & Communication",
        "Digital Safety & Cybersecurity Basics",
        "Cloud Storage & File Management"
      ],
      eligibility: "Open to all - No prior computer knowledge required",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "In-Person Hands-On Training",
    },
    {
      title: "Graphic Design",
      duration: "3 Months",
      image: graphic,
      accent: "blue",
      overview: "Create stunning visuals using industry-standard design tools and techniques.",
      description: "Learn the fundamentals of visual communication, color theory, typography, layout design, and branding. Get hands-on experience with professional tools like Adobe Photoshop, Illustrator, and Canva through project-based learning.",
      modules: [
        "Design Principles & Color Theory",
        "Typography & Font Selection",
        "Adobe Photoshop Essentials",
        "Adobe Illustrator Basics",
        "Canva for Quick Designs",
        "Logo & Brand Identity Design",
        "Social Media Graphics",
        "Portfolio Development"
      ],
      eligibility: "Basic computer knowledge required",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "In-Person with Online Resources",
    },
    {
      title: "Digital Marketing Fundamentals",
      duration: "3 Months",
      image: marketing,
      accent: "red",
      overview: "Master social media, SEO, content marketing, and online advertising strategies.",
      description: "Cover the complete digital marketing landscape including search engine optimization, social media marketing, content creation, email campaigns, Google Ads, Facebook Ads, and analytics tracking.",
      modules: [
        "Digital Marketing Overview",
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Google Ads & PPC Advertising",
        "Facebook & Instagram Ads",
        "Analytics & Performance Tracking"
      ],
      eligibility: "Basic internet knowledge required",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "Online & In-Person Sessions",
    },
    {
      title: "Web Development ",
      duration: "4 Months",
      image: web,
      accent: "green",
      overview: "Build responsive websites using HTML, CSS, JavaScript, and modern frameworks.",
      description: "Take your first steps into web development with this hands-on program. Learn to create responsive, modern websites from scratch using industry-standard technologies and best practices.",
      modules: [
        "HTML5 Structure & Semantics",
        "CSS3 Styling & Layouts",
        "Responsive Design Principles",
        "JavaScript Fundamentals",
        "DOM Manipulation",
        "Bootstrap Framework",
        "Version Control with Git",
        "Website Deployment"
      ],
      eligibility: "Basic computer knowledge required",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "In-Person with Project Work",
    },
    {
      title: "Leadership & Community Engagement",
      duration: "2 Months",
      image: leadership,
      accent: "blue",
      overview: "Develop leadership skills, team management, and community building abilities.",
      description: "Build essential leadership qualities through workshops, group activities, and real community projects. Learn team management, conflict resolution, public speaking, and project planning.",
      modules: [
        "Leadership Styles & Theories",
        "Team Building & Motivation",
        "Conflict Resolution Strategies",
        "Public Speaking & Communication",
        "Project Planning & Execution",
        "Community Organizing",
        "Event Management",
        "Social Impact Assessment"
      ],
      eligibility: "Open to all - Enthusiasm to learn and lead",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "In-Person Workshops & Field Work",
    },
    {
  title: "Advanced Full Stack Development with Python & AI",
  duration: "6 Months",
  image: entrepreneurship,
  accent: "red",

  overview:
    "Master modern software development using Python, Full Stack technologies, Cloud, DevOps, and AI to become an industry-ready developer.",

  description:
    "This comprehensive program is designed to build professional software engineers capable of developing scalable web applications using Python, Django, FastAPI, React, PostgreSQL, Docker, Cloud, and AI tools. Students work on real-world projects, follow Agile methodologies, deploy applications to production, and build an impressive portfolio for placements.",

  modules: [
    "Programming Fundamentals with Python",
    "Advanced Python & Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Git & GitHub Version Control",
    "SQL & PostgreSQL Database",
    "HTML5, CSS3 & JavaScript (ES6+)",
    "React.js & Modern Frontend Development",
    "Tailwind CSS & Responsive UI",
    "REST API Development",
    "Django Framework",
    "FastAPI for High Performance APIs",
    "Authentication (JWT, OAuth)",
    "State Management (Redux Toolkit)",
    "Docker & Containerization",
    "Linux & Command Line",
    "CI/CD with GitHub Actions",
    "AWS Cloud Deployment",
    "Nginx & Server Management",
    "Redis & Caching",
    "AI Integration using OpenAI APIs",
    "LangChain & AI Agents",
    "Prompt Engineering",
    "Testing & Debugging",
    "Software Architecture",
    "Agile & Scrum Methodology",
    "Capstone Industry Project",
    "Portfolio Development",
    "Resume Building",
    "Mock Interviews & Placement Training"
  ],

  eligibility:
    "Students, Graduates, Career Switchers, and Working Professionals",

  certificate:
    "Yes - Uvagai Foundation Advanced Full Stack Development Certificate",

  mode:
    "Offline Classroom Training with Live Projects, Industry Mentorship & Internship Support"
},
    {
      title: "Career Readiness & Employability Skills",
      duration: "2 Months",
      image: Career,
      accent: "green",
      overview: "Prepare for jobs with resume building, interview skills, and professional development.",
      description: "Get fully prepared for the competitive job market. Learn resume writing, cover letter creation, interview techniques, professional etiquette, and networking skills through mock interviews and career counseling.",
      modules: [
        "Resume & CV Writing",
        "Cover Letter Creation",
        "Interview Preparation",
        "Mock Interview Sessions",
        "Professional Communication",
        "Time Management",
        "Workplace Etiquette",
        "Job Search Strategies"
      ],
      eligibility: "Open to all job seekers",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "In-Person Training & Practice",
    },
    {
      title: "Artificial Intelligence & Emerging Technologies",
      duration: "2 Months",
      image: Artificial,
      accent: "blue",
      overview: "Explore AI, machine learning, and cutting-edge technologies shaping the future.",
      description: "Get introduced to the exciting world of AI and future technologies. Learn AI fundamentals, machine learning concepts, data science basics, and explore emerging technologies like blockchain, IoT, and cloud computing.",
      modules: [
        "Introduction to Artificial Intelligence",
        "Machine Learning Fundamentals",
        "Data Science Basics",
        "AI Tools & Applications",
        "Blockchain Technology Overview",
        "Internet of Things (IoT)",
        "Cloud Computing Basics",
        "Future Tech Trends"
      ],
      eligibility: "Basic computer knowledge required",
      certificate: "Yes - Uvagai Foundation Certificate of Completion",
      mode: "Online & In-Person Sessions",
    },
  ];

  const handleExploreClick = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleApplyNow = (course) => {
    navigate("/contact", {
      state: {
        course: course.title,
        duration: course.duration,
        source: "course-page",
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="crs-page">
      {/* Hero Section */}
      <section
        className="crs-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="crs-hero-slides">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`crs-hero-slide ${index === current ? 'crs-hero-slide-active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.1 }}
              transition={{ duration: 1.3, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="crs-hero-overlay-dark" />
        <div className="crs-hero-overlay-gradient" />
        <div className="crs-hero-overlay-vignette" />

        <div className="crs-hero-content-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="crs-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="crs-hero-tag">
                <span className="crs-hero-tag-line" />
                <span className="crs-hero-tag-text">{currentSlide.tag}</span>
              </div>
              <h1 className="crs-hero-headline">{currentSlide.title}</h1>
              <p className="crs-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="crs-hero-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`crs-hero-dot ${index === current ? 'crs-hero-dot-active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="crs-hero-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 4 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="crs-hero-counter">
          <span className="crs-hero-counter-curr">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="crs-hero-counter-sep">/</span>
          <span className="crs-hero-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="crs-grid-section" ref={coursesRef}>
        <div className="crs-container">
          <motion.div
            className="crs-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="crs-section-tag">
              <span className="crs-section-tag-line" />
              <span className="crs-section-tag-text">Our Programs</span>
            </div>
            <h2 className="crs-section-headline">Explore Our Courses</h2>
            <p className="crs-section-subtitle">
              Expert-led courses with practical, hands-on training to help you build real-world skills.
            </p>
          </motion.div>

          <motion.div
            className="crs-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
          >
            {courses.map((course, index) => (
              <motion.div
                className={`crs-card crs-card-${course.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -6 }}
                onClick={() => handleExploreClick(course)}
              >
                <div className="crs-card-image">
                  <img src={course.image} alt={course.title} />
                  <div className="crs-card-image-overlay" />
                  <div className="crs-card-duration">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 3.5V6L7.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="crs-card-body">
                  <h3 className="crs-card-title">{course.title}</h3>
                  <p className="crs-card-text">{course.overview}</p>
                  
                  <div className="crs-card-footer">
                    <span className={`crs-card-cta crs-cta-${course.accent}`}>
                      View Details
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className={`crs-card-accent crs-accent-${course.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            className="crs-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div 
              className="crs-modal"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.33, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="crs-modal-close" onClick={handleCloseModal}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="crs-modal-header">
                <span className={`crs-modal-badge crs-badge-${selectedCourse.accent}`}>
                  {selectedCourse.duration}
                </span>
                <h2 className="crs-modal-title">{selectedCourse.title}</h2>
                <p className="crs-modal-overview">{selectedCourse.description}</p>
              </div>

              <div className="crs-modal-body">
                <div className="crs-modal-section">
                  <h3 className="crs-modal-section-title">Course Modules</h3>
                  <ul className="crs-modal-modules">
                    {selectedCourse.modules.map((module, index) => (
                      <li key={index} className="crs-modal-module-item">
                        <span className="crs-modal-module-num">{String(index + 1).padStart(2, '0')}</span>
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="crs-modal-info-grid">
                  <div className="crs-modal-info-item">
                    <span className="crs-modal-info-label">Eligibility</span>
                    <span className="crs-modal-info-value">{selectedCourse.eligibility}</span>
                  </div>
                  <div className="crs-modal-info-item">
                    <span className="crs-modal-info-label">Certificate</span>
                    <span className="crs-modal-info-value">{selectedCourse.certificate}</span>
                  </div>
                  <div className="crs-modal-info-item">
                    <span className="crs-modal-info-label">Mode</span>
                    <span className="crs-modal-info-value">{selectedCourse.mode}</span>
                  </div>
                  <div className="crs-modal-info-item">
                    <span className="crs-modal-info-label">Duration</span>
                    <span className="crs-modal-info-value">{selectedCourse.duration}</span>
                  </div>
                </div>
              </div>

              <div className="crs-modal-footer">
                <button 
                  className="crs-modal-apply-btn"
                  onClick={() => handleApplyNow(selectedCourse)}
                >
                  Apply Now - Contact Us
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="crs-cta">
        <div className="crs-cta-bg" />
        <div className="crs-cta-glow" />
        <div className="crs-container">
          <motion.div
            className="crs-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="crs-cta-headline">Ready to Start Your Learning Journey?</h2>
            <p className="crs-cta-description">
              Join our programs and gain the skills you need to build a brighter future.
            </p>
            <button className="crs-cta-btn-primary" onClick={() => handleApplyNow(courses[0])}>
              <span>Apply Now</span>
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