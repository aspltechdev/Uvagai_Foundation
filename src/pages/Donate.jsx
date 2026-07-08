// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// import { useRef, useState, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import "./Donate.css";
// import bgofslides from "../assets/bgofslides.png";
// import childincards from "../assets/childincards.png";
// import community from "../assets/community.png";
// import childedu from "../assets/childedu.png";
// import seniorciti from "../assets/senior.png"
// import communityy from "../assets/communityy.png";
// import environment from "../assets/environment.png";


// export default function Donate() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, {
//     once: true,
//   });
  
//   const [activeWord, setActiveWord] = useState(0);
//   const [headingWords, setHeadingWords] = useState(1);
//   const [subtitleWords, setSubtitleWords] = useState(1);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [customAmount, setCustomAmount] = useState("");
//   const [donationStep, setDonationStep] = useState(1);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const [counts, setCounts] = useState({
//     transparency: 0,
//     lives: 0,
//     communities: 0,
//     years: 0,
//   });
  
//   const [heroCounts, setHeroCounts] = useState({
//     lives: 0,
//     communities: 0,
//     funds: 0,
//   });

//   const donationOptions = [
//     {
//       amount: "500",
//       title: "Support a Child",
//       impact: "Provides learning materials, school supplies and educational support for one child.",
//       accent: "red",
//       popular: false,
//       benefits: [
//         "Learning Materials",
//         "School Essentials",
//         "Tax Benefit"
//       ]
//     },
//     {
//       amount: "1000",
//       title: "Healthcare Support",
//       impact: "Supports medical camps, health awareness programs and medicines.",
//       accent: "green",
//       popular: true,
//       benefits: [
//         "Medical Support",
//         "Community Health",
//         "Tax Benefit"
//       ]
//     },
//     {
//       amount: "2500",
//       title: "Nutrition & Welfare",
//       impact: "Provides nutritious meals and welfare assistance for vulnerable families.",
//       accent: "blue",
//       popular: false,
//       benefits: [
//         "Nutritious Meals",
//         "Family Support",
//         "Tax Benefit"
//       ]
//     },
//     {
//       amount: "5000",
//       title: "Community Development",
//       impact: "Helps build sustainable community projects and livelihood initiatives.",
//       accent: "red",
//       popular: false,
//       benefits: [
//         "Community Projects",
//         "Skill Development",
//         "Tax Benefit"
//       ]
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? donationOptions.length - 1 : prev - 1
//     );
//   };

//   const activeDonation = donationOptions[currentSlide];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     let lives = 0;
//     let communities = 0;
//     let funds = 0;

//     const timer = setInterval(() => {
//       lives = Math.min(lives + 1, 50);
//       communities = Math.min(communities + 5, 200);
//       funds = Math.min(funds + 2, 98);

//       setHeroCounts({
//         lives,
//         communities,
//         funds,
//       });

//       if (lives === 50 && communities === 200 && funds === 98) {
//         clearInterval(timer);
//       }
//     }, 35);

//     return () => clearInterval(timer);
//   }, []);

//   const handleDonate = (amount) => {
//     setSelectedAmount(amount);
//     setDonationStep(2);
//   };

//   const handleCustomDonate = (e) => {
//     e.preventDefault();
//     if (customAmount) {
//       setSelectedAmount(customAmount);
//       setDonationStep(2);
//     }
//   };

//   useEffect(() => {
//     const words = [
//       "Together",
//       "We",
//       "Build",
//       "Better",
//       "Futures"
//     ];

//     let i = 1;

//     const timer = setInterval(() => {
//       i++;
//       if (i <= words.length) {
//         setHeadingWords(i);
//       } else {
//         clearInterval(timer);
//       }
//     }, 150);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveWord(prev => (prev + 1) % 3);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const words = [
//       "Every",
//       "contribution",
//       "empowers",
//       "children",
//       "through",
//       "education,",
//       "supports",
//       "healthcare",
//       "initiatives,",
//       "strengthens",
//       "communities,",
//       "protects",
//       "the",
//       "environment,",
//       "and",
//       "creates",
//       "sustainable",
//       "social",
//       "impact",
//       "across",
//       "generations."
//     ];

