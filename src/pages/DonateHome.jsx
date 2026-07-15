// // // // import { useRef, useState, useEffect } from "react";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { motion, AnimatePresence, useInView } from "framer-motion";
// // // // import "./DonateHome.css";

// // // // import childedu from "../assets/childedu.png";
// // // // import community from "../assets/community.png";
// // // // import childincards from "../assets/childincards.png";
// // // // import seniorciti from "../assets/senior.png";
// // // // import environment from "../assets/environment.png";
// // // // import communityy from "../assets/communityy.png";

// // // // export default function DonateHome() {
// // // //   const navigate = useNavigate();
// // // //   const sectionRef = useRef(null);
// // // //   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
// // // //   const [currentSlide, setCurrentSlide] = useState(0);

// // // //   const donationOptions = [
// // // //     {
// // // //       amount: "500",
// // // //       title: "Support a Child",
// // // //       impact: "Provides learning materials, school supplies and educational support for one child.",
// // // //       accent: "red",
// // // //       popular: false,
// // // //       benefits: ["Learning Materials", "School Essentials", "Tax Benefit"]
// // // //     },
// // // //     {
// // // //       amount: "1000",
// // // //       title: "Healthcare Support",
// // // //       impact: "Supports medical camps, health awareness programs and medicines.",
// // // //       accent: "green",
// // // //       popular: true,
// // // //       benefits: ["Medical Support", "Community Health", "Tax Benefit"]
// // // //     },
// // // //     {
// // // //       amount: "2500",
// // // //       title: "Nutrition & Welfare",
// // // //       impact: "Provides nutritious meals and welfare assistance for vulnerable families.",
// // // //       accent: "blue",
// // // //       popular: false,
// // // //       benefits: ["Nutritious Meals", "Family Support", "Tax Benefit"]
// // // //     },
// // // //     {
// // // //       amount: "5000",
// // // //       title: "Community Development",
// // // //       impact: "Helps build sustainable community projects and livelihood initiatives.",
// // // //       accent: "red",
// // // //       popular: false,
// // // //       benefits: ["Community Projects", "Skill Development", "Tax Benefit"]
// // // //     }
// // // //   ];

// // // //   const impactAreas = [
// // // //     { tag: "Education", title: "Education & Youth Empowerment", desc: "Supporting learning opportunities, digital literacy, mentorship, and educational resources.", img: childedu, accent: "red" },
// // // //     { tag: "Healthcare", title: "Healthcare & Wellness", desc: "Organizing medical camps, health awareness programs and preventive healthcare initiatives.", img: community, accent: "green" },
// // // //     { tag: "Child Welfare", title: "Child Welfare", desc: "Promoting education, nutrition, healthcare and protection for every child.", img: childincards, accent: "blue" },
// // // //     { tag: "Elderly Care", title: "Elderly Care", desc: "Improving the quality of life of senior citizens through care, support and wellness.", img: seniorciti, accent: "red" },
// // // //     { tag: "Environment", title: "Environmental Sustainability", desc: "Tree plantation drives, environmental awareness and green community initiatives.", img: environment, accent: "green" },
// // // //     { tag: "Community", title: "Community Development", desc: "Creating sustainable livelihood opportunities and empowering rural communities.", img: communityy, accent: "blue" },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
// // // //     }, 5000);
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   const activeDonation = donationOptions[currentSlide];

// // // //   return (
// // // //     <section className="dnt-section" ref={sectionRef}>
// // // //       <div className="dnt-container">
        
// // // //         {/* Header */}
// // // //         <motion.div
// // // //           className="dnt-header"
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // // //           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
// // // //         >
// // // //           <div className="dnt-header-tag">
// // // //             <span className="dnt-header-tag-line" />
// // // //             <span className="dnt-header-tag-text">Make a Difference</span>
// // // //           </div>
// // // //           <h2 className="dnt-header-title">
// // // //             Every <span className="dnt-text-red">Contribution</span> Creates{" "}
// // // //             <span className="dnt-text-green">Impact</span>
// // // //           </h2>
// // // //           <p className="dnt-header-desc">
// // // //             Support education, healthcare, and community development. Every 
// // // //             donation directly transforms lives and builds stronger communities.
// // // //           </p>
// // // //         </motion.div>

