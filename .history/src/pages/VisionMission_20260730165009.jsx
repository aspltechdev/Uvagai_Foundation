import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./VisionMission.css";
import educationnew12 from "../assets/educationnew12.jpeg";
import healthcarenew1 from "../assets/VH.JPG";
import childwelfarenew1 from "../assets/cv.jpeg";
import elderlycarenew1 from "../assets/ev.jpg";
import enviroinmentnew1 from "../assets/env.JPG";
import communitynew1 from "../assets/abtech.png";
import large1 from "../assets/vco.jpg";
import image2 from "../assets/vco1.jpg";
import image5 from "../assets/vco11.JPG";
import vmBg from "../assets/bg.png";


const heroSlides = [
  {
    image: large1,
    title: "Inspiring Hope, Empowering Lives & Creating Sustainable Social Impact",
    subtitle:
      "Our vision and mission guide every initiative we undertake to empower communities, improve lives, and create lasting positive change.",
    tag: "Vision • Mission • Values",
    accent: "red",
  },
  {
    image: image2,
    title: "Guided by Vision, Driven by Mission",
    subtitle:
      "Since 2019, Uvagai Foundation has been dedicated to empowering children, families, and communities through education, healthcare, and sustainable development.",
    tag: "Our Purpose & Promise",
    accent: "green",
  },
  {
    image: image5,
    title: "Turning Compassion Into Action",
    subtitle:
      "Through education support, healthcare initiatives, child welfare, elderly care, and community development, we create meaningful opportunities for all.",
    tag: "Our Commitment",
    accent: "blue",
  },
];
export default function VisionMissionPage() {
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

  const corePrinciples = [
    { title: "Education First", description: "Every child deserves quality learning opportunities to build a brighter future.", accent: "red" },
    { title: "Healthcare Access", description: "Quality medical care should reach every community, regardless of geography.", accent: "green" },
    { title: "Community Led", description: "Sustainable change happens when communities lead their own transformation.", accent: "blue" },
    { title: "Inclusive Growth", description: "Leaving no one behind — empowering women, children, elderly, and vulnerable groups.", accent: "red" },
  ];

  const impactPillars = [
    { image: educationnew12, title: "Education", description: "Scholarships, digital classrooms, mentorship, and skill development programs.", accent: "red" },
    { image: healthcarenew1, title: "Healthcare", description: "Medical camps, preventive care, health awareness, and wellness initiatives.", accent: "green" },
    { image: childwelfarenew1, title: "Child Welfare", description: "Nutrition support, education access, and holistic development for children.", accent: "blue" },
    { image: elderlycarenew1, title: "Elderly Care", description: "Healthcare assistance, companionship, and dignity programs for senior citizens.", accent: "red" },
{
  image: enviroinmentnew1,
  title: "Community Outreach",
  description:
    "Organizing inclusive beach visits to promote social participation, recreation, and community engagement for all.",
  accent: "green",
},    { image: communitynew1, title: "Skilling", description: "Livelihood programs, conducting job drives & awareness campaigns, and social development initiatives.", accent: "blue" },
  ];

  const values = [
    { title: "Compassion", description: "Serving humanity with empathy, kindness, and respect for every individual." },
    { title: "Integrity", description: "Maintaining transparency, accountability, and ethical practices in everything we do." },
    { title: "Inclusivity", description: "Creating equal opportunities and embracing diversity within communities." },
    { title: "Collaboration", description: "Working together with partners, volunteers, and communities to maximize impact." },
    { title: "Sustainability", description: "Building long-term solutions that create lasting positive change." },
    { title: "Impact", description: "Delivering meaningful programs that improve lives and strengthen communities." },
  ];

  return (
    <div className="vm-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section 
        className="vm-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="vm-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`vm-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 0.4, ease: "linear" }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="vm-overlay-dark" />
        <div className="vm-overlay-gradient" />
        <div className="vm-overlay-vignette" />

        <div className="vm-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="vm-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.1, ease: "linear" }}
            >
              <div className="vm-hero-tag">
                <span className="vm-hero-tag-line" />
                <span className="vm-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="vm-hero-headline">{currentSlide.title}</h1>
              <p className="vm-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="vm-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`vm-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="vm-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 3 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="vm-slide-counter">
          <span className="vm-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="vm-counter-sep">/</span>
          <span className="vm-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vm-core-section">
        <div className="vm-container">
          <motion.div 
            className="vm-core-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
          >
            {/* Vision Card */}
            <motion.div 
              className="vm-core-card vm-vision-card"
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              whileHover={{ y: -4 }}
            >
              <div className="vm-core-card-accent" />
              <div className="vm-core-card-header">
                <span className="vm-core-card-label">01</span>
                <h2 className="vm-core-card-title">Our Vision</h2>
              </div>
              <div className="vm-core-card-body">
                <p>
                  At Uvagai Foundation, we empower underserved communities through education,
                  healthcare, child welfare, elderly care, environmental conservation, and sustainable
                  development, fostering compassion, inclusivity, hope, and lasting change.
                </p>
                <p>
                  We believe lasting change happens through shared purpose. Partnering with
                  volunteers, educational institutions, corporate organizations, and local communities,
                  we create sustainable initiatives that empower individuals, strengthen communities,
                  and build a brighter future.
                </p>
                <div className="vm-core-motto">
                  <span className="vm-core-motto-quote">"</span>
                  <p>Creating Hope. Inspiring Change.</p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="vm-core-card vm-mission-card"
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              whileHover={{ y: -4 }}
            >
              <div className="vm-core-card-accent" />
              <div className="vm-core-card-header">
                <span className="vm-core-card-label">02</span>
                <h2 className="vm-core-card-title">Our Mission</h2>
              </div>
              <div className="vm-core-card-body">
                <p>
                  At Uvagai Foundation, we uplift underserved communities through education,
                  healthcare, child welfare, elderly care, environmental conservation, and sustainable
                  development, creating opportunities that inspire lasting change for everyone always.
                </p>
                <p>
                  We believe meaningful change happens when people unite. Partnering with
                  volunteers, educational institutions, corporate organizations, and local communities,
                  we create impactful initiatives addressing real needs, empowering lives, and building
                  lasting positive change.
                </p>
                <div className="vm-core-motto vm-motto-green">
                  <span className="vm-core-motto-quote">"</span>
                  <p>Empowering Communities. Transforming Lives.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

<section className="vm-pillars-section">
  <div className="vm-pillars-bg" />
  <div className="vm-container">
  
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">Strategic Framework</span>
              <span className="vm-section-tag-line" />
            </div>
            <h2 className="vm-section-headline">Our Impact Pillars</h2>
          </motion.div>

          <motion.div 
            className="vm-pillars-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {impactPillars.map((pillar, index) => (
              <motion.div 
                className={`vm-pillar-card pillar-${pillar.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -5 }}
              >
                <div className="vm-pillar-image">
                  <img src={pillar.image} alt={pillar.title} />
                  <div className="vm-pillar-overlay" />
                  <span className={`vm-pillar-badge badge-${pillar.accent}`}>{pillar.title}</span>
                </div>
                <div className="vm-pillar-content">
                  <p>{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="vm-principles-section">
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">Guiding Principles</span>
              <span className="vm-section-tag-line" />

            </div>
            <h2 className="vm-section-headline">Our Core Principles</h2>
          </motion.div>

          <motion.div 
            className="vm-principles-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {corePrinciples.map((principle, index) => (
              <motion.div 
                className={`vm-principle-card principle-${principle.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -4 }}
              >
                <div className="vm-principle-stripe" />
                <span className="vm-principle-number">0{index + 1}</span>
                <h4 className="vm-principle-title">{principle.title}</h4>
                <p className="vm-principle-description">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="vm-values-section">
        <div className="vm-values-bg" />
        <div className="vm-container">
          <motion.div 
            className="vm-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="vm-section-tag">
              <span className="vm-section-tag-line" />
              <span className="vm-section-tag-text">What We Stand For</span>
              <span className="vm-section-tag-line" />
            </div>
            <h2 className="vm-section-headline">Our Core Values</h2>
          </motion.div>

          <motion.div 
            className="vm-values-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {values.map((value, index) => (
              <motion.div 
                className="vm-value-card"
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -4 }}
              >
                <div className="vm-value-number">{(index + 1).toString().padStart(2, '0')}</div>
                <h3 className="vm-value-title">{value.title}</h3>
                <p className="vm-value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vm-cta-section">
        <div className="vm-cta-bg" />
        <div className="vm-cta-glow" />
        <div className="vm-container">
          <motion.div 
            className="vm-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="vm-cta-headline">Together, We Can Transform Lives</h2>
            <p className="vm-cta-description">
              Join us in creating opportunities, empowering communities, and building 
              a brighter future for generations to come.
            </p>
            <div className="vm-cta-buttons">
              <a href="/volunteer" className="vm-cta-primary">
                <span>
                    Support Our Mission
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="vm-cta-secondary">
            Become a Volunteer 
                <span className="vm-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}