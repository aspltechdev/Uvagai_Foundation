import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CategoryGallery.css";

// =======================
// Education Images
// =======================
import education1 from "../assets/education1.jpg";
import education2 from "../assets/education2.jpg";
import education3 from "../assets/education3.jpg";
import education4 from "../assets/education4.jpg";

// =======================
// Healthcare Images
// =======================
import healthcare1 from "../assets/healthcare4.jpg";
import healthcare2 from "../assets/healthcare2.jpg";
import healthcare3 from "../assets/healthcare1.jpg";
import healthcare4 from "../assets/healthcare3.jpg";

// =======================
// Volunteer Images
// =======================
import volunteer1 from "../assets/volunteer1.jpg";
import volunteer2 from "../assets/childincards.png";
import volunteer3 from "../assets/communityy.png";
import volunteer4 from "../assets/ndimageee.png";

// =======================
// Child Welfare Images
// =======================
import child1 from "../assets/childincards.png";
import child2 from "../assets/childedu.png";
import child3 from "../assets/child3.jpg";
import child4 from "../assets/child4.jpg";

// =======================
// Elderly Care Images
// =======================
import elderly1 from "../assets/elderly1.jpg";
import elderly2 from "../assets/chennaielderlycare.jpg";
import elderly3 from "../assets/elderly3.jpg";
import elderly4 from "../assets/elderly4.jpg";

// =======================
// Environment Images
// =======================
import environment1 from "../assets/environment1.jpg";
import environment2 from "../assets/environment2.jpg";
import environment3 from "../assets/environment3.jpg";
import environment4 from "../assets/environment4.jpg";

// =======================
// Food Distribution Images
// =======================
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

// =======================
// CSR Images
// =======================
import csr1 from "../assets/csr1.jpg";
import csr2 from "../assets/csr2.jpg";
import csr3 from "../assets/csr3.jpg";
import csr4 from "../assets/csr4.jpg";

// =======================
// Skill Development Images
// =======================
import skill1 from "../assets/skill1.jpg";
import skill2 from "../assets/skill2.jpg";
import skill3 from "../assets/skill3.jpg";
import skill4 from "../assets/skill4.jpg";

const galleryData = {
  education: {
    title: "Education Support Program",
    subtitle:
      "Supporting students through learning resources and mentorship",
    images: [education1, education2, education3, education4],
    accent: "red",
  },

  healthcare: {
    title: "Community Healthcare Camp",
    subtitle:
      "Bringing medical support and wellness awareness to communities",
    images: [healthcare1, healthcare2, healthcare3, healthcare4],
    accent: "green",
  },

  volunteer: {
    title: "Volunteer Engagement Drive",
    subtitle: "Volunteers coming together for meaningful social change",
    images: [volunteer1, volunteer2, volunteer3, volunteer4],
    accent: "blue",
  },

  "child-welfare": {
    title: "Child Welfare Activities",
    subtitle: "Supporting children through care, education, and development",
    images: [child1, child2, child3, child4],
    accent: "red",
  },

  "elderly-care": {
    title: "Elderly Care Initiative",
    subtitle: "Offering care, support, and dignity to senior citizens",
    images: [elderly1, elderly2, elderly3, elderly4],
    accent: "blue",
  },

  environment: {
    title: "Environmental Awareness Campaign",
    subtitle: "Promoting sustainability through green community initiatives",
    images: [environment1, environment2, environment3, environment4],
    accent: "green",
  },

  "food-distribution": {
    title: "Community Food Distribution",
    subtitle: "Providing essential food support to families in need",
    images: [food1, food2, food3, food4],
    accent: "red",
  },

  csr: {
    title: "CSR Partnership Activities",
    subtitle: "Collaborating with organizations to create social impact",
    images: [csr1, csr2, csr3, csr4],
    accent: "blue",
  },

  "skill-development": {
    title: "Youth Skill Development Workshop",
    subtitle:
      "Empowering youth with career guidance and employability skills",
    images: [skill1, skill2, skill3, skill4],
    accent: "green",
  },
};

export default function CategoryGallery() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const currentGallery = galleryData[category];

  if (!currentGallery) {
    return (
      <section className="category-gallery-page">
        <div className="cg-container">
          <div className="cg-not-found">
            <h1>Gallery Not Found</h1>
            <p>The category you're looking for doesn't exist.</p>

            <button
              className="cg-back-btn"
              onClick={() => navigate("/gallery")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M15 9H3M3 9L7 5M3 9L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
      {/* Back Button */}
      <div className="cg-container">
        <button
          className="cg-back-btn"
          onClick={() => navigate("/gallery")}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M15 9H3M3 9L7 5M3 9L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Back to Gallery</span>
        </button>
      </div>

      {/* Header */}
      <div className="cg-container">
        <motion.div
          className="cg-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.33, 0.1, 0.25, 1],
          }}
        >
          <div className="cg-header-tag">
            <span className="cg-header-tag-line"></span>
            <span className="cg-header-tag-text">
              Uvagai Foundation Gallery
            </span>
          </div>

          <h1 className="cg-header-title">
            {currentGallery.title}
          </h1>

          <p className="cg-header-subtitle">
            {currentGallery.subtitle}
          </p>

          <div
            className={`cg-header-accent cg-accent-${currentGallery.accent}`}
          ></div>
        </motion.div>
      </div>

      {/* Images */}
      <div className="cg-container">
        <div className="cg-grid">
          {currentGallery.images.map((image, index) => (
            <motion.div
              key={index}
              className={`cg-card cg-card-${currentGallery.accent}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <div className="cg-card-image">
                <img
                  src={image}
                  alt={`${currentGallery.title} ${index + 1}`}
                />

                <div className="cg-card-overlay"></div>

                <div className="cg-card-number">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="cg-container">
        <motion.div
          className="cg-bottom-nav"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            className="cg-back-btn"
            onClick={() => navigate("/gallery")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M15 9H3M3 9L7 5M3 9L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Back to Gallery</span>
          </button>

          <button
            className={`cg-donate-btn cg-donate-${currentGallery.accent}`}
            onClick={() => navigate("/donate")}
          >
            <span>Support This Cause</span>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}