//     let i = 1;

//     const timer = setInterval(() => {
//       i++;
//       if (i <= words.length) {
//         setSubtitleWords(i);
//       } else {
//         clearInterval(timer);
//       }
//     }, 80);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!isInView) return;

//     let transparency = 0;
//     let lives = 0;
//     let communities = 0;
//     let years = 0;

//     const timer = setInterval(() => {
//       transparency = Math.min(transparency + 2, 98);
//       lives = Math.min(lives + 1, 50);
//       communities = Math.min(communities + 5, 200);
//       if (transparency % 8 === 0) {
//         years = Math.min(years + 1, 12);
//       }

//       setCounts({
//         transparency,
//         lives,
//         communities,
//         years,
//       });

//       if (transparency === 98 && lives === 50 && communities === 200 && years === 12) {
//         clearInterval(timer);
//       }
//     }, 35);

//     return () => clearInterval(timer);
//   }, [isInView]);

//   return (
//     <div className="donate-page" ref={sectionRef}>
//       <section className="donate-hero">
//         <div className="donate-hero-bg" />

//         <motion.div
//           className="donate-hero-blob donate-hero-blob-red"
//           animate={{
//             y: [0, -25, 0],
//             x: [0, 15, 0],
//             scale: [1, 1.08, 1],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <motion.div
//           className="donate-hero-blob donate-hero-blob-green"
//           animate={{
//             y: [0, 20, 0],
//             x: [0, -15, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <motion.div
//           className="donate-hero-blob donate-hero-blob-blue"
//           animate={{
//             y: [0, -15, 0],
//             x: [0, 20, 0],
//             scale: [1, 1.05, 1],
//           }}
//           transition={{
//             duration: 14,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <div className="donate-container">
//           <div className="donate-hero-grid">
//             {/* LEFT */}
//             <motion.div
//               className="donate-hero-left"
//               initial={{ opacity: 0, x: -80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="donate-hero-tag">
//                 <span className="donate-hero-tag-line"></span>
//                 <span className="donate-hero-tag-text">
//                   Together We Can Create Change
//                 </span>
//               </div>

//               <h1 className="donate-hero-headline">
//                 Small Acts of
//                 <span className="donate-hero-headline-accent">
//                   {" "}
//                   Kindness
//                 </span>
//                 <br />
//                 Build Strong Communities
//               </h1>

//               <p className="donate-hero-subtitle">
//                 Every contribution helps Uvagai Foundation provide education,
//                 healthcare, nutrition, community welfare and opportunities
//                 for people who deserve a better tomorrow.
//               </p>

//               <div className="donate-hero-buttons">
//                 <motion.a
//                   href="#donate-options"
//                   className="donate-hero-primary-btn"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: .97 }}
//                 >
//                   Donate Now →
//                 </motion.a>

//                 <motion.a
//                   href="#donate-options"
//                   className="donate-hero-secondary-btn"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: .97 }}
//                 >
//                   Learn More
//                 </motion.a>
//               </div>

//               <div className="donate-hero-mini-stats">
//                 <div>
//                   <h3>{heroCounts.lives}K+</h3>
//                   <p>Lives Impacted</p>
//                 </div>
//                 <div>
//                   <h3>{heroCounts.communities}+</h3>
//                   <p>Communities</p>
//                 </div>
//                 <div>
//                   <h3>{heroCounts.funds}%</h3>
//                   <p>Funds Utilized</p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT */}
//             <motion.div
//               className="donate-hero-right"
//               initial={{ opacity: 0, x: 80 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: .9 }}
//             >
//               <motion.div
//                 className="donate-hero-image-card"
//                 whileHover={{ y: -10 }}
//               >
//                 <img
//                   src={bgofslides}
//                   alt="Helping Communities"
//                   className="donate-hero-image"
//                 />

//                 <div className="donate-image-overlay">
//                   <div className="donate-overlay-card">
//                     <h4>Hope Begins With You</h4>
//                     <p>
//                       Together we empower families,
//                       educate children and build
//                       stronger communities.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="floating-card floating-card-one"
//                 animate={{
//                   y: [0, -15, 0]
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity
//                 }}
//               >
//                 ❤️ Compassion
//               </motion.div>