// // // //         {/* Donation Slider */}
// // // //         <motion.div
// // // //           className="dnt-slider-wrap"
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // // //           transition={{ duration: 0.7, delay: 0.2 }}
// // // //         >
// // // //           <button className="dnt-slider-arrow dnt-slider-left" onClick={() => setCurrentSlide((prev) => (prev === 0 ? donationOptions.length - 1 : prev - 1))}>
// // // //             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // // //               <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // //             </svg>
// // // //           </button>

// // // //           <AnimatePresence mode="wait">
// // // //             <motion.div
// // // //               key={currentSlide}
// // // //               className="dnt-slider-card"
// // // //               initial={{ opacity: 0, x: 80 }}
// // // //               animate={{ opacity: 1, x: 0 }}
// // // //               exit={{ opacity: 0, x: -80 }}
// // // //               transition={{ duration: 0.4, ease: [0.33, 0.1, 0.25, 1] }}
// // // //             >
// // // //               {activeDonation.popular && (
// // // //                 <div className="dnt-slider-badge">Most Impactful</div>
// // // //               )}

// // // //               <div className="dnt-slider-amount">
// // // //                 <span className="dnt-slider-currency">₹</span>
// // // //                 <span className="dnt-slider-value">{activeDonation.amount}</span>
// // // //               </div>

// // // //               <h3 className="dnt-slider-title">{activeDonation.title}</h3>
// // // //               <p className="dnt-slider-desc">{activeDonation.impact}</p>

// // // //               <div className="dnt-slider-tags">
// // // //                 {activeDonation.benefits.map((item, index) => (
// // // //                   <span key={index} className="dnt-slider-tag">{item}</span>
// // // //                 ))}
// // // //               </div>

// // // //               <button
// // // //                 className="dnt-slider-btn"
// // // //                 onClick={() => navigate("/contact#contact-form")}
// // // //               >
// // // //                 <span>Donate Now</span>
// // // //                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// // // //                   <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                 </svg>
// // // //               </button>
// // // //             </motion.div>
// // // //           </AnimatePresence>

// // // //           <button className="dnt-slider-arrow dnt-slider-right" onClick={() => setCurrentSlide((prev) => (prev + 1) % donationOptions.length)}>
// // // //             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // // //               <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // //             </svg>
// // // //           </button>
// // // //         </motion.div>

// // // //         {/* Slider Dots */}
// // // //         <div className="dnt-slider-dots">
// // // //           {donationOptions.map((_, index) => (
// // // //             <button
// // // //               key={index}
// // // //               className={`dnt-slider-dot ${currentSlide === index ? "dnt-slider-dot-active" : ""}`}
// // // //               onClick={() => setCurrentSlide(index)}
// // // //             />
// // // //           ))}
// // // //         </div>

// // // //         {/* Impact Areas Grid */}
// // // //         <motion.div
// // // //           className="dnt-impact"
// // // //           initial="hidden"
// // // //           animate={isInView ? "visible" : "hidden"}
// // // //           variants={{
// // // //             hidden: { opacity: 0 },
// // // //             visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
// // // //           }}
// // // //         >
// // // //           <h3 className="dnt-impact-title">
// // // //             Areas We <span className="dnt-text-red">Support</span>
// // // //           </h3>
          
