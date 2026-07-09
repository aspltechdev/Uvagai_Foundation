import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./ProgramsPage.css";
import purpose from "../assets/purpose.png";
import empower from "../assets/empowering.png";
import volunteer from "../assets/volunteer.png";
import education from "../assets/education.png";
import healthcare from "../assets/health.png";
import child from "../assets/childwelfareprogram.png";
import elderly from "../assets/elderly.jpg";
import environment from "../assets/environment.png";
import community from "../assets/community.png";
import humanitarian from "../assets/humanitarian.png";
import women from "../assets/womenempowerment.png";

const heroSlides = [
  {
    image: purpose,
    title: "Creating Sustainable Impact Through Purpose-Driven Programs",
    subtitle:
      "Uvagai Foundation works across education, healthcare, child welfare, elderly care, environmental sustainability, and community development to create meaningful social impact.",
    tag: "Programs & Initiatives",
    accent: "red",
  },
  {
    image: empower,
    title: "Empowering Communities Through Action",
    subtitle:
      "Every initiative is designed to improve lives, create opportunities, strengthen communities, and foster sustainable development for future generations.",
    tag: "What We Do",
    accent: "green",
  },
  {
    image: volunteer,
    title: "Together We Create Positive Change",
    subtitle:
      "Through volunteers, community leaders, CSR partners, and supporters, we continue to create meaningful opportunities for those who need it most.",
    tag: "Our Mission",
    accent: "blue",
  },
];
export default function ProgramsPage() {
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

  const programs = [
  {
    image: education,
    title: "Education & Youth Empowerment",
    description:
      "Providing educational support, learning resources, digital literacy, mentorship, scholarships, and skill development opportunities that help students achieve their full potential.",
    accent: "red",
    impact: "5,284+ Students",
  },
  {
    image: healthcare,
    title: "Healthcare & Wellness",
    description:
      "Conducting health awareness campaigns, medical camps, preventive healthcare programs, wellness initiatives, and community health outreach activities.",
    accent: "green",
    impact: "50,000+ Patients",
  },
  {
    image: child,
    title: "Child Welfare & Development",
    description:
      "Supporting children's education, nutrition, protection, healthcare, and overall development through child-focused welfare initiatives.",
    accent: "blue",
    impact: "10,000+ Children",
  },
  {
    image: elderly,
    title: "Elderly Care & Support",
    description:
      "Enhancing the well-being of senior citizens through healthcare assistance, social support programs, community engagement, and care initiatives.",
    accent: "red",
    impact: "2,500+ Seniors",
  },
  {
    image: environment,
    title: "Environmental Sustainability",
    description:
      "Promoting environmental responsibility through tree plantation drives, awareness campaigns, sustainability programs, and eco-friendly initiatives.",
    accent: "green",
    impact: "1M+ Trees",
  },
  {
    image: community,
    title: "Community Development",
    description:
      "Empowering communities through livelihood support, awareness programs, social welfare initiatives, and sustainable development projects.",
    accent: "blue",
    impact: "200+ Initiatives",
  },
  {
    image: humanitarian,
    title: "Humanitarian Assistance",
    description:
      "Providing relief support, emergency response assistance, disaster recovery efforts, and aid for vulnerable communities in crisis.",
    accent: "red",
    impact: "500+ Families",
  },
  {
    image: women,
    title: "Women Empowerment",
    description:
      "Supporting women through skill development, leadership training, entrepreneurship opportunities, and empowerment programs.",
    accent: "green",
    impact: "25,000+ Women",
  },
];

  return (
    <div className="programs-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section 
        className="programs-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="programs-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`programs-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="programs-overlay-dark" />
        <div className="programs-overlay-gradient" />
        <div className="programs-overlay-vignette" />

        <div className="programs-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="programs-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="programs-hero-tag">
                <span className="programs-hero-tag-line" />
                <span className="programs-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="programs-hero-headline">{currentSlide.title}</h1>
              <p className="programs-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="programs-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`programs-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="programs-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="programs-slide-counter">
          <span className="programs-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="programs-counter-sep">/</span>
          <span className="programs-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Intro Section */}
      <section className="programs-intro-section">
        <div className="programs-container">
          <motion.div 
            className="programs-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="programs-intro-tag">
              <span className="programs-intro-tag-line" />
              <span className="programs-intro-tag-text">What We Do</span>
            </div>
            <h2 className="programs-intro-headline">Empowering Communities Through Action</h2>
            <p className="programs-intro-description">
              Every initiative is designed to improve lives, create opportunities, 
              strengthen communities, and foster sustainable development for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid-section">
        <div className="programs-container">
          <motion.div 
            className="programs-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {programs.map((program, index) => (
              <motion.div 
                className={`programs-card card-${program.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -6 }}
              >
                <div className="programs-card-image">
                  <img src={program.image} alt={program.title} />
                  <div className="programs-card-overlay" />
                  
                  {/* <div className="programs-card-badge">
                    <span className={`programs-card-badge-dot dot-${program.accent}`} />
                    <span className="programs-card-badge-text">Program</span>
                  </div> */}

                  <div className="programs-card-impact">
                    {program.impact}
                  </div>
                </div>

                <div className="programs-card-content">
                  <h3 className="programs-card-title">{program.title}</h3>
                  <p className="programs-card-description">{program.description}</p>
                </div>

                <div className={`programs-card-accent accent-${program.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta-section">
        <div className="programs-cta-bg" />
        <div className="programs-cta-glow" />
        
        <div className="programs-container">
          <motion.div 
            className="programs-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="programs-cta-headline">
              Join Us In Creating Positive Change
            </h2>
            <p className="programs-cta-description">
              Through volunteers, community leaders, CSR partners, and supporters, 
              we continue to create meaningful opportunities and lasting impact for those who need it most.
            </p>
            <div className="programs-cta-buttons">
              <a href="/volunteer" className="programs-cta-primary">
                <span>Become a Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="programs-cta-secondary">
                Support Our Programs
                <span className="programs-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}