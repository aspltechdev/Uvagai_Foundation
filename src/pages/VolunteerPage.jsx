import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./VolunteerPage.css";

import childwelfareImg from "../assets/Capturechild.PNG";
import communityImg from "../assets/chatcomm.png";
import digitalImg from "../assets/creativecapture.PNG";
import educationImg from "../assets/educationCapture.PNG";
import eldeImg from "../assets/elderlycapture.PNG";
import environmentImg from "../assets/chatenv.png";
import eventImg from "../assets/chateve.png";
import healthcareImg from "../assets/healthCapture.PNG";

const opportunities = [
  {
    accent: "red",
    title: "Education & Mentorship Volunteer",
    description:
      "Support students through mentoring, tutoring, career guidance, digital literacy programs, and educational workshops that help shape brighter futures.",
    image: educationImg,
  },
  {
    accent: "green",
    title: "Healthcare Volunteer",
    description:
      "Assist during medical camps, health awareness drives, blood donation initiatives, wellness programs, and community healthcare outreach activities.",
    image: healthcareImg,
  },
  {
    accent: "blue",
    title: "Child Welfare Volunteer",
    description:
      "Participate in programs focused on child education, nutrition, personal development, creative learning activities, and well-being support.",
    image: childwelfareImg,
  },
  {
    accent: "red",
    title: "Elderly Care Volunteer",
    description:
      "Spend time with senior citizens, support welfare programs, assist during events, and contribute to initiatives that promote dignity and care.",
    image: eldeImg,
  },
  {
    accent: "green",
    title: "Environmental Volunteer",
    description:
      "Join tree plantation drives, sustainability campaigns, clean-up activities, and environmental awareness initiatives.",
    image: environmentImg,
  },
  {
    accent: "blue",
    title: "Community Outreach Volunteer",
    description:
      "Work directly with communities, support awareness programs, social campaigns, and community development projects.",
    image: communityImg,
  },
  {
    accent: "red",
    title: "Event & Campaign Volunteer",
    description:
      "Help organize social events, fundraising campaigns, workshops, awareness drives, and foundation activities.",
    image: eventImg,
  },
  {
    accent: "green",
    title: "Digital & Creative Volunteer",
    description:
      "Contribute your skills in graphic design, content creation, photography, videography, social media, and digital marketing.",
    image: digitalImg,
  },
];

// Hero background now rotates continuously through the real Chennai photos,
// each paired with a caption + accent colour.
const heroSlides = [
  { image: educationImg, title: "Education & Mentorship", accent: "red" },
  { image: healthcareImg, title: "Healthcare Support", accent: "green" },
  { image: childwelfareImg, title: "Child Welfare", accent: "blue" },
  { image: eldeImg, title: "Elderly Care", accent: "red" },
  { image: environmentImg, title: "Environmental Action", accent: "green" },
  { image: communityImg, title: "Community Outreach", accent: "blue" },
  { image: eventImg, title: "Events & Campaigns", accent: "red" },
  { image: digitalImg, title: "Digital & Creative", accent: "green" },
];

