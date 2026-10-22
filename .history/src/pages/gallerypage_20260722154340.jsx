import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

import childwelfareImg from "../assets/Capturechild.PNG";
import childwelfareImg1 from "../assets/chr2.JPG";
import communityImg from "../assets/chatcomm.png";
import digitalImg from "../assets/creativecapture.PNG";
import educationImg from "../assets/educati.png";
import eldeImg from "../assets/elderlycapture.png";
import environmentImg from "../assets/chatenv.png";
import eventImg from "../assets/chateve.png";
import healthcareImg from "../assets/healthCapture.PNG";
import healthcareImg1 from "../assets/prog7.png";

import benefitImg1 from "../assets/edu.png";
import benefitImg2 from "../assets/educa.png";
import benefitImg3 from "../assets/educatio.png";

import educationnew12 from "../assets/e.png";
import healthcarenew1 from "../assets/healthcarenew1.png";
import childwelfarenew1 from "../assets/child.png";
import childwelfarenew3 from "../assets/h.png";
import childwelfarenew4 from "../assets/chr.JPG";
import chil1 from "../assets/chil.png";
import elderlycarenew1 from "../assets/elderlycarenew1.jpeg";
import enviroinmentnew1 from "../assets/environmentnew1.jpeg";
import communitynew1 from "../assets/communitynew1.jpeg";
import communitynew2 from "../assets/el.png";
import large1 from "../assets/education1.png";
import image2 from "../assets/image2.jpeg";
import image5 from "../assets/educat.png";
import communityimg2 from "../assets/co.JPG";
import communityimg3 from "../assets/com.JPG";
import communityimg4 from "../assets/comm.JPG";

import vmBg from "../assets/communitynew1.jpeg";
import purpose from "../assets/ndimagee.png";
import empower from "../assets/voli.jpeg";
import volunteer from "../assets/volent.jpeg";
import education from "../assets/ed.png";
import healthcare from "../assets/healthfinal.png";
import child from "../assets/childwelf.jpeg";
import elderly from "../assets/oldage.jpeg";
import environment from "../assets/env.jpeg";
import community from "../assets/community.png";
import humanitarian from "../assets/humani.jpeg";
import women from "../assets/womenempfinal.png";