// // // //           <div className="dnt-impact-grid">
// // // //             {impactAreas.map((item, index) => (
// // // //               <motion.div
// // // //                 key={index}
// // // //                 className={`dnt-impact-card dnt-impact-${item.accent}`}
// // // //                 variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
// // // //                 whileHover={{ y: -5 }}
// // // //               >
// // // //                 <div className="dnt-impact-media">
// // // //                   <img src={item.img} alt={item.title} />
// // // //                   <div className="dnt-impact-media-shade" />
// // // //                   <span className={`dnt-impact-badge dnt-badge-${item.accent}`}>{item.tag}</span>
// // // //                 </div>
// // // //                 <div className="dnt-impact-body">
// // // //                   <h4 className="dnt-impact-card-title">{item.title}</h4>
// // // //                   <p className="dnt-impact-card-text">{item.desc}</p>
// // // //                 </div>
// // // //                 <div className={`dnt-impact-line dnt-line-${item.accent}`} />
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* CTA */}
// // // //         <motion.div
// // // //           className="dnt-cta"
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // // //           transition={{ duration: 0.6, delay: 0.5 }}
// // // //         >
// // // //           <div className="dnt-cta-card">
// // // //             <div className="dnt-cta-content">
// // // //               <h3>Together, We Can Build A Better Tomorrow</h3>
// // // //               <p>Join us in empowering lives, supporting communities, and creating sustainable social change.</p>
// // // //             </div>
// // // //             <div className="dnt-cta-buttons">
// // // //               <button className="dnt-cta-btn-primary" onClick={() => navigate("/contact#contact-form")}>
// // // //                 <span>Donate Now</span>
// // // //                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// // // //                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                 </svg>
// // // //               </button>
// // // //               <Link to="/volunteers" className="dnt-cta-btn-secondary">
// // // //                 Become A Volunteer
// // // //                 <span className="dnt-cta-arrow">→</span>
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // import { useRef, useState, useEffect } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { motion, AnimatePresence, useInView } from "framer-motion";
// // // import "./Donate.css";

// // // import childedu from "../assets/childedu.png";
// // // import community from "../assets/community.png";
// // // import childincards from "../assets/childincards.png";
// // // import seniorciti from "../assets/senior.png";
// // // import environment from "../assets/environment.png";
// // // import communityy from "../assets/communityy.png";

// // // export default function Donate() {
// // //   const navigate = useNavigate();
// // //   const sectionRef = useRef(null);
// // //   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   const donationOptions = [
// // //     { amount: "500", title: "Support a Child", desc: "Learning materials and school supplies for one child.", accent: "red" },
// // //     { amount: "1000", title: "Healthcare Support", desc: "Medical camps and health awareness programs.", accent: "green", popular: true },
// // //     { amount: "2500", title: "Nutrition & Welfare", desc: "Nutritious meals for vulnerable families.", accent: "blue" },
// // //     { amount: "5000", title: "Community Development", desc: "Sustainable community projects and livelihood.", accent: "red" },
// // //   ];

// // //   const impactAreas = [
// // //     { tag: "Education", title: "Education & Youth Empowerment", img: childedu, accent: "red" },
// // //     { tag: "Healthcare", title: "Healthcare & Wellness", img: community, accent: "green" },
// // //     { tag: "Child Welfare", title: "Child Welfare", img: childincards, accent: "blue" },
// // //     { tag: "Elderly Care", title: "Elderly Care", img: seniorciti, accent: "red" },
// // //     { tag: "Environment", title: "Environmental Sustainability", img: environment, accent: "green" },
// // //     { tag: "Community", title: "Community Development", img: communityy, accent: "blue" },
// // //   ];

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
// // //     }, 4000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   const activeDonation = donationOptions[currentSlide];

// // //   return (
// // //     <section className="dnt-section" ref={sectionRef}>
// // //       <div className="dnt-container">
        
// // //         {/* Header */}
// // //         <motion.div
// // //           className="dnt-header"
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
// // //         >
// // //           <div className="dnt-header-tag">
// // //             <span className="dnt-header-tag-line" />
// // //             <span className="dnt-header-tag-text">Make a Difference</span>
// // //           </div>
// // //           <h2 className="dnt-header-title">
// // //             Your <span className="dnt-text-red">Support</span> Changes Lives
// // //           </h2>
// // //           <p className="dnt-header-desc">
// // //             Every contribution helps us provide education, healthcare, and hope 
// // //             to those who need it most.
// // //           </p>
// // //         </motion.div>

// // //         {/* Donation Slider */}
// // //         <motion.div
// // //           className="dnt-slider-wrap"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //           transition={{ duration: 0.6, delay: 0.2 }}
// // //         >
// // //           <AnimatePresence mode="wait">
// // //             <motion.div
// // //               key={currentSlide}
// // //               className="dnt-slider-card"
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0, y: -20 }}
// // //               transition={{ duration: 0.3 }}
// // //             >
// // //               {activeDonation.popular && <span className="dnt-slider-badge">Popular</span>}
              
