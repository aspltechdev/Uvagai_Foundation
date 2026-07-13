// import { useEffect, useState, useRef, useCallback } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
// import "./Hero.css";

// export default function Hero() {
// //   const slides = [
// //     {
// //       id: "education",
// //       category: "Education & Child Welfare",
// //       headline: "Every child deserves a chance to dream",
// //       subheadline: "Building classrooms of hope across communities",
// //       description:
// //         "Through dedicated education initiatives, we're transforming lives—one child, one classroom, one community at a time. Join us in writing futures filled with possibility.",
// //       primaryCTA: "Support a Child's Dream",
// //       secondaryCTA: "See Our Impact",
// //       image: "/images/education.jpg",
// //       stat: { value: "10,000+", label: "Young minds empowered" },
// //       quote: "Education is the most powerful weapon which you can use to change the world.",
// //       quoteAuthor: "— Nelson Mandela",
// //       accentColor: "red",
// //     },
// //     {
// //       id: "healthcare",
// //       category: "Healthcare Access",
// //       headline: "Healing begins with reaching the unreached",
// //       subheadline: "Bringing medical care to those who need it most",
// //       description:
// //         "Our mobile clinics travel to remote villages, ensuring quality healthcare isn't a privilege—it's a fundamental right that belongs to every human being.",
// //       primaryCTA: "Fund a Medical Camp",
// //       secondaryCTA: "Our Healthcare Work",
// //       image: "/images/healthcare.jpg",
// //       stat: { value: "50+", label: "Medical camps conducted" },
// //       quote: "The greatest wealth is health.",
// //       quoteAuthor: "— Virgil",
// //       accentColor: "green",
// //     },
// //     {
// //       id: "eldercare",
// //       category: "Elderly Care",
// //       headline: "Honoring the hands that built our tomorrow",
// //       subheadline: "Ensuring dignity and care for every senior citizen",
// //       description:
// //         "Our elders deserve more than care—they deserve respect, companionship, and the warmth of a community that remembers their sacrifices and celebrates their wisdom.",
// //       primaryCTA: "Support Our Elders",
// //       secondaryCTA: "Learn Their Stories",
// //       image: "/images/elderly-care.jpg",
// //       stat: { value: "200+", label: "Seniors cared for" },
// //       quote: "The measure of a society is how it treats its elderly.",
// //       quoteAuthor: "— Mahatma Gandhi",
// //       accentColor: "blue",
// //     },
// //     {
// //       id: "community",
// //       category: "Community Development",
// //       headline: "Together, we rise. Together, we thrive.",
// //       subheadline: "Building sustainable communities from the ground up",
// //       description:
// //         "Real change happens when communities come together. We facilitate that unity—providing resources, expertise, and unwavering support to build lasting transformation.",
// //       primaryCTA: "Join the Movement",
// //       secondaryCTA: "View Communities",
// //       image: "/images/community.jpg",
// //       stat: { value: "25+", label: "Villages transformed" },
// //       quote: "Alone we can do so little; together we can do so much.",
// //       quoteAuthor: "— Helen Keller",
// //       accentColor: "black",
// //     },
// //   ];
// const slides = [
//   {
//     id: "education",
//     category: "Education & Child Welfare",
//     headline: "Every child deserves a chance to dream",
//     subheadline: "Building classrooms of hope across communities",
//     description:
//       "Through dedicated education initiatives, we're transforming lives—one child, one classroom, one community at a time. Join us in writing futures filled with possibility.",
//     primaryCTA: "Support a Child's Dream",
//     secondaryCTA: "See Our Impact",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
//     stat: { value: "10,000+", label: "Young minds empowered" },
//     quote:
//       "Education is the most powerful weapon which you can use to change the world.",
//     quoteAuthor: "— Nelson Mandela",
//     accentColor: "orange",
//   },
//   {
//     id: "healthcare",
//     category: "Healthcare Access",
//     headline: "Healing begins with reaching the unreached",
//     subheadline: "Bringing medical care to those who need it most",
//     description:
//       "Our mobile clinics travel to remote villages, ensuring quality healthcare isn't a privilege—it's a fundamental right that belongs to every human being.",
//     primaryCTA: "Fund a Medical Camp",
//     secondaryCTA: "Our Healthcare Work",
//     image:
//       "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600&q=80",
//     stat: { value: "50+", label: "Medical camps conducted" },
//     quote: "The greatest wealth is health.",
//     quoteAuthor: "— Virgil",
//     accentColor: "green",
//   },
//   {
//     id: "eldercare",
//     category: "Elderly Care",
//     headline: "Honoring the hands that built our tomorrow",
//     subheadline: "Ensuring dignity and care for every senior citizen",
//     description:
//       "Our elders deserve more than care—they deserve respect, companionship, and the warmth of a community that remembers their sacrifices and celebrates their wisdom.",
//     primaryCTA: "Support Our Elders",
//     secondaryCTA: "Learn Their Stories",
//     image:
//       "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600&q=80",
//     stat: { value: "200+", label: "Seniors cared for" },
//     quote: "The measure of a society is how it treats its elderly.",
//     quoteAuthor: "— Mahatma Gandhi",
//     accentColor: "blue",
//   },
//   {
//     id: "community",
//     category: "Community Development",
//     headline: "Together, we rise. Together, we thrive.",
//     subheadline: "Building sustainable communities from the ground up",
//     description:
//       "Real change happens when communities come together. We facilitate that unity—providing resources, expertise, and unwavering support to build lasting transformation.",
//     primaryCTA: "Join the Movement",
//     secondaryCTA: "View Communities",
//     image:
//       "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80",
//     stat: { value: "25+", label: "Villages transformed" },
//     quote: "Alone we can do so little; together we can do so much.",
//     quoteAuthor: "— Helen Keller",
//     accentColor: "orange",
//   },
// ];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [direction, setDirection] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [imagesLoaded, setImagesLoaded] = useState({});
//   const containerRef = useRef(null);
//   const quoteRef = useRef(null);
//   const isInView = useInView(quoteRef, { once: false, margin: "-100px" });

