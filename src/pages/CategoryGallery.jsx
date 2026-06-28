import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CategoryGallery.css";

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
    subtitle: "Supporting students through learning resources and mentorship",
    images: [educationImg, educationImg, educationImg, educationImg],
    accent: "red",
  },
  healthcare: {
    title: "Community Healthcare Camp",
    subtitle: "Bringing medical support and wellness awareness to communities",
    images: [healthcareImg, healthcareImg, healthcareImg, healthcareImg],
    accent: "green",
  },
  volunteer: {
    title: "Volunteer Engagement Drive",
    subtitle: "Volunteers coming together for meaningful social change",
    images: [volunteerImg, volunteerImg, volunteerImg, volunteerImg],
    accent: "blue",
  },
  "child-welfare": {
    title: "Child Welfare Activities",
    subtitle: "Supporting children through care, education, and development",
    images: [childImg, childImg, childImg, childImg],
    accent: "red",
  },
  "elderly-care": {
    title: "Elderly Care Initiative",
    subtitle: "Offering care, support, and dignity to senior citizens",
    images: [elderlyImg, elderlyImg, elderlyImg, elderlyImg],
    accent: "blue",
  },
  environment: {
    title: "Environmental Awareness Campaign",
    subtitle: "Promoting sustainability through green community initiatives",
    images: [environmentImg, environmentImg, environmentImg, environmentImg],
    accent: "green",
  },
  "food-distribution": {
    title: "Community Food Distribution",
    subtitle: "Providing essential food support to families in need",
    images: [foodImg, foodImg, foodImg, foodImg],
    accent: "red",
  },
  csr: {
    title: "CSR Partnership Activities",
    subtitle: "Collaborating with organizations to create social impact",
    images: [csrImg, csrImg, csrImg, csrImg],
    accent: "blue",
  },
  "skill-development": {
    title: "Youth Skill Development Workshop",
    subtitle: "Empowering youth with career guidance and employability skills",
    images: [skillImg, skillImg, skillImg, skillImg],
    accent: "green",
  },
};

export default function CategoryGallery() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const currentGallery = galleryData[category];

  if (!currentGallery) {
    return (
      <section className="category-gallery-page">
        <div className="cg-container">
          <div className="cg-not-found">
            <h1>Gallery Not Found</h1>
            <p>The category you're looking for doesn't exist.</p>
            <button className="cg-back-btn" onClick={() => navigate("/gallery")}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15 9H3M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Gallery</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="category-gallery-page">
      {/* Back Navigation */}
      <div className="cg-container">
        <button className="cg-back-btn" onClick={() => navigate("/gallery")}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15 9H3M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to Gallery</span>
        </button>
      </div>

      {/* Category Header */}
      <div className="cg-container">
        <motion.div 
          className="cg-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="cg-header-tag">
            <span className="cg-header-tag-line" />
            <span className="cg-header-tag-text">Uvagai Foundation Gallery</span>
          </div>
          
          <h1 className="cg-header-title">{currentGallery.title}</h1>
          <p className="cg-header-subtitle">{currentGallery.subtitle}</p>
          
          <div className={`cg-header-accent cg-accent-${currentGallery.accent}`} />
        </motion.div>
      </div>

      {/* Image Grid */}
      <div className="cg-container">
        <div className="cg-grid">
          {currentGallery.images.map((image, index) => (
            <motion.div 
              className={`cg-card cg-card-${currentGallery.accent}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.33, 0.1, 0.25, 1] }}
              whileHover={{ y: -5 }}
            >
              <div className="cg-card-image">
                <img src={image} alt={`${currentGallery.title} - Image ${index + 1}`} />
                <div className="cg-card-overlay" />
                <div className="cg-card-number">{index + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="cg-container">
        <motion.div 
          className="cg-bottom-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="cg-back-btn" onClick={() => navigate("/gallery")}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 9H3M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Gallery</span>
          </button>
          
          <a href="/donate" className={`cg-donate-btn cg-donate-${currentGallery.accent}`}>
            <span>Support This Cause</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}