// // //               <div className="dnt-slider-amount">
// // //                 <span className="dnt-slider-currency">₹</span>
// // //                 <span className="dnt-slider-value">{activeDonation.amount}</span>
// // //               </div>
              
// // //               <h3 className="dnt-slider-title">{activeDonation.title}</h3>
// // //               <p className="dnt-slider-desc">{activeDonation.desc}</p>

// // //               <button className="dnt-slider-btn" onClick={() => navigate("/contact")}>
// // //                 Donate Now →
// // //               </button>
// // //             </motion.div>
// // //           </AnimatePresence>

// // //           <div className="dnt-slider-dots">
// // //             {donationOptions.map((_, index) => (
// // //               <button
// // //                 key={index}
// // //                 className={`dnt-slider-dot ${currentSlide === index ? "dnt-slider-dot-active" : ""}`}
// // //                 onClick={() => setCurrentSlide(index)}
// // //               />
// // //             ))}
// // //           </div>
// // //         </motion.div>

// // //         {/* Impact Areas */}
// // //         <motion.div
// // //           className="dnt-impact"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //           transition={{ duration: 0.6, delay: 0.4 }}
// // //         >
// // //           <div className="dnt-impact-grid">
// // //             {impactAreas.map((item, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 className={`dnt-impact-card dnt-impact-${item.accent}`}
// // //                 whileHover={{ y: -4 }}
// // //               >
// // //                 <div className="dnt-impact-media">
// // //                   <img src={item.img} alt={item.title} />
// // //                   <span className={`dnt-impact-badge dnt-badge-${item.accent}`}>{item.tag}</span>
// // //                 </div>
// // //                 <h4 className="dnt-impact-title">{item.title}</h4>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </motion.div>

// // //         {/* CTA */}
// // //         <motion.div
// // //           className="dnt-cta"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //           transition={{ duration: 0.6, delay: 0.5 }}
// // //         >
// // //           <Link to="/Donate" className="dnt-cta-btn">
// // //             <span>View All Donation Options</span>
// // //             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// // //               <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // //             </svg>
// // //           </Link>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import { useRef, useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { motion, AnimatePresence, useInView } from "framer-motion";
// // import "./DonateHome.css";

// // import childedu from "../assets/childedu.png";
// // import community from "../assets/community.png";
// // import childincards from "../assets/childincards.png";
// // import seniorciti from "../assets/senior.png";
// // import environment from "../assets/environment.png";
// // import communityy from "../assets/communityy.png";
// // import skillImg from "../assets/prog7.png";
// // import placementImg from "../assets/prog7.png";

// // export default function Donate() {
// //   const navigate = useNavigate();
// //   const sectionRef = useRef(null);
// //   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   const donationOptions = [
// //     { amount: "500", title: "Support a Child", desc: "Learning materials and school supplies for one child.", accent: "red" },
// //     { amount: "1000", title: "Healthcare Support", desc: "Medical camps and health awareness programs.", accent: "green", popular: true },
// //     { amount: "2500", title: "Nutrition & Welfare", desc: "Nutritious meals for vulnerable families.", accent: "blue" },
// //     { amount: "5000", title: "Community Development", desc: "Sustainable community projects and livelihood.", accent: "red" },
// //   ];

// //   const impactAreas = [
// //     { tag: "Education", title: "Education & Youth", img: childedu, accent: "red" },
// //     { tag: "Healthcare", title: "Healthcare & Wellness", img: community, accent: "green" },
// //     { tag: "Child Welfare", title: "Child Welfare", img: childincards, accent: "blue" },
// //     { tag: "Elderly Care", title: "Elderly Care", img: seniorciti, accent: "red" },
// //     { tag: "Environment", title: "Environment", img: environment, accent: "green" },
// //     { tag: "Community", title: "Community Development", img: communityy, accent: "blue" },
// //     { tag: "Skilling", title: "Skill Development", img: skillImg, accent: "red" },
// //     { tag: "Placement", title: "Placement Support", img: placementImg, accent: "green" },
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const activeDonation = donationOptions[currentSlide];

