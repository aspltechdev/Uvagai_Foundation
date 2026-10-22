import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./Gallery.css";

import educationImg from "../assets/e.png";
import healthcareImg from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.png";
import childImg from "../assets/childd.png";
import elderlyImg from "../assets/elder.png";
import environmentImg from "../assets/environment.jpg";
import foodImg from "../assets/food1.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/prog7.png";
import placementImg from "../assets/abt123.png";

export default function Gallery() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      image: educationImg,
      title: "Education Support",
      description: "Supporting students through learning resources and mentorship programs.",
      accent: "red",
    },
    {
      image: healthcareImg,
      title: "Healthcare Camp",
      description: "Medical consultations and health screenings for communities.",
      accent: "green",
    },
    {
      image: volunteerImg,
      title: "Financial Literacy",
      description: "Empowering communities through financial education.",
      accent: "blue",
    },
    {
      image: childImg,
      title: "Child Welfare",
      description: "Programs focused on children's education and development.",
      accent: "red",
    },
    {
      image: elderlyImg,
      title: "Elderly Care",
      description: "Supporting senior citizens through care and wellness programs.",
      accent: "blue",
    },
    {
      image: environmentImg,
      title: "Environment Campaign",
      description: "Promoting sustainability through green initiatives.",
      accent: "green",
    },
    {
      image: foodImg,
      title: "Food Distribution",
      description: "Providing essential support and food assistance to families in need.",
      accent: "red",
    },
    {
      image: skillImg,
      title: "Skill Development",
      description: "Empowering youth with career guidance and employability training.",
      accent: "green",
    },
    {
      image: placementImg,
      title: "Placement Support",
      description: "Connecting skilled individuals with job opportunities and career growth.",
      accent: "blue",
    },
  ];

  return (
    <section className="glr-section" ref={sectionRef}>
      <div className="glr-container">
        {/* Section Header */}
        <motion.div
          className="glr-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="glr-header-tag">
            <span className="glr-header-tag-line" />
            <span className="glr-header-tag-text">Our Gallery</span>
          </div>
          <h2 className="glr-header-title">
            Capturing Moments of <span className="glr-text-red">Impact</span>
          </h2>
          <p className="glr-header-sub">
            Explore our journey through community programs, volunteer activities, 
            skill development, placement support, and social impact projects.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="glr-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              className={`glr-card glr-card-${item.accent}`}
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 0.1, 0.25, 1] } },
              }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="glr-card-media">
                <img src={item.image} alt={item.title} />
                <div className="glr-card-media-shade" />
                
                {/* View Icon */}
                <div className="glr-card-view-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M1 9C3 4.5 6 2 9 2C12 2 15 4.5 17 9C15 13.5 12 16 9 16C6 16 3 13.5 1 9Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>

                {/* Number Badge */}
                <div className={`glr-card-badge glr-badge-${item.accent}`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="glr-card-body">
                <h3 className="glr-card-title">{item.title}</h3>
                <p className="glr-card-text">{item.description}</p>
              </div>

              <div className={`glr-card-accent glr-accent-${item.accent}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="glr-cta-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="/gallerypage" className="glr-cta-btn">
            <span>View Full Gallery</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="glr-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="glr-lightbox-dialog"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="glr-lightbox-close-btn" onClick={() => setSelectedImage(null)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="glr-lightbox-image-wrap">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>

              <div className="glr-lightbox-details">
                <h3 className="glr-lightbox-title">{selectedImage.title}</h3>
                <p className="glr-lightbox-desc">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}