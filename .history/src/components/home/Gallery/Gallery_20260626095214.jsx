import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./Gallery.css";

export default function Gallery() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
      title: "Education Support Program",
      category: "Education",
      description:
        "Supporting students through learning resources, mentorship, and educational initiatives.",
      accent: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80",
      title: "Community Healthcare Camp",
      category: "Healthcare",
      description:
        "Medical consultations, health screenings, and wellness awareness programs.",
      accent: "green",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
      title: "Volunteer Engagement Drive",
      category: "Volunteerism",
      description:
        "Volunteers coming together to support meaningful social initiatives.",
      accent: "blue",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
      title: "Child Welfare Activities",
      category: "Child Welfare",
      description:
        "Programs focused on children's education, nutrition, and development.",
      accent: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
      title: "Elderly Care Initiative",
      category: "Senior Welfare",
      description:
        "Supporting senior citizens through care, engagement, and wellness programs.",
      accent: "blue",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
      title: "Environmental Awareness Campaign",
      category: "Environment",
      description:
        "Promoting sustainability through tree plantation and green initiatives.",
      accent: "green",
    },
    {
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
      title: "Community Food Distribution",
      category: "Humanitarian",
      description:
        "Providing essential support and food assistance to families in need.",
      accent: "red",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
      title: "CSR Partnership Activities",
      category: "CSR",
      description:
        "Collaborating with organizations to create sustainable social impact.",
      accent: "blue",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      title: "Youth Skill Development Workshop",
      category: "Skill Development",
      description:
        "Empowering youth with career guidance and employability skills.",
      accent: "green",
    },
  ];

  const categories = ["All", "Education", "Healthcare", "Volunteerism", "Child Welfare", "Senior Welfare", "Environment", "Humanitarian", "CSR", "Skill Development"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="gallery-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg" />
        <div className="gallery-hero-glow gallery-hero-glow-1" />
        <div className="gallery-hero-glow gallery-hero-glow-2" />
        
        <div className="gallery-container">
          <motion.div 
            className="gallery-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="gallery-hero-tag">
              <span className="gallery-hero-tag-line" />
              <span className="gallery-hero-tag-text">Gallery</span>
            </div>

            <h1 className="gallery-hero-headline">
              Capturing Moments Of
              <span className="gallery-hero-headline-accent"> Impact & Transformation</span>
            </h1>

            <p className="gallery-hero-subtitle">
              Explore the journey of Uvagai Foundation through our
              initiatives, community programs, volunteer activities,
              healthcare camps, educational support, and social impact projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filter-section">
        <div className="gallery-container">
          <motion.div 
            className="gallery-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.33, 0.1, 0.25, 1] }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`gallery-filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <motion.div 
            className="gallery-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div 
                  className={`gallery-card card-${item.accent}`}
                  key={item.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedImage(item)}
                >
                  {/* Image Container */}
                  <div className="gallery-card-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="gallery-card-image-overlay" />
                    
                    {/* Category Badge */}
                    <div className="gallery-card-badge">
                      <span className="gallery-card-badge-dot" />
                      <span className="gallery-card-badge-text">{item.category}</span>
                    </div>

                    {/* View Icon */}
                    <div className="gallery-card-view">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M1 10C3 5 7 2 10 2C13 2 17 5 19 10C17 15 13 18 10 18C7 18 3 15 1 10Z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="gallery-card-content">
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <p className="gallery-card-description">{item.description}</p>
                  </div>

                  {/* Accent Line */}
                  <div className="gallery-card-accent" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div 
              className="gallery-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No images found in this category.</p>
              <button onClick={() => setFilter("All")}>View All Images</button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="gallery-lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="gallery-lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Image */}
              <div className="gallery-lightbox-image">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>

              {/* Info */}
              <div className="gallery-lightbox-info">
                <span className="gallery-lightbox-category">{selectedImage.category}</span>
                <h3 className="gallery-lightbox-title">{selectedImage.title}</h3>
                <p className="gallery-lightbox-description">{selectedImage.description}</p>
              </div>

              {/* Navigation */}
              <div className="gallery-lightbox-nav">
                <button 
                  className="gallery-lightbox-nav-btn"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(item => item.title === selectedImage.title);
                    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                    setSelectedImage(filteredItems[prevIndex]);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="gallery-lightbox-counter">
                  {filteredItems.findIndex(item => item.title === selectedImage.title) + 1} / {filteredItems.length}
                </span>
                <button 
                  className="gallery-lightbox-nav-btn"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(item => item.title === selectedImage.title);
                    const nextIndex = (currentIndex + 1) % filteredItems.length;
                    setSelectedImage(filteredItems[nextIndex]);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}