// //   return (
// //     <section className="dnt-section" ref={sectionRef}>
// //       <div className="dnt-container">
        
// //         {/* Header */}
// //         <motion.div
// //           className="dnt-header"
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
// //         >
// //           <div className="dnt-header-tag">
// //             <span className="dnt-header-tag-line" />
// //             <span className="dnt-header-tag-text">Make a Difference</span>
// //           </div>
// //           <h2 className="dnt-header-title">
// //             Your <span className="dnt-text-red">Support</span> Changes Lives
// //           </h2>
// //           <p className="dnt-header-desc">
// //             Every contribution helps us provide education, healthcare, skilling, 
// //             placement support, and hope to those who need it most.
// //           </p>
// //         </motion.div>

// //         {/* Donation Slider */}
// //         <motion.div
// //           className="dnt-slider-wrap"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //         >
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={currentSlide}
// //               className="dnt-slider-card"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               {activeDonation.popular && <span className="dnt-slider-badge">Popular</span>}
              
// //               <div className="dnt-slider-amount">
// //                 <span className="dnt-slider-currency">₹</span>
// //                 <span className="dnt-slider-value">{activeDonation.amount}</span>
// //               </div>
              
// //               <h3 className="dnt-slider-title">{activeDonation.title}</h3>
// //               <p className="dnt-slider-desc">{activeDonation.desc}</p>

// //               <button className="dnt-slider-btn" onClick={() => navigate("/contact")}>
// //                 Donate Now →
// //               </button>
// //             </motion.div>
// //           </AnimatePresence>

// //           <div className="dnt-slider-dots">
// //             {donationOptions.map((_, index) => (
// //               <button
// //                 key={index}
// //                 className={`dnt-slider-dot ${currentSlide === index ? "dnt-slider-dot-active" : ""}`}
// //                 onClick={() => setCurrentSlide(index)}
// //               />
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* Impact Areas - Now 8 Cards */}
// //         <motion.div
// //           className="dnt-impact"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //         >
// //           <h3 className="dnt-impact-heading">
// //             Areas We <span className="dnt-text-red">Support</span>
// //           </h3>
// //           <div className="dnt-impact-grid">
// //             {impactAreas.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 className={`dnt-impact-card dnt-impact-${item.accent}`}
// //                 whileHover={{ y: -4 }}
// //               >
// //                 <div className="dnt-impact-media">
// //                   <img src={item.img} alt={item.title} />
// //                   <span className={`dnt-impact-badge dnt-badge-${item.accent}`}>{item.tag}</span>
// //                 </div>
// //                 <h4 className="dnt-impact-title">{item.title}</h4>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* CTA */}
// //         <motion.div
// //           className="dnt-cta"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6, delay: 0.5 }}
// //         >
// //           <Link to="/Donate" className="dnt-cta-btn">
// //             <span>View All Donation Options</span>
// //             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //               <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //             </svg>
// //           </Link>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }

// import { useRef, useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import "./Donate.css";

// import childedu from "../assets/childedu.png";
// import community from "../assets/community.png";
// import childincards from "../assets/childincards.png";
// import seniorciti from "../assets/senior.png";
// import environment from "../assets/environment.png";
// import communityy from "../assets/communityy.png";
// import skillImg from "../assets/abt123.png";
// import placementImg from "../assets/prog7.png";

// export default function Donate() {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const donationOptions = [
//     { amount: "500", title: "Support a Child", desc: "Learning materials and school supplies for one child.", accent: "red" },
//     { amount: "1000", title: "Healthcare Support", desc: "Medical camps and health awareness programs.", accent: "green", popular: true },
//     { amount: "2500", title: "Nutrition & Welfare", desc: "Nutritious meals for vulnerable families.", accent: "blue" },
//     { amount: "5000", title: "Community Development", desc: "Sustainable community projects and livelihood.", accent: "red" },
//   ];

