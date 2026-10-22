import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

import childwelfareImg from "../assets/Capturechild.PNG";
import childwelfareImg1 from "../assets/chr2.JPG";
// import communityImg from "../assets/chatcomm.png";
import digitalImg from "../assets/creativecapture.PNG";
import educationImg from "../assets/educati.png";
import eldeImg from "../assets/elderlycapture.png";
// import environmentImg from "../assets/chatenv.png";
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
import communitynew1 from "../assets/communitynew1.jpeg";
import large1 from "../assets/education1.png";
import image5 from "../assets/educat.png";
import communityimg2 from "../assets/co.JPG";
import communityimg3 from "../assets/com.JPG";
import communityimg4 from "../assets/comm.JPG";

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
import skillImg1 from "../assets/v.jpg";

import img1 from "../assets/communityy.png";
import img2 from "../assets/edi.JPG";
import img3 from "../assets/ndimagee.png";
import whyCardEducation from "../assets/educationsupport.png";
import whyCardHealth from "../assets/healthcamp.png";
import whyCardVolunteers from "../assets/abtech.png";
import whyCardSupport from "../assets/ecr.JPG";
import educationImg2 from "../assets/ED.JPG";
import healthcareImg2 from "../assets/hcamp.jpeg";
import environmentImg2 from "../assets/csrc.JPG";
import aboutImage from "../assets/about3.jpg";
import educationImg3 from "../assets/ae.png";
import healthcareImg3 from "../assets/healthab.png";
import childWelfareImg from "../assets/childincards.png";
import elderlyImg2 from "../assets/senior.png";
import environmentImg3 from "../assets/abf.png";
import communityDevImg from "../assets/communityy.png";
import skillImg2 from "../assets/abtech.png";
import placementImg from "../assets/prog7.png";
import abouthero1 from "../assets/about.jpg";
import abouthero2 from "../assets/about1.jpg";
import abouthero3 from "../assets/about22.jpg";
import highlight1 from "../assets/abl.jpg";
import highlight2 from "../assets/highlight2.png";
import highlight3 from "../assets/highlight3.png";
import engage from "../assets/voli.jpeg";
import community2 from "../assets/eventherof.jpeg";
import together from "../assets/humani.jpeg";
import camp from "../assets/camp.jpeg";
import educ from "../assets/edu.jpg";
import volunteer2 from "../assets/voli.jpeg";
import child2 from "../assets/childwell.jpg";
import senior from "../assets/eldi.jpeg";
import sustain from "../assets/cov1.jpg";
import educationnew12_2 from "../assets/educationnew12.jpeg";
import childwelfarenew1_2 from "../assets/cv.jpeg";
import elderlycarenew1_2 from "../assets/ev.jpg";
import enviroinmentnew1_2 from "../assets/env.JPG";
import communitynew1_2 from "../assets/abtech.png";
import large1_2 from "../assets/vco.jpg";
import image5_2 from "../assets/vco11.JPG";

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Every gallery card below now points to a real, imported image.
  // The cards that used to reference commented-out imports
  // (skillImg, skillImg11, skillImg111, skillImg1111, healthcareHero,
  // environmentHero, foodImg, volunteerImg, volunteer1, image2, image2_2,
  // communitynew2, enviroinmentnew1) have been removed entirely rather
  // than substituted. Add them back in once those assets actually exist.

  const galleryItems = [
    { image: educationImg, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: benefitImg1, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: educationnew12, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: education, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: benefitImg2, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: benefitImg3, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: large1, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: image5, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: digitalImg, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: healthcareImg1, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: img2, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    // { image: whyCardEducation, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: educationImg2, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: educationImg3, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: educ, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: educationnew12_2, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },

    { image: healthcareImg, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: healthcare1, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: healthcarenew1, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: healthcarenew1, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: women, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: childwelfarenew3, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: healthcare, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: whyCardHealth, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: healthcareImg2, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: healthcareImg3, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: camp, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },

    { image: childwelfareImg, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: childwelfarenew4, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: child, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: chil1, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: childwelfareImg1, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: childwelfarenew1, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: eventImg, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: large1, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: benefitImg3, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: childWelfareImg, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: childwelfarenew1_2, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: child2, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },

    { image: digitalImg, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: empower, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: image5, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: educationnew12, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: large1, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: healthcareImg1, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: whyCardVolunteers, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: skillImg2, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: engage, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: volunteer2, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },

    { image: humanitarian, category: "Placement", accent: "green", title: "Placement Program", description: "Connecting trained youth with sustainable livelihoods." },
    { image: healthcareImg1, category: "Placement", accent: "green", title: "Placement Program", description: "Connecting trained youth with sustainable livelihoods." },
    { image: placementImg, category: "Placement", accent: "green", title: "Placement Program", description: "Connecting trained youth with sustainable livelihoods." },

    { image: communitynew1, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: volunteer, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: benefitImg1, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    // { image: communityImg, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: communityimg2, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: communityimg3, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: humanitarian, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    // { image: communityImg, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: communityimg4, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: volunteer, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: benefitImg3, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: whyCardSupport, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: environmentImg2, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: together, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: large1_2, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: image5_2, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },

    // { image: environmentImg, category: "Environment", accent: "red", title: "Environment Initiatives", description: "Restoring and protecting our natural surroundings." },
    { image: environment, category: "Environment", accent: "red", title: "Environment Initiatives", description: "Restoring and protecting our natural surroundings." },
    { image: environmentImg3, category: "Environment", accent: "red", title: "Environment Initiatives", description: "Restoring and protecting our natural surroundings." },
    { image: sustain, category: "Environment", accent: "red", title: "Environment Initiatives", description: "Restoring and protecting our natural surroundings." },
    { image: enviroinmentnew1_2, category: "Environment", accent: "red", title: "Environment Initiatives", description: "Restoring and protecting our natural surroundings." },

    // { image: communityImg, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: community, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: elderly, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: women, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: communitynew1, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: community, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: humanitarian, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: elderlycarenew1, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eldeImg, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: purpose, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: img1, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: img3, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: aboutImage, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: elderlyImg2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: communityDevImg, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: abouthero1, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: abouthero2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: abouthero3, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: highlight1, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: highlight2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: highlight3, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: community2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: senior, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: elderlycarenew1_2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: communitynew1_2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
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
                  key={`${item.category}-${index}`}
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