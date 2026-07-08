import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./AboutUs.css";
import aboutImage from "../assets/abou";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
    title: "Creating Hope, Empowering Lives & Building Stronger Communities",
    subtitle: "Founded in 2019, Uvagai Foundation is a non-profit organization dedicated to creating meaningful social impact through education, healthcare, child welfare, and community development.",
    tag: "About Uvagai Foundation",
    accent: "red"
  },
  {
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80",
    title: "A Foundation Built On Compassion & Purpose",
    subtitle: "We work closely with communities, volunteers, institutions, and corporate partners to implement programs that address real societal challenges and promote sustainable development.",
    tag: "Who We Are",
    accent: "green"
  },
  {
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    title: "Driving Sustainable Social Impact Across India",
    subtitle: "Through compassion-driven action and collaborative partnerships, we strive to create lasting positive change and contribute to a better future for all.",
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
    { title: "Education & Youth Empowerment", description: "Supporting learning opportunities, mentorship, skill development, and youth empowerment.", accent: "red" },
    { title: "Healthcare & Wellness", description: "Promoting community wellness through healthcare initiatives and awareness programs.", accent: "green" },
    { title: "Child Welfare", description: "Creating opportunities for children through education, nutrition, and development programs.", accent: "blue" },
    { title: "Elderly Care", description: "Enhancing the dignity, well-being, and quality of life of senior citizens.", accent: "red" },
    { title: "Environmental Sustainability", description: "Encouraging environmental responsibility through awareness and action.", accent: "green" },
    { title: "Community Development", description: "Building stronger and more resilient communities through collaborative initiatives.", accent: "blue" },
  ];

  const values = [
    { title: "Compassion", description: "Serving communities with empathy, care, and a genuine commitment to improving lives." },
    { title: "Integrity", description: "Maintaining transparency, accountability, and ethical practices in everything we do." },
    { title: "Inclusivity", description: "Creating equal opportunities and embracing diversity across all communities." },
    { title: "Impact", description: "Delivering sustainable and meaningful change through purpose-driven initiatives." },
  ];

  return (
    <div className="about-page" ref={sectionRef}>
      
      {/* Hero Section with Background Slideshow */}
      <section 
        className="about-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="about-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`about-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="about-overlay-dark" />
        <div className="about-overlay-gradient" />
        <div className="about-overlay-vignette" />

        <div className="about-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="about-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="about-hero-tag">
                <span className="about-hero-tag-line" />
                <span className="about-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="about-hero-headline">{currentSlide.title}</h1>
              <p className="about-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="about-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`about-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="about-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="about-slide-counter">
          <span className="about-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="about-counter-sep">/</span>
          <span className="about-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* Our Story - Image + Text */}
      <section className="about-story" ref={storyRef}>
        <div className="about-container">
          <div className="about-story-grid">
            
            <motion.div 
              className="about-story-image"
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="about-story-image-frame">
                <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" alt="Uvagai Foundation" />
                <div className="about-story-image-border" />
              </div>
              <div className="about-story-image-glow" />
            </motion.div>

            <motion.div 
              className="about-story-content"
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="about-story-tag">
                <span className="about-story-tag-line" />
                <span>Who We Are</span>
              </div>
              
              <h2 className="about-story-headline">
                A Foundation Built On <span className="text-red">Compassion</span> & <span className="text-green">Purpose</span>
              </h2>
              
              <p className="about-story-text">
                Uvagai Foundation was established with a vision to create an inclusive 
                society where every individual has access to opportunities, dignity, 
                education, healthcare, and the support needed to thrive.
              </p>
              
              <p className="about-story-text">
                We work closely with communities, volunteers, institutions, corporate 
                partners, and social leaders to implement programs that address real 
                societal challenges and promote sustainable development.
              </p>

              <p className="about-story-text">
                Through compassion-driven action and collaborative partnerships, we 
                strive to create lasting positive change and contribute to a better 
                future for all.
              </p>

              <div className="about-story-quote">
                <span className="about-story-quote-mark">"</span>
                <p>Empowering Communities. Transforming Lives.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="about-impact" ref={impactRef}>
        <div className="about-impact-bg" />
        <div className="about-container">
          <motion.div 
            className="about-section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about-section-tag">
              <span className="about-section-tag-line" />
              <span className="about-section-tag-text">Our Focus Areas</span>
            </div>
            <h2 className="about-section-headline">Driving Sustainable Social Impact</h2>
          </motion.div>

          <motion.div 
            className="about-impact-grid"
            initial="hidden"
            animate={impactInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {impactAreas.map((area, index) => (
              <motion.div 
                className={`about-impact-card impact-${area.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -4 }}
              >
                <div className="about-impact-card-number">0{index + 1}</div>
                <h3 className="about-impact-card-title">{area.title}</h3>
                <p className="about-impact-card-text">{area.description}</p>
                <div className="about-impact-card-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Foundation Highlights + Values */}
      <section className="about-highlights-values">
        <div className="about-container">
          <div className="about-hv-grid">
            
            {/* Highlights */}
            <motion.div 
              className="about-hv-column"
              ref={highlightsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="about-hv-header">
                <div className="about-section-tag">
                  <span className="about-section-tag-line" />
                  <span className="about-section-tag-text">Foundation Highlights</span>
                </div>
                <h2 className="about-hv-headline">Building Impact Through Action</h2>
              </div>

              <div className="about-highlights-list">
                {[
                  { title: "2019", desc: "Founded with a vision to create meaningful social impact across communities.", accent: "red" },
                  { title: "06+", desc: "Core focus areas serving communities through education, healthcare, and welfare.", accent: "green" },
                  { title: "Community First", desc: "Driven by compassion, inclusion, and sustainable development principles.", accent: "blue" },
                ].map((item, index) => (
                  <motion.div 
                    className={`about-highlight-item highlight-${item.accent}`}
                    key={index}
                    whileHover={{ x: 4 }}
                  >
                    <span className="about-highlight-number">{item.title}</span>
                    <p className="about-highlight-text">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div 
              className="about-hv-column"
              ref={valuesRef}
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="about-hv-header">
                <div className="about-section-tag">
                  <span className="about-section-tag-line" />
                  <span className="about-section-tag-text">Our Values</span>
                </div>
                <h2 className="about-hv-headline">Principles That Guide Us</h2>
              </div>

              <div className="about-values-grid">
                {values.map((value, index) => (
                  <motion.div 
                    className="about-value-card"
                    key={index}
                    whileHover={{ y: -3 }}
                  >
                    <span className="about-value-number">0{index + 1}</span>
                    <h4 className="about-value-title">{value.title}</h4>
                    <p className="about-value-text">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="about-closing">
        <div className="about-closing-bg" />
        <div className="about-closing-glow" />
        <div className="about-container">
          <motion.div 
            className="about-closing-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-closing-headline">Join Us In Creating Positive Change</h2>
            <p className="about-closing-text">
              Together, we can empower lives, strengthen communities, and build a 
              brighter future through compassion, action, and collaboration.
            </p>
            <div className="about-closing-buttons">
              <a href="/volunteer" className="about-closing-primary">
                <span>Become a Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="about-closing-secondary">
                Support Our Mission
                <span className="about-closing-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}