// import { useRef, useState, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import "./Events.css";
// import engage from "../assets/voli.jpeg";
// import community from "../assets/eventherof.jpeg";
// import together from "../assets/humani.jpeg";
// import camp from "../assets/camp.jpeg";
// import educ from "../assets/edu.jpg";
// import volunteer from "../assets/voli.jpeg";
// import child from "../assets/childwell.jpg";
// import senior from "../assets/eldi.jpeg";
// import sustain from "../assets/finalenvironment.jpeg";

// const heroSlides = [
//   {
//     image: engage,
//     title: "Creating Impact Through Action & Engagement",
//     subtitle: "Discover the programs, awareness campaigns, healthcare initiatives, volunteer activities, and community development efforts that help us create meaningful social impact.",
//     tag: "Events & Community Initiatives",
//     accent: "red"
//   },
//   {
//     image: community,
//     title: "Empowering Communities One Initiative at a Time",
//     subtitle: "From healthcare camps to educational programs, every event brings us closer to building stronger, healthier, and more resilient communities.",
//     tag: "Our Programs",
//     accent: "green"
//   },
//   {
//     image: together,
//     title: "Together We Make A Difference",
//     subtitle: "Join hands with passionate volunteers, partners, and community leaders to create sustainable social change through meaningful action.",
//     tag: "Get Involved",
//     accent: "blue"
//   }
// ];

// export default function Events() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
//   const [current, setCurrent] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!isHovered) {
//       const timer = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % heroSlides.length);
//       }, 3000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovered]);

//   const currentSlide = heroSlides[current];

//   const events = [
//     {
//       image: camp,
//       title: "Community Healthcare Camp",
//       category: "Healthcare Initiative",
//       location: "Community Outreach Program",
//       description: "Providing free health screenings, medical consultations, awareness sessions, and preventive healthcare support for underserved communities.",
//       accent: "green",
//     },
//     {
//       image: educ,
//       title: "Education & Student Support Program",
//       category: "Education Initiative",
//       location: "Youth Empowerment",
//       description: "Supporting students through educational resources, mentorship, learning opportunities, and programs that encourage academic growth.",
//       accent: "red",
//     },
//     {
//       image: volunteer,
//       title: "Volunteer Engagement Drive",
//       category: "Volunteer Program",
//       location: "Community Service",
//       description: "Bringing together passionate volunteers to participate in meaningful social initiatives and community development activities.",
//       accent: "blue",
//     },
//     {
//       image: child,
//       title: "Child Welfare & Development Activities",
//       category: "Child Welfare Program",
//       location: "Community Impact",
//       description: "Creating safe and supportive environments for children through educational, nutritional, and developmental initiatives.",
//       accent: "red",
//     },
//     {
//       image: senior,
//       title: "Elderly Care & Support Program",
//       category: "Senior Citizen Welfare",
//       location: "Care & Compassion",
//       description: "Supporting senior citizens through healthcare assistance, wellness activities, and programs that promote dignity and inclusion.",
//       accent: "blue",
//     },
//     {
//       image: sustain,
//       title: "Environmental Awareness Campaign",
//       category: "Sustainability Initiative",
//       location: "Green Community Program",
//       description: "Promoting environmental responsibility through tree plantation drives, awareness campaigns, and sustainable community initiatives.",
//       accent: "green",
//     },
//   ];

//   return (
//     <div className="events-page" ref={sectionRef}>
//       {/* Hero Section with Background Slideshow */}
//       <section 
//         className="events-hero"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="events-slides-container">
//           {heroSlides.map((slide, index) => (
//             <motion.div
//               key={index}
//               className={`events-slide-bg ${index === current ? 'active' : ''}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
//               transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <img src={slide.image} alt={slide.title} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="events-overlay-dark" />
//         <div className="events-overlay-gradient" />
//         <div className="events-overlay-vignette" />

//         <div className="events-hero-container">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               className="events-hero-content"
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -25 }}
//               transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
//             >
//               <div className="events-hero-tag">
//                 <span className="events-hero-tag-line" />
//                 <span className="events-hero-tag-text">{currentSlide.tag}</span>
//               </div>

//               <h1 className="events-hero-headline">{currentSlide.title}</h1>
//               <p className="events-hero-subtitle">{currentSlide.subtitle}</p>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="events-slide-nav">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               className={`events-slide-dot ${index === current ? 'active' : ''}`}
//               onClick={() => setCurrent(index)}
//             >
//               <motion.span
//                 className="events-slide-dot-fill"
//                 initial={{ width: '0%' }}
//                 animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
//                 transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
//               />
//             </button>
//           ))}
//         </div>

