import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./VolunteerPage.css";

import childwelfareImg from "../assets/Capturechild.PNG";
import communityImg from "../assets/chatcomm.png";
import digitalImg from "../assets/creativecapture.PNG";
import educationImg from "../assets/educationCapture.PNG";
import eldeImg from "../assets/elderlycapture.png";
import environmentImg from "../assets/chatenv.png";
import eventImg from "../assets/chateve.png";
import healthcareImg from "../assets/healthCapture.PNG";

const opportunities = [
  {
    accent: "red",
    title: "Education & Mentorship Volunteer",
    description: "Support students through mentoring, tutoring, career guidance, digital literacy programs, and educational workshops that help shape brighter futures.",
    image: educationImg,
  },
  {
    accent: "green",
    title: "Healthcare Volunteer",
    description: "Assist during medical camps, health awareness drives, blood donation initiatives, wellness programs, and community healthcare outreach activities.",
    image: healthcareImg,
  },
  {
    accent: "blue",
    title: "Child Welfare Volunteer",
    description: "Participate in programs focused on child education, nutrition, personal development, creative learning activities, and well-being support.",
    image: childwelfareImg,
  },
  {
    accent: "red",
    title: "Elderly Care Volunteer",
    description: "Spend time with senior citizens, support welfare programs, assist during events, and contribute to initiatives that promote dignity and care.",
    image: eldeImg,
  },
  {
    accent: "green",
    title: "Environmental Volunteer",
    description: "Join tree plantation drives, sustainability campaigns, clean-up activities, and environmental awareness initiatives.",
    image: environmentImg,
  },
  {
    accent: "blue",
    title: "Community Outreach Volunteer",
    description: "Work directly with communities, support awareness programs, social campaigns, and community development projects.",
    image: communityImg,
  },
  {
    accent: "red",
    title: "Event & Campaign Volunteer",
    description: "Help organize social events, fundraising campaigns, workshops, awareness drives, and foundation activities.",
    image: eventImg,
  },
  {
    accent: "green",
    title: "Digital & Creative Volunteer",
    description: "Contribute your skills in graphic design, content creation, photography, videography, social media, and digital marketing.",
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

  const handleVolunteerClick = (role) => {
    navigate("/contact", {
      state: {
        volunteerRole: role?.title || "",
        source: "volunteer-page",
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="vl-page">
      {/* Hero Section */}
      <section
        className="vl-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="vl-hero-slides-wrap">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="vl-hero-slide-item"
              initial={false}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="vl-hero-darken" />
        <div className="vl-hero-gradient" />

        <div className="vl-hero-inner">
          <div className="vl-hero-eyebrow">
            <span className="vl-hero-eyebrow-line" />
            <span className="vl-hero-eyebrow-label">Volunteer With Uvagai Foundation</span>
          </div>

          <h1 className="vl-hero-title">
            Together We Can Create
            <span className="vl-hero-title-highlight"> Positive Change</span>
          </h1>

          <p className="vl-hero-desc">
            Become part of a passionate community of changemakers dedicated to
            empowering lives, strengthening communities, and creating
            sustainable social impact through meaningful action.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`vl-hero-badge vl-hero-badge-${currentSlide.accent}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <span className="vl-hero-badge-text">{currentSlide.title}</span>
            </motion.div>
          </AnimatePresence>

          <div className="vl-hero-action">
            <button
              className="vl-hero-action-btn"
              onClick={() => handleVolunteerClick()}
            >
              <span>Become A Volunteer</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="vl-hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`vl-hero-dot ${index === current ? 'vl-hero-dot-on' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="vl-hero-count">
          <span className="vl-hero-count-now">
            {(current + 1).toString().padStart(2, '0')}
          </span>
          <span className="vl-hero-count-div">/</span>
          <span className="vl-hero-count-all">
            {heroSlides.length.toString().padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="vl-opps" ref={oppRef}>
        <div className="vl-wrap">
          <motion.div
            className="vl-head"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="vl-head-tag">
              <span className="vl-head-tag-line" />
              <span className="vl-head-tag-text">Volunteer Opportunities</span>
            </div>
            <h2 className="vl-head-title">Find A Meaningful Way To Contribute</h2>
            <p className="vl-head-sub">
              Whether you're a student, professional, retiree, or passionate
              individual, there's a place for you in our mission.
            </p>
          </motion.div>

          <motion.div
            className="vl-opps-grid"
            initial="hidden"
            animate={isOppInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {opportunities.map((item, index) => (
              <motion.div
                className={`vl-opps-card vl-opps-card-${item.accent}`}
                key={index}
                onClick={() => handleVolunteerClick(item)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="vl-opps-card-img">
                  <img src={item.image} alt={item.title} />
                  <div className="vl-opps-card-img-shade" />
                </div>
                <div className="vl-opps-card-body">
                  <h3 className="vl-opps-card-title">{item.title}</h3>
                  <p className="vl-opps-card-text">{item.description}</p>
                </div>
                <div className={`vl-opps-card-bar vl-opps-card-bar-${item.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="vl-how">
        <div className="vl-how-bg" />
        <div className="vl-wrap">
          <motion.div
            className="vl-head"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="vl-head-tag">
              <span className="vl-head-tag-line" />
              <span className="vl-head-tag-text">How It Works</span>
            </div>
            <h2 className="vl-head-title">Getting Started Is Simple</h2>
          </motion.div>

          <motion.div
            className="vl-how-grid"
            initial="hidden"
            animate={isOppInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                className="vl-how-card"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="vl-how-card-num">{step.number}</div>
                <h3 className="vl-how-card-title">{step.title}</h3>
                <p className="vl-how-card-text">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vl-final">
        <div className="vl-final-bg" />
        <div className="vl-final-glow" />
        <div className="vl-wrap">
          <motion.div
            className="vl-final-inner"
            initial={{ opacity: 0, y: 30 }}
            animate={isOppInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="vl-final-title">Ready To Make A Difference?</h2>
            <p className="vl-final-text">
              Join hundreds of volunteers already working with us to build
              stronger, healthier communities.
            </p>
            <button
              className="vl-final-btn"
              onClick={() => handleVolunteerClick()}
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