//               <motion.div
//                 className="floating-card floating-card-two"
//                 animate={{
//                   y: [0, 18, 0]
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity
//                 }}
//               >
//                 🌱 Growth
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         <svg
//           className="hero-wave"
//           viewBox="0 0 1440 140"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#ffffff"
//             d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,160L0,160Z"
//           />
//         </svg>
//       </section>

//       {/* Why Donate */}
//       <section className="donate-why-section">
//         <div className="donate-container">
//           <motion.div
//             className="donate-section-header"
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="donate-section-tag">
//               <span className="donate-section-tag-line"></span>
//               <span className="donate-section-tag-text">
//                 WHY DONATE
//               </span>
//               <span className="donate-section-tag-line"></span>
//             </div>

//             <h2 className="donate-section-headline">
//               {["Together", "We"]
//                 .slice(0, Math.min(headingWords, 2))
//                 .join(" ")}
//               {headingWords > 2 && (
//                 <span className="donate-hero-headline-accent">
//                   {" "}
//                   {["Build", "Better", "Futures"]
//                     .slice(0, headingWords - 2)
//                     .join(" ")}
//                 </span>
//               )}
//             </h2>

//             <p className="donate-section-subtitle">
//               {[
//                 "Every",
//                 "contribution",
//                 "empowers",
//                 "children",
//                 "through",
//                 "education,",
//                 "supports",
//                 "healthcare",
//                 "initiatives,",
//                 "strengthens",
//                 "communities,",
//                 "protects",
//                 "the",
//                 "environment,",
//                 "and",
//                 "creates",
//                 "sustainable",
//                 "social",
//                 "impact",
//                 "across",
//                 "generations."
//               ]
//                 .slice(0, subtitleWords)
//                 .join(" ")}
//             </p>
//           </motion.div>

//           <motion.div
//             className="donate-stats-row"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               visible: {
//                 transition: {
//                   staggerChildren: 0.15,
//                 },
//               },
//             }}
//           >
//             {[
//               {
//                 value: "98%",
//                 title: "Fund Transparency",
//                 desc: "Every contribution reaches the people who need it most.",
//                 color: "red",
//               },
//               {
//                 value: "50K+",
//                 title: "Lives Transformed",
//                 desc: "Families, children and elders supported through our initiatives.",
//                 color: "green",
//               },
//               {
//                 value: "200+",
//                 title: "Communities",
//                 desc: "Villages and neighbourhoods empowered through sustainable programs.",
//                 color: "blue",
//               },
//               {
//                 value: "12+",
//                 title: "Years of Trust",
//                 desc: "Dedicated service creating meaningful social impact.",
//                 color: "red",
//               },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className={`donate-stat-card stat-${stat.color}`}
//               >
//                 <div className="stat-card-inner">
//                   {/* FRONT */}
//                   <div className="stat-card-front">
//                     <div className="stat-top-line"></div>
//                     <h2 className="donate-stat-value">
//                       {stat.value === "98%" && `${counts.transparency}%`}
//                       {stat.value === "50K+" && `${counts.lives}K+`}
//                       {stat.value === "200+" && `${counts.communities}+`}
//                       {stat.value === "12+" && `${counts.years}+`}
//                     </h2>
//                     <h3 className="stat-title">
//                       {stat.title}
//                     </h3>
//                     <p className="stat-description">
//                       {stat.desc}
//                     </p>
//                   </div>

//                   {/* BACK */}
//                   <div className="stat-card-back">
//                     <h3>{stat.title}</h3>
//                     <p>
//                       Thank you for supporting Uvagai Foundation.
//                       Every donation helps us create meaningful
//                       social impact and transform lives.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Donation Options */}
//       <section className="donate-options-section" id="donate-options">
//         <div className="donate-options-pattern"></div>
//         <div className="donate-options-gradient"></div>
//         <div className="donate-options-noise"></div>

