// import { useRef, useState, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import "./AboutUs.css";
// import aboutImage from "../assets/aboutpage.png";
// import educationImg from "../assets/childedu.png";
// import healthcareImg from "../assets/community.png";
// import childWelfareImg from "../assets/childincards.png";
// import elderlyImg from "../assets/senior.png";
// import environmentImg from "../assets/environment.png";
// import communityDevImg from "../assets/communityy.png";
// import abouthero1 from "../assets/abouthero1.png";
// import abouthero2 from "../assets/abouthero2.jpeg";
// import abouthero3 from "../assets/abouthero3.jpeg";
// import highlight1 from "../assets/highlight1.png";
// import highlight2 from "../assets/highlight2.png";
// import highlight3 from "../assets/highlight3.png";

// const heroSlides = [
//   {
//     image: abouthero1,
//     title: "Creating Hope, Empowering Lives & Building Stronger Communities",
//     subtitle: "Founded in 2019, Uvagai Foundation is a non-profit organization dedicated to creating meaningful social impact through education, healthcare, child welfare, and community development.",
//     tag: "About Uvagai Foundation",
//     accent: "red"
//   },
//   {
//     image: abouthero2,
//     title: "A Foundation Built On Compassion & Purpose",
//     subtitle: "We work closely with communities, volunteers, institutions, and corporate partners to implement programs that address real societal challenges and promote sustainable development.",
//     tag: "Who We Are",
//     accent: "green"
//   },
//   {
//     image: abouthero3,
//     title: "Driving Sustainable Social Impact Across India",
//     subtitle: "Through compassion-driven action and collaborative partnerships, we strive to create lasting positive change and contribute to a better future for all.",
//     tag: "Our Mission",
//     accent: "blue"
//   }
// ];

// export default function AboutUsPage() {
//   const sectionRef = useRef(null);
//   const storyRef = useRef(null);
//   const impactRef = useRef(null);
//   const highlightsRef = useRef(null);
//   const valuesRef = useRef(null);

//   const [current, setCurrent] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
//   const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
//   const impactInView = useInView(impactRef, { once: true, margin: "-80px" });
//   const highlightsInView = useInView(highlightsRef, { once: true, margin: "-80px" });
//   const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

//   useEffect(() => {
//     if (!isHovered) {
//       const timer = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % heroSlides.length);
//       }, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered]);

//   const currentSlide = heroSlides[current];

//   const impactAreas = [
//     {
//       title: "Education & Youth Empowerment",
//       description: "Supporting learning opportunities, mentorship, skill development, and youth empowerment.",
//       image: educationImg,
//       accent: "red"
//     },
//     {
//       title: "Healthcare & Wellness",
//       description: "Promoting community wellness through healthcare initiatives and awareness programs.",
//       image: healthcareImg,
//       accent: "green"
//     },
//     {
//       title: "Child Welfare",
//       description: "Creating opportunities for children through education, nutrition, and development programs.",
//       image: childWelfareImg,
//       accent: "blue"
//     },
//     {
//       title: "Elderly Care",
//       description: "Enhancing the dignity, well-being, and quality of life of senior citizens.",
//       image: elderlyImg,
//       accent: "red"
//     },
//     {
//       title: "Environmental Sustainability",
//       description: "Encouraging environmental responsibility through awareness and action.",
//       image: environmentImg,
//       accent: "green"
//     },
//     {
//       title: "Community Development",
//       description: "Building stronger and more resilient communities through collaborative initiatives.",
//       image: communityDevImg,
//       accent: "blue"
//     },
//   ];

//   // const values = [
//   //   { title: "Compassion", description: "Serving communities with empathy, care, and a genuine commitment to improving lives." },
//   //   { title: "Integrity", description: "Maintaining transparency, accountability, and ethical practices in everything we do." },
//   //   { title: "Inclusivity", description: "Creating equal opportunities and embracing diversity across all communities." },
//   //   { title: "Impact", description: "Delivering sustainable and meaningful change through purpose-driven initiatives." },
//   // ];
//   const values = [
//     { title: "Compassion", description: "Serving communities with empathy, care, and a genuine commitment to improving lives." },
//     { title: "Integrity", description: "Maintaining transparency, accountability, and ethical practices in everything we do." },
//     { title: "Inclusivity", description: "Creating equal opportunities and embracing diversity across all communities." },
//     { title: "Impact", description: "Delivering sustainable and meaningful change through purpose-driven initiatives." },
//     { title: "Collaboration", description: "Working together with communities, partners, and volunteers to amplify our collective impact." },
//     { title: "Sustainability", description: "Building long-term solutions that create lasting change for generations to come." },
//   ];
//   return (
//     <div className="abt-page" ref={sectionRef}>