//   const impactAreas = [
//     { tag: "Education", title: "Education & Youth", img: childedu, accent: "red" },
//     { tag: "Healthcare", title: "Healthcare & Wellness", img: community, accent: "green" },
//     { tag: "Child Welfare", title: "Child Welfare", img: childincards, accent: "blue" },
//     { tag: "Elderly Care", title: "Elderly Care", img: seniorciti, accent: "red" },
//     { tag: "Environment", title: "Environment", img: environment, accent: "green" },
//     { tag: "Community", title: "Community Development", img: communityy, accent: "blue" },
//     { tag: "Skilling", title: "Skill Development", img: skillImg, accent: "red" },
//     { tag: "Placement", title: "Placement Support", img: placementImg, accent: "green" },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const activeDonation = donationOptions[currentSlide];

//   // Duplicate for seamless marquee
//   const marqueeItems = [...impactAreas, ...impactAreas];

//   return (
//     <section className="dnt-section" ref={sectionRef}>
//       <div className="dnt-container">
        
//         {/* Header */}
//         <motion.div
//           className="dnt-header"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//         >
//           <div className="dnt-header-tag">
//             <span className="dnt-header-tag-line" />
//             <span className="dnt-header-tag-text">Make a Difference</span>
//           </div>
//           <h2 className="dnt-header-title">
//             Your <span className="dnt-text-red">Support</span> Changes Lives
//           </h2>
//           <p className="dnt-header-desc">
//             Every contribution helps us provide education, healthcare, skilling, 
//             placement support, and hope to those who need it most.
//           </p>
//         </motion.div>

//         {/* Donation Slider */}
//         <motion.div
//           className="dnt-slider-wrap"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               className="dnt-slider-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               {activeDonation.popular && <span className="dnt-slider-badge">Popular</span>}
              
//               <div className="dnt-slider-amount">
//                 <span className="dnt-slider-currency">₹</span>
//                 <span className="dnt-slider-value">{activeDonation.amount}</span>
//               </div>
              
//               <h3 className="dnt-slider-title">{activeDonation.title}</h3>
//               <p className="dnt-slider-desc">{activeDonation.desc}</p>

//               <button className="dnt-slider-btn" onClick={() => navigate("/contact")}>
//                 Donate Now →
//               </button>
//             </motion.div>
//           </AnimatePresence>

//           <div className="dnt-slider-dots">
//             {donationOptions.map((_, index) => (
//               <button
//                 key={index}
//                 className={`dnt-slider-dot ${currentSlide === index ? "dnt-slider-dot-active" : ""}`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </motion.div>

//       </div>

//       {/* Impact Areas Marquee */}
//       <div className="dnt-marquee-section">
//         <h3 className="dnt-impact-heading">
//           Areas We <span className="dnt-text-red">Support</span>
//         </h3>
        
//         {/* Marquee Row 1 - Left */}
//         <div className="dnt-marquee-wrap">
//           <motion.div 
//             className="dnt-marquee-track"
//             animate={{
//               x: [0, "-50%"],
//             }}
//             transition={{
//               x: {
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear",
//               },
//             }}
//           >
//             {marqueeItems.map((item, index) => (
//               <div className="dnt-marquee-card" key={`row1-${index}`}>
//                 <div className="dnt-marquee-media">
//                   <img src={item.img} alt={item.title} />
//                   <span className={`dnt-marquee-badge dnt-marquee-badge-${item.accent}`}>{item.tag}</span>
//                 </div>
//                 <h4 className="dnt-marquee-title">{item.title}</h4>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Marquee Row 2 - Right */}
//         <div className="dnt-marquee-wrap">
//           <motion.div 
//             className="dnt-marquee-track"
//             animate={{
//               x: ["-50%", "0%"],
//             }}
//             transition={{
//               x: {
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear",
//               },
//             }}
//           >
//             {marqueeItems.map((item, index) => (
//               <div className="dnt-marquee-card" key={`row2-${index}`}>
//                 <div className="dnt-marquee-media">
//                   <img src={item.img} alt={item.title} />
//                   <span className={`dnt-marquee-badge dnt-marquee-badge-${item.accent}`}>{item.tag}</span>
//                 </div>
//                 <h4 className="dnt-marquee-title">{item.title}</h4>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="dnt-container">
//         <motion.div
//           className="dnt-cta"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <Link to="/Donate" className="dnt-cta-btn">
//             <span>View All Donation Options</span>
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Donate.css";

