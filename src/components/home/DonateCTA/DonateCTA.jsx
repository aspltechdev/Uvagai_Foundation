/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./Donate.css";
import bgofslides from "../assets/bgofslides.png";
import chil from "../assets/chil.jpg"

export default function Donate() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationStep, setDonationStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

    const donationOptions = [
  {
    amount: "500",
    title: "Support a Child",
    impact:
      "Provides learning materials, school supplies and educational support for one child.",
    accent: "red",
    popular: false,
    icon: "🎒",
    benefits: [
      "Learning Materials",
      "School Essentials",
      "Tax Benefit"
    ]
  },

  {
    amount: "1000",
    title: "Healthcare Support",
    impact:
      "Supports medical camps, health awareness programs and medicines.",
    accent: "green",
    popular: true,
    icon: "❤️",
    benefits: [
      "Medical Support",
      "Community Health",
      "Tax Benefit"
    ]
  },

  {
    amount: "2500",
    title: "Nutrition & Welfare",
    impact:
      "Provides nutritious meals and welfare assistance for vulnerable families.",
    accent: "blue",
    popular: false,
    icon: "🍲",
    benefits: [
      "Nutritious Meals",
      "Family Support",
      "Tax Benefit"
    ]
  },

  {
    amount: "5000",
    title: "Community Development",
    impact:
      "Helps build sustainable community projects and livelihood initiatives.",
    accent: "red",
    popular: false,
    icon: "🌱",
    benefits: [
      "Community Projects",
      "Skill Development",
      "Tax Benefit"
    ]
  }
];
const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % donationOptions.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) =>
    prev === 0 ? donationOptions.length - 1 : prev - 1
  );
};

useEffect(() => {
  const timer = setInterval(() => {
    nextSlide();
  }, 5000);

  return () => clearInterval(timer);
}, [currentSlide]);
const activeDonation = donationOptions[currentSlide];

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

  const handleDonate = (amount) => {
    setSelectedAmount(amount);
    setDonationStep(2);
  };

  const handleCustomDonate = (e) => {
    e.preventDefault();
    if (customAmount) {
      setSelectedAmount(customAmount);
      setDonationStep(2);
    }
  };

  return (
    <div className="donate-page" ref={sectionRef}>
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
            {" "}
            Kindness
          </span>

          <br />

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
            whileTap={{ scale: .97 }}
          >

            Donate Now →

          </motion.a>

          <motion.a
           href="#donate-options"
            className="donate-hero-secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .97 }}
          >

            Learn More

          </motion.a>

        </div>

        <div className="donate-hero-mini-stats">

          <div>

            <h3>50K+</h3>

            <p>Lives Impacted</p>

          </div>

          <div>

            <h3>200+</h3>

            <p>Communities</p>

          </div>

          <div>

            <h3>98%</h3>

            <p>Funds Utilized</p>

          </div>

        </div>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        className="donate-hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .9 }}
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
            y: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
        >

          ❤️ Compassion

        </motion.div>

        <motion.div
          className="floating-card floating-card-two"
          animate={{
            y: [0, 18, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity
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
      <section className="donate-why-section">
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
    Together We
    <span className="donate-hero-headline-accent">
      {" "}
      Build Better Futures
    </span>
  </h2>

  <p className="donate-section-subtitle">
    Every contribution empowers children through education,
    supports healthcare initiatives, strengthens communities,
    protects the environment, and creates sustainable social
    impact across generations.
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

      variants={{
        hidden: {
          opacity: 0,
          y: 60,
        },

        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: .7,
          },
        },
      }}

      whileHover={{
        y: -12,
        scale: 1.03,
      }}

    >

      <div className="stat-top-line"></div>

      <h2 className="donate-stat-value">

        {stat.value}

      </h2>

      <h3 className="stat-title">

        {stat.title}

      </h3>

      <p className="stat-description">

        {stat.desc}

      </p>

    </motion.div>

  ))}

</motion.div>
        </div>
      </section>

    
      <section className="donate-options-section" id="donate-options">
        <div className="donate-options-bg" />
        <div className="donate-container">
         
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

  <motion.div
    key={currentSlide}
    className="slider-card"

    initial={{
      opacity: 0,
      x: 120
    }}

    animate={{
      opacity: 1,
      x: 0
    }}

    transition={{
      duration: .55
    }}
  >

    {activeDonation.popular && (

      <div className="slider-badge">

        MOST IMPACTFUL

      </div>

    )}

    <div className="slider-icon">

      {activeDonation.icon}

    </div>

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

      {activeDonation.benefits.map((item, index)=>(

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
        scale:1.05
      }}

      whileTap={{
        scale:.95
      }}

      onClick={() =>
        handleDonate(activeDonation.amount)
      }

    >

      Donate Now →

    </motion.button>

  </motion.div>

  <button

    className="slider-btn slider-right"

    onClick={nextSlide}

  >

    ❯

  </button>

</motion.div>
<div className="slider-dots">

  {donationOptions.map((_, index)=>(

    <button

      key={index}

      className={`slider-dot ${
        currentSlide===index ? "active" : ""
      }`}

      onClick={()=>setCurrentSlide(index)}

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
              <h3 className="donate-custom-title">Make A Custom Contribution</h3>
              <p className="donate-custom-text">
                Every act of generosity contributes to building stronger,
                healthier, and more empowered communities.
              </p>
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