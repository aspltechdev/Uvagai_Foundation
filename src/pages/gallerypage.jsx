import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./gallerypage.css";

import educationImg from "../assets/education.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.jpg";
import childImg from "../assets/child.jpg";
import elderlyImg from "../assets/elderly.jpg";
import environmentImg from "../assets/environment.jpg";
import foodImg from "../assets/food.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/skill.jpg";

const galleryData = {
  education: {
    title: "Education Support Program",
    images: [educationImg, educationImg, educationImg, educationImg],
    accent: "red",
  },
  healthcare: {
    title: "Community Healthcare Camp",
    images: [healthcareImg, healthcareImg, healthcareImg, healthcareImg],
    accent: "green",
  },
  volunteer: {
    title: "Volunteer Engagement Drive",
    images: [volunteerImg, volunteerImg, volunteerImg, volunteerImg],
    accent: "blue",
  },
  "child-welfare": {
    title: "Child Welfare Activities",
    images: [childImg, childImg, childImg, childImg],
    accent: "red",
  },
  "elderly-care": {
    title: "Elderly Care Initiative",
    images: [elderlyImg, elderlyImg, elderlyImg, elderlyImg],
    accent: "blue",
  },
  environment: {
    title: "Environmental Awareness Campaign",
    images: [environmentImg, environmentImg, environmentImg, environmentImg],
    accent: "green",
  },
  "food-distribution": {
    title: "Community Food Distribution",
    images: [foodImg, foodImg, foodImg, foodImg],
    accent: "red",
  },
  csr: {
    title: "CSR Partnership Activities",
    images: [csrImg, csrImg, csrImg, csrImg],
    accent: "blue",
  },
  "skill-development": {
    title: "Youth Skill Development Workshop",
    images: [skillImg, skillImg, skillImg, skillImg],
    accent: "green",
  },
};

