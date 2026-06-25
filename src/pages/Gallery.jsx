import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Gallery.css";

import educationImg from "../assets/education.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.jpg";
import childImg from "../assets/child.jpg";
import elderlyImg from "../assets/elderly.jpg";
import environmentImg from "../assets/environment.jpg";
import foodImg from "../assets/food.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/skill.jpg";

export default function Gallery() {
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const infoRef = useRef(null);

  const slides = [
    {
      image: educationImg,
      title: "Education Support Program",
      subtitle: "Supporting students through learning resources and mentorship.",
      stat: "1200+ Students Supported",
      description:
        "We provide learning materials, educational assistance, and mentorship support to help children continue their studies with confidence.",
    },
    {
      image: healthcareImg,
      title: "Community Healthcare Camp",
      subtitle: "Bringing medical support and wellness awareness to communities.",
      stat: "75+ Health Camps",
      description:
        "Our healthcare initiatives focus on basic checkups, wellness awareness, and accessible medical support for underserved communities.",
    },
    {
      image: volunteerImg,
      title: "Volunteer Engagement Drive",
      subtitle: "Volunteers coming together for meaningful social change.",
      stat: "300+ Volunteers",
      description:
        "We bring passionate individuals together to support community projects, outreach programs, and social impact activities.",
    },
    {
      image: childImg,
      title: "Child Welfare Activities",
      subtitle: "Supporting children through care, education, and development.",
      stat: "900+ Children Reached",
      description:
        "Our child welfare programs focus on safety, emotional care, education, nutrition, and opportunities for better development.",
    },
    {
      image: elderlyImg,
      title: "Elderly Care Initiative",
      subtitle: "Offering care, support, and dignity to senior citizens.",
      stat: "500+ Seniors Supported",
      description:
        "We support elderly individuals with care, companionship, basic assistance, and community-based dignity programs.",
    },
    {
      image: environmentImg,
      title: "Environmental Awareness Campaign",
      subtitle: "Promoting sustainability through green community initiatives.",
      stat: "50+ Green Drives",
      description:
        "We encourage cleaner surroundings, tree planting, waste awareness, and responsible environmental practices.",
    },
    {
      image: foodImg,
      title: "Community Food Distribution",
      subtitle: "Providing essential food support to families in need.",
      stat: "10,000+ Meals Served",
      description:
        "Our food distribution drives help vulnerable families receive essential meals and grocery support during difficult times.",
    },
    {
      image: csrImg,
      title: "CSR Partnership Activities",
      subtitle: "Collaborating with organizations to create social impact.",
      stat: "25+ CSR Collaborations",
      description:
        "We partner with organizations to build meaningful programs that create measurable and sustainable community impact.",
    },
    {
      image: skillImg,
      title: "Youth Skill Development Workshop",
      subtitle: "Empowering youth with career guidance and employability skills.",
      stat: "800+ Youth Trained",
      description:
        "Our skill workshops help young people gain confidence, career awareness, communication skills, and employability guidance.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    gsap.fromTo(
      ".gallery-slide.active img",
      { scale: 1.15 },
      { scale: 1, duration: 3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".gallery-feature-card",
      { x: 80, opacity: 0, scale: 0.92 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    const tl = gsap.timeline();

    tl.fromTo(
      tagRef.current,
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    )
      .fromTo(
        titleRef.current,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.25"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        infoRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );
  }, [current]);

  return (
    <section className="gallery-showcase">
      <div className="gallery-main">
        {slides.map((slide, index) => (
          <div
            className={`gallery-slide ${index === current ? "active" : ""}`}
            key={index}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="gallery-overlay"></div>

            {index === current && (
              <div className="gallery-content">
                <span ref={tagRef}>Uvagai Foundation Gallery</span>
                <h1 ref={titleRef}>{slide.title}</h1>
                <p ref={subtitleRef}>{slide.subtitle}</p>

                <div className="gallery-info-card" ref={infoRef}>
                  <h2>{slide.stat}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="gallery-feature-card">
          <img src={slides[current].image} alt={slides[current].title} />

          <div className="feature-card-glow"></div>

          <div className="feature-card-text">
            <span>Current Highlight</span>
            <h3>{slides[current].title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}