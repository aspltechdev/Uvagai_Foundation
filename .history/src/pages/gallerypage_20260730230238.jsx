import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

/* ---------------- Child Welfare ---------------- */
import cw1 from "../assets/childewelfare/IMG_4227.jpg";
import cw2 from "../assets/childewelfare/IMG_4230.jpg";
import cw3 from "../assets/childewelfare/IMG_4231.jpg";

/* ---------------- Community ---------------- */
import com1 from "../assets/community/ABGS1486.jpg";
import com2 from "../assets/community/AHGU2756.jpg";
import com3 from "../assets/community/ARMC6200.jpg";
import com4 from "../assets/community/BCIQ6690.jpg";
import com5 from "../assets/community/DNPR6985.jpg";
import com6 from "../assets/community/FPWI8543.jpg";
import com7 from "../assets/community/IMG_4968.jpg";
import com8 from "../assets/community/IMG_4971.jpg";
import com9 from "../assets/community/IMG_4972.jpg";
import com10 from "../assets/community/IMG_4973.jpg";
import com11 from "../assets/community/IMG_5300.jpg";
import com12 from "../assets/community/IMG_5458.jpg";
import com13 from "../assets/community/IMG_5459.jpg";
import com14 from "../assets/community/IMG_5462.jpg";
import com15 from "../assets/community/IMG_5464.jpg";
import com16 from "../assets/community/IMG_6148.jpg";
import com17 from "../assets/community/IMG_6165.jpg";
import com18 from "../assets/community/TBSV6252.jpg";
import com19 from "../assets/community/WKFT8164.jpg";

/* ---------------- Elder (grouped into Community) ---------------- */
import eld1 from "../assets/elder/IMG_5090.jpg";
import eld2 from "../assets/elder/IMG_5098.jpg";
import eld3 from "../assets/elder/IMG_5103.jpg";
import eld4 from "../assets/elder/IMG_6391.jpg";
import eld5 from "../assets/elder/IMG_6394.jpg";
import eld6 from "../assets/elder/IMG_6399.jpg";
import eld7 from "../assets/elder/IMG_6407.jpg";
import eld8 from "../assets/elder/IMG_6423.jpg";
import eld9 from "../assets/elder/IMG_6433.jpg";
import eld10 from "../assets/elder/IMG_6439.jpg";
import eld11 from "../assets/elder/IMG_E6307.jpg";
import eld12 from "../assets/elder/IMG_E6317.jpg";
import eld13 from "../assets/elder/IMG_E6410.jpg";
import eld14 from "../assets/elder/IMG_E6412.jpg";
import eld15 from "../assets/elder/IMG_E6413.jpg";

/* ---------------- CSR ---------------- */
import csr1 from "../assets/csr/003A7790.jpg";
import csr2 from "../assets/csr/003A7924.jpg";
import csr3 from "../assets/csr/003A7926.jpg";
import csr4 from "../assets/csr/003A8140.jpg";
import csr5 from "../assets/csr/003A8160 (1).jpg";
import csr6 from "../assets/csr/ANTO8549.jpg";
import csr7 from "../assets/csr/ANTO8590.jpg";
import csr8 from "../assets/csr/ANTO8758.jpg";
import csr9 from "../assets/csr/ANTO8762.jpg";
import csr10 from "../assets/csr/ANTO9183.jpg";
import csr11 from "../assets/csr/ANTO9280.jpg";
import csr12 from "../assets/csr/ANTO9349 (1).jpg";

/* ---------------- Education ---------------- */
import edu1 from "../assets/education/003A7811.jpg";
import edu2 from "../assets/education/003A8126.jpg";
import edu3 from "../assets/education/003A8164 (1).jpg";
import edu4 from "../assets/education/003A8330.jpg";
import edu5 from "../assets/education/13.jpeg";
import edu6 from "../assets/education/17.jpeg";
import edu7 from "../assets/education/27.jpeg";
import edu8 from "../assets/education/41.jpeg";
import edu9 from "../assets/education/43.jpeg";
import edu10 from "../assets/education/a.jpeg";
import edu11 from "../assets/education/c.jpeg";
import edu12 from "../assets/education/g.jpeg";
import edu13 from "../assets/education/IMG_7822.jpg";
import edu14 from "../assets/education/IMG_7824.jpg";
import edu15 from "../assets/education/IMG_9570.jpg";

/* ---------------- Healthcare ---------------- */
import hc1 from "../assets/healthcare/IMG_6566.jpg";
import hc2 from "../assets/healthcare/IMG_6573.jpg";

/* ---------------- Skill Development ---------------- */
import sd1 from "../assets/skilldevelopment/BLEP5955.jpg";
import sd2 from "../assets/skilldevelopment/BNUW8073.jpg";
import sd3 from "../assets/skilldevelopment/HUQT7200.jpg";
import sd4 from "../assets/skilldevelopment/IMG_0285.jpg";
import sd5 from "../assets/skilldevelopment/IMG_0287.jpg";
import sd6 from "../assets/skilldevelopment/IMG_0294.jpg";
import sd7 from "../assets/skilldevelopment/IMG_0301.jpg";
import sd8 from "../assets/skilldevelopment/IMG_2342.jpg";
import sd9 from "../assets/skilldevelopment/IMG_2828.jpg";
import sd10 from "../assets/skilldevelopment/IMG_2831.jpg";
import sd11 from "../assets/skilldevelopment/IMG_2991.jpg";

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const galleryItems = [
    // Education
    { image: edu1, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu2, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu3, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu4, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu5, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu6, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu7, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu8, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu9, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu10, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu11, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu12, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu13, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu14, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },
    { image: edu15, category: "Education", accent: "red", title: "Education Support", description: "Empowering students through learning initiatives." },

    // Healthcare
    { image: hc1, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },
    { image: hc2, category: "Healthcare", accent: "green", title: "Healthcare Outreach", description: "Bringing medical care to underserved communities." },

    // Child Welfare
    { image: cw1, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: cw2, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },
    { image: cw3, category: "Child Welfare", accent: "blue", title: "Child Welfare", description: "Protecting and nurturing the wellbeing of children." },

    // Skill Development
    { image: sd1, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd2, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd3, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd4, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd5, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd6, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd7, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd8, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd9, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd10, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },
    { image: sd11, category: "Skill Development", accent: "red", title: "Skill Development", description: "Building capabilities for a self-reliant future." },

    // Placement (no usable filenames were found in this folder yet)

    // CSR
    { image: csr1, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr2, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr3, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr4, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr5, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr6, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr7, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr8, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr9, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr10, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr11, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },
    { image: csr12, category: "CSR", accent: "blue", title: "CSR Partnerships", description: "Collaborating with corporates for lasting social good." },

    // Community (folder: community)
    { image: com1, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com3, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com4, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com5, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com6, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com7, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com8, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com9, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com10, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com11, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com12, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com13, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com14, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com15, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com16, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com17, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com18, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: com19, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },

    // Community (folder: elder)
    { image: eld1, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld2, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld3, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld4, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld5, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld6, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld7, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld8, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld9, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld10, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld11, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld12, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld13, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld14, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
    { image: eld15, category: "Community", accent: "green", title: "Community Building", description: "Strengthening neighborhoods through shared action." },
  ];

  const categories = ["All", "Education", "Healthcare", "Child Welfare", "Skill Development", "Placement", "CSR", "Community"];
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