//         <div className="events-slide-counter">
//           <span className="events-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
//           <span className="events-counter-sep">/</span>
//           <span className="events-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
//         </div>
//       </section>

//       {/* Intro Section */}
//       <section className="events-intro-section">
//         <div className="events-container">
//           <motion.div 
//             className="events-intro"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="events-intro-tag">
//               <span className="events-intro-tag-line" />
//               <span className="events-intro-tag-text">Our Commitment</span>
//             </div>
//             <h2 className="events-intro-headline">Making A Difference Together</h2>
//             <p className="events-intro-description">
//               Every initiative organized by Uvagai Foundation is designed
//               to empower communities, improve well-being, encourage
//               volunteerism, and create sustainable social change for a
//               better tomorrow.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Events Grid */}
//       <section className="events-grid-section">
//         <div className="events-container">
//           <motion.div 
//             className="events-grid"
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
//             }}
//           >
//             {events.map((event, index) => (
//               <motion.div 
//                 className={`event-card event-${event.accent}`}
//                 key={index}
//                 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
//                 whileHover={{ y: -6 }}
//               >
//                 <div className="event-card-image">
//                   <img src={event.image} alt={event.title} />
//                   <div className="event-card-image-overlay" />
//                   <div className="event-card-badge">
//                     <span className="event-card-badge-dot" />
//                     <span className="event-card-badge-text">{event.category}</span>
//                   </div>
//                 </div>

//                 <div className="event-card-content">
//                   <div className="event-card-location">
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                       <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
//                     </svg>
//                     <span>{event.location}</span>
//                   </div>

//                   <h3 className="event-card-title">{event.title}</h3>
//                   <p className="event-card-description">{event.description}</p>

//                   <div className="event-card-footer">
//                     <span className="event-card-link">Explore Initiative</span>
//                     <span className="event-card-link-arrow">
//                       <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
//                         <path d="M2 7.5H13M13 7.5L8.5 3M13 7.5L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </span>
//                   </div>

//                   <div className="event-card-accent" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="events-cta-section">
//         <div className="events-cta-bg" />
//         <div className="events-cta-glow" />
//         <div className="events-container">
//           <motion.div 
//             className="events-cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <h2 className="events-cta-headline">Join Us In Creating Positive Change</h2>
//             <p className="events-cta-description">
//               Whether through volunteering, partnerships, donations, or
//               participation, every contribution helps us build stronger
//               and more empowered communities.
//             </p>
//             <div className="events-cta-buttons">
//               <a href="/volunteer" className="events-cta-primary">
//                 <span>Become a Volunteer</span>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </a>
//               <a href="/contact" className="events-cta-secondary">
//                 Partner With Us
//                 <span className="events-cta-secondary-arrow">→</span>
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
import "./Events.css";
import engage from "../assets/voli.jpeg";
import community from "../assets/eventherof.jpeg";
import together from "../assets/humani.jpeg";
import camp from "../assets/camp.jpeg";
import educ from "../assets/edu.jpg";
import volunteer from "../assets/voli.jpeg";
import child from "../assets/childwell.jpg";
import senior from "../assets/eldi.jpeg";
import sustain from "../assets/finalenvironment.jpeg";
import skillImg from "../assets/abt123.png";
import placementImg from "../assets/prog7.png";

const heroSlides = [
  {
    image: engage,
    title: "Creating Impact Through Action & Engagement",
    subtitle: "Discover the programs, awareness campaigns, healthcare initiatives, volunteer activities, skill development, placement support, and community development efforts that help us create meaningful social impact.",
    tag: "Events & Community Initiatives",
    accent: "red"
  },
  {
    image: community,
    title: "Empowering Communities One Initiative at a Time",
    subtitle: "From healthcare camps to educational programs, skill training workshops to placement drives, every event brings us closer to building stronger, healthier, and more resilient communities.",
    tag: "Our Programs",
    accent: "green"
  },
  {
    image: together,
    title: "Together We Make A Difference",
    subtitle: "Join hands with passionate volunteers, partners, and community leaders to create sustainable social change through meaningful action and employment opportunities.",
    tag: "Get Involved",
    accent: "blue"
  }
];