import healthcare1 from "../assets/healthcare1.jpg";
import volunteer1 from "../assets/volunteer1.jpg";
import educationHero from "../assets/educat.png";
import healthcareHero from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.png";
import childImg from "../assets/childd.png";
import elderlyImg from "../assets/elder.png";
import environmentHero from "../assets/environment.jpg";
import foodImg from "../assets/food1.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/skill1.jpg";
import skillImg1 from "../assets/v.jpg";
import skillImg11 from "../assets/volunteer3.jpg";
import skillImg11 from "../assets/newfrstimage.jpg";

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const galleryItems = [
   { image: educationImg, category: "Education", accent: "red" },
    { image: benefitImg1, category: "Education", accent: "red" },
    { image: educationnew12, category: "Education", accent: "red" },
    { image: education, category: "Education", accent: "red" },
    { image: benefitImg2, category: "Education", accent: "red" },
    { image: benefitImg3, category: "Education", accent: "red" },
    { image: large1, category: "Education", accent: "red" },
    { image: image2, category: "Education", accent: "red" },
    { image: image5, category: "Education", accent: "red" },
    { image: digitalImg, category: "Education", accent: "red" },
    { image: healthcareImg1, category: "Education", accent: "red" },
    { image: skillImg11, category: "Education", accent: "red" },
   

    { image: healthcareImg, category: "Healthcare", accent: "green" },
    { image: healthcare1, category: "Healthcare", accent: "green" },
    { image: healthcarenew1, category: "Healthcare", accent: "green" },
    { image: healthcareHero, category: "Healthcare", accent: "green" },
    { image: healthcarenew1, category: "Healthcare", accent: "green" },
    { image: women, category: "Healthcare", accent: "green" },
    { image: childwelfarenew3, category: "Healthcare", accent: "green" },
    { image: healthcare, category: "Healthcare", accent: "green" },

    { image: childwelfareImg, category: "Child Welfare", accent: "blue" },
    { image: childwelfarenew4, category: "Child Welfare", accent: "blue" },
    { image: child, category: "Child Welfare", accent: "blue" },
    { image: chil1, category: "Child Welfare", accent: "blue" },
    { image: childImg, category: "Child Welfare", accent: "blue" },
    { image: childwelfareImg1, category: "Child Welfare", accent: "blue" },
    { image: childwelfarenew1, category: "Child Welfare", accent: "blue" },
    { image: eventImg, category: "Child Welfare", accent: "blue" },
    { image: environmentImg, category: "Child Welfare", accent: "blue" },
    { image: benefitImg3, category: "Child Welfare", accent: "blue" },
    { image: environmentImg, category: "Child Welfare", accent: "blue" },
    { image: skillImg11, category: "Child Welfare", accent: "blue" },
    

    { image: skillImg, category: "Skill Development", accent: "red" },
    { image: digitalImg, category: "Skill Development", accent: "red" },
    { image: empower, category: "Skill Development", accent: "red" },
    { image: image5, category: "Skill Development", accent: "red" },
    { image: image2, category: "Skill Development", accent: "red" },
    { image: educationnew12, category: "Skill Development", accent: "red" },
    { image: large1, category: "Skill Development", accent: "red" },
    { image:  healthcareImg1, category: "Skill Development", accent: "red" },
    
    

    { image: volunteerImg, category: "Placement", accent: "green" },
    { image: large1, category: "Placement", accent: "green" },
    { image: humanitarian, category: "Placement", accent: "green" },
    { image: childwelfarenew1, category: "Placement", accent: "green" },
    { image: skillImg, category: "Placement", accent: "green" },
    { image: women, category: "Placement", accent: "green" },
    { image: image2, category: "Placement", accent: "green" },
    { image:  healthcareImg1, category: "Placement", accent: "green" },
    

    { image: volunteer1, category: "CSR", accent: "blue" },
    { image: communitynew1, category: "CSR", accent: "blue" },
    { image: volunteerImg, category: "CSR", accent: "blue" },
    { image: benefitImg1, category: "CSR", accent: "blue" },
    { image: communityImg, category: "CSR", accent: "blue" },
    { image: communityimg2, category: "CSR", accent: "blue" },
    { image: communityimg3, category: "CSR", accent: "blue" },
    { image: humanitarian, category: "CSR", accent: "blue" },
    { image: communityImg, category: "CSR", accent: "blue" },
    { image: communityimg4, category: "CSR", accent: "blue" },
    { image: volunteer, category: "CSR", accent: "blue" },
    { image: enviroinmentnew1, category: "CSR", accent: "blue" },
    { image: benefitImg3, category: "CSR", accent: "blue" },

    { image: environmentHero, category: "Environment", accent: "red" },
    { image: environmentImg, category: "Environment", accent: "red" },
    { image: enviroinmentnew1, category: "Environment", accent: "red" },
    { image: environment, category: "Environment", accent: "red" },

    { image: foodImg, category: "Community", accent: "green" },
    { image: communityImg, category: "Community", accent: "green" },
    { image: communitynew2, category: "Community", accent: "green" },
    { image: community, category: "Community", accent: "green" },
    { image: volunteer1, category: "Community", accent: "green" },
    { image: elderly, category: "Community", accent: "green" },
    { image: women, category: "Community", accent: "green" },
    { image: communitynew1, category: "Community", accent: "green" },
    { image: community, category: "Community", accent: "green" },
    { image: volunteerImg, category: "Community", accent: "green" },
    { image: humanitarian, category: "Community", accent: "green" },
    { image: elderlycarenew1, category: "Community", accent: "green" },
    { image: eldeImg, category: "Community", accent: "green" },
    { image: purpose, category: "Community", accent: "green" },
  ];
  const categories = ["All", "Education", "Healthcare", "Child Welfare", "Skill Development", "Placement", "CSR", "Environment", "Community"];
  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="glp-page" ref={sectionRef}>
      <section className="glp-hero">
        <div className="glp-hero-bg" />
        <div className="glp-hero-glow glp-hero-glow-1" />
        <div className="glp-hero-glow glp-hero-glow-2" />
        <div className="glp-container">
          <motion.div className="glp-hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="glp-hero-tag">
              <span className="glp-hero-tag-line" />
              <span className="glp-hero-tag-text">Gallery</span>
            </div>
            <h1 className="glp-hero-headline">Capturing Moments Of <span className="glp-hero-accent">Impact</span></h1>
            <p className="glp-hero-desc">Explore the journey of Uvagai Foundation through our initiatives and social impact projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="glp-filter-section">
        <div className="glp-container">
          <motion.div className="glp-filters" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`glp-filter-btn ${filter === category ? "glp-filter-active" : ""}`}
                onClick={() => {
                  setFilter(category);
                  setVisibleCount(12);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="glp-grid-section">
        <div className="glp-container">
          <motion.div className="glp-grid" layout>
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, index) => (
                <motion.div
                  className={`glp-card glp-card-${item.accent}`}
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  layout
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="glp-card-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="glp-card-shade" />
                    <div className="glp-card-badge">
                      <span className={`glp-card-dot glp-dot-${item.accent}`} />
                      <span className="glp-card-badge-text">{item.category}</span>
                    </div>
                    <div className="glp-card-view">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M1 9C3 4.5 6 2 9 2C12 2 15 4.5 17 9C15 13.5 12 16 9 16C6 16 3 13.5 1 9Z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="glp-card-body">
                    <h3 className="glp-card-title">{item.title}</h3>
                    <p className="glp-card-text">{item.description}</p>
                  </div>
                  {/* <div className={`glp-card-line glp-line-${item.accent}`} /> */}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMore && (
            <motion.div className="glp-load-more" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button className="glp-load-btn" onClick={() => setVisibleCount((prev) => prev + 12)}>
                View More
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="glp-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="glp-lightbox-dialog"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="glp-lightbox-close" onClick={() => setSelectedImage(null)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="glp-lightbox-image">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>
              <div className="glp-lightbox-info">
                <span className={`glp-lightbox-cat glp-cat-${selectedImage.accent}`}>{selectedImage.category}</span>
                <h3 className="glp-lightbox-title">{selectedImage.title}</h3>
                <p className="glp-lightbox-desc">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}