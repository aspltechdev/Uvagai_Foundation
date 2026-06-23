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

  const slides = [
    {
      image: educationImg,
      title: "Education Support Program",
      subtitle: "Supporting students through learning resources and mentorship.",
    },
    {
      image: healthcareImg,
      title: "Community Healthcare Camp",
      subtitle: "Bringing medical support and wellness awareness to communities.",
    },
    {
      image: volunteerImg,
      title: "Volunteer Engagement Drive",
      subtitle: "Volunteers coming together for meaningful social change.",
    },
    {
      image: childImg,
      title: "Child Welfare Activities",
      subtitle: "Supporting children through care, education, and development.",
    },
    {
      image: elderlyImg,
      title: "Elderly Care Initiative",
      subtitle: "Offering care, support, and dignity to senior citizens.",
    },
    {
      image: environmentImg,
      title: "Environmental Awareness Campaign",
      subtitle: "Promoting sustainability through green community initiatives.",
    },
    {
      image: foodImg,
      title: "Community Food Distribution",
      subtitle: "Providing essential food support to families in need.",
    },
    {
      image: csrImg,
      title: "CSR Partnership Activities",
      subtitle: "Collaborating with organizations to create social impact.",
    },
    {
      image: skillImg,
      title: "Youth Skill Development Workshop",
      subtitle: "Empowering youth with career guidance and employability skills.",
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
      );
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
              </div>
            )}
          </div>
        ))}

        <div className="gallery-arrows">
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </div>
      </div>

      <div className="gallery-marquee">
        <div className="gallery-marquee-track">
          {[...slides, ...slides].map((item, index) => (
            <div
              className={`gallery-thumb ${
                slides[current].title === item.title ? "active" : ""
              }`}
              key={index}
              onClick={() => setCurrent(index % slides.length)}
            >
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}