//       {/* Hero Section with Background Slideshow */}
//       <section
//         className="abt-hero"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="abt-hero-slides-wrap">
//           {heroSlides.map((slide, index) => (
//             <motion.div
//               key={index}
//               className={`abt-hero-slide-bg ${index === current ? 'abt-hero-slide-active' : ''}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.12 }}
//               transition={{ duration: 1.4, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <img src={slide.image} alt={slide.title} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="abt-hero-overlay-dark" />
//         <div className="abt-hero-overlay-gradient" />
//         <div className="abt-hero-overlay-vignette" />

//         <div className="abt-hero-content-wrap">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               className="abt-hero-content"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.6, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="abt-hero-tag">
//                 <span className="abt-hero-tag-line" />
//                 <span className="abt-hero-tag-text">{currentSlide.tag}</span>
//               </div>

//               <h1 className="abt-hero-headline">{currentSlide.title}</h1>
//               <p className="abt-hero-subtitle">{currentSlide.subtitle}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="abt-hero-nav">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               className={`abt-hero-nav-dot ${index === current ? 'abt-hero-nav-dot-active' : ''}`}
//               onClick={() => setCurrent(index)}
//             >
//               <motion.span
//                 className="abt-hero-nav-dot-fill"
//                 initial={{ width: '0%' }}
//                 animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
//                 transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
//               />
//             </button>
//           ))}
//         </div>

//         <div className="abt-hero-counter">
//           <span className="abt-hero-counter-curr">{(current + 1).toString().padStart(2, '0')}</span>
//           <span className="abt-hero-counter-sep">/</span>
//           <span className="abt-hero-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
//         </div>
//       </section>

//       {/* Our Story - Image + Text */}
//       <section className="abt-story" ref={storyRef}>
//         <div className="abt-container">
//           <div className="abt-story-grid">

//             <motion.div
//               className="abt-story-image-wrap"
//               initial={{ opacity: 0, x: -40 }}
//               animate={storyInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="abt-story-image-frame">
//                 <img src={aboutImage} alt="Uvagai Foundation" />
//                 <div className="abt-story-image-inner-border" />
//                 <div className="abt-story-image-shine" />
//               </div>
//               <div className="abt-story-image-glow" />
//             </motion.div>

//             <motion.div
//               className="abt-story-content"
//               initial={{ opacity: 0, x: 40 }}
//               animate={storyInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="abt-story-tag">
//                 <span className="abt-story-tag-line" />
//                 <span>Who We Are</span>
//               </div>

//               <h2 className="abt-story-headline">
//                 A Foundation Built On <span className="abt-text-red">Compassion</span> & <span className="abt-text-green">Purpose</span>
//               </h2>

//               <p className="abt-story-text">
//                 Uvagai Foundation was established with a vision to create an inclusive
//                 society where every individual has access to opportunities, dignity,
//                 education, healthcare, and the support needed to thrive.
//               </p>

//               <p className="abt-story-text">
//                 We work closely with communities, volunteers, institutions, corporate
//                 partners, and social leaders to implement programs that address real
//                 societal challenges and promote sustainable development.
//               </p>

//               <p className="abt-story-text">
//                 Through compassion-driven action and collaborative partnerships, we
//                 strive to create lasting positive change and contribute to a better
//                 future for all.
//               </p>

//               <div className="abt-story-quote">
//                 <span className="abt-story-quote-mark">"</span>
//                 <p>Empowering Communities. Transforming Lives.</p>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* Impact Areas - Cinematic Cards with Images */}
//       <section className="abt-impact" ref={impactRef}>
//         <div className="abt-impact-bg" />
//         <div className="abt-impact-particles" />
//         <div className="abt-container">
//           <motion.div
//             className="abt-section-header"
//             initial={{ opacity: 0, y: 30 }}
//             animate={impactInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="abt-section-tag">
//               <span className="abt-section-tag-line" />
//               <span className="abt-section-tag-text">Our Focus Areas</span>
//             </div>
//             <h2 className="abt-section-headline">Driving Sustainable Social Impact</h2>
//             <p className="abt-section-subtitle">
//               Every initiative is designed to create meaningful, lasting change in communities
//             </p>
//           </motion.div>

