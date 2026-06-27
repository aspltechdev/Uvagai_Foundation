import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./gallerypage.css";

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
  const navigate = useNavigate();

  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const infoRef = useRef(null);
  const galleryRef = useRef(null);

  const slides = [
    {
      image: educationImg,
      title: "Education Support Program",
      slug: "education",
      subtitle: "Supporting students through learning resources and mentorship.",
      statNumber: 1200,
      statLabel: "Students Supported",
      stat: "1200+ Students Supported",
      description:
        "We provide learning materials, educational assistance, and mentorship support to help children continue their studies with confidence.",
    },
    {
      image: healthcareImg,
      title: "Community Healthcare Camp",
      slug: "healthcare",
      subtitle: "Bringing medical support and wellness awareness to communities.",
      statNumber: 75,
      statLabel: "Health Camps",
      stat: "75+ Health Camps",
      description:
        "Our healthcare initiatives focus on basic checkups, wellness awareness, and accessible medical support for underserved communities.",
    },
    {
      image: volunteerImg,
      title: "Volunteer Engagement Drive",
      slug: "volunteer",
      subtitle: "Volunteers coming together for meaningful social change.",
      statNumber: 300,
      statLabel: "Volunteers",
      stat: "300+ Volunteers",
      description:
        "We bring passionate individuals together to support community projects, outreach programs, and social impact activities.",
    },
    {
      image: childImg,
      title: "Child Welfare Activities",
      slug: "child-welfare",
      subtitle: "Supporting children through care, education, and development.",
      statNumber: 900,
      statLabel: "Children Reached",
      stat: "900+ Children Reached",
      description:
        "Our child welfare programs focus on safety, emotional care, education, nutrition, and opportunities for better development.",
    },
    {
      image: elderlyImg,
      title: "Elderly Care Initiative",
      slug: "elderly-care",
      subtitle: "Offering care, support, and dignity to senior citizens.",
      statNumber: 500,
      statLabel: "Seniors Supported",
      stat: "500+ Seniors Supported",
      description:
        "We support elderly individuals with care, companionship, basic assistance, and community-based dignity programs.",
    },
    {
      image: environmentImg,
      title: "Environmental Awareness Campaign",
      slug: "environment",
      subtitle: "Promoting sustainability through green community initiatives.",
      statNumber: 50,
      statLabel: "Green Drives",
      stat: "50+ Green Drives",
      description:
        "We encourage cleaner surroundings, tree planting, waste awareness, and responsible environmental practices.",
    },
    {
      image: foodImg,
      title: "Community Food Distribution",
      slug: "food-distribution",
      subtitle: "Providing essential food support to families in need.",
      statNumber: 10000,
      statLabel: "Meals Served",
      stat: "10,000+ Meals Served",
      description:
        "Our food distribution drives help vulnerable families receive essential meals and grocery support during difficult times.",
    },
    {
      image: csrImg,
      title: "CSR Partnership Activities",
      slug: "csr",
      subtitle: "Collaborating with organizations to create social impact.",
      statNumber: 25,
      statLabel: "CSR Collaborations",
      stat: "25+ CSR Collaborations",
      description:
        "We partner with organizations to build meaningful programs that create measurable and sustainable community impact.",
    },
    {
      image: skillImg,
      title: "Youth Skill Development Workshop",
      slug: "skill-development",
      subtitle: "Empowering youth with career guidance and employability skills.",
      statNumber: 800,
      statLabel: "Youth Trained",
      stat: "800+ Youth Trained",
      description:
        "Our skill workshops help young people gain confidence, career awareness, communication skills, and employability guidance.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

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

  useEffect(() => {
    const section = galleryRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);

          gsap.utils.toArray(".stat-counter").forEach((counter) => {
            const target = Number(counter.dataset.target);

            gsap.fromTo(
              counter,
              { innerText: 0 },
              {
                innerText: target,
                duration: 2.2,
                ease: "power3.out",
                snap: { innerText: 1 },
                onUpdate: function () {
                  counter.innerText =
                    Math.floor(counter.innerText).toLocaleString("en-IN") + "+";
                },
              }
            );
          });
        }
      },
      { threshold: 0.25 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasCounted]);

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

      <section className="photo-gallery-section" ref={galleryRef}>
        <div className="photo-gallery-title">
          <span>Gallery</span>
          <h2>Moments of Impact</h2>
        </div>

        <div className="photo-gallery-grid">
          {slides.map((slide, index) => (
            <div
              className={`photo-card photo-card-${index}`}
              key={index}
              onClick={() => navigate(`/gallery/${slide.slug}`)}
            >
              <img src={slide.image} alt={slide.title} />

              <div className="photo-card-overlay">
                <h3>{slide.title}</h3>

                <p className="photo-stat">
                  <span
                    className="stat-counter"
                    data-target={slide.statNumber}
                  >
                    0+
                  </span>
                  <span className="stat-label">{slide.statLabel}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}