export default function Gallery() {
  const navigate = useNavigate();
  const { category } = useParams();
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-80px" });

  // If category exists, show category gallery
  if (category) {
    return <CategoryGalleryView category={category} navigate={navigate} />;
  }

  const slides = [
    {
      image: educationImg,
      title: "Education Support Program",
      slug: "education",
      subtitle: "Supporting students through learning resources and mentorship.",
      stat: "1,200+ Students Supported",
      description:
        "We provide learning materials, educational assistance, and mentorship support to help children continue their studies with confidence.",
      accent: "red",
    },
    {
      image: healthcareImg,
      title: "Community Healthcare Camp",
      slug: "healthcare",
      subtitle: "Bringing medical support and wellness awareness to communities.",
      stat: "75+ Health Camps",
      description:
        "Our healthcare initiatives focus on basic checkups, wellness awareness, and accessible medical support for underserved communities.",
      accent: "green",
    },
    {
      image: volunteerImg,
      title: "Volunteer Engagement Drive",
      slug: "volunteer",
      subtitle: "Volunteers coming together for meaningful social change.",
      stat: "300+ Volunteers",
      description:
        "We bring passionate individuals together to support community projects, outreach programs, and social impact activities.",
      accent: "blue",
    },
    {
      image: childImg,
      title: "Child Welfare Activities",
      slug: "child-welfare",
      subtitle: "Supporting children through care, education, and development.",
      stat: "900+ Children Reached",
      description:
        "Our child welfare programs focus on safety, emotional care, education, nutrition, and opportunities for better development.",
      accent: "red",
    },
    {
      image: elderlyImg,
      title: "Elderly Care Initiative",
      slug: "elderly-care",
      subtitle: "Offering care, support, and dignity to senior citizens.",
      stat: "500+ Seniors Supported",
      description:
        "We support elderly individuals with care, companionship, basic assistance, and community-based dignity programs.",
      accent: "blue",
    },
    {
      image: environmentImg,
      title: "Environmental Awareness Campaign",
      slug: "environment",
      subtitle: "Promoting sustainability through green community initiatives.",
      stat: "50+ Green Drives",
      description:
        "We encourage cleaner surroundings, tree planting, waste awareness, and responsible environmental practices.",
      accent: "green",
    },
    {
      image: foodImg,
      title: "Community Food Distribution",
      slug: "food-distribution",
      subtitle: "Providing essential food support to families in need.",
      stat: "10,000+ Meals Served",
      description:
        "Our food distribution drives help vulnerable families receive essential meals and grocery support during difficult times.",
      accent: "red",
    },
    {
      image: csrImg,
      title: "CSR Partnership Activities",
      slug: "csr",
      subtitle: "Collaborating with organizations to create social impact.",
      stat: "25+ CSR Collaborations",
      description:
        "We partner with organizations to build meaningful programs that create measurable and sustainable community impact.",
      accent: "blue",
    },
    {
      image: skillImg,
      title: "Youth Skill Development Workshop",
      slug: "skill-development",
      subtitle: "Empowering youth with career guidance and employability skills.",
      stat: "800+ Youth Trained",
      description:
        "Our skill workshops help young people gain confidence, career awareness, communication skills, and employability guidance.",
      accent: "green",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered, slides.length]);

  const currentSlide = slides[current];

  return (
    <div className="gallery-showcase">
      {/* Hero Slideshow Section */}
      <section 
        className="gallery-hero-slideshow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="gallery-slides-container">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`gallery-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 1.08,
              }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="gallery-overlay-dark" />
        <div className="gallery-overlay-gradient" />
        <div className="gallery-overlay-vignette" />

        {/* Centered Content */}
        <div className="gallery-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="gallery-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="gallery-hero-tag">
                <span className="gallery-hero-tag-line" />
                <span className="gallery-hero-tag-text">Uvagai Foundation Gallery</span>
              </div>

              <h1 className="gallery-hero-title">{currentSlide.title}</h1>
              <p className="gallery-hero-subtitle">{currentSlide.subtitle}</p>

              <motion.div 
                className={`gallery-hero-stat stat-${currentSlide.accent}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <span className="gallery-hero-stat-value">{currentSlide.stat}</span>
                <p className="gallery-hero-description">{currentSlide.description}</p>
              </motion.div>

              <motion.div 
                className="gallery-hero-cta"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <button 
                  className={`gallery-hero-cta-primary cta-${currentSlide.accent}`}
                  onClick={() => navigate(`/gallery/${currentSlide.slug}`)}
                >
                  <span>View Details</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="gallery-hero-cta-secondary"
                  onClick={() => {
                    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>View All Photos</span>
                  <span className="cta-secondary-arrow">↓</span>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="gallery-slide-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`gallery-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.span
                className="gallery-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ 
                  width: index === current && !isHovered ? '100%' : '0%',
                }}
                transition={{ 
                  duration: index === current ? 4 : 0.3,
                  ease: "linear",
                }}
              />
            </button>
          ))}
        </div>

        <div className="gallery-slide-counter">
          <span className="gallery-counter-current">
            {(current + 1).toString().padStart(2, '0')}
          </span>
          <span className="gallery-counter-sep">/</span>
          <span className="gallery-counter-total">
            {slides.length.toString().padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="gallery-grid-section" ref={galleryRef}>
        <div className="gallery-grid-container">
          <motion.div 
            className="gallery-grid-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="gallery-grid-tag">
              <span className="gallery-grid-tag-line" />
              <span className="gallery-grid-tag-text">Gallery</span>
            </div>
            <h2 className="gallery-grid-headline">Moments of Impact</h2>
          </motion.div>

          <motion.div 
            className="gallery-photo-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
          >
            {slides.map((slide, index) => (
              <motion.div
                className={`gallery-photo-card photo-${slide.accent}`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                onClick={() => navigate(`/gallery/${slide.slug}`)}
              >
                <div className="gallery-photo-image">
                  <img src={slide.image} alt={slide.title} />
                  <div className="gallery-photo-overlay" />
                  <div className="gallery-photo-badge">
                    <span className={`gallery-photo-badge-dot dot-${slide.accent}`} />
                    <span className="gallery-photo-badge-text">{slide.stat}</span>
                  </div>
                </div>
                <div className="gallery-photo-content">
                  <h3 className="gallery-photo-title">{slide.title}</h3>
                </div>
                <div className={`gallery-photo-accent accent-${slide.accent}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta-section">
        <div className="gallery-cta-bg" />
        <div className="gallery-cta-glow" />
        <div className="gallery-grid-container">
          <motion.div 
            className="gallery-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="gallery-cta-headline">Be Part of Our Journey</h2>
            <p className="gallery-cta-description">
              Your support helps us continue creating meaningful impact 
              through education, healthcare, and community development initiatives.
            </p>
            <div className="gallery-cta-buttons">
              <a href="/volunteer" className="gallery-cta-primary">
                <span>Become a Volunteer</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/donate" className="gallery-cta-secondary">
                Support Our Mission
                <span className="gallery-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Category Gallery View Component
function CategoryGalleryView({ category, navigate }) {
  const currentGallery = galleryData[category];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  if (!currentGallery) {
    return (
      <section className="category-gallery-page">
        <div className="category-not-found">
          <h1>Gallery Not Found</h1>
          <button className="back-gallery-btn" onClick={() => navigate("/gallery")}>
            ← Back to Gallery
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="category-gallery-page">
      {/* Back Button */}
      <div className="category-back-wrapper">
        <button className="back-gallery-btn" onClick={() => navigate("/gallery")}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15 9H3M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to Gallery</span>
        </button>
      </div>

      {/* Category Header */}
      <div className="category-gallery-header">
        <div className="category-header-tag">
          <span className="category-header-tag-line" />
          <span className="category-header-tag-text">Uvagai Foundation Gallery</span>
        </div>
        <h1 className="category-header-title">{currentGallery.title}</h1>
        <p className="category-header-subtitle">Moments captured from this initiative.</p>
        <div className={`category-header-accent accent-${currentGallery.accent}`} />
      </div>

      {/* Category Image Grid */}
      <div className="category-gallery-grid">
        {currentGallery.images.map((image, index) => (
          <motion.div 
            className={`category-image-card card-${currentGallery.accent}`}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <img src={image} alt={`${currentGallery.title} ${index + 1}`} />
            <div className="category-image-overlay" />
            <div className="category-image-number">{index + 1}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}