//   const { scrollY, scrollYProgress } = useScroll();
  
//   // Refined mouse tracking
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothMouseX = useSpring(mouseX, { stiffness: 55, damping: 35, mass: 0.5 });
//   const smoothMouseY = useSpring(mouseY, { stiffness: 55, damping: 35, mass: 0.5 });

//   // Elegant parallax
//   const parallaxY = useTransform(scrollY, [0, 1000], [0, 120]);
//   const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  
//   // Mouse-reactive transforms
//   const headlineX = useTransform(smoothMouseX, [-450, 450], [-12, 12]);
//   const headlineY = useTransform(smoothMouseY, [-250, 250], [-6, 6]);
//   const imageX = useTransform(smoothMouseX, [-450, 450], [-8, 8]);
//   const imageY = useTransform(smoothMouseY, [-250, 250], [-5, 5]);
//   const imageScale = useTransform(smoothMouseX, [-450, 450], [1, 1.025]);
  
//   // Organic elements
//   const organicX1 = useTransform(smoothMouseX, [-350, 350], [-20, 20]);
//   const organicY1 = useTransform(smoothMouseY, [-250, 250], [-12, 12]);
//   const organicX2 = useTransform(smoothMouseX, [-350, 350], [16, -16]);
//   const organicY2 = useTransform(smoothMouseY, [-250, 250], [10, -10]);
//   const organicRotate1 = useTransform(smoothMouseX, [-350, 350], [0, 30]);
//   const organicRotate2 = useTransform(smoothMouseX, [-350, 350], [0, -25]);

//   const handleMouseMove = useCallback((e) => {
//     if (containerRef.current && !isTransitioning) {
//       const rect = containerRef.current.getBoundingClientRect();
//       const x = e.clientX - rect.left - rect.width / 2;
//       const y = e.clientY - rect.top - rect.height / 2;
//       mouseX.set(x);
//       mouseY.set(y);
//     }
//   }, [mouseX, mouseY, isTransitioning]);

//   // Preload images
//   useEffect(() => {
//     slides.forEach((slide, index) => {
//       const img = new Image();
//       img.src = slide.image;
//       img.onload = () => {
//         setImagesLoaded(prev => ({ ...prev, [index]: true }));
//       };
//     });
//   }, []);

//   // Auto advance
//   useEffect(() => {
//     if (!isHovered && !isTransitioning) {
//       const timer = setInterval(() => {
//         handleTransition(1);
//       }, 7000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered, isTransitioning, currentIndex]);

//   const handleTransition = (newDirection) => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setDirection(newDirection);
    
//     if (newDirection === 1) {
//       setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     } else {
//       setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     }
    
//     setTimeout(() => setIsTransitioning(false), 1200);
//   };