//           <motion.div
//             className="abt-impact-grid"
//             initial="hidden"
//             animate={impactInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
//             }}
//           >
//             {impactAreas.map((area, index) => (
//               <motion.div
//                 className={`abt-impact-card abt-impact-card-${area.accent}`}
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 40, scale: 0.95 },
//                   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.33, 0.1, 0.25, 1] } }
//                 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <div className="abt-impact-card-image-wrap">
//                   <img src={area.image} alt={area.title} className="abt-impact-card-image" />
//                   <div className="abt-impact-card-image-overlay" />
//                   <div className="abt-impact-card-number">{String(index + 1).padStart(2, '0')}</div>
//                 </div>

//                 <div className="abt-impact-card-content">
//                   <h3 className="abt-impact-card-title">{area.title}</h3>
//                   <p className="abt-impact-card-text">{area.description}</p>
//                   <div className="abt-impact-card-accent-line" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Foundation Highlights + Values */}
//       <section className="abt-highlights-values">
//         <div className="abt-container">
//           <div className="abt-hv-grid">

//             {/* Highlights - Image Cards with Content Overlay */}
//             <motion.div
//               className="abt-hv-column"
//               ref={highlightsRef}
//               initial={{ opacity: 0, y: 40 }}
//               animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="abt-hv-header">
//                 <div className="abt-section-tag">
//                   <span className="abt-section-tag-line" />
//                   <span className="abt-section-tag-text">Foundation Highlights</span>
//                 </div>
//                 <h2 className="abt-hv-headline">Building Impact Through Action</h2>
//               </div>

//               <div className="abt-highlights-image-grid">
//                 <motion.div
//                   className="abt-highlight-img-card abt-highlight-img-red"
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="abt-highlight-img-bg">
//                     <img src={highlight1} alt="Foundation" />
//                     <div className="abt-highlight-img-overlay" />
//                   </div>
//                   <div className="abt-highlight-img-content">
//                     <h4 className="abt-highlight-img-label">Est. 2019</h4>
//                     <p className="abt-highlight-img-text">Founded with a vision to create meaningful social impact across communities.</p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="abt-highlight-img-card abt-highlight-img-green"
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="abt-highlight-img-bg">
//                     <img src={highlight2} alt="Focus Areas" />
//                     <div className="abt-highlight-img-overlay" />
//                   </div>
//                   <div className="abt-highlight-img-content">
//                     <h4 className="abt-highlight-img-label">06+ Focus Areas</h4>
//                     <p className="abt-highlight-img-text">Core focus areas serving communities through education, healthcare, and welfare.</p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="abt-highlight-img-card abt-highlight-img-blue"
//                   whileHover={{ y: -6 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="abt-highlight-img-bg">
//                     <img src={highlight3} alt="Community" />
//                     <div className="abt-highlight-img-overlay" />
//                   </div>
//                   <div className="abt-highlight-img-content">
//                     <h4 className="abt-highlight-img-label">Community First</h4>
//                     <p className="abt-highlight-img-text">Driven by compassion, inclusion, and sustainable development principles.</p>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Values */}
//             {/* <motion.div 
//               className="abt-hv-column"
//               ref={valuesRef}
//               initial={{ opacity: 0, y: 40 }}
//               animate={valuesInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="abt-hv-header">
//                 <div className="abt-section-tag">
//                   <span className="abt-section-tag-line" />
//                   <span className="abt-section-tag-text">Our Values</span>
//                 </div>
//                 <h2 className="abt-hv-headline">Principles That Guide Us</h2>
//               </div>

//               <div className="abt-values-grid">
//                 {values.map((value, index) => (
//                   <motion.div 
//                     className="abt-value-card"
//                     key={index}
//                     whileHover={{ y: -6, scale: 1.03 }}
//                     transition={{ duration: 0.3 }}
//                   >
               
//                     <h4 className="abt-value-title">{value.title}</h4>
//                     <p className="abt-value-text">{value.description}</p>
//                     <div className="abt-value-glow-dot" />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div> */}


