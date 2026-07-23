import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Donate.css";
import bgofslides from "../assets/bgofslides.png";
import childincards from "../assets/childincards.png";
import community from "../assets/community.png";
import childedu from "../assets/childedu.png";
import seniorciti from "../assets/senior.png";
import communityy from "../assets/communityy.png";
import environment from "../assets/environment.png";

const heroSlides = [
  {
    tag: "Make a Difference",
    title: "Every Contribution Counts",
    subtitle: "Support education, healthcare, and community development for a better tomorrow."
  },
  {
    tag: "Empower Lives",
    title: "Transform Communities",
    subtitle: "Your donation helps build sustainable futures for children and families."
  },
  {
    tag: "Join the Movement",
    title: "Be the Change",
    subtitle: "Together we can create lasting social impact across generations."
  }
];

export default function Donate() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts, setCounts] = useState({
    transparency: 0,
    lives: 0,
    communities: 0,
    years: 0
  });

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

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      const targetValues = {
        transparency: 98,
        lives: 50,
        communities: 200,
        years: 12
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          transparency: Math.round(progress * targetValues.transparency),
          lives: Math.round(progress * targetValues.lives),
          communities: Math.round(progress * targetValues.communities),
          years: Math.round(progress * targetValues.years)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const handleDonate = (amount) => {
    setSelectedAmount(amount);
  };

  const handleCustomDonate = (e) => {
    e.preventDefault();
    if (customAmount) {
      setSelectedAmount(customAmount);
    }
  };

  const statCards = [
    {
      title: "Fund Transparency",
      desc: "Every contribution reaches the people who need it most.",
      color: "red",
      img: bgofslides,
    },
    {
      title: "Lives Transformed",
      desc: "Families, children and elders supported through our initiatives.",
      color: "green",
      img: childincards,
    },
    {
      title: "Communities",
      desc: "Villages and neighbourhoods empowered through sustainable programs.",
      color: "blue",
      img: communityy,
    },
    {
      title: "Years of Trust",
      desc: "Dedicated service creating meaningful social impact.",
      color: "red",
      img: seniorciti,
    },
  ];

  return (
    <div className="donate-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-bg" />

        <motion.div
          className="donate-hero-blob donate-hero-blob-red"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="donate-hero-blob donate-hero-blob-green"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

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
                <motion.button
                  type="button"
                  className="donate-hero-primary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .97 }}
                  onClick={() => navigate("/contact#contact-form")}
                >
                  Donate Now →
                </motion.button>

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

      {/* ========== STATS GRID — GLASS FLIP CARDS ========== */}
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
            {statCards.map((stat, index) => (
              <motion.div
                key={index}
                className={`donate-stat-card stat-${stat.color}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="stat-card-inner">
                  {/* FRONT — background image + glass panel */}
                  <div
                    className="stat-card-front"
                    style={{ backgroundImage: `url(${stat.img})` }}
                  >
                    <div className="stat-card-front-overlay" />
                    <div className="stat-card-front-content">
                      <div className="stat-top-line"></div>
                      <h2 className="donate-stat-value">
                        {stat.title === "Fund Transparency" && `${counts.transparency}%`}
                        {stat.title === "Lives Transformed" && `${counts.lives}K+`}
                        {stat.title === "Communities" && `${counts.communities}+`}
                        {stat.title === "Years of Trust" && `${counts.years}+`}
                      </h2>
                      <h3 className="stat-title">{stat.title}</h3>
                      <span className="stat-flip-hint">Hover to read more</span>
                    </div>
                  </div>

                  {/* BACK — glass panel, no image */}
                  <div className="stat-card-back">
                    <div className="stat-back-accent" />
                    <h3>{stat.title}</h3>
                    <p>{stat.desc}</p>
                    <span className="stat-back-note">
                      Thank you for supporting Uvagai Foundation.
                    </span>
                  </div>
                </div>
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
                    className="slider-donate"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact#contact-form")}
                  >
                    Donate Now →
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

        {/* Custom donation card removed – kept only as comment */}
      </section>

      {/* Impact Areas */}
      <section className="impact-section">
        <div className="donate-container">
          <div className="impact-heading">
            <span>OUR IMPACT</span>
            <h2>
              Areas We <span>Support</span>
            </h2>
            <p>
              Every donation directly contributes to initiatives that improve
              lives and strengthen communities.
            </p>
          </div>

          <div className="impact-grid">
            {[
              {
                tag: "Education",
                title: "Education & Youth Empowerment",
                desc: "Supporting learning opportunities, digital literacy, mentorship, and educational resources.",
                img: childedu,
              },
              {
                tag: "Healthcare",
                title: "Healthcare & Wellness",
                desc: "Organizing medical camps, health awareness programs and preventive healthcare initiatives.",
                img: community,
              },
              {
                tag: "child",
                title: "Child Welfare",
                desc: "Promoting education, nutrition, healthcare and protection for every child.",
                img: childincards,
              },
              {
                tag: "elderly care",
                title: "Elderly Care",
                desc: "Improving the quality of life of senior citizens through care, support and wellness.",
                img: seniorciti,
              },
              {
                tag: "Environment",
                title: "Environmental Sustainability",
                desc: "Tree plantation drives, environmental awareness and green community initiatives.",
                img: environment,
              },
              {
                tag: "Community",
                title: "Community Development",
                desc: "Creating sustainable livelihood opportunities and empowering rural communities.",
                img: communityy,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="impact-card"
                whileHover={{ y: -10 }}
              >
                <div className="impact-image">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="impact-content">
                  <div className="impact-header">
                    <div className="impact-tag">
                      {item.tag}
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <span className="impact-line"></span>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <button
                type="button"
                className="donate-cta-primary"
                onClick={() => navigate("/contact#contact-form")}
              >
                <span>Donate Now</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Link to="/volunteer" className="donate-cta-secondary">
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