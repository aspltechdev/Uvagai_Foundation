import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

// ---------- MANUAL IMPORTS (by folder) ----------

// ---- childewelfare ----
const cw1 = require("../assets/uvagai/childewelfare/.trashed-1670688497-IMG20221109202246.jpg");
const cw2 = require("../assets/uvagai/childewelfare/.trashed-1673976447-IMG20221218133743.jpg");
const cw3 = require("../assets/uvagai/childewelfare/.trashed-1674050894-IMG20221218134145.jpg");
const cw4 = require("../assets/uvagai/childewelfare/.trashed-1674050942-IMG20221218134010.jpg");
const cw5 = require("../assets/uvagai/childewelfare/.trashed-1674050946-IMG20221218133958.jpg");
const cw6 = require("../assets/uvagai/childewelfare/.trashed-1674050952-IMG20221218133945.jpg");
const cw7 = require("../assets/uvagai/childewelfare/.trashed-1674050956-IMG20221218133933.jpg");
const cw8 = require("../assets/uvagai/childewelfare/.trashed-1674050962-IMG20221218133918.jpg");
const cw9 = require("../assets/uvagai/childewelfare/.trashed-1674050966-IMG20221218133900.jpg");
const cw10 = require("../assets/uvagai/childewelfare/.trashed-1674050980-IMG20221218133823.jpg");
const cw11 = require("../assets/uvagai/childewelfare/.trashed-1674050985-IMG20221218133812.jpg");
const cw12 = require("../assets/uvagai/childewelfare/IMG-20221109-WA0001.jpg");
const cw13 = require("../assets/uvagai/childewelfare/IMG_4227.JPG");
const cw14 = require("../assets/uvagai/childewelfare/IMG_4230.JPG");
const cw15 = require("../assets/uvagai/childewelfare/IMG_4231.JPG");
const cw16 = require("../assets/uvagai/childewelfare/PHOTO-2020-08-09-16-23-12_19.jpg");
const cw17 = require("../assets/uvagai/childewelfare/PHOTO-2020-08-09-16-23-13_1.jpg");
const cw18 = require("../assets/uvagai/childewelfare/PHOTO-2020-08-09-16-23-13_4.jpg");
const cw19 = require("../assets/uvagai/childewelfare/WhatsApp Image 2025-03-05 at 3.13.04 PM (1).jpeg");
const cw20 = require("../assets/uvagai/childewelfare/WhatsApp Image 2025-03-05 at 3.13.05 PM (1).jpeg");

// ---- community ----
const com1 = require("../assets/uvagai/community/ABGS1486.JPG");
const com2 = require("../assets/uvagai/community/AHGU2756.JPG");
const com3 = require("../assets/uvagai/community/ARMC6200.JPG");
const com4 = require("../assets/uvagai/community/BCIQ6690.JPG");
const com5 = require("../assets/uvagai/community/DNPR6985.JPG");
const com6 = require("../assets/uvagai/community/FPWI8543.JPG");
const com7 = require("../assets/uvagai/community/IMG_4968.JPG");
const com8 = require("../assets/uvagai/community/IMG_4971.JPG");
const com9 = require("../assets/uvagai/community/IMG_4972.JPG");
const com10 = require("../assets/uvagai/community/IMG_4973.JPG");
const com11 = require("../assets/uvagai/community/IMG_5300.JPG");
const com12 = require("../assets/uvagai/community/IMG_5458.JPG");
const com13 = require("../assets/uvagai/community/IMG_5459.JPG");
const com14 = require("../assets/uvagai/community/IMG_5462.JPG");
const com15 = require("../assets/uvagai/community/IMG_5464.JPG");
const com16 = require("../assets/uvagai/community/IMG_6148.JPG");
const com17 = require("../assets/uvagai/community/IMG_6165.JPG");
const com18 = require("../assets/uvagai/community/TBSV6252.JPG");
const com19 = require("../assets/uvagai/community/WhatsApp Image 2025-04-20 at 8.01.47 PM.jpeg");
const com20 = require("../assets/uvagai/community/WKFT8164.JPG");