//         <motion.div
//           className="floating-circle circle-one"
//           animate={{
//             y: [0, -30, 0],
//             x: [0, 20, 0],
//             scale: [1, 1.08, 1]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//         <motion.div
//           className="floating-circle circle-two"
//           animate={{
//             y: [0, 25, 0],
//             x: [0, -20, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//         <motion.div
//           className="floating-circle circle-three"
//           animate={{
//             y: [0, -18, 0],
//             x: [0, 15, 0]
//           }}
//           transition={{
//             duration: 14,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//         <div className="donate-options-bg" />
//         <div className="donate-container">
//           <motion.div
//             className="premium-donation-header"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: .8 }}
//           >
//             <div className="premium-tag">
//               <span></span>
//               DONATION PROGRAMS
//               <span></span>
//             </div>

//             <h2>
//               Every Contribution Creates
//               <span>Lasting Impact</span>
//             </h2>

//             <p>
//               Choose how you'd like to support
//               education, healthcare, nutrition,
//               and community development.
//               Every donation directly transforms lives.
//             </p>
//           </motion.div>

//           <motion.div
//             className="donation-slider"
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <button
//               className="slider-btn slider-left"
//               onClick={prevSlide}
//             >
//               ❮
//             </button>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 className="slider-card"
//                 initial={{ opacity: 0, x: 150 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -150 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {activeDonation.popular && (
//                   <div className="slider-badge">
//                     MOST IMPACTFUL
//                   </div>
//                 )}

//                 <div className="slider-price">
//                   ₹
//                   <span>{activeDonation.amount}</span>
//                 </div>

//                 <h2>{activeDonation.title}</h2>
//                 <p>{activeDonation.impact}</p>

//              <div className="slider-tags">
//   {activeDonation.benefits.map((item, index) => (
//     <span key={index} className="slider-tag">
//       {item}
//     </span>
//   ))}
// </div>

//                 <motion.button
//                   className="slider-donate"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: .95 }}
//                   onClick={() => handleDonate(activeDonation.amount)}
//                 >
//                   Donate Now →
//                 </motion.button>
//               </motion.div>
//             </AnimatePresence>

//             <button
//               className="slider-btn slider-right"
//               onClick={nextSlide}
//             >
//               ❯
//             </button>
//           </motion.div>

//           <div className="slider-dots">
//             {donationOptions.map((_, index) => (
//               <button
//                 key={index}
//                 className={`slider-dot ${currentSlide === index ? "active" : ""}`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>

//         <motion.div
//   className="donate-custom-card"
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.7, delay: 0.4 }}
// >
//   {/* LEFT */}
//   <div className="donate-custom-content">
//     <h3 className="donate-custom-title">
//       Make A Custom Contribution
//     </h3>

//     <p className="donate-custom-text">
//       Every act of generosity contributes to building stronger,
//       healthier and more empowered communities. Enter any amount
//       and make a difference today.
//     </p>
//   </div>

//   {/* RIGHT */}
// <form
//   className="custom-donate-form"
//   onSubmit={handleCustomDonate}
// >
//   <div className="custom-input-wrapper">
//     <span className="rupee-symbol">₹</span>

//     <input
//       type="number"
//       min="1"
//       placeholder="Enter amount"
//       value={customAmount}
//       onChange={(e) => setCustomAmount(e.target.value)}
//       className="custom-amount-input"
//     />
//   </div>

//   <button
//     type="submit"
//     className="custom-donate-btn"
//   >
//     Donate Now →
//   </button>
// </form>
// </motion.div>
//         </div>
//       </section>
// {/* ================= Impact Areas ================= */}

// <section className="impact-section">

//   <div className="donate-container">

//     <div className="impact-heading">

//       <span>OUR IMPACT</span>

//       <h2>
//         Areas We <span>Support</span>
//       </h2>

//       <p>
//         Every donation directly contributes to initiatives that improve
//         lives and strengthen communities.
//       </p>

//     </div>

//     <div className="impact-grid">

//       {[
//         {
//            tag: "Education",
//           title: "Education & Youth Empowerment",
//           desc: "Supporting learning opportunities, digital literacy, mentorship, and educational resources.",
//           img: childedu,
//         },

//         {
//           tag: "Healthcare",
//           title: "Healthcare & Wellness",
//           desc: "Organizing medical camps, health awareness programs and preventive healthcare initiatives.",
//           img: community,
//         },