//             {/* Values */}
//             <motion.div
//               className="abt-hv-column"
//               ref={valuesRef}
//               initial={{ opacity: 0, y: 40 }}
//               animate={valuesInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="abt-hv-header">
//                 <div className="abt-section-tag">
//                   <span className="abt-section-tag-line" />
//                   <span className="abt-section-tag-text">Our Values</span>
//                 </div>
//                 <h2 className="abt-hv-headline">Principles That Guide Us</h2>
//               </div>

//               <div className="abt-values-grid">
//                 {values.map((value, index) => (
//                   <motion.div
//                     className="abt-value-card"
//                     key={index}
//                     whileHover={{ y: -6, scale: 1.03 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <span className="abt-value-number">{String(index + 1).padStart(2, '0')}</span>
//                     <h4 className="abt-value-title">{value.title}</h4>
//                     <p className="abt-value-text">{value.description}</p>
//                     <div className="abt-value-glow-dot" />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* Closing CTA */}
//       <section className="abt-closing">
//         <div className="abt-closing-bg" />
//         <div className="abt-closing-glow" />
//         <div className="abt-closing-glow-2" />
//         <div className="abt-container">
//           <motion.div
//             className="abt-closing-content"
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="abt-closing-headline">Join Us In Creating Positive Change</h2>
//             <p className="abt-closing-text">
//               Together, we can empower lives, strengthen communities, and build a
//               brighter future through compassion, action, and collaboration.
//             </p>
//             <div className="abt-closing-buttons">
//               <a href="/volunteer" className="abt-closing-btn-primary">
//                 <span>Become a Volunteer</span>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </a>
//               <a href="/donate" className="abt-closing-btn-secondary">
//                 Support Our Mission
//                 <span className="abt-closing-btn-arrow">→</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// }

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./AboutUs.css";
import aboutImage from "../assets/aboutpage.png";
import educationImg from "../assets/childedu.png";
import healthcareImg from "../assets/community.png";
import childWelfareImg from "../assets/childincards.png";
import elderlyImg from "../assets/senior.png";
import environmentImg from "../assets/environment.png";
import communityDevImg from "../assets/communityy.png";
import skillImg from "../assets/abt123.png";
import placementImg from "../assets/prog7.png";
import abouthero1 from "../assets/abouthero1.png";
import abouthero2 from "../assets/abouthero2.jpeg";
import abouthero3 from "../assets/abouthero3.jpeg";
import highlight1 from "../assets/highlight1.png";
import highlight2 from "../assets/highlight2.png";
import highlight3 from "../assets/highlight3.png";

const heroSlides = [
  {
    image: abouthero1,
    title: "Creating Hope, Empowering Lives & Building Stronger Communities",
    subtitle: "Founded in 2019, Uvagai Foundation is a non-profit organization dedicated to creating meaningful social impact through education, healthcare, child welfare, skilling, placement, and community development.",
    tag: "About Uvagai Foundation",
    accent: "red"
  },
  {
    image: abouthero2,
    title: "A Foundation Built On Compassion & Purpose",
    subtitle: "We work closely with communities, volunteers, institutions, and corporate partners to implement programs that address real societal challenges and promote sustainable development.",
    tag: "Who We Are",
    accent: "green"
  },
  {
    image: abouthero3,
    title: "Driving Sustainable Social Impact Across India",
    subtitle: "Through compassion-driven action and collaborative partnerships, we strive to create lasting positive change through skilling, employment, and community empowerment.",
    tag: "Our Mission",
    accent: "blue"
  }
];