//   const goTo = (index) => {
//     if (isTransitioning || index === currentIndex) return;
//     setIsTransitioning(true);
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//     setIsHovered(true);
//     setTimeout(() => {
//       setIsTransitioning(false);
//       setIsHovered(false);
//     }, 3500);
//   };

//   const goNext = () => handleTransition(1);
//   const goPrev = () => handleTransition(-1);

//   const currentSlide = slides[currentIndex];

//   // Text animation variants
//   const textRevealVariants = {
//     hidden: { 
//       y: 40, 
//       opacity: 0,
//     },
//     visible: (i) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.9,
//         delay: i * 0.12,
//         ease: [0.33, 0.1, 0.25, 1],
//       },
//     }),
//     exit: {
//       y: -35,
//       opacity: 0,
//       transition: {
//         duration: 0.45,
//         ease: [0.55, 0, 1, 0.45],
//       },
//     },
//   };

//   const imageRevealVariants = {
//     hidden: (direction) => ({
//       clipPath: direction > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)',
//     }),
//     visible: {
//       clipPath: 'inset(0% 0% 0% 0%)',
//       transition: {
//         duration: 1.2,
//         ease: [0.76, 0, 0.24, 1],
//       },
//     },
//     exit: (direction) => ({
//       clipPath: direction > 0 ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)',
//       transition: {
//         duration: 0.65,
//         ease: [0.55, 0, 1, 0.45],
//       },
//     }),
//   };

//   // Get accent color class
//   const getAccentClass = (color) => {
//     const colorMap = {
//       red: 'accent-red',
//       green: 'accent-green',
//       blue: 'accent-blue',
//       black: 'accent-black',
//     };
//     return colorMap[color] || 'accent-red';
//   };

//   return (
//     <section 
//       className={`uvagai-hero ${getAccentClass(currentSlide.accentColor)}`}
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//     >
//       {/* Background Base */}
//       <div className="uvagai-bg-base" />
      
//       {/* Brand Color Light Glows */}
//       <motion.div 
//         className="uvagai-light-glow uvagai-glow-primary"
//         style={{ x: organicX1, y: organicY1 }}
//         animate={{
//           scale: [1, 1.12, 1],
//           opacity: [0.4, 0.55, 0.4],
//         }}
//         transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div 
//         className="uvagai-light-glow uvagai-glow-secondary"
//         style={{ x: organicX2, y: organicY2 }}
//         animate={{
//           scale: [1.08, 0.94, 1.08],
//           opacity: [0.35, 0.5, 0.35],
//         }}
//         transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Subtle Grid */}
//       <div className="uvagai-grid">
//         {[...Array(16)].map((_, i) => (
//           <div key={`h-${i}`} className="uvagai-grid-line-h" style={{ top: `${(i + 1) * 6.25}%` }} />
//         ))}
//         {[...Array(16)].map((_, i) => (
//           <div key={`v-${i}`} className="uvagai-grid-line-v" style={{ left: `${(i + 1) * 6.25}%` }} />
//         ))}
//       </div>

//       {/* Organic Brand Shapes */}
//       <motion.div 
//         className="uvagai-organic-shape uvagai-shape-1"
//         style={{ 
//           x: organicX1, 
//           y: organicY1,
//           rotate: organicRotate1,
//         }}
//         animate={{
//           borderRadius: [
//             '55% 45% 65% 35% / 35% 55% 45% 65%',
//             '45% 55% 35% 65% / 55% 35% 65% 45%',
//             '55% 45% 65% 35% / 35% 55% 45% 65%',
//           ],
//         }}
//         transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div 
//         className="uvagai-organic-shape uvagai-shape-2"
//         style={{ 
//           x: organicX2, 
//           y: organicY2,
//           rotate: organicRotate2,
//         }}
//         animate={{
//           borderRadius: [
//             '45% 55% 35% 65% / 55% 35% 65% 45%',
//             '55% 45% 65% 35% / 35% 55% 45% 65%',
//             '45% 55% 35% 65% / 55% 35% 65% 45%',
//           ],
//         }}
//         transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Brand Particles */}
//       <div className="uvagai-particles">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="uvagai-particle"
//             style={{
//               left: `${12 + Math.random() * 76}%`,
//               top: `${18 + Math.random() * 64}%`,
//             }}
//             animate={{
//               y: [0, -18 - Math.random() * 35, 0],
//               x: [0, (Math.random() - 0.5) * 18, 0],
//               opacity: [0, 0.25, 0],
//               scale: [0, 1, 0],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 8,
//               repeat: Infinity,
//               delay: Math.random() * 6,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation */}
//       <motion.nav 
//         className="uvagai-nav"
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1], delay: 0.2 }}
//       >
//         <div className="uvagai-nav-inner">
//           <motion.div 
//             className="uvagai-logo"
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="uvagai-logo-mark">
//               <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
//                 <rect width="38" height="38" rx="9" className="uvagai-logo-bg" />
//                 <path d="M11 19L17 25L27 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <div className="uvagai-logo-text">
//               <span className="uvagai-logo-name">Uvagai</span>
//               <span className="uvagai-logo-subtitle">Foundation</span>
//             </div>
//           </motion.div>
          