// ---- csr ----
const csr1 = require("../assets/uvagai/csr/003A7790.jpg");
const csr2 = require("../assets/uvagai/csr/003A7924.jpg");
const csr3 = require("../assets/uvagai/csr/003A7926.jpg");
const csr4 = require("../assets/uvagai/csr/003A8140.jpg");
const csr5 = require("../assets/uvagai/csr/003A8160 (1).jpg");
const csr6 = require("../assets/uvagai/csr/ANTO8549.JPG");
const csr7 = require("../assets/uvagai/csr/ANTO8590.JPG");
const csr8 = require("../assets/uvagai/csr/ANTO8758.JPG");
const csr9 = require("../assets/uvagai/csr/ANTO8762.JPG");
const csr10 = require("../assets/uvagai/csr/ANTO9183.JPG");
const csr11 = require("../assets/uvagai/csr/ANTO9280.JPG");
const csr12 = require("../assets/uvagai/csr/ANTO9349 (1).JPG");
const csr13 = require("../assets/uvagai/csr/WhatsApp Image 2026-02-08 at 8.24.21 AM (2).jpeg");
const csr14 = require("../assets/uvagai/csr/WhatsApp Image 2026-02-08 at 8.24.22 AM (8).jpeg");
const csr15 = require("../assets/uvagai/csr/WhatsApp Image 2026-02-09 at 8.49.48 PM.jpeg");
const csr16 = require("../assets/uvagai/csr/WhatsApp Image 2026-02-09 at 8.49.49 PM (3).jpeg");
const csr17 = require("../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.15 PM.jpeg");
const csr18 = require("../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.18 PM (1).jpeg");
const csr19 = require("../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.19 PM (1).jpeg");
const csr20 = require("../assets/uvagai/csr/WhatsApp Image 2026-07-15 at 12.12.22 PM (2).jpeg");

// ---- education ----
const edu1 = require("../assets/uvagai/education/003A7811.jpg");
const edu2 = require("../assets/uvagai/education/003A8126.jpg");
const edu3 = require("../assets/uvagai/education/003A8164 (1).jpg");
const edu4 = require("../assets/uvagai/education/003A8330.jpg");
const edu5 = require("../assets/uvagai/education/13.jpeg");
const edu6 = require("../assets/uvagai/education/17.jpeg");
const edu7 = require("../assets/uvagai/education/27.jpeg");
const edu8 = require("../assets/uvagai/education/41.jpeg");
const edu9 = require("../assets/uvagai/education/43.jpeg");
const edu10 = require("../assets/uvagai/education/a.jpeg");
const edu11 = require("../assets/uvagai/education/c.jpeg");
const edu12 = require("../assets/uvagai/education/g.jpeg");
const edu13 = require("../assets/uvagai/education/IMG_20251124_105139.jpg");
const edu14 = require("../assets/uvagai/education/IMG_20251124_105340.jpg");
const edu15 = require("../assets/uvagai/education/IMG_20251124_105631.jpg");
const edu16 = require("../assets/uvagai/education/IMG_20251124_110418.jpg");
const edu17 = require("../assets/uvagai/education/IMG_20251124_111617.jpg");
const edu18 = require("../assets/uvagai/education/IMG_20251124_112751.jpg");
const edu19 = require("../assets/uvagai/education/IMG_20251124_121559.jpg");
const edu20 = require("../assets/uvagai/education/IMG_20251124_121951.jpg");
const edu21 = require("../assets/uvagai/education/IMG_7822.JPG");
const edu22 = require("../assets/uvagai/education/IMG_7824.JPG");
const edu23 = require("../assets/uvagai/education/IMG_9570.JPG");
const edu24 = require("../assets/uvagai/education/WhatsApp Image 2025-10-31 at 17.32.08.jpeg");
const edu25 = require("../assets/uvagai/education/WhatsApp Image 2025-11-07 at 18.44.48.jpeg");
const edu26 = require("../assets/uvagai/education/WhatsApp Image 2025-11-14 at .jpeg");
const edu27 = require("../assets/uvagai/education/WhatsApp Image 2025-11-14 at 23.05.03.jpeg");
const edu28 = require("../assets/uvagai/education/WhatsApp Image 2026-07-10 at 1.16.53 PM (4).jpeg");
const edu29 = require("../assets/uvagai/education/WhatsApp Image 2026-07-10 at 1.16.53 PM (5).jpeg");
const edu30 = require("../assets/uvagai/education/WhatsApp Image 2026-07-10 at 1.16.53 PM.jpeg");

