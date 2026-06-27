import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Donate.css";

export default function Donate() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationStep, setDonationStep] = useState(1);

  const donationOptions = [
    {
      amount: "500",
      title: "Support a Child",
      impact:
        "Help provide educational materials, learning resources, and essential support for children from underserved communities.",
      accent: "red",
      popular: false,
    },
    {
      amount: "1,000",
      title: "Healthcare Support",
      impact:
        "Contribute towards community healthcare initiatives, awareness programs, and medical outreach activities.",
      accent: "green",
      popular: true,
    },
    {
      amount: "2,500",
      title: "Nutrition & Welfare",
      impact:
        "Support nutrition assistance, child welfare programs, and essential care initiatives for vulnerable communities.",
      accent: "blue",
      popular: false,
    },
    {
      amount: "5,000",
      title: "Community Development",
      impact:
        "Help implement sustainable community development projects, skill-building programs, and social impact initiatives.",
      accent: "red",
      popular: false,
    },
  ];

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
      {/* Hero Section */}
      {/* <section className="donate-hero">
        <div className="donate-hero-bg" />
        <div className="donate-hero-glow donate-hero-glow-1" />
        <div className="donate-hero-glow donate-hero-glow-2" />
        
        <div className="donate-container">
          <motion.div 
            className="donate-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-hero-tag">
              <span className="donate-hero-tag-line" />
              <span className="donate-hero-tag-text">Support Our Mission</span>
            </div>

            <h1 className="donate-hero-headline">
              Your Contribution Can
              <span className="donate-hero-headline-accent"> Transform Lives</span>
            </h1>

            <p className="donate-hero-subtitle">
              Every donation helps Uvagai Foundation create meaningful
              impact through education, healthcare, child welfare,
              elderly care, community development, environmental
              sustainability, and humanitarian support initiatives.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Why Donate */}
      <section className="donate-why-section">
        <div className="donate-container">
          <motion.div 
            className="donate-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="donate-section-tag">
              <span className="donate-section-tag-line" />
              <span className="donate-section-tag-text">Why Donate</span>
            </div>
            <h2 className="donate-section-headline">Empower Communities Through Your Generosity</h2>
            <p className="donate-section-subtitle">
              Your support enables us to reach more people, strengthen
              communities, and create opportunities for sustainable
              social development.
            </p>
          </motion.div>

          <motion.div 
            className="donate-stats-row"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { value: "98%", label: "Funds Utilized Directly" },
              { value: "50K+", label: "Lives Impacted" },
              { value: "200+", label: "Communities Reached" },
              { value: "12+", label: "Years of Trust" },
            ].map((stat, index) => (
              <motion.div 
                className="donate-stat-card"
                key={index}
                variants={cardVariants}
              >
                <span className="donate-stat-value">{stat.value}</span>
                <span className="donate-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      <section className="donate-options-section" id="donate-options">
        <div className="donate-options-bg" />
        <div className="donate-container">
          <motion.div 
            className="donate-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="donate-section-headline">Choose Your Impact</h2>
            <p className="donate-section-subtitle">
              Every contribution, regardless of size, helps create
              positive change and lasting social impact.
            </p>
          </motion.div>

          <motion.div 
            className="donate-options-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {donationOptions.map((option, index) => (
              <motion.div 
                className={`donate-option-card option-${option.accent} ${option.popular ? 'popular' : ''} ${selectedAmount === option.amount ? 'selected' : ''}`}
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                onClick={() => handleDonate(option.amount)}
              >
                {option.popular && (
                  <div className="donate-popular-badge">Most Popular</div>
                )}
                
                <div className="donate-option-amount">
                  <span className="donate-currency">₹</span>
                  <span className="donate-amount-value">{option.amount}</span>
                </div>
                
                <h3 className="donate-option-title">{option.title}</h3>
                <p className="donate-option-impact">{option.impact}</p>
                
                <motion.button 
                  className={`donate-option-btn ${selectedAmount === option.amount ? 'active' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedAmount === option.amount ? 'Selected' : 'Donate Now'}
                </motion.button>

                <div className="donate-option-accent" />
              </motion.div>
            ))}
          </motion.div>

   
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
              <a href="/volunteer" className="donate-cta-secondary">
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