export default function VolunteerPage() {
  const navigate = useNavigate();
  const oppRef = useRef(null);
  const isOppInView = useInView(oppRef, { once: true, margin: "-80px" });

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

  const steps = [
    { number: "01", title: "Apply Online", description: "Fill out our short volunteer interest form — it takes less than five minutes." },
    { number: "02", title: "Get Matched", description: "Our team connects you with a program that fits your skills, interests, and availability." },
    { number: "03", title: "Attend Orientation", description: "Join a quick orientation session to understand our work, safety guidelines, and expectations." },
    { number: "04", title: "Start Volunteering", description: "Begin contributing to real projects alongside our team and fellow volunteers." },
  ];

  return (
    <div className="volunteer-page">
      {/* Hero Section — compact, continuously rotating background slideshow */}
      <section
        className="volunteer-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rotating Background Slides */}
        <div className="volunteer-hero-bg">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="volunteer-hero-slide"
              initial={false}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        {/* Overlay System */}
        <div className="volunteer-overlay-dark" />
        <div className="volunteer-overlay-gradient" />

        {/* Centered Content */}
        <div className="volunteer-hero-container">
          <div className="volunteer-hero-tag">
            <span className="volunteer-hero-tag-line" />
            <span className="volunteer-hero-tag-text">Volunteer With Uvagai Foundation</span>
          </div>

          <h1 className="volunteer-hero-headline">
            Together We Can Create
            <span className="volunteer-hero-headline-accent"> Positive Change</span>
          </h1>

          <p className="volunteer-hero-subtitle">
            Become part of a passionate community of changemakers dedicated to
            empowering lives, strengthening communities, and creating
            sustainable social impact through meaningful action.
          </p>

          {/* Current Focus */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`volunteer-hero-focus focus-${currentSlide.accent}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <span className="volunteer-hero-focus-text">{currentSlide.title}</span>
            </motion.div>
          </AnimatePresence>

          <div className="volunteer-hero-cta-wrapper">
            <button
              className="volunteer-hero-cta"
              onClick={() => navigate("/contact")}
            >
              <span>Become A Volunteer</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Slide Navigation Dots — Events-style thin dashes */}
        <div className="volunteer-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`volunteer-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="volunteer-slide-counter">
          <span className="volunteer-counter-current">
            {(current + 1).toString().padStart(2, '0')}
          </span>
          <span className="volunteer-counter-sep">/</span>
          <span className="volunteer-counter-total">
            {heroSlides.length.toString().padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="volunteer-opp-section" ref={oppRef}>
        <div className="volunteer-container">
          <motion.div
            className="volunteer-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="volunteer-section-tag">
              <span className="volunteer-section-tag-line" />
              <span className="volunteer-section-tag-text">Volunteer Opportunities</span>
            </div>
            <h2 className="volunteer-section-headline">Find A Meaningful Way To Contribute</h2>
            <p className="volunteer-section-subtitle">
              Whether you're a student, professional, retiree, or passionate
              individual, there's a place for you in our mission.
            </p>
          </motion.div>

          <motion.div
            className="volunteer-cards-grid"
            initial="hidden"
            animate={isOppInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
          >
            {opportunities.map((item, index) => (
              <motion.div
                className={`volunteer-card card-${item.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
                  },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="volunteer-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="volunteer-card-overlay" />
                </div>

                <div className="volunteer-card-content">
                  <h3 className="volunteer-card-title">{item.title}</h3>
                  <p className="volunteer-card-description">{item.description}</p>
                </div>

                <div className={`volunteer-card-accent accent-${item.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="volunteer-steps-section">
        <div className="volunteer-steps-bg" />
        <div className="volunteer-container">
          <motion.div
            className="volunteer-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="volunteer-section-tag">
              <span className="volunteer-section-tag-line" />
              <span className="volunteer-section-tag-text">How It Works</span>
            </div>
            <h2 className="volunteer-section-headline">Getting Started Is Simple</h2>
          </motion.div>

          <motion.div
            className="volunteer-steps-grid"
            initial="hidden"
            animate={isOppInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                className="volunteer-step-card"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="volunteer-step-number">{step.number}</div>
                <h3 className="volunteer-step-title">{step.title}</h3>
                <p className="volunteer-step-description">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="volunteer-step-connector">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="volunteer-cta-section">
        <div className="volunteer-cta-bg" />
        <div className="volunteer-cta-glow" />

        <div className="volunteer-container">
          <motion.div
            className="volunteer-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="volunteer-cta-headline">Ready To Make A Difference?</h2>
            <p className="volunteer-cta-description">
              Join hundreds of volunteers already working with us to build
              stronger, healthier communities.
            </p>
            <button
              className="volunteer-cta-btn"
              onClick={() => navigate("/contact")}
            >
              <span>Apply To Volunteer</span>
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