// ---- elder ----
const eld1 = require("../assets/uvagai/elder/IMG-20190506-WA0001.jpg");
const eld2 = require("../assets/uvagai/elder/IMG-20190506-WA0002.jpg");
const eld3 = require("../assets/uvagai/elder/IMG-20190506-WA0007.jpg");
const eld4 = require("../assets/uvagai/elder/IMG_5090.JPG");
const eld5 = require("../assets/uvagai/elder/IMG_5098.JPG");
const eld6 = require("../assets/uvagai/elder/IMG_5103.JPG");
const eld7 = require("../assets/uvagai/elder/IMG_6391.JPG");
const eld8 = require("../assets/uvagai/elder/IMG_6394.JPG");
const eld9 = require("../assets/uvagai/elder/IMG_6399.JPG");
const eld10 = require("../assets/uvagai/elder/IMG_6407.JPG");
const eld11 = require("../assets/uvagai/elder/IMG_6423.JPG");
const eld12 = require("../assets/uvagai/elder/IMG_6433.JPG");
const eld13 = require("../assets/uvagai/elder/IMG_6439.JPG");
const eld14 = require("../assets/uvagai/elder/IMG_E6307.JPG");
const eld15 = require("../assets/uvagai/elder/IMG_E6317.JPG");
const eld16 = require("../assets/uvagai/elder/IMG_E6410.JPG");
const eld17 = require("../assets/uvagai/elder/IMG_E6412.JPG");
const eld18 = require("../assets/uvagai/elder/IMG_E6413.JPG");
const eld19 = require("../assets/uvagai/elder/WhatsApp Image 2025-03-11 at 3.12.32 PM (1).jpeg");
const eld20 = require("../assets/uvagai/elder/WhatsApp Image 2025-03-11 at 3.13.45 PM (1).jpeg");

// ---- healthcare ----
const hc1 = require("../assets/uvagai/healthcare/IMG_6566.JPG");
const hc2 = require("../assets/uvagai/healthcare/IMG_6573.JPG");
const hc3 = require("../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 3.38.17 PM (2).jpeg");
const hc4 = require("../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 3.38.19 PM.jpeg");
const hc5 = require("../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 3.38.25 PM (1).jpeg");
const hc6 = require("../assets/uvagai/healthcare/WhatsApp Image 2023-12-30 at 4.10.17 PM.jpeg");
const hc7 = require("../assets/uvagai/healthcare/WhatsApp Image 2023-12-31 at 1.41.06 PM (1).jpeg");
const hc8 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.46 PM (3).jpeg");
const hc9 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.49 PM (1).jpeg");
const hc10 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.49 PM (2).jpeg");
const hc11 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.50 PM (1).jpeg");
const hc12 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.50 PM (2).jpeg");
const hc13 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.51 PM (1).jpeg");
const hc14 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-01-01 at 7.13.52 PM.jpeg");
const hc15 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-04-09 at 1.02.35 PM.jpeg");
const hc16 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-04-09 at 1.02.37 PM.jpeg");
const hc17 = require("../assets/uvagai/healthcare/WhatsApp Image 2024-04-09 at 1.02.39 PM (1).jpeg");
const hc18 = require("../assets/uvagai/healthcare/WhatsApp Image 2025-10-11 at 7.36.33 PM.jpeg");
const hc19 = require("../assets/uvagai/healthcare/WhatsApp Image 2025-10-11 at 7.37.42 PM (1).jpeg");
const hc20 = require("../assets/uvagai/healthcare/WhatsApp Image 2025-10-11 at 7.37.42 PM.jpeg");

// ---- placement ----
const pl1 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.52.57 PM.jpeg");
const pl2 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.53.06 PM.jpeg");
const pl3 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.53.59 PM.jpeg");
const pl4 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.02 PM.jpeg");
const pl5 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.04 PM.jpeg");
const pl6 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.08 PM.jpeg");
const pl7 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.16 PM.jpeg");
const pl8 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.18 PM.jpeg");
const pl9 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.19 PM.jpeg");
const pl10 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.21 PM.jpeg");
const pl11 = require("../assets/uvagai/placement/WhatsApp Image 2026-02-19 at 6.54.23 PM.jpeg");