//         {
//           tag:"child",
//           title: "Child Welfare",
//           desc: "Promoting education, nutrition, healthcare and protection for every child.",
//           img: childincards,
//         },

//         {
//           tag:"elderly care",
//           title: "Elderly Care",
//           desc: "Improving the quality of life of senior citizens through care, support and wellness.",
//           img: seniorciti,
//         },

//         {
//           tag: "Environment",
//           title: "Environmental Sustainability",
//           desc: "Tree plantation drives, environmental awareness and green community initiatives.",
//           img: environment,
//         },

//         {
//           tag:"Community",
//           title: "Community Development",
//           desc: "Creating sustainable livelihood opportunities and empowering rural communities.",
//           img: communityy,
//         },

//       ].map((item,index)=>(

//         <motion.div
//           key={index}
//           className="impact-card"
//           whileHover={{ y:-10 }}
//         >

//           <div className="impact-image">

//             <img src={item.img} alt={item.title} />

//           </div>

//       <div className="impact-content">

//     <div className="impact-header">

//         <div className="impact-tag">
//             {item.tag}
//         </div>

//         <h3>{item.title}</h3>

//     </div>

//     <span className="impact-line"></span>

//     <p>{item.desc}</p>

// </div>

//         </motion.div>

//       ))}

//     </div>

//   </div>

// </section>
//       {/* CTA Section */}
//       <section className="donate-cta-section">
//         <div className="donate-cta-bg" />
//         <div className="donate-cta-glow" />
        
//         <div className="donate-container">
//           <motion.div 
//             className="donate-cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="donate-cta-headline">
//               Together, We Can
//               <span className={`word build ${activeWord === 1 ? "active" : ""}`}>
//                 Build
//               </span>
//               A
//               <span className={`word better ${activeWord === 2 ? "active" : ""}`}>
//                 Better Tomorrow
//               </span>
//             </h2>

//             <p className="donate-cta-description">
//               Join us in empowering lives, supporting communities, and
//               creating sustainable social change through your generosity.
//             </p>

//             <div className="donate-cta-buttons">
//               <a href="#donate-options" className="donate-cta-primary">
//                 <span>Donate Now</span>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </a>
//               <a href="#" className="donate-cta-secondary">
//                 Become A Volunteer
//                 <span className="donate-cta-secondary-arrow">→</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Donate.css";
import bgofslides from "../assets/bgofslides.png";
import childincards from "../assets/childincards.png";
import community from "../assets/community.png";
import childedu from "../assets/childedu.png";
import seniorciti from "../assets/senior.png";
import communityy from "../assets/communityy.png";
import environment from "../assets/environment.png";

const heroSlides = [
  {
    image: bgofslides,
    title: "Small Acts of Kindness Build Strong Communities",
    subtitle: "Every contribution helps Uvagai Foundation provide education, healthcare, nutrition, community welfare and opportunities for people who deserve a better tomorrow.",
    tag: "Together We Can Create Change",
    accent: "red"
  },
  {
    image: community,
    title: "Your Support Transforms Lives & Communities",
    subtitle: "From education to healthcare, your donation creates lasting impact and empowers those who need it most.",
    tag: "Make A Difference Today",
    accent: "green"
  },
  {
    image: childincards,
    title: "Empowering Children, Strengthening Futures",
    subtitle: "Support child welfare programs that provide education, nutrition, and protection for vulnerable children.",
    tag: "Invest In Tomorrow",
    accent: "blue"
  }
];

