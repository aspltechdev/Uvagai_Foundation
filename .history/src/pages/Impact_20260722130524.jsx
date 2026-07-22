import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import "./Impact.css";

import healthcare1 from "../assets/healthcare1.jpg";
import volunteer1 from "../assets/volunteer1.jpg";
import educationImg from "../assets/education0.png";
import healthcareImg from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.png";
import childImg from "../assets/education.jpg";
import elderlyImg from "../assets/elder.png";
import environmentImg from "../assets/environment.jpg";
import foodImg from "../assets/food1.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/skill1.jpg";

const heroSlides = [
  {
    image: educationImg,
    title: "Education & Youth Empowerment",
    tag: "Our Impact",
    accent: "red",
  },
  {
    image: healthcare1,
    title: "Healthcare & Wellness",
    tag: "Community Health",
    accent: "green",
  },
  {
    image: csrImg,
    title: "Community Development",
    tag: "Social Change",
    accent: "blue",
  },
];

function AnimatedNumber({ value, inView }) {
  const [display, setDisplay] = useState("0");
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.33, 0.1, 0.25, 1],
      onUpdate(latest) {
        setDisplay(Math.floor(latest).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [inView, target]);

  return <>{display}{suffix}</>;
}

export default function Impact() {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const focusRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const focusInView = useInView(focusRef, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const impactStats = [
    { number: "5,000+", title: "Lives Impacted", accent: "red" },
    { number: "300+", title: "Students Supported", accent: "green" },
    { number: "150+", title: "Community Programs", accent: "blue" },
    { number: "500+", title: "Dedicated Volunteers", accent: "red" },
    { number: "50+", title: "Villages Reached", accent: "green" },
    { number: "25+", title: "CSR Partners", accent: "blue" },
  ];

  const focusAreas = [
    {
      title: "Education & Youth Empowerment",
      description: "Providing scholarships, educational resources, digital learning opportunities, and mentorship to help students achieve their dreams.",
      image: educationImg,
      accent: "red",
    },
    {
      title: "Healthcare & Wellness",
      description: "Organizing medical camps, health awareness initiatives, and access to essential healthcare services in underserved communities.",
      image: healthcare1,
      accent: "green",
    },
    {
      title: "Child Welfare & Development",
      description: "Ensuring every child has access to nutrition, education, protection, and opportunities for holistic development.",
      image: childImg,
      accent: "blue",
    },
    {
      title: "Elderly Care & Support",
      description: "Supporting senior citizens through healthcare assistance, emotional well-being programs, and community engagement.",
      image: elderlyImg,
      accent: "red",
    },
    {
      title: "Community Development",
      description: "Empowering rural communities through sustainable development, skill training, sanitation, and livelihood initiatives.",
      image: csrImg,
      accent: "green",
    },
    {
      title: "Humanitarian Aid & Relief",
      description: "Providing timely relief, food distribution, emergency support, and rehabilitation during disasters and crises.",
      image: environmentImg,
      accent: "blue",
    },
  ];

  const handleGetInvolved = () => {
    navigate("/contact", {
      state: {
        source: "impact-page",
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="imp-page">
      {/* Hero Section with Slideshow */}
      <section
        className="imp-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="imp-hero-slides-wrap">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="imp-hero-slide-item"
              initial={false}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="imp-hero-darken" />
        <div className="imp-hero-gradient" />

        <div className="imp-hero-inner">
          <div className="imp-hero-eyebrow">
            <span className="imp-hero-eyebrow-line" />
            <span className="imp-hero-eyebrow-label">Our Impact</span>
          </div>

          <h1 className="imp-hero-title">
            Transforming Lives, Building
            <span className="imp-hero-title-highlight"> Stronger Communities</span>
          </h1>

          <p className="imp-hero-desc">
            Every initiative, every volunteer, and every contribution helps us
            create meaningful and sustainable impact for communities in need.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`imp-hero-badge imp-hero-badge-${currentSlide.accent}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <span className="imp-hero-badge-text">{currentSlide.title}</span>
            </motion.div>
          </AnimatePresence>

          <div className="imp-hero-action">
            <button
              className="imp-hero-action-btn"
              onClick={handleGetInvolved}
            >
              <span>Get Involved</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="imp-hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`imp-hero-dot ${index === current ? 'imp-hero-dot-on' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="imp-hero-count">
          <span className="imp-hero-count-now">
            {(current + 1).toString().padStart(2, '0')}
          </span>
          <span className="imp-hero-count-div">/</span>
          <span className="imp-hero-count-all">
            {heroSlides.length.toString().padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="imp-stats" ref={statsRef}>
        <div className="imp-wrap">
          <motion.div
            className="imp-head"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="imp-head-tag">
              <span className="imp-head-tag-line" />
              <span className="imp-head-tag-text">By The Numbers</span>
            </div>
            <h2 className="imp-head-title">Measuring Our Impact</h2>
            <p className="imp-head-sub">
              Real numbers that reflect our commitment to creating lasting change
            </p>
          </motion.div>

          <motion.div
            className="imp-stats-grid"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {impactStats.map((item, index) => (
              <motion.div
                className={`imp-stat-card imp-stat-${item.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } },
                }}
                whileHover={{ y: -6 }}
              >
                <h2 className="imp-stat-number">
                  <AnimatedNumber value={item.number} inView={statsInView} />
                </h2>
                <p className="imp-stat-title">{item.title}</p>
                <div className={`imp-stat-line imp-stat-line-${item.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="imp-focus" ref={focusRef}>
        <div className="imp-focus-bg" />
        <div className="imp-wrap">
          <motion.div
            className="imp-head"
            initial={{ opacity: 0, y: 30 }}
            animate={focusInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="imp-head-tag">
              <span className="imp-head-tag-line" />
              <span className="imp-head-tag-text">What We Do</span>
            </div>
            <h2 className="imp-head-title">Areas of Impact</h2>
          </motion.div>

          <motion.div
            className="imp-focus-grid"
            initial="hidden"
            animate={focusInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {focusAreas.map((area, index) => (
              <motion.div
                className={`imp-focus-card imp-focus-${area.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="imp-focus-card-img">
                  <img src={area.image} alt={area.title} />
                  <div className="imp-focus-card-img-shade" />
                </div>
                <div className="imp-focus-card-body">
                  <h3 className="imp-focus-card-title">{area.title}</h3>
                  <p className="imp-focus-card-text">{area.description}</p>
                </div>
                <div className={`imp-focus-card-bar imp-focus-bar-${area.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="imp-final">
        <div className="imp-final-bg" />
        <div className="imp-final-glow" />
        <div className="imp-wrap">
          <motion.div
            className="imp-final-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="imp-final-title">Be Part of the Change</h2>
            <p className="imp-final-text">
              Together we can transform lives, strengthen communities, and create
              a brighter future. Join us by volunteering or supporting our mission.
            </p>
            <div className="imp-final-buttons">
              <a href="/contact" className="imp-final-btn-primary">
                <span>Partner with us</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="imp-final-btn-secondary">
                Donate Now
                <span className="imp-final-btn-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}