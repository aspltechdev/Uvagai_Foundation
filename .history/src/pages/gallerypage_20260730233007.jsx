import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

// ---------- Dynamic image loader (Vite) ----------
const imageModules = import.meta.glob("../assets/uvagai/**/*.{jpg,jpeg,png,JPG,JPEG}", {
  eager: true,
  import: "default",
});

// ---------- Folder → Display Category mapping ----------
const categoryMap = {
  childewelfare: "Child Welfare",
  community: "Senior Citizen Care",   // renamed as requested
  csr: "CSR",
  education: "Education",
  elder: "Senior Citizen Care",       // merged under Senior Citizen Care
  healthcare: "Healthcare",
  placement: "Placement",
  skilldevelopment: "Skill Development",
};

const accentMap = {
  "Child Welfare": "blue",
  "Senior Citizen Care": "green",
  CSR: "blue",
  Education: "red",
  Healthcare: "green",
  Placement: "orange",
  "Skill Development": "red",
};

// Build gallery items from all loaded images
const galleryItems = Object.entries(imageModules).map(([path, imageUrl]) => {
  // Extract folder name from path (e.g., "childewelfare")
  const parts = path.split("/");
  const folder = parts[parts.length - 2];
  const category = categoryMap[folder] || folder;
  const accent = accentMap[category] || "green";
  const title = category;
  const description = `Images from ${category} activities.`;

  return {
    image: imageUrl,
    category,
    accent,
    title,
    description,
  };
});

// Optional: sort items by category for consistent ordering
galleryItems.sort((a, b) => a.category.localeCompare(b.category));

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Child Welfare",
    "Skill Development",
    "Placement",
    "CSR",
    "Senior Citizen Care",
  ];

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

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
                className={`glp-filter-btn ${
                  filter === category ? "glp-filter-active" : ""
                }`}
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <circle
                          cx="9"
                          cy="9"
                          r="2.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M1 9C3 4.5 6 2 9 2C12 2 15 4.5 17 9C15 13.5 12 16 9 16C6 16 3 13.5 1 9Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
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
            <motion.div
              className="glp-load-more"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button
                className="glp-load-btn"
                onClick={() => setVisibleCount((prev) => prev + 12)}
              >
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
              <button
                className="glp-lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M5 5L17 17M17 5L5 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="glp-lightbox-image">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>
              <div className="glp-lightbox-info">
                <span
                  className={`glp-lightbox-cat glp-cat-${selectedImage.accent}`}
                >
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