export default function Donate() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const donationOptions = [
    {
      amount: "500",
      title: "Support a Child",
      impact: "Provides learning materials, school supplies and educational support for one child.",
      accent: "red",
      popular: false,
      benefits: [
        "Learning Materials",
        "School Essentials",
        "Tax Benefit"
      ]
    },
    {
      amount: "1000",
      title: "Healthcare Support",
      impact: "Supports medical camps, health awareness programs and medicines.",
      accent: "green",
      popular: true,
      benefits: [
        "Medical Support",
        "Community Health",
        "Tax Benefit"
      ]
    },
    {
      amount: "2500",
      title: "Nutrition & Welfare",
      impact: "Provides nutritious meals and welfare assistance for vulnerable families.",
      accent: "blue",
      popular: false,
      benefits: [
        "Nutritious Meals",
        "Family Support",
        "Tax Benefit"
      ]
    },
    {
      amount: "5000",
      title: "Community Development",
      impact: "Helps build sustainable community projects and livelihood initiatives.",
      accent: "red",
      popular: false,
      benefits: [
        "Community Projects",
        "Skill Development",
        "Tax Benefit"
      ]
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide_hero = heroSlides[current];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? donationOptions.length - 1 : prev - 1
    );
  };

  const activeDonation = donationOptions[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDonate = (amount) => {
    setSelectedAmount(amount);
  };

  const handleCustomDonate = (e) => {
    e.preventDefault();
    if (customAmount) {
      setSelectedAmount(customAmount);
    }
  };

  return (
    <div className="donate-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section 
        className="donate-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="donate-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`donate-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="donate-overlay-dark" />
        <div className="donate-overlay-gradient" />
        <div className="donate-overlay-vignette" />

        <div className="donate-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="donate-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="donate-hero-tag">
                <span className="donate-hero-tag-line" />
                <span className="donate-hero-tag-text">{currentSlide_hero.tag}</span>
              </div>

              <h1 className="donate-hero-headline">{currentSlide_hero.title}</h1>
              <p className="donate-hero-subtitle">{currentSlide_hero.subtitle}</p>

              <div className="donate-hero-buttons">
                <motion.a
                  href="#donate-options"
                  className="donate-hero-primary-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Donate Now</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="#why-donate"
                  className="donate-hero-secondary-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                  <span className="donate-hero-secondary-arrow">→</span>
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="donate-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`donate-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="donate-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 4 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="donate-slide-counter">
          <span className="donate-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="donate-counter-sep">/</span>
          <span className="donate-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Why Donate Intro Section */}
      <section className="donate-intro-section" id="why-donate">
        <div className="donate-container">
          <motion.div 
            className="donate-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-intro-tag">
              <span className="donate-intro-tag-line" />
              <span className="donate-intro-tag-text">Why Donate</span>
            </div>
            <h2 className="donate-intro-headline">Together We Build Better Futures</h2>
            <p className="donate-intro-description">
              Every contribution empowers children through education, supports healthcare 
              initiatives, strengthens communities, protects the environment, and creates 
              sustainable social impact across generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="donate-stats-section">
        <div className="donate-container">
          <motion.div 
            className="donate-stats-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {[
              {
                value: "98%",
                title: "Fund Transparency",
                desc: "Every contribution reaches the people who need it most.",
                accent: "red",
              },
              {
                value: "50K+",
                title: "Lives Transformed",
                desc: "Families, children and elders supported through our initiatives.",
                accent: "green",
              },
              {
                value: "200+",
                title: "Communities",
                desc: "Villages and neighbourhoods empowered through sustainable programs.",
                accent: "blue",
              },
              {
                value: "12+",
                title: "Years of Trust",
                desc: "Dedicated service creating meaningful social impact.",
                accent: "red",
              },
            ].map((stat, index) => (
              <motion.div 
                className={`donate-stat-card stat-${stat.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -6 }}
              >
                <div className="donate-stat-value">{stat.value}</div>
                <h3 className="donate-stat-title">{stat.title}</h3>
                <p className="donate-stat-description">{stat.desc}</p>
                <div className="donate-stat-accent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="donate-options-section" id="donate-options">
        <div className="donate-container">
          <motion.div 
            className="donate-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-intro-tag">
              <span className="donate-intro-tag-line" />
              <span className="donate-intro-tag-text">Donation Programs</span>
            </div>
            <h2 className="donate-intro-headline">Every Contribution Creates Lasting Impact</h2>
            <p className="donate-intro-description">
              Choose how you'd like to support education, healthcare, nutrition, 
              and community development. Every donation directly transforms lives.
            </p>
          </motion.div>

          <motion.div
            className="donation-slider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <button className="slider-btn slider-left" onClick={prevSlide}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="slider-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
              >
                {activeDonation.popular && (
                  <div className="slider-badge">MOST IMPACTFUL</div>
                )}

                <div className="slider-price">
                  <span className="slider-currency">₹</span>
                  <span className="slider-amount">{activeDonation.amount}</span>
                </div>

                <h2 className="slider-title">{activeDonation.title}</h2>
                <p className="slider-impact">{activeDonation.impact}</p>

                <div className="slider-tags">
                  {activeDonation.benefits.map((item, index) => (
                    <span key={index} className="slider-tag">
                      {item}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="slider-donate-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleDonate(activeDonation.amount)}
                >
                  <span>Donate Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </motion.div>
            </AnimatePresence>

            <button className="slider-btn slider-right" onClick={nextSlide}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>

          <div className="slider-dots">
            {donationOptions.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <motion.div
            className="donate-custom-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1], delay: 0.4 }}
          >
            <div className="donate-custom-content">
              <h3 className="donate-custom-title">Make A Custom Contribution</h3>
              <p className="donate-custom-text">
                Every act of generosity contributes to building stronger, healthier 
                and more empowered communities. Enter any amount and make a difference today.
              </p>
            </div>

            <form className="custom-donate-form" onSubmit={handleCustomDonate}>
              <div className="custom-input-wrapper">
                <span className="rupee-symbol">₹</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="custom-amount-input"
                />
              </div>

              <button type="submit" className="custom-donate-btn">
                <span>Donate Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="impact-section">
        <div className="donate-container">
          <motion.div 
            className="donate-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-intro-tag">
              <span className="donate-intro-tag-line" />
              <span className="donate-intro-tag-text">Our Impact</span>
            </div>
            <h2 className="donate-intro-headline">Areas We Support</h2>
            <p className="donate-intro-description">
              Every donation directly contributes to initiatives that improve 
              lives and strengthen communities.
            </p>
          </motion.div>

          <motion.div 
            className="impact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {[
              {
                tag: "Education",
                title: "Education & Youth Empowerment",
                desc: "Supporting learning opportunities, digital literacy, mentorship, and educational resources.",
                img: childedu,
                accent: "red"
              },
              {
                tag: "Healthcare",
                title: "Healthcare & Wellness",
                desc: "Organizing medical camps, health awareness programs and preventive healthcare initiatives.",
                img: community,
                accent: "green"
              },
              {
                tag: "Child Welfare",
                title: "Child Welfare",
                desc: "Promoting education, nutrition, healthcare and protection for every child.",
                img: childincards,
                accent: "blue"
              },
              {
                tag: "Elderly Care",
                title: "Elderly Care",
                desc: "Improving the quality of life of senior citizens through care, support and wellness.",
                img: seniorciti,
                accent: "red"
              },
              {
                tag: "Environment",
                title: "Environmental Sustainability",
                desc: "Tree plantation drives, environmental awareness and green community initiatives.",
                img: environment,
                accent: "green"
              },
              {
                tag: "Community",
                title: "Community Development",
                desc: "Creating sustainable livelihood opportunities and empowering rural communities.",
                img: communityy,
                accent: "blue"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`impact-card impact-${item.accent}`}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -6 }}
              >
                <div className="impact-card-image">
                  <img src={item.img} alt={item.title} />
                  <div className="impact-card-image-overlay" />
                  <div className="impact-card-badge">
                    <span className="impact-card-badge-dot" />
                    <span className="impact-card-badge-text">{item.tag}</span>
                  </div>
                </div>

                <div className="impact-card-content">
                  <h3 className="impact-card-title">{item.title}</h3>
                  <p className="impact-card-description">{item.desc}</p>
                  <div className="impact-card-accent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="donate-cta-section">
        <div className="donate-cta-bg" />
        <div className="donate-cta-glow" />
        <div className="donate-container">
          <motion.div 
            className="donate-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="donate-cta-headline">Together, We Can Build A Better Tomorrow</h2>
            <p className="donate-cta-description">
              Join us in empowering lives, supporting communities, and creating 
              sustainable social change through your generosity.
            </p>
            <div className="donate-cta-buttons">
              <a href="#donate-options" className="donate-cta-primary">
                <span>Donate Now</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="donate-cta-secondary">
                Become A Volunteer
                <span className="donate-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}