// ---- skilldevelopment ----
const sd1 = require("../assets/uvagai/skilldevelopment/BLEP5955.JPG");
const sd2 = require("../assets/uvagai/skilldevelopment/BNUW8073.JPG");
const sd3 = require("../assets/uvagai/skilldevelopment/HUQT7200.JPG");
const sd4 = require("../assets/uvagai/skilldevelopment/IMG_0285.JPG");
const sd5 = require("../assets/uvagai/skilldevelopment/IMG_0287.JPG");
const sd6 = require("../assets/uvagai/skilldevelopment/IMG_0294.JPG");
const sd7 = require("../assets/uvagai/skilldevelopment/IMG_0301.JPG");
const sd8 = require("../assets/uvagai/skilldevelopment/IMG_2342.JPG");
const sd9 = require("../assets/uvagai/skilldevelopment/IMG_2828.JPG");
const sd10 = require("../assets/uvagai/skilldevelopment/IMG_2831.JPG");
const sd11 = require("../assets/uvagai/skilldevelopment/IMG_2991.JPG");
const sd12 = require("../assets/uvagai/skilldevelopment/WhatsApp Image 2023-01-15 at 2.38.32 PM.jpeg");

// ---------- BUILD GALLERY ITEMS (by folder) ----------
const galleryItems = [
  // childewelfare
  ...Array.from({ length: 20 }, (_, i) => ({ image: eval(`cw${i+1}`), category: "childewelfare", accent: "blue" })),
  // community
  ...Array.from({ length: 20 }, (_, i) => ({ image: eval(`com${i+1}`), category: "community", accent: "green" })),
  // csr
  ...Array.from({ length: 20 }, (_, i) => ({ image: eval(`csr${i+1}`), category: "csr", accent: "blue" })),
  // education
  ...Array.from({ length: 30 }, (_, i) => ({ image: eval(`edu${i+1}`), category: "education", accent: "red" })),
  // elder
  ...Array.from({ length: 20 }, (_, i) => ({ image: eval(`eld${i+1}`), category: "elder", accent: "green" })),
  // healthcare
  ...Array.from({ length: 20 }, (_, i) => ({ image: eval(`hc${i+1}`), category: "healthcare", accent: "green" })),
  // placement
  ...Array.from({ length: 11 }, (_, i) => ({ image: eval(`pl${i+1}`), category: "placement", accent: "orange" })),
  // skilldevelopment
  ...Array.from({ length: 12 }, (_, i) => ({ image: eval(`sd${i+1}`), category: "skilldevelopment", accent: "red" })),
];

// Add title & description for each (you can customise per category)
galleryItems.forEach(item => {
  item.title = item.category.charAt(0).toUpperCase() + item.category.slice(1);
  item.description = `Images from ${item.title} activities.`;
});

// ---------- EXTRACT UNIQUE CATEGORIES ----------
const categorySet = new Set(galleryItems.map(item => item.category));
const categories = ["All", ...Array.from(categorySet)];

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter(item => item.category === filter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="glp-page" ref={sectionRef}>
      <section className="glp-hero">
        <div className="glp-hero-bg" />
        <div className="glp-hero-glow glp-hero-glow-1" />
        <div className="glp-hero-glow glp-hero-glow-2" />
        <div className="glp-container">
          <motion.div
            className="glp-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="glp-hero-tag">
              <span className="glp-hero-tag-line" />
              <span className="glp-hero-tag-text">Gallery</span>
            </div>
            <h1 className="glp-hero-headline">
              Capturing Moments Of <span className="glp-hero-accent">Impact</span>
            </h1>
            <p className="glp-hero-desc">
              Explore the journey of Uvagai Foundation through our initiatives
              and social impact projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="glp-filter-section">
        <div className="glp-container">
          <motion.div
            className="glp-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
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
              <button className="glp-load-btn" onClick={() => setVisibleCount(prev => prev + 12)}>
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
                <span className={`glp-lightbox-cat glp-cat-${selectedImage.accent}`}>
                  {selectedImage.category}
                </span>
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