//           <div className="uvagai-nav-links">
//             {["Our Work", "Stories", "About", "Contact"].map((link) => (
//               <motion.a 
//                 key={link} 
//                 href="#" 
//                 className="uvagai-nav-link"
//                 whileHover={{ y: -1 }}
//               >
//                 {link}
//                 <span className="uvagai-nav-link-underline" />
//               </motion.a>
//             ))}
//             <span className="uvagai-nav-divider" />
//             <motion.button 
//               className="uvagai-nav-cta"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               Donate
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M5 11L9 7L5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Main Content */}
//       <div className="uvagai-content">
//         <div className="uvagai-content-layout">
          
//           {/* Left: Emotional Text */}
//           <motion.div 
//             className="uvagai-text-section"
//             style={{ x: headlineX, y: headlineY }}
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 {/* Category */}
//                 <motion.div 
//                   className="uvagai-category"
//                   variants={textRevealVariants}
//                   custom={0}
//                 >
//                   <span className="uvagai-category-indicator" />
//                   <span className="uvagai-category-text">
//                     {currentSlide.category}
//                   </span>
//                 </motion.div>

//                 {/* Headline */}
//                 <h1 className="uvagai-headline">
//                   <motion.span 
//                     className="uvagai-headline-text"
//                     variants={textRevealVariants}
//                     custom={1}
//                   >
//                     {currentSlide.headline}
//                   </motion.span>
//                 </h1>

//                 {/* Subheadline */}
//                 <motion.p 
//                   className="uvagai-subheadline"
//                   variants={textRevealVariants}
//                   custom={2}
//                 >
//                   {currentSlide.subheadline}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p 
//                   className="uvagai-description"
//                   variants={textRevealVariants}
//                   custom={3}
//                 >
//                   {currentSlide.description}
//                 </motion.p>

//                 {/* CTA Group */}
//                 <motion.div 
//                   className="uvagai-cta-group"
//                   variants={textRevealVariants}
//                   custom={4}
//                 >
//                   <motion.button
//                     className="uvagai-cta-primary"
//                     whileHover={{ scale: 1.02, y: -2 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <span className="uvagai-cta-primary-text">
//                       {currentSlide.primaryCTA}
//                     </span>
//                     <motion.span 
//                       className="uvagai-cta-primary-icon"
//                       animate={{ x: [0, 4, 0] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     >
//                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                         <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </motion.span>
//                   </motion.button>
                  
//                   <motion.button
//                     className="uvagai-cta-secondary"
//                     whileHover={{ x: 4 }}
//                   >
//                     {currentSlide.secondaryCTA}
//                     <span className="uvagai-cta-secondary-arrow">→</span>
//                   </motion.button>
//                 </motion.div>

//                 {/* Impact Number */}
//                 <motion.div 
//                   className="uvagai-impact"
//                   variants={textRevealVariants}
//                   custom={5}
//                 >
//                   <span className="uvagai-impact-value">
//                     {currentSlide.stat.value}
//                   </span>
//                   <span className="uvagai-impact-label">
//                     {currentSlide.stat.label}
//                   </span>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>

//           {/* Right: Visual */}
//           <motion.div 
//             className="uvagai-visual-section"
//             style={{ x: imageX, y: imageY, scale: imageScale }}
//           >
//             <div className="uvagai-image-frame">
//               {/* Image Glow */}
//               <motion.div 
//                 className="uvagai-image-glow"
//                 animate={{
//                   opacity: [0.25, 0.4, 0.25],
//                   scale: [1, 1.015, 1],
//                 }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               />
              
