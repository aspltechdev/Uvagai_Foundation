/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Donate.css";
import nextimage from "../assets/secondimage.png";
import child from "../assets/childd.png";
import childincards from "../assets/childwelfaree.png";
import community from "../assets/healthcaree.png";
import childedu from "../assets/educationn.png";
import seniorciti from "../assets/elders.png";
import communityy from "../assets/communityyy.png";
import environment from "../assets/envii.png";
import donatebg from "../assets/donatebg.png";
import newbg from "../assets/newbg.png"; // ← FIXED: changed "assests" to "assets"

// Counter Animation Component
const CountUp = ({ target, suffix = "", prefix = "", duration = 2000, start = 0 }) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const startValue = start;
      const endValue = target;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        
        setCount(Math.floor(currentValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration, start]);

  return (
    <span ref={countRef} className="count-up-number">
      {prefix}{count}{suffix}
    </span>
  );
};

const heroSlides = [
  {
    image: newbg,
    title: "Small Acts of Kindness Build Strong Communities",
    subtitle: "Every contribution helps Uvagai Foundation provide education, healthcare, nutrition, community welfare and opportunities for people who deserve a better tomorrow.",
    tag: "Together We Can Create Change",
    accent: "red"
  },
  {
    image: nextimage,
    title: "Your Support Transforms Lives & Communities",
    subtitle: "From education to healthcare, your donation creates lasting impact and empowers those who need it most.",
    tag: "Make A Difference Today",
    accent: "green"
  },
  {
    image: donatebg,
    title: "Empowering Children, Strengthening Futures",
    subtitle: "Support child welfare programs that provide education, nutrition, and protection for vulnerable children.",
    tag: "Invest In Tomorrow",
    accent: "blue"
  }
];

