/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Donate.css";
import bgofslides from "../assets/bgofslides.png";
import chil from "../assets/chil.jpg";

export default function Donate() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
  });
  console.log("Stats visible:", isInView);
  console.log("isInView:", isInView);
  const [headingWords, setHeadingWords] = useState(1);
  const [subtitleWords, setSubtitleWords] = useState(1);
  const [customAmount, setCustomAmount] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const [counts, setCounts] = useState({
    transparency: 0,
    lives: 0,
    communities: 0,
    years: 0,
  });
  const [heroCounts, setHeroCounts] = useState({
    lives: 0,
    communities: 0,
    funds: 0,
  });

  const donationOptions = [
    {
      amount: "500",
      title: "Support a Child",
      impact:
        "Provides learning materials, school supplies and educational support for one child.",
      accent: "red",
      popular: false,
      benefits: [
        "Learning Materials",
        "School Essentials",
        "Tax Benefit",
      ],
    },
    {
      amount: "1000",
      title: "Healthcare Support",
      impact:
        "Supports medical camps, health awareness programs and medicines.",
      accent: "green",
      popular: true,
      benefits: [
        "Medical Support",
        "Community Health",
        "Tax Benefit",
      ],
    },
    {
      amount: "2500",
      title: "Nutrition & Welfare",
      impact:
        "Provides nutritious meals and welfare assistance for vulnerable families.",
      accent: "blue",
      popular: false,
      benefits: [
        "Nutritious Meals",
        "Family Support",
        "Tax Benefit",
      ],
    },
    {
      amount: "5000",
      title: "Community Development",
      impact:
        "Helps build sustainable community projects and livelihood initiatives.",
      accent: "red",
      popular: false,
      benefits: [
        "Community Projects",
        "Skill Development",
        "Tax Benefit",
      ],
    },
  ];

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

  useEffect(() => {
    let lives = 0;
    let communities = 0;
    let funds = 0;

    const timer = setInterval(() => {
      lives = Math.min(lives + 1, 50);
      communities = Math.min(communities + 5, 200);
      funds = Math.min(funds + 2, 98);

      setHeroCounts({
        lives,
        communities,
        funds,
      });

      if (
        lives === 50 &&
        communities === 200 &&
        funds === 98
      ) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  const impactAreas = [
    {
      title: "Education & Youth Empowerment",
      description:
        "Supporting learning opportunities, mentorship programs, digital literacy, and educational resources.",
      accent: "red",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Organizing medical camps, health awareness drives, preventive healthcare, and wellness initiatives.",
      accent: "green",
    },
    {
      title: "Child Welfare",
      description:
        "Promoting child development through education, nutrition, healthcare, and protection programs.",
      accent: "blue",
    },
    {
      title: "Elderly Care",
      description:
        "Enhancing the quality of life of senior citizens through care, support, and wellness programs.",
      accent: "red",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Supporting tree plantation drives, environmental awareness campaigns, and green community initiatives.",
      accent: "green",
    },
    {
      title: "Humanitarian Assistance",
      description:
        "Providing relief, emergency support, and assistance to vulnerable individuals and families.",
      accent: "blue",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  // Simple placeholder action for donate buttons
  const handleDonateClick = (amount) => {
    alert(`Thank you for choosing to donate ₹${amount}!`);
  };

  const handleCustomDonate = (e) => {
    e.preventDefault();
    if (customAmount && Number(customAmount) > 0) {
      alert(`Thank you for choosing to donate ₹${customAmount}!`);
      setCustomAmount("");
    }
  };

  useEffect(() => {
    const words = [
      "Together",
      "We",
      "Build",
      "Better",
      "Futures",
    ];

    let i = 1;

    const timer = setInterval(() => {
      i++;
      if (i <= words.length) {
        setHeadingWords(i);
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const words = [
      "Every",
      "contribution",
      "empowers",
      "children",
      "through",
      "education,",
      "supports",
      "healthcare",
      "initiatives,",
      "strengthens",
      "communities,",
      "protects",
      "the",
      "environment,",
      "and",
      "creates",
      "sustainable",
      "social",
      "impact",
      "across",
      "generations.",
    ];

    let i = 1;

    const timer = setInterval(() => {
      i++;
      if (i <= words.length) {
        setSubtitleWords(i);
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let transparency = 0;
    let lives = 0;
    let communities = 0;
    let years = 0;

    const timer = setInterval(() => {
      transparency = Math.min(transparency + 2, 98);
      lives = Math.min(lives + 1, 50);
      communities = Math.min(communities + 5, 200);
      if (transparency % 8 === 0) {
        years = Math.min(years + 1, 12);
      }

      setCounts({
        transparency,
        lives,
        communities,
        years,
      });

      if (
        transparency === 98 &&
        lives === 50 &&
        communities === 200 &&
        years === 12
      ) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div className="donate-page">
      {/* ===========================
      Premium Hero Section
      =========================== */}
      <section className="donate-hero">
        {/* Animated Background */}
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

        <motion.div
          className="donate-hero-blob donate-hero-blob-blue"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="donate-container">
          <div className="donate-hero-grid">
            {/* LEFT */}
            <motion.div
              className="donate-hero-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="donate-hero-tag">
                <span className="donate-hero-tag-line"></span>
                <span className="donate-hero-tag-text">
                  Together We Can Create Change
                </span>
              </div>

              <h1 className="donate-hero-headline">
                Small Acts of
                <span className="donate-hero-headline-accent">
                  {" "}Kindness
                </span>
                Build Strong Communities
              </h1>

              <p className="donate-hero-subtitle">
                Every contribution helps Uvagai Foundation provide education,
                healthcare, nutrition, community welfare and opportunities
                for people who deserve a better tomorrow.
              </p>

              <div className="donate-hero-buttons">
                <motion.a
                  href="#donate-options"
                  className="donate-hero-primary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Donate Now →
                </motion.a>

                <motion.a
                  href="#donate-options"
                  className="donate-hero-secondary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.a>
              </div>

              <div className="donate-hero-mini-stats">
                <div>
                  <h3>{heroCounts.lives}K+</h3>
                  <p>Lives Impacted</p>
                </div>
                <div>
                  <h3>{heroCounts.communities}+</h3>
                  <p>Communities</p>
                </div>
                <div>
                  <h3>{heroCounts.funds}%</h3>
                  <p>Funds Utilized</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="donate-hero-right"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <motion.div
                className="donate-hero-image-card"
                whileHover={{ y: -10 }}
              >
                <img
                  src={bgofslides}
                  alt="Helping Communities"
                  className="donate-hero-image"
                />
                <div className="donate-image-overlay">
                  <div className="donate-overlay-card">
                    <h4>Hope Begins With You</h4>
                    <p>
                      Together we empower families,
                      educate children and build
                      stronger communities.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="floating-card floating-card-one"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                ❤️ Compassion
              </motion.div>

              <motion.div
                className="floating-card floating-card-two"
                animate={{
                  y: [0, 18, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                🌱 Growth
              </motion.div>
            </motion.div>
          </div>
        </div>

        <svg
          className="hero-wave"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,160L0,160Z"
          />
        </svg>
      </section>

      {/* Why Donate */}
      <section className="donate-why-section" ref={sectionRef}>
        <div className="donate-container">
          <motion.div
            className="donate-section-header"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="donate-section-tag">
              <span className="donate-section-tag-line"></span>
              <span className="donate-section-tag-text">
                WHY DONATE
              </span>
              <span className="donate-section-tag-line"></span>
            </div>

            <h2 className="donate-section-headline">
              {["Together", "We"]
                .slice(0, Math.min(headingWords, 2))
                .join(" ")}
              {headingWords > 2 && (
                <span className="donate-hero-headline-accent">
                  {" "}
                  {["Build", "Better", "Futures"]
                    .slice(0, headingWords - 2)
                    .join(" ")}
                </span>
              )}
            </h2>

            <p className="donate-section-subtitle">
              {[
                "Every",
                "contribution",
                "empowers",
                "children",
                "through",
                "education,",
                "supports",
                "healthcare",
                "initiatives,",
                "strengthens",
                "communities,",
                "protects",
                "the",
                "environment,",
                "and",
                "creates",
                "sustainable",
                "social",
                "impact",
                "across",
                "generations.",
              ]
                .slice(0, subtitleWords)
                .join(" ")}
            </p>
          </motion.div>

          <motion.div
            className="donate-stats-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              {
                value: "98%",
                title: "Fund Transparency",
                desc: "Every contribution reaches the people who need it most.",
                color: "red",
              },
              {
                value: "50K+",
                title: "Lives Transformed",
                desc: "Families, children and elders supported through our initiatives.",
                color: "green",
              },
              {
                value: "200+",
                title: "Communities",
                desc: "Villages and neighbourhoods empowered through sustainable programs.",
                color: "blue",
              },
              {
                value: "12+",
                title: "Years of Trust",
                desc: "Dedicated service creating meaningful social impact.",
                color: "red",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`donate-stat-card stat-${stat.color}`}
              >
                <div className="stat-card-inner">
                  {/* FRONT */}
                  <div className="stat-card-front">
                    <div className="stat-top-line"></div>
                    <h2 className="donate-stat-value">
                      {stat.value === "98%" && `${counts.transparency}%`}
                      {stat.value === "50K+" && `${counts.lives}K+`}
                      {stat.value === "200+" && `${counts.communities}+`}
                      {stat.value === "12+" && `${counts.years}+`}
                    </h2>
                    <h3 className="stat-title">
                      {stat.title}
                    </h3>
                    <p className="stat-description">
                      {stat.desc}
                    </p>
                  </div>
                  {/* BACK */}
                  <div className="stat-card-back">
                    <h3>{stat.title}</h3>
                    <p>
                      Thank you for supporting Uvagai Foundation.
                      Every donation helps us create meaningful
                      social impact and transform lives.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="donate-options-section" id="donate-options">
        {/* Background Decorations */}
        <div className="donate-options-pattern"></div>
        <div className="donate-options-gradient"></div>
        <div className="donate-options-noise"></div>

        <motion.div
          className="floating-circle circle-one"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="floating-circle circle-two"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="floating-circle circle-three"
          animate={{
            y: [0, -18, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="donate-options-bg" />
        <div className="donate-container">
          <motion.div
            className="premium-donation-header"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="premium-tag">
              <span></span>
              DONATION PROGRAMS
              <span></span>
            </div>

            <h2>
              Every Contribution Creates
              <span>
                Lasting Impact
              </span>
            </h2>

            <p>
              Choose how you'd like to support
              education, healthcare, nutrition,
              and community development.
              Every donation directly transforms lives.
            </p>
          </motion.div>

          <motion.div
            className="donation-slider"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button
              className="slider-btn slider-left"
              onClick={prevSlide}
            >
              ❮
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="slider-card"
                initial={{
                  opacity: 0,
                  x: 150,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -150,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                {activeDonation.popular && (
                  <div className="slider-badge">
                    MOST IMPACTFUL
                  </div>
                )}

                <div className="slider-price">
                  ₹
                  <span>
                    {activeDonation.amount}
                  </span>
                </div>

                <h2>
                  {activeDonation.title}
                </h2>

                <p>
                  {activeDonation.impact}
                </p>

                <div className="slider-benefits">
                  {activeDonation.benefits.map((item, index) => (
                    <div
                      key={index}
                      className="slider-benefit"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>

                <motion.button
                  className="slider-donate"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => handleDonateClick(activeDonation.amount)}
                >
                  Donate Now →
                </motion.button>
              </motion.div>
            </AnimatePresence>

            <button
              className="slider-btn slider-right"
              onClick={nextSlide}
            >
              ❯
            </button>
          </motion.div>

          <div className="slider-dots">
            {donationOptions.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <motion.div
            className="donate-custom-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-custom-content">
              <h3 className="donate-custom-title">
                {["Make", "A", "Custom", "Contribution"].map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.18,
                      duration: 0.35,
                    }}
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>

              <p className="donate-custom-text">
                {[
                  "Every",
                  "act",
                  "of",
                  "generosity",
                  "contributes",
                  "to",
                  "building",
                  "stronger,",
                  "healthier,",
                  "and",
                  "more",
                  "empowered",
                  "communities.",
                ].map((word, index) => (
                  <motion.span
                    key={index}
                    className="word"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: 0.45 + index * 0.06,
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>

              {/* Custom amount input + Donate button */}
              <form
                className="donate-custom-form"
                onSubmit={handleCustomDonate}
              >
                <div className="donate-custom-input-wrap">
                  <span className="donate-custom-currency">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    className="donate-custom-input"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="donate-custom-submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!customAmount || Number(customAmount) <= 0}
                >
                  Donate Now →
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="donate-cta-section">
        <div className="donate-cta-bg" />
        <div className="donate-cta-glow" />

        <div className="donate-container">
          <motion.div
            className="donate-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="donate-cta-headline">
              Together, We Can Build A Better Tomorrow
            </h2>
            <p className="donate-cta-description">
              Join us in empowering lives, supporting communities, and
              creating sustainable social change through your generosity.
            </p>
            <div className="donate-cta-buttons">
              <a href="#donate-options" className="donate-cta-primary">
                <span>Donate Now</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="donate-cta-secondary">
                Become A Volunteer
                <span className="donate-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}