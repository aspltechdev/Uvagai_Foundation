import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import educationImg from "../assets/education.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.jpg";
import childImg from "../assets/child.jpg";
import elderlyImg from "../assets/elderly.jpg";
import environmentImg from "../assets/environment.jpg";
import foodImg from "../assets/food.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/skill.jpg";

import "./CategoryGallery.css";

const galleryData = {
  education: {
    title: "Education Support Program",
    images: [educationImg, educationImg, educationImg, educationImg],
  },
  healthcare: {
    title: "Community Healthcare Camp",
    images: [healthcareImg, healthcareImg, healthcareImg, healthcareImg],
  },
  volunteer: {
    title: "Volunteer Engagement Drive",
    images: [volunteerImg, volunteerImg, volunteerImg, volunteerImg],
  },
  "child-welfare": {
    title: "Child Welfare Activities",
    images: [childImg, childImg, childImg, childImg],
  },
  "elderly-care": {
    title: "Elderly Care Initiative",
    images: [elderlyImg, elderlyImg, elderlyImg, elderlyImg],
  },
  environment: {
    title: "Environmental Awareness Campaign",
    images: [environmentImg, environmentImg, environmentImg, environmentImg],
  },
  "food-distribution": {
    title: "Community Food Distribution",
    images: [foodImg, foodImg, foodImg, foodImg],
  },
  csr: {
    title: "CSR Partnership Activities",
    images: [csrImg, csrImg, csrImg, csrImg],
  },
  "skill-development": {
    title: "Youth Skill Development Workshop",
    images: [skillImg, skillImg, skillImg, skillImg],
  },
};

export default function CategoryGallery() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Scroll to the top whenever this page opens
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Change to "smooth" if you prefer a smooth scroll
    });
  }, []);

  const currentGallery = galleryData[category];

  if (!currentGallery) {
    return (
      <section className="category-gallery-page">
        <h1>Gallery Not Found</h1>

        <button
          className="back-gallery-btn"
          onClick={() => navigate("/gallery")}
        >
          ← Back to Gallery
        </button>
      </section>
    );
  }

  return (
    <section className="category-gallery-page">
      <button
        className="back-gallery-btn"
        onClick={() => navigate("/gallery")}
      >
        ← Back to Gallery
      </button>

      <div className="category-gallery-header">
        <span>Uvagai Foundation Gallery</span>
        <h1>{currentGallery.title}</h1>
        <p>Moments captured from this initiative.</p>
      </div>

      <div className="category-gallery-grid">
        {currentGallery.images.map((image, index) => (
          <div className="category-image-card" key={index}>
            <img
              src={image}
              alt={`${currentGallery.title} ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}