//               {/* Feature Image */}
//               <AnimatePresence initial={false} custom={direction} mode="wait">
//                 <motion.div
//                   key={`img-${currentIndex}`}
//                   className="uvagai-feature-image"
//                   custom={direction}
//                   variants={imageRevealVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                 >
//                   <motion.img 
//                     src={currentSlide.image} 
//                     alt={currentSlide.category}
//                     className="uvagai-feature-img"
//                     animate={{ 
//                       scale: isHovered ? 1.04 : 1,
//                     }}
//                     transition={{ duration: 8, ease: "linear" }}
//                   />
//                 </motion.div>
//               </AnimatePresence>
              
//               {/* Image Border */}
//               <div className="uvagai-image-border" />
              
//               {/* Quote Overlay */}
//               <AnimatePresence mode="wait">
//                 <motion.div 
//                   key={`quote-${currentIndex}`}
//                   className="uvagai-quote"
//                   ref={quoteRef}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                 >
//                   <span className="uvagai-quote-mark">"</span>
//                   <p className="uvagai-quote-text">
//                     {currentSlide.quote}
//                   </p>
//                   <span className="uvagai-quote-author">
//                     {currentSlide.quoteAuthor}
//                   </span>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <motion.div 
//         className="uvagai-bottom-nav"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.8 }}
//       >
//         <div className="uvagai-slide-counter">
//           <span className="uvagai-slide-current">
//             {(currentIndex + 1).toString().padStart(2, '0')}
//           </span>
//           <span className="uvagai-slide-sep">/</span>
//           <span className="uvagai-slide-total">
//             {slides.length.toString().padStart(2, '0')}
//           </span>
//         </div>
        
//         <div className="uvagai-dots">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               className={`uvagai-dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => goTo(index)}
//               whileHover={{ scale: 1.5 }}
//             >
//               <motion.span 
//                 className="uvagai-dot-fill"
//                 initial={{ width: '0%' }}
//                 animate={{ 
//                   width: index === currentIndex && !isHovered ? '100%' : '0%',
//                 }}
//                 transition={{ 
//                   duration: index === currentIndex ? 7 : 0.3,
//                   ease: "linear",
//                 }}
//               />
//             </motion.button>
//           ))}
//         </div>

//         <div className="uvagai-arrows">
//           <motion.button
//             className="uvagai-arrow-btn"
//             onClick={goPrev}
//             whileHover={{ scale: 1.1, x: -2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </motion.button>
//           <motion.button
//             className="uvagai-arrow-btn"
//             onClick={goNext}
//             whileHover={{ scale: 1.1, x: 2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Bottom Fade */}
//       <div className="uvagai-bottom-fade" />
//     </section>
//   );
// }




import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
import "./Hero.css";
import hero1 from "../../../assets/hero11.png"
import hero2 from "../../../assets/hero33.png"
import hero3 from "../../../assets/hero22.png"
import hero5 from "../../../assets/hero5.png"