export default function Donate() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const donationOptions = [
    {
      amount: "500",
      title: "Support a Child",
      impact: "Provides learning materials, school supplies and educational support for one child.",
      accent: "red",
      popular: false,
      benefits: [
        "Learning Materials",
        "School Essentials",
        "Tax Benefit"
      ]
    },
    {
      amount: "1000",
      title: "Healthcare Support",
      impact: "Supports medical camps, health awareness programs and medicines.",
      accent: "green",
      popular: true,
      benefits: [
        "Medical Support",
        "Community Health",
        "Tax Benefit"
      ]
    },
    {
      amount: "2500",
      title: "Nutrition & Welfare",
      impact: "Provides nutritious meals and welfare assistance for vulnerable families.",
      accent: "blue",
      popular: false,
      benefits: [
        "Nutritious Meals",
        "Family Support",
        "Tax Benefit"
      ]
    },
    {
      amount: "5000",
      title: "Community Development",
      impact: "Helps build sustainable community projects and livelihood initiatives.",
      accent: "red",
      popular: false,
      benefits: [
        "Community Projects",
        "Skill Development",
        "Tax Benefit"
      ]
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide_hero = heroSlides[current];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? donationOptions.length - 1 : prev - 1
    );
  };

  const activeDonation = donationOptions[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDonate = (amount) => {
    setSelectedAmount(amount);
  };

  const handleCustomDonate = (e) => {
    e.preventDefault();
    if (customAmount) {
      setSelectedAmount(customAmount);
    }
  };

  return (
    <div className="donate-page" ref={sectionRef}>
      {/* ========== HERO SECTION ========== */}
      <section 
        className="donate-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="donate-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`donate-slide-bg ${index === current ? 'active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="donate-overlay-dark" />
        <div className="donate-overlay-gradient" />
        <div className="donate-overlay-vignette" />

        <div className="donate-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="donate-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="donate-hero-tag">
                <span className="donate-hero-tag-line" />
                <span className="donate-hero-tag-text">{currentSlide_hero.tag}</span>
              </div>

              <h1 className="donate-hero-headline">{currentSlide_hero.title}</h1>
              <p className="donate-hero-subtitle">{currentSlide_hero.subtitle}</p>

              <div className="donate-hero-buttons">
                <motion.a
                  href="#donate-options"
                  className="donate-hero-primary-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Donate Now</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="#why-donate"
                  className="donate-hero-secondary-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                  <span className="donate-hero-secondary-arrow">→</span>
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="donate-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`donate-slide-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="donate-slide-dot-fill"
                initial={{ width: '0%' }}
                animate={{ width: index === current && !isHovered ? '100%' : '0%' }}
                transition={{ duration: index === current ? 4 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="donate-slide-counter">
          <span className="donate-counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="donate-counter-sep">/</span>
          <span className="donate-counter-total">{heroSlides.length.toString().padStart(2, '0')}</span>
        </div>
      </section>

      {/* ========== WHY DONATE INTRO ========== */}
      <section className="donate-intro-section" id="why-donate">
        <div className="donate-container">
          <motion.div 
            className="donate-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-intro-tag">
              <span className="donate-intro-tag-line" />
              <span className="donate-intro-tag-text">Why Donate</span>
            </div>
            <h2 className="donate-intro-headline">Together We Build Better Futures</h2>
            <p className="donate-intro-description">
              Every contribution empowers children through education, supports healthcare 
              initiatives, strengthens communities, protects the environment, and creates 
              sustainable social impact across generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== STATS GRID WITH COUNTER ========== */}
      <section className="donate-stats-section">
        <div className="donate-container">
          <motion.div 
            className="donate-stats-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {[
              {
                value: 98,
                displayValue: "98%",
                title: "Fund Transparency",
                desc: "Every contribution reaches the people who need it most.",
                accent: "red",
                suffix: "%",
                duration: 1500
              },
              {
                value: 50000,
                displayValue: "50K+",
                title: "Lives Transformed",
                desc: "Families, children and elders supported through our initiatives.",
                accent: "green",
                suffix: "K+",
                duration: 2000
              },
              {
                value: 200,
                displayValue: "200+",
                title: "Communities",
                desc: "Villages and neighbourhoods empowered through sustainable programs.",
                accent: "blue",
                suffix: "+",
                duration: 1500
              },
              {
                value: 12,
                displayValue: "12+",
                title: "Years of Trust",
                desc: "Dedicated service creating meaningful social impact.",
                accent: "red",
                suffix: "+",
                duration: 1200
              },
            ].map((stat, index) => (
              <motion.div 
                className={`donate-stat-card stat-${stat.accent}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -6 }}
              >
                <div className="donate-stat-value">
                  {stat.value === 50000 ? (
                    <>
                      <CountUp target={50} durluration={2000} suffix="K+" />
                    </>
                  ) : (
                    <CountUp target={stat.value} duration={stat.duration} suffix={stat.suffix} />
                  )}
                </div>
                <h3 className="donate-stat-title">{stat.title}</h3>
                <p className="donate-stat-description">{stat.desc}</p>
                <div className="donate-stat-accent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== DONATION OPTIONS WITH childd.png BACKDROP ========== */}
      <section className="donate-options-section" id="donate-options">
        <div className="donate-options-slider-wrapper">
          <div className="donate-container">
            <motion.div 
              className="donate-intro"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="donate-intro-tag">
                <span className="donate-intro-tag-line" />
                <span className="donate-intro-tag-text">Donation Programs</span>
              </div>
              <h2 className="donate-intro-headline">Every Contribution Creates Lasting Impact</h2>
              <p className="donate-intro-description">
                Choose how you'd like to support education, healthcare, nutrition, 
                and community development. Every donation directly transforms lives.
              </p>
            </motion.div>

            <motion.div
              className="donation-slider"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <button className="slider-btn slider-left" onClick={prevSlide}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="slider-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
                >
                  {activeDonation.popular && (
                    <div className="slider-badge">MOST IMPACTFUL</div>
                  )}

                  <div className="slider-price">
                    <span className="slider-currency">₹</span>
                    <span className="slider-amount">{activeDonation.amount}</span>
                  </div>

                  <h2 className="slider-title">{activeDonation.title}</h2>
                  <p className="slider-impact">{activeDonation.impact}</p>

                  <div className="slider-tags">
                    {activeDonation.benefits.map((item, index) => (
                      <span key={index} className="slider-tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="slider-donate-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleDonate(activeDonation.amount)}
                  >
                    <span>Donate Now</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              <button className="slider-btn slider-right" onClick={nextSlide}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

            <div className="slider-dots">
              {donationOptions.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="donate-custom-card-wrapper">
          <div className="donate-container">
            <motion.div
              className="donate-custom-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1], delay: 0.4 }}
            >
              <div className="donate-custom-content">
                <h3 className="donate-custom-title">Make A Custom Contribution</h3>
                <p className="donate-custom-text">
                  Every act of generosity contributes to building stronger, healthier 
                  and more empowered communities. Enter any amount and make a difference today.
                </p>
              </div>

              <form className="custom-donate-form" onSubmit={handleCustomDonate}>
                <div className="custom-input-wrapper">
                  <span className="rupee-symbol">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="custom-amount-input"
                  />
                </div>

                <button type="submit" className="custom-donate-btn">
                  <span>Donate Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== IMPACT AREAS ========== */}
      <section className="impact-section">
        <div className="donate-container">
          <motion.div 
            className="donate-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-intro-tag">
              <span className="donate-intro-tag-line" />
              <span className="donate-intro-tag-text">Our Impact</span>
            </div>
            <h2 className="donate-intro-headline">Areas We Support</h2>
            <p className="donate-intro-description">
              Every donation directly contributes to initiatives that improve 
              lives and strengthen communities.
            </p>
          </motion.div>

          <motion.div 
            className="impact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            {[
              {
                tag: "Education",
                title: "Education & Youth Empowerment",
                desc: "Supporting learning opportunities, digital literacy, mentorship, and educational resources.",
                img: childedu,
                accent: "red"
              },
              {
                tag: "Healthcare",
                title: "Healthcare & Wellness",
                desc: "Organizing medical camps, health awareness programs and preventive healthcare initiatives.",
                img: community,
                accent: "green"
              },
              {
                tag: "Child Welfare",
                title: "Child Welfare",
                desc: "Promoting education, nutrition, healthcare and protection for every child.",
                img: childincards,
                accent: "blue"
              },
              {
                tag: "Elderly Care",
                title: "Elderly Care",
                desc: "Improving the quality of life of senior citizens through care, support and wellness.",
                img: seniorciti,
                accent: "red"
              },
              {
                tag: "Environment",
                title: "Environmental Sustainability",
                desc: "Tree plantation drives, environmental awareness and green community initiatives.",
                img: environment,
                accent: "green"
              },
              {
                tag: "Community",
                title: "Community Development",
                desc: "Creating sustainable livelihood opportunities and empowering rural communities.",
                img: communityy,
                accent: "blue"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`impact-card impact-${item.accent}`}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } } }}
                whileHover={{ y: -6 }}
              >
                <div className="impact-card-image">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="impact-card-image-overlay" />
                  <div className="impact-card-badge">
                    <span className="impact-card-badge-dot" />
                    <span className="impact-card-badge-text">{item.tag}</span>
                  </div>
                </div>

                <div className="impact-card-content">
                  <h3 className="impact-card-title">{item.title}</h3>
                  <p className="impact-card-description">{item.desc}</p>
                  <div className="impact-card-accent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== CTA SECTION - UPDATED ========== */}
      <section className="donate-cta-section">
        <div className="donate-cta-bg" />
        <div className="donate-cta-glow" />
        <div className="donate-container">
          <motion.div 
            className="donate-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="donate-cta-headline">Together, We Can Build A Better Tomorrow</h2>
            <p className="donate-cta-description">
              Join us in empowering lives, supporting communities, and creating 
              sustainable social change through your generosity.
            </p>
            <div className="donate-cta-buttons">
              <a href="#donate-options" className="donate-cta-primary">
                <span>Donate Now</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <Link to="/volunteers" className="donate-cta-secondary">
                Become A Volunteer
                <span className="donate-cta-secondary-arrow">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}