export default function AboutUsPage() {
  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const impactRef = useRef(null);
  const highlightsRef = useRef(null);
  const valuesRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const impactInView = useInView(impactRef, { once: true, margin: "-80px" });
  const highlightsInView = useInView(highlightsRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const impactAreas = [
    {
      title: "Education & Youth Empowerment",
      description: "Supporting learning opportunities, mentorship, skill development, and youth empowerment.",
      image: educationImg,
      accent: "red"
    },
    {
      title: "Healthcare & Wellness",
      description: "Promoting community wellness through healthcare initiatives and awareness programs.",
      image: healthcareImg,
      accent: "green"
    },
    {
      title: "Child Welfare",
      description: "Creating opportunities for children through education, nutrition, and development programs.",
      image: childWelfareImg,
      accent: "blue"
    },
    {
      title: "Elderly Care",
      description: "Enhancing the dignity, well-being, and quality of life of senior citizens.",
      image: elderlyImg,
      accent: "red"
    },
    {
      title: "Skill Development",
      description: "Empowering youth with career guidance, vocational training, and employability skills.",
      image: skillImg,
      accent: "green"
    },
    {
      title: "Placement Support",
      description: "Connecting skilled individuals with job opportunities and career growth pathways.",
      image: placementImg,
      accent: "blue"
    },
    {
      title: "Environmental Sustainability",
      description: "Encouraging environmental responsibility through awareness and action.",
      image: environmentImg,
      accent: "red"
    },
    {
      title: "Community Development",
      description: "Building stronger and more resilient communities through collaborative initiatives.",
      image: communityDevImg,
      accent: "green"
    },
  ];

  const values = [
    { title: "Compassion", description: "Serving communities with empathy, care, and a genuine commitment to improving lives." },
    { title: "Integrity", description: "Maintaining transparency, accountability, and ethical practices in everything we do." },
    { title: "Inclusivity", description: "Creating equal opportunities and embracing diversity across all communities." },
    { title: "Impact", description: "Delivering sustainable and meaningful change through purpose-driven initiatives." },
    { title: "Collaboration", description: "Working together with communities, partners, and volunteers to amplify our collective impact." },
    { title: "Sustainability", description: "Building long-term solutions that create lasting change for generations to come." },
  ];

  return (
    <div className="abt-page" ref={sectionRef}>

      {/* Hero Section with Background Slideshow */}
      <section
        className="abt-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="abt-hero-slides-wrap">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`abt-hero-slide-bg ${index === current ? 'abt-hero-slide-active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.12 }}
              transition={{ duration: 1.4, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="abt-hero-overlay-dark" />
        <div className="abt-hero-overlay-gradient" />
        <div className="abt-hero-overlay-vignette" />

        <div className="abt-hero-content-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="abt-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="abt-hero-tag">
                <span className="abt-hero-tag-line" />
                <span className="abt-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="abt-hero-headline">{currentSlide.title}</h1>
              <p className="abt-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="abt-hero-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`abt-hero-nav-dot ${index === current ? 'abt-hero-nav-dot-active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="abt-hero-nav-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="abt-hero-counter">
          <span className="abt-hero-counter-curr">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="abt-hero-counter-sep">/</span>
          <span className="abt-hero-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Our Story */}
      <section className="abt-story" ref={storyRef}>
        <div className="abt-container">
          <div className="abt-story-grid">
            <motion.div
              className="abt-story-image-wrap"
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="abt-story-image-frame">
                <img src={aboutImage} alt="Uvagai Foundation" />
                <div className="abt-story-image-inner-border" />
                <div className="abt-story-image-shine" />
              </div>
              <div className="abt-story-image-glow" />
            </motion.div>

            <motion.div
              className="abt-story-content"
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="abt-story-tag">
                <span className="abt-story-tag-line" />
                <span>Who We Are</span>
              </div>

              <h2 className="abt-story-headline">
                A Foundation Built On <span className="abt-text-red">Compassion</span> & <span className="abt-text-green">Purpose</span>
              </h2>

              <p className="abt-story-text">
                Uvagai Foundation was established with a vision to create an inclusive
                society where every individual has access to opportunities, dignity,
                education, healthcare, skilling, employment, and the support needed to thrive.
              </p>

              <p className="abt-story-text">
                We work closely with communities, volunteers, institutions, corporate
                partners, and social leaders to implement programs that address real
                societal challenges and promote sustainable development.
              </p>

              <p className="abt-story-text">
                Through compassion-driven action and collaborative partnerships, we
                strive to create lasting positive change and contribute to a better
                future for all.
              </p>

              <div className="abt-story-quote">
                <span className="abt-story-quote-mark">"</span>
                <p>Empowering Communities. Transforming Lives.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Areas - 8 Cards Grid */}
      <section className="abt-impact" ref={impactRef}>
        <div className="abt-impact-bg" />
        <div className="abt-impact-particles" />
        <div className="abt-container">
          <motion.div
            className="abt-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="abt-section-tag">
              <span className="abt-section-tag-line" />
              <span className="abt-section-tag-text">Our Focus Areas</span>
            </div>
            <h2 className="abt-section-headline">Driving Sustainable Social Impact</h2>
            <p className="abt-section-subtitle">
              Every initiative is designed to create meaningful, lasting change in communities
            </p>
          </motion.div>

          <motion.div
            className="abt-impact-grid"
            initial="hidden"
            animate={impactInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {impactAreas.map((area, index) => (
              <motion.div
                className={`abt-impact-card abt-impact-card-${area.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } }
                }}
                whileHover={{ y: -6 }}
              >
                <div className="abt-impact-card-image-wrap">
                  <img src={area.image} alt={area.title} className="abt-impact-card-image" />
                  <div className="abt-impact-card-image-overlay" />
                  <span className={`abt-impact-card-badge abt-impact-badge-${area.accent}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="abt-impact-card-content">
                  <h3 className="abt-impact-card-title">{area.title}</h3>
                  <p className="abt-impact-card-text">{area.description}</p>
                </div>

                <div className={`abt-impact-card-accent-line abt-impact-line-${area.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Foundation Highlights + Values */}
      <section className="abt-highlights-values">
        <div className="abt-container">
          <div className="abt-hv-grid">

            {/* Highlights */}
            <motion.div
              className="abt-hv-column"
              ref={highlightsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="abt-hv-header">
                <div className="abt-section-tag">
                  <span className="abt-section-tag-line" />
                  <span className="abt-section-tag-text">Foundation Highlights</span>
                </div>
                <h2 className="abt-hv-headline">Building Impact Through Action</h2>
              </div>

              <div className="abt-highlights-image-grid">
                <motion.div className="abt-highlight-img-card abt-highlight-img-red" whileHover={{ y: -6 }}>
                  <div className="abt-highlight-img-bg">
                    <img src={highlight1} alt="Foundation" />
                    <div className="abt-highlight-img-overlay" />
                  </div>
                  <div className="abt-highlight-img-content">
                    <h4 className="abt-highlight-img-label">Est. 2019</h4>
                    <p className="abt-highlight-img-text">Founded with a vision to create meaningful social impact across communities.</p>
                  </div>
                </motion.div>

                <motion.div className="abt-highlight-img-card abt-highlight-img-green" whileHover={{ y: -6 }}>
                  <div className="abt-highlight-img-bg">
                    <img src={highlight2} alt="Focus Areas" />
                    <div className="abt-highlight-img-overlay" />
                  </div>
                  <div className="abt-highlight-img-content">
                    <h4 className="abt-highlight-img-label">08+ Focus Areas</h4>
                    <p className="abt-highlight-img-text">Core focus areas including education, healthcare, skilling, placement, and welfare.</p>
                  </div>
                </motion.div>

                <motion.div className="abt-highlight-img-card abt-highlight-img-blue" whileHover={{ y: -6 }}>
                  <div className="abt-highlight-img-bg">
                    <img src={highlight3} alt="Community" />
                    <div className="abt-highlight-img-overlay" />
                  </div>
                  <div className="abt-highlight-img-content">
                    <h4 className="abt-highlight-img-label">Community First</h4>
                    <p className="abt-highlight-img-text">Driven by compassion, inclusion, and sustainable development principles.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              className="abt-hv-column"
              ref={valuesRef}
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="abt-hv-header">
                <div className="abt-section-tag">
                  <span className="abt-section-tag-line" />
                  <span className="abt-section-tag-text">Our Values</span>
                </div>
                <h2 className="abt-hv-headline">Principles That Guide Us</h2>
              </div>

              <div className="abt-values-grid">
                {values.map((value, index) => (
                  <motion.div
                    className="abt-value-card"
                    key={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="abt-value-number">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className="abt-value-title">{value.title}</h4>
                    <p className="abt-value-text">{value.description}</p>
                    <div className="abt-value-glow-dot" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="abt-closing">
        <div className="abt-closing-bg" />
        <div className="abt-closing-glow" />
        <div className="abt-closing-glow-2" />
        <div className="abt-container">
          <motion.div
            className="abt-closing-content"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="abt-closing-headline">Join Us In Creating Positive Change</h2>
            <p className="abt-closing-text">
              Together, we can empower lives, strengthen communities, and build a
              brighter future through compassion, action, and collaboration.
            </p>
            <div className="abt-closing-buttons">
              <a href="/contact" className="abt-closing-btn-primary">
                <span>Support our Mission
                  
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/volunteer" className="abt-closing-btn-secondary">
                Become a Volunteer 
                <span className="abt-closing-btn-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}