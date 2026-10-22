import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import "./Hero.css";
import hero1 from "../../../assets/skilldev.png";
import hero2 from "../../../assets/hero33.png";
import hero3 from "../../../assets/hero22.png";
import hero5 from "../../../assets/hero44.png";

export default function Hero() {
  const navigate = useNavigate();

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
      primaryLink: "/donate",
      secondaryLink: "/impact",
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
      primaryLink: "/donate",
      secondaryLink: "/impact",
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
      primaryLink: "/donate",
      secondaryLink: "/impact",
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
      primaryLink: "/donate",
      secondaryLink: "/impact",
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

  // Disable browser scroll restoration so route changes don't get
  // overridden by the browser trying to "remember" scroll position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
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

  const handlePrimaryCTA = () => {
    navigate(currentSlide.primaryLink);
    window.scrollTo(0, 0);
  };

  const handleSecondaryCTA = () => {
    navigate(currentSlide.secondaryLink);
    window.scrollTo(0, 0);
  };

  const handleDonateNav = () => {
    navigate("/donate");
    window.scrollTo(0, 0);
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
                    onClick={handlePrimaryCTA}
                  >
                    <span>{currentSlide.primaryCTA}</span>
                    <motion.span
                      className="uvagai-cinematic-cta-icon"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  </motion.button>

                  {/* <motion.button
                    className="uvagai-cinematic-cta-secondary"
                    whileHover={{ x: 5 }}
                    onClick={handleSecondaryCTA}
                  >
                    {currentSlide.secondaryCTA}
                    <span className="uvagai-cinematic-cta-arrow">→</span>
                  </motion.button> */}
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
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
          <motion.button
            className="uvagai-cinematic-arrow"
            onClick={goNext}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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