import childedu from "../assets/childedu.png";
import community from "../assets/community.png";
import childincards from "../assets/childincards.png";
import seniorciti from "../assets/senior.png";
import environment from "../assets/environment.png";
import communityy from "../assets/communityy.png";
import skillImg from "../assets/abt123.png";
import placementImg from "../assets/prog7.png";

export default function Donate() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const donationOptions = [
    { amount: "500", title: "Support a Child", desc: "Learning materials and school supplies for one child.", accent: "red" },
    { amount: "1000", title: "Healthcare Support", desc: "Medical camps and health awareness programs.", accent: "green", popular: true },
    { amount: "2500", title: "Nutrition & Welfare", desc: "Nutritious meals for vulnerable families.", accent: "blue" },
    { amount: "5000", title: "Community Development", desc: "Sustainable community projects and livelihood.", accent: "red" },
  ];

  const impactAreas = [
    { tag: "Education", title: "Education & Youth", img: childedu, accent: "red" },
    { tag: "Healthcare", title: "Healthcare & Wellness", img: community, accent: "green" },
    { tag: "Child Welfare", title: "Child Welfare", img: childincards, accent: "blue" },
    { tag: "Elderly Care", title: "Elderly Care", img: seniorciti, accent: "red" },
    { tag: "Environment", title: "Environment", img: environment, accent: "green" },
    { tag: "Community", title: "Community Development", img: communityy, accent: "blue" },
    { tag: "Skilling", title: "Skill Development", img: skillImg, accent: "red" },
    { tag: "Placement", title: "Placement Support", img: placementImg, accent: "green" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeDonation = donationOptions[currentSlide];
  const marqueeItems = [...impactAreas, ...impactAreas];

  return (
    <section className="dnt-section" ref={sectionRef}>
      <div className="dnt-container">
        
        {/* Header */}
        <motion.div
          className="dnt-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="dnt-header-tag">
            <span className="dnt-header-tag-line" />
            <span className="dnt-header-tag-text">Make a Difference</span>
          </div>
          <h2 className="dnt-header-title">
            Your <span className="dnt-text-red">Support</span> Changes Lives
          </h2>
          <p className="dnt-header-desc">
            Every contribution helps us provide education, healthcare, skilling, 
            placement support, and hope to those who need it most.
          </p>
        </motion.div>

        {/* Donation Slider */}
        <motion.div
          className="dnt-slider-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="dnt-slider-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeDonation.popular && <span className="dnt-slider-badge">Popular</span>}
              
              <div className="dnt-slider-amount">
                <span className="dnt-slider-currency">₹</span>
                <span className="dnt-slider-value">{activeDonation.amount}</span>
              </div>
              
              <h3 className="dnt-slider-title">{activeDonation.title}</h3>
              <p className="dnt-slider-desc">{activeDonation.desc}</p>

              <button className="dnt-slider-btn" onClick={() => navigate("/contact")}>
                Donate Now →
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="dnt-slider-dots">
            {donationOptions.map((_, index) => (
              <button
                key={index}
                className={`dnt-slider-dot ${currentSlide === index ? "dnt-slider-dot-active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </motion.div>

      </div>

      {/* Single Marquee Row */}
      <div className="dnt-marquee-section">
        <h3 className="dnt-impact-heading">
          Areas We <span className="dnt-text-red">Support</span>
        </h3>
        
        <div className="dnt-marquee-wrap">
          <motion.div 
            className="dnt-marquee-track"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((item, index) => (
              <div className="dnt-marquee-card" key={`marquee-${index}`}>
                <div className="dnt-marquee-media">
                  <img src={item.img} alt={item.title} />
                  <span className={`dnt-marquee-badge dnt-marquee-badge-${item.accent}`}>{item.tag}</span>
                </div>
                <h4 className="dnt-marquee-title">{item.title}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="dnt-container">
        <motion.div
          className="dnt-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/Donate" className="dnt-cta-btn">
            <span>Partner with us</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}