export default function Hero() {
  const slides = [
    {
      id: "education",
      category: "Education & Child Welfare",
      headline: "Every child deserves a chance to dream",
      subheadline: "Building classrooms of hope across communities",
      description:
        "Through dedicated education initiatives, we're transforming lives—one child, one classroom, one community at a time. Join us in writing futures filled with possibility.",
      primaryCTA: "Support a Child's Dream",
      secondaryCTA: "See Our Impact",
      image: hero1,
      stat: { value: "10,000+", label: "Young minds empowered" },
      quote: "Education is the most powerful weapon which you can use to change the world.",
      quoteAuthor: "— Nelson Mandela",
      accentColor: "red",
    },
    {
      id: "healthcare",
      category: "Healthcare Access",
      headline: "Healing begins with reaching the unreached",
      subheadline: "Bringing medical care to those who need it most",
      description:
        "Our mobile clinics travel to remote villages, ensuring quality healthcare isn't a privilege—it's a fundamental right that belongs to every human being.",
      primaryCTA: "Fund a Medical Camp",
      secondaryCTA: "Our Healthcare Work",
      image: hero2,
      stat: { value: "50+", label: "Medical camps conducted" },
      quote: "The greatest wealth is health.",
      quoteAuthor: "— Virgil",
      accentColor: "green",
    },
    {
      id: "eldercare",
      category: "Elderly Care",
      headline: "Honoring the hands that built our tomorrow",
      subheadline: "Ensuring dignity and care for every senior citizen",
      description:
        "Our elders deserve more than care—they deserve respect, companionship, and the warmth of a community that remembers their sacrifices and celebrates their wisdom.",
      primaryCTA: "Support Our Elders",
      secondaryCTA: "Learn Their Stories",
      image: hero3,
      stat: { value: "200+", label: "Seniors cared for" },
      quote: "The measure of a society is how it treats its elderly.",
      quoteAuthor: "— Mahatma Gandhi",
      accentColor: "blue",
    },
    {
      id: "community",
      category: "Community Development",
      headline: "Together, we rise. Together, we thrive.",
      subheadline: "Building sustainable communities from the ground up",
      description:
        "Real change happens when communities come together. We facilitate that unity—providing resources, expertise, and unwavering support to build lasting transformation.",
      primaryCTA: "Join the Movement",
      secondaryCTA: "View Communities",
      image: hero5,
      stat: { value: "25+", label: "Villages transformed" },
      quote: "Alone we can do so little; together we can do so much.",
      quoteAuthor: "— Helen Keller",
      accentColor: "black",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [bgLoaded, setBgLoaded] = useState({});
  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const isInView = useInView(quoteRef, { once: false, margin: "-100px" });

  const { scrollY, scrollYProgress } = useScroll();
  
  // Cinematic mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 35, mass: 0.4 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 35, mass: 0.4 });

  // Cinematic parallax for background
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const bgY = useTransform(scrollY, [0, 1000], [0, 80]);
  
  // Mouse-reactive parallax for background
  const bgMouseX = useTransform(smoothMouseX, [-500, 500], [-20, 20]);
  const bgMouseY = useTransform(smoothMouseY, [-300, 300], [-12, 12]);
  
  // Content transforms
  const contentX = useTransform(smoothMouseX, [-500, 500], [-10, 10]);
  const contentY = useTransform(smoothMouseY, [-300, 300], [-5, 5]);
  
  // Organic elements
  const organicX1 = useTransform(smoothMouseX, [-400, 400], [-30, 30]);
  const organicY1 = useTransform(smoothMouseY, [-250, 250], [-18, 18]);
  const organicX2 = useTransform(smoothMouseX, [-400, 400], [22, -22]);
  const organicY2 = useTransform(smoothMouseY, [-250, 250], [14, -14]);

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current && !isTransitioning) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  }, [mouseX, mouseY, isTransitioning]);

  // Preload background images
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setBgLoaded(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  // Auto advance
  useEffect(() => {
    if (!isHovered && !isTransitioning) {
      const timer = setInterval(() => {
        handleTransition(1);
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [isHovered, isTransitioning, currentIndex]);

  const handleTransition = (newDirection) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(newDirection);
    
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    
    setTimeout(() => setIsTransitioning(false), 1400);
  };

  const goTo = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsHovered(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsHovered(false);
    }, 3500);
  };

  const goNext = () => handleTransition(1);
  const goPrev = () => handleTransition(-1);

  const currentSlide = slides[currentIndex];

  // Cinematic BG image variants
  const bgVariants = {
    enter: (direction) => ({
      scale: direction > 0 ? 1.15 : 1.05,
      opacity: 0,
      filter: 'brightness(1.4) saturate(1.3)',
    }),
    center: {
      scale: 1,
      opacity: 1,
      filter: 'brightness(1) saturate(1)',
      transition: {
        scale: { duration: 2, ease: [0.25, 0.1, 0, 1] },
        opacity: { duration: 1.2, ease: [0.25, 0.1, 0, 1] },
        filter: { duration: 1.5, ease: [0.25, 0.1, 0, 1] },
      },
    },
    exit: (direction) => ({
      scale: direction > 0 ? 0.95 : 1.1,
      opacity: 0,
      filter: 'brightness(0.6) saturate(0.7)',
      transition: {
        duration: 1,
        ease: [0.55, 0, 1, 0.45],
      },
    }),
  };

  // Text animation variants
  const textRevealVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: i * 0.1 + 0.3,
        ease: [0.33, 0.1, 0.25, 1],
      },
    }),
    exit: {
      y: -40,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.55, 0, 1, 0.45],
      },
    },
  };

  // Get accent color class
  const getAccentClass = (color) => {
    const colorMap = {
      red: 'accent-red',
      green: 'accent-green',
      blue: 'accent-blue',
      black: 'accent-black',
    };
    return colorMap[color] || 'accent-red';
  };

  return (
    <section 
      className={`uvagai-cinematic-hero ${getAccentClass(currentSlide.accentColor)}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Cinematic Background Layer */}
      <div className="uvagai-cinematic-bg-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`bg-${currentIndex}`}
            className="uvagai-cinematic-bg-wrapper"
            custom={direction}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              y: bgY,
            }}
          >
            <motion.div
              className="uvagai-cinematic-bg-image"
              style={{
                backgroundImage: `url(${currentSlide.image})`,
                scale: bgScale,
                x: bgMouseX,
                y: bgMouseY,
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Loading skeleton */}
        {!bgLoaded[currentIndex] && (
          <div className="uvagai-cinematic-bg-skeleton">
            <motion.div 
              className="uvagai-cinematic-bg-shimmer"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        )}
      </div>

      {/* Cinematic Overlay System */}
      <div className="uvagai-cinematic-overlays">
        {/* Dark gradient overlay for text readability */}
        <div className="uvagai-cinematic-overlay-dark" />
        
        {/* Bottom gradient */}
        <div className="uvagai-cinematic-overlay-bottom" />
        
        {/* Top gradient */}
        <div className="uvagai-cinematic-overlay-top" />
        
        {/* Vignette */}
        <div className="uvagai-cinematic-overlay-vignette" />
        
        {/* Color accent overlay */}
        <motion.div 
          className="uvagai-cinematic-overlay-accent"
          animate={{
            opacity: [0.08, 0.13, 0.08],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Film Grain */}
      <div className="uvagai-cinematic-film-grain" />

      {/* Atmospheric Light Rays */}
      <div className="uvagai-cinematic-light-rays">
        <motion.div 
          className="uvagai-cinematic-ray uvagai-cinematic-ray-1"
          animate={{
            opacity: [0.04, 0.1, 0.04],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="uvagai-cinematic-ray uvagai-cinematic-ray-2"
          animate={{
            opacity: [0.06, 0.12, 0.06],
            x: [30, -30, 30],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="uvagai-cinematic-ray uvagai-cinematic-ray-3"
          animate={{
            opacity: [0.03, 0.08, 0.03],
            x: [-20, 40, -20],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="uvagai-cinematic-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="uvagai-cinematic-particle"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${8 + Math.random() * 84}%`,
              width: `${1.5 + Math.random() * 3}px`,
              height: `${1.5 + Math.random() * 3}px`,
            }}
            animate={{
              y: [0, -25 - Math.random() * 50, 0],
              x: [0, (Math.random() - 0.5) * 25, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Organic Brand Shapes */}
      <motion.div 
        className="uvagai-cinematic-organic uvagai-cinematic-organic-1"
        style={{ x: organicX1, y: organicY1 }}
        animate={{
          borderRadius: [
            '55% 45% 65% 35% / 35% 55% 45% 65%',
            '45% 55% 35% 65% / 55% 35% 65% 45%',
            '55% 45% 65% 35% / 35% 55% 45% 65%',
          ],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="uvagai-cinematic-organic uvagai-cinematic-organic-2"
        style={{ x: organicX2, y: organicY2 }}
        animate={{
          borderRadius: [
            '45% 55% 35% 65% / 55% 35% 65% 45%',
            '55% 45% 65% 35% / 35% 55% 45% 65%',
            '45% 55% 35% 65% / 55% 35% 65% 45%',
          ],
          rotate: [0, -35, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      {/* Navigation */}
      <motion.nav 
        className="uvagai-cinematic-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <div className="uvagai-cinematic-nav-inner">
          <motion.div 
            className="uvagai-cinematic-logo"
            whileHover={{ scale: 1.02 }}
          >
            <div className="uvagai-cinematic-logo-mark">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" className="uvagai-cinematic-logo-bg" />
                <path d="M11 20L17 26L27 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="uvagai-cinematic-logo-text">
              <span className="uvagai-cinematic-logo-name">Uvagai</span>
              <span className="uvagai-cinematic-logo-subtitle">Foundation</span>
            </div>
          </motion.div>
          
          <div className="uvagai-cinematic-nav-links">
            {["Our Work", "Stories", "About", "Contact"].map((link) => (
              <motion.a 
                key={link} 
                href="#" 
                className="uvagai-cinematic-nav-link"
                whileHover={{ y: -1 }}
              >
                {link}
                <span className="uvagai-cinematic-nav-underline" />
              </motion.a>
            ))}
            <span className="uvagai-cinematic-nav-divider" />
            <motion.button 
              className="uvagai-cinematic-nav-cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Donate
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 11L9 7L5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="uvagai-cinematic-content">
        <motion.div 
          className="uvagai-cinematic-content-layout"
          style={{ x: contentX, y: contentY }}
        >
          {/* Left: Text Content */}
          <div className="uvagai-cinematic-text-section">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Category */}
                <motion.div 
                  className="uvagai-cinematic-category"
                  variants={textRevealVariants}
                  custom={0}
                >
                  <span className="uvagai-cinematic-category-dot" />
                  <span className="uvagai-cinematic-category-text">
                    {currentSlide.category}
                  </span>
                </motion.div>

                {/* Headline */}
                <h1 className="uvagai-cinematic-headline">
                  <motion.span 
                    className="uvagai-cinematic-headline-text"
                    variants={textRevealVariants}
                    custom={1}
                  >
                    {currentSlide.headline}
                  </motion.span>
                </h1>

                {/* Subheadline */}
                <motion.p 
                  className="uvagai-cinematic-subheadline"
                  variants={textRevealVariants}
                  custom={2}
                >
                  {currentSlide.subheadline}
                </motion.p>

                {/* Description */}
                <motion.p 
                  className="uvagai-cinematic-description"
                  variants={textRevealVariants}
                  custom={3}
                >
                  {currentSlide.description}
                </motion.p>

                {/* CTA Group */}
                <motion.div 
                  className="uvagai-cinematic-cta-group"
                  variants={textRevealVariants}
                  custom={4}
                >
                  <motion.button
                    className="uvagai-cinematic-cta-primary"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{currentSlide.primaryCTA}</span>
                    <motion.span 
                      className="uvagai-cinematic-cta-icon"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  </motion.button>
                  
                  <motion.button
                    className="uvagai-cinematic-cta-secondary"
                    whileHover={{ x: 5 }}
                  >
                    {currentSlide.secondaryCTA}
                    <span className="uvagai-cinematic-cta-arrow">→</span>
                  </motion.button>
                </motion.div>

                {/* Impact Stat */}
                <motion.div 
                  className="uvagai-cinematic-impact"
                  variants={textRevealVariants}
                  custom={5}
                >
                  <span className="uvagai-cinematic-impact-value">
                    {currentSlide.stat.value}
                  </span>
                  <span className="uvagai-cinematic-impact-label">
                    {currentSlide.stat.label}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Feature Card */}
          <motion.div 
            className="uvagai-cinematic-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${currentIndex}`}
                className="uvagai-cinematic-card"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
              >
                <div className="uvagai-cinematic-card-image">
                  <img src={currentSlide.image} alt={currentSlide.category} />
                  <div className="uvagai-cinematic-card-image-overlay" />
                  
                  {/* Quote */}
                  <div className="uvagai-cinematic-card-quote" ref={quoteRef}>
                    <span className="uvagai-cinematic-card-quote-mark">"</span>
                    <p className="uvagai-cinematic-card-quote-text">
                      {currentSlide.quote}
                    </p>
                    <span className="uvagai-cinematic-card-quote-author">
                      {currentSlide.quoteAuthor}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <motion.div 
        className="uvagai-cinematic-bottom"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* Slide Counter */}
        <div className="uvagai-cinematic-counter">
          <span className="uvagai-cinematic-counter-current">
            {(currentIndex + 1).toString().padStart(2, '0')}
          </span>
          <span className="uvagai-cinematic-counter-sep">/</span>
          <span className="uvagai-cinematic-counter-total">
            {slides.length.toString().padStart(2, '0')}
          </span>
        </div>
        
        {/* Progress Dots */}
        <div className="uvagai-cinematic-dots">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`uvagai-cinematic-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              whileHover={{ scale: 1.4 }}
            >
              <motion.span 
                className="uvagai-cinematic-dot-fill"
                initial={{ width: '0%' }}
                animate={{ 
                  width: index === currentIndex && !isHovered ? '100%' : '0%',
                }}
                transition={{ 
                  duration: index === currentIndex ? 7 : 0.3,
                  ease: "linear",
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="uvagai-cinematic-arrows">
          <motion.button
            className="uvagai-cinematic-arrow"
            onClick={goPrev}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          <motion.button
            className="uvagai-cinematic-arrow"
            onClick={goNext}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Auto-progress Bar */}
      <motion.div 
        className="uvagai-cinematic-progress-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="uvagai-cinematic-progress-fill"
          key={currentIndex}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 7, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
}