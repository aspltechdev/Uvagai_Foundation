import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AwardsRecognition.css";

// Update these import paths to match your actual assets folder structure
import whyCardSupport from "./assets/whyCardSupport.jpg";
import environmentImg2 from "./assets/environmentImg2.jpg";
import together from "./assets/together.jpg";
import large1_2 from "./assets/large1_2.jpg";
import image5_2 from "./assets/image5_2.jpg";

const awards = [
  {
    image: whyCardSupport,
    category: "Recognition",
    accent: "red",
    title: "State-Level Service Award",
    description: "Honored by the state government for outstanding community impact initiatives.",
  },
  {
    image: environmentImg2,
    category: "Environment",
    accent: "red",
    title: "Green Impact Award",
    description: "Recognized for sustainable environmental programs across rural communities.",
  },
  {
    image: together,
    category: "Community",
    accent: "red",
    title: "Community Champion Award",
    description: "Celebrated for building lasting partnerships within local communities.",
  },
  {
    image: large1_2,
    category: "Excellence",
    accent: "red",
    title: "Excellence in Service",
    description: "Awarded for outstanding dedication to education and welfare programs.",
  },
  {
    image: image5_2,
    category: "Leadership",
    accent: "red",
    title: "Leadership in Nonprofit Work",
    description: "Acknowledged for visionary leadership and long-term impact in the nonprofit sector.",
  },
];

export default function AwardsRecognition() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section className="aw-section" ref={sectionRef}>
      <div className="aw-container">
        {/* Header */}
        <motion.div
          className="aw-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="aw-header-tag">
            <span className="aw-header-tag-line" />
            <span className="aw-header-tag-text">Awards & Recognition</span>
          </div>
          <h2 className="aw-header-title">
            Honored For Our <span className="aw-text-red">Impact</span>
          </h2>
          <p className="aw-header-desc">
            Milestones that reflect the trust of our partners, communities,
            and the government in the work we do every day.
          </p>
        </motion.div>

        {/* Award Cards Grid */}
        <div className="aw-grid">
          {awards.map((award, index) => (
            <motion.div
              className="aw-card"
              key={`${award.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="aw-card-image-wrap">
                <img src={award.image} alt={award.title} className="aw-card-image" />
                <span className={`aw-card-badge aw-badge-${award.accent}`}>
                  {award.category}
                </span>
              </div>
              <div className="aw-card-body">
                <h3 className="aw-card-title">{award.title}</h3>
                <p className="aw-card-desc">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}