export default function Events() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const events = [
    {
      image: camp,
      title: "Community Healthcare Camp",
      category: "Healthcare Initiative",
      location: "Community Outreach Program",
      description: "Providing free health screenings, medical consultations, awareness sessions, and preventive healthcare support for underserved communities.",
      accent: "green",
    },
    {
      image: educ,
      title: "Education & Student Support Program",
      category: "Education Initiative",
      location: "Youth Empowerment",
      description: "Supporting students through educational resources, mentorship, learning opportunities, and programs that encourage academic growth.",
      accent: "red",
    },
    {
      image: volunteer,
      title: "Volunteer Engagement Drive",
      category: "Volunteer Program",
      location: "Community Service",
      description: "Bringing together passionate volunteers to participate in meaningful social initiatives and community development activities.",
      accent: "blue",
    },
    {
      image: child,
      title: "Child Welfare & Development Activities",
      category: "Child Welfare Program",
      location: "Community Impact",
      description: "Creating safe and supportive environments for children through educational, nutritional, and developmental initiatives.",
      accent: "red",
    },
    {
      image: senior,
      title: "Elderly Care & Support Program",
      category: "Senior Citizen Welfare",
      location: "Care & Compassion",
      description: "Supporting senior citizens through healthcare assistance, wellness activities, and programs that promote dignity and inclusion.",
      accent: "blue",
    },
    {
      image: skillImg,
      title: "Skill Development Workshop",
      category: "Skill Training",
      location: "Youth Empowerment",
      description: "Equipping youth with vocational skills, career guidance, and employability training for better job opportunities.",
      accent: "green",
    },
    {
      image: placementImg,
      title: "Placement & Career Drive",
      category: "Employment Support",
      location: "Career Development",
      description: "Connecting skilled individuals with employers through job fairs, placement drives, and career counseling sessions.",
      accent: "red",
    },
    {
      image: sustain,
      title: "Environmental Awareness Campaign",
      category: "Sustainability Initiative",
      location: "Green Community Program",
      description: "Promoting environmental responsibility through tree plantation drives, awareness campaigns, and sustainable community initiatives.",
      accent: "green",
    },
  ];

  return (
    <div className="events-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section 
        className="events-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="events-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`events-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="events-overlay-dark" />
        <div className="events-overlay-gradient" />
        <div className="events-overlay-vignette" />

        <div className="events-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="events-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="events-hero-tag">
                <span className="events-hero-tag-line" />
                <span className="events-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="events-hero-headline">{currentSlide.title}</h1>
              <p className="events-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="events-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`events-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="events-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="events-slide-counter">
          <span className="events-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="events-counter-sep">/</span>
          <span className="events-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Intro Section */}
      <section className="events-intro-section">
        <div className="events-container">
          <motion.div 
            className="events-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="events-intro-tag">
              <span className="events-intro-tag-line" />
              <span className="events-intro-tag-text">Our Commitment</span>
            </div>
            <h2 className="events-intro-headline">Making A Difference Together</h2>
            <p className="events-intro-description">
              Every initiative organized by Uvagai Foundation is designed
              to empower communities, improve well-being, encourage
              volunteerism, provide skill training, enable employment,
              and create sustainable social change for a better tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid - 8 Cards */}
      <section className="events-grid-section">
        <div className="events-container">
          <motion.div 
            className="events-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
          >
            {events.map((event, index) => (
              <motion.div 
                className={`event-card event-${event.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -6 }}
              >
                <div className="event-card-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-card-image-overlay" />
                  <div className="event-card-badge">
                    <span className={`event-card-badge-dot dot-${event.accent}`} />
                    <span className="event-card-badge-text">{event.category}</span>
                  </div>
                </div>

                <div className="event-card-content">
                  <div className="event-card-location">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-description">{event.description}</p>

                  <div className="event-card-footer">
                    <span className="event-card-link">Explore Initiative</span>
                    <span className="event-card-link-arrow">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M2 7.5H13M13 7.5L8.5 3M13 7.5L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>

                  <div className={`event-card-accent accent-${event.accent}`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta-section">
        <div className="events-cta-bg" />
        <div className="events-cta-glow" />
        <div className="events-container">
          <motion.div 
            className="events-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="events-cta-headline">Join Us In Creating Positive Change</h2>
            <p className="events-cta-description">
              Whether through volunteering, partnerships, donations, skill training, 
              placement support, or participation, every contribution helps us build 
              stronger and more empowered communities.
            </p>
            <div className="events-cta-buttons">
              <a href="/contact" className="events-cta-primary">
                <span>
                     Partner With Us</span>
                   
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/volunteer" className="events-cta-secondary">
              Become a Volunteer 
                <span className="events-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}