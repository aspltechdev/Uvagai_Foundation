import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./ProgramsPage.css";

// Hero slideshow images
import purpose from "../assets/ndimagee.png";
import empower from "../assets/voli.jpeg";
import volunteer from "../assets/volent.jpeg";

// Event gallery images (sourced from the Gallery page asset set)
import educationImg from "../assets/educati.png";
import benefitImg1 from "../assets/edu.png";
import educationnew12 from "../assets/e.png";
import large1 from "../assets/education1.png";

import benefitImg2 from "../assets/educa.png";
import benefitImg3 from "../assets/educatio.png";
import image5 from "../assets/educat.png";
import educationImg2 from "../assets/ED.JPG";

import healthcareImg from "../assets/healthCapture.PNG";
import healthcare1 from "../assets/healthcare1.jpg";
import healthcarenew1 from "../assets/healthcarenew1.png";
import whyCardHealth from "../assets/healthcamp.png";

import healthcareImg2 from "../assets/hcamp.jpeg";
import healthcareImg3 from "../assets/healthab.png";
import camp from "../assets/camp.jpeg";
import healthcare from "../assets/healthfinal.png";

import childwelfareImg from "../assets/Capturechild.PNG";
import childwelfareImg1 from "../assets/chr2.JPG";
import childwelfarenew1 from "../assets/child.png";
import chil1 from "../assets/chil.png";

import childwelfarenew4 from "../assets/chr.JPG";
import child from "../assets/childwelf.jpeg";
import childWelfareImg from "../assets/childincards.png";
import child2 from "../assets/childwell.jpg";

import elderlycarenew1 from "../assets/elderlycarenew1.jpeg";
import eldeImg from "../assets/elderlycapture.png";
import elderly from "../assets/oldage.jpeg";
import elderlyImg2 from "../assets/senior.png";

import women from "../assets/womenempfinal.png";
import img1 from "../assets/communityy.png";
import communitynew1 from "../assets/communitynew1.jpeg";
import community from "../assets/community.png";

import communityimg3 from "../assets/com.JPG";
import communityimg4 from "../assets/comm.JPG";
import whyCardSupport from "../assets/ecr.JPG";
import together from "../assets/humani.jpeg";

import environmentImg2 from "../assets/csrc.JPG";
import humanitarian from "../assets/humani.jpeg";
import large1_2 from "../assets/vco.jpg";
import image5_2 from "../assets/vco11.JPG";

import digitalImg from "../assets/creativecapture.PNG";
import empower2 from "../assets/voli.jpeg";
import whyCardVolunteers from "../assets/abtech.png";
import skillImg1 from "../assets/v.jpg";

import educationnew12_2 from "../assets/educationnew12.jpeg";
import engage from "../assets/voli.jpeg";
import volunteer2 from "../assets/voli.jpeg";
import skillImg2 from "../assets/abtech.png";

import environment from "../assets/env.jpeg";
import environmentImg3 from "../assets/abf.png";
import sustain from "../assets/cov1.jpg";
import enviroinmentnew1_2 from "../assets/env.JPG";

const heroSlides = [
  {
    image: purpose,
    title: "Creating Sustainable Impact Through Purpose-Driven Programs",
    subtitle:
      "Uvagai Foundation works across education, healthcare, child welfare, elderly care, environmental sustainability, and community development to create meaningful social impact.",
    tag: "Programs & Initiatives",
    accent: "red",
  },
  {
    image: empower,
    title: "Empowering Communities Through Action",
    subtitle:
      "Every initiative is designed to improve lives, create opportunities, strengthen communities, and foster sustainable development for future generations.",
    tag: "What We Do",
    accent: "green",
  },
  {
    image: volunteer,
    title: "Together We Create Positive Change",
    subtitle:
      "Through volunteers, community leaders, CSR partners, and supporters, we continue to create meaningful opportunities for those who need it most.",
    tag: "Our Mission",
    accent: "blue",
  },
];

// Data-driven events — each card shows ONE cover image + summary.
// Clicking the image opens a modal with the full description + photo gallery.
const events = [
  {
    title: "Education Support Program at Assisi",
    description:
      "Learning materials, mentorship, and classroom support for students at Assisi, helping them stay in school and build toward their goals.",
    accent: "red",
    // tag: "Education Initiative",
    location: "Youth Empowerment",
    images: [educationImg, benefitImg1, educationnew12, large1],
  },
  {
    title: "School Essentials Distribution",
    description:
      "Notebooks, uniforms, and daily school supplies distributed to children who would otherwise go without them.",
    accent: "red",
    // tag: "Education Initiative",
    location: "Student Support",
    images: [benefitImg2, benefitImg3, image5, educationImg2],
  },
  {
    title: "Medical Camp for Differently-Abled Individuals",
    description:
      "Free check-ups, screenings, and consultations organized for differently-abled individuals in underserved areas.",
    accent: "green",
    // tag: "Healthcare Initiative",
    location: "Community Outreach Program",
    images: [healthcareImg, healthcare1, healthcarenew1, whyCardHealth],
  },
  {
    title: "Blood Donation Camp",
    description:
      "A community blood donation drive run in partnership with local hospitals and volunteers to support patients in need.",
    accent: "green",
    // tag: "Healthcare Initiative",
    location: "Community Health Drive",
    images: [healthcareImg2, healthcareImg3, camp, healthcare],
  },
  {
    title: "Children's Day Celebration",
    description:
      "A day of games, gifts, and celebration organized for children at partner homes and shelters.",
    accent: "blue",
    // tag: "Child Welfare Program",
    location: "Community Impact",
    images: [childwelfareImg, childwelfareImg1, childwelfarenew1, chil1],
  },
  {
    title: "Christmas Celebration at Shelter Home",
    description:
      "Festive celebrations, gifts, and a shared meal organized for children at shelter homes during the Christmas season.",
    accent: "blue",
    // tag: "Child Welfare Program",
    location: "Festive Outreach",
    images: [childwelfarenew4, child, childWelfareImg, child2],
  },
  {
    title: "Vishranthi Home — Old Age Support",
    description:
      "Regular visits, provisions, and companionship for aged destitute women residing at Vishranthi Home.",
    accent: "red",
    // tag: "Senior Citizen Welfare",
    location: "Elderly Care Support",
    images: [elderlycarenew1, eldeImg, elderly, elderlyImg2],
  },
  {
    title: "International Women's Day Celebration",
    description:
      "A celebration recognizing the strength and contribution of women in our communities, with talks, recognitions, and activities.",
    accent: "green",
    // tag: "Women Empowerment",
    location: "Community Celebration",
    images: [women, img1, communitynew1, community],
  },
  {
    title: "Diwali Celebration & Sweets Distribution",
    description:
      "Diwali provisions and sweets distributed to partner homes and community members to help everyone celebrate the festival.",
    accent: "blue",
    // tag: "Community Support",
    location: "Festival Outreach",
    images: [communityimg3, communityimg4, whyCardSupport, together],
  },
  {
    title: "CSR Partnership — Ethiraj College for Women",
    description:
      "A collaborative CSR initiative with Ethiraj College for Women, bringing student volunteers into hands-on community service.",
    accent: "blue",
    // tag: "CSR Partnership",
    location: "Volunteer Program",
    images: [environmentImg2, humanitarian, large1_2, image5_2],
  },
  {
    title: "Anti-Drug Awareness Program (Rotaract)",
    description:
      "An awareness campaign run with Rotaract clubs to educate young people on the dangers of substance abuse.",
    accent: "red",
    // tag: "Awareness Campaign",
    location: "Youth Outreach",
    images: [digitalImg, empower2, whyCardVolunteers, skillImg1],
  },
  {
    title: "Youth Awakening Day",
    description:
      "A day of workshops and mentorship sessions designed to build confidence, skills, and direction among young participants.",
    accent: "red",
    tag: "Skill Training",
    location: "Youth Development",
    images: [educationnew12_2, engage, volunteer2, skillImg2],
  },
  {
    title: "Tree Plantation & Environment Awareness",
    description:
      "Tree plantation drives and awareness sessions promoting environmental responsibility across local communities.",
    accent: "green",
    tag: "Environmental Initiative",
    location: "Sustainability Drive",
    images: [environment, environmentImg3, sustain, enviroinmentnew1_2],
  },
];

export default function ProgramsPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Which event card is open in the modal (index into `events`, or null)
  const [activeEvent, setActiveEvent] = useState(null);
  // Fullscreen lightbox state for zooming into one photo inside the modal
  const [lightbox, setLightbox] = useState(null); // { images, index }

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const currentSlide = heroSlides[current];

  const openEventModal = (index) => setActiveEvent(index);
  const closeEventModal = useCallback(() => setActiveEvent(null), []);

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const showPrev = useCallback(
    () =>
      setLightbox((lb) =>
        lb
          ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }
          : lb
      ),
    []
  );
  const showNext = useCallback(
    () =>
      setLightbox((lb) =>
        lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb
      ),
    []
  );

  // Keyboard controls: lightbox takes priority over the modal
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      } else if (activeEvent !== null) {
        if (e.key === "Escape") closeEventModal();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, activeEvent, closeLightbox, showPrev, showNext, closeEventModal]);

  const activeEventData = activeEvent !== null ? events[activeEvent] : null;

  return (
    <div className="programs-page" ref={sectionRef}>
      {/* Hero Section with Background Slideshow */}
      <section
        className="programs-hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="programs-slides-container">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={`programs-slide-bg ${index === current ? "active" : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0, scale: index === current ? 1 : 1.08 }}
              transition={{ duration: 1.2, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.title} />
            </motion.div>
          ))}
        </div>

        <div className="programs-overlay-dark" />
        <div className="programs-overlay-gradient" />
        <div className="programs-overlay-vignette" />

        <div className="programs-hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="programs-hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 0.1, 0.25, 1] }}
            >
              <div className="programs-hero-tag">
                <span className="programs-hero-tag-line" />
                <span className="programs-hero-tag-text">{currentSlide.tag}</span>
              </div>

              <h1 className="programs-hero-headline">{currentSlide.title}</h1>
              <p className="programs-hero-subtitle">{currentSlide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="programs-slide-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`programs-slide-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            >
              <motion.span
                className="programs-slide-dot-fill"
                initial={{ width: "0%" }}
                animate={{ width: index === current && !isHovered ? "100%" : "0%" }}
                transition={{ duration: index === current ? 5 : 0.3, ease: "linear" }}
              />
            </button>
          ))}
        </div>

        <div className="programs-slide-counter">
          <span className="programs-counter-current">{(current + 1).toString().padStart(2, "0")}</span>
          <span className="programs-counter-sep">/</span>
          <span className="programs-counter-total">{heroSlides.length.toString().padStart(2, "0")}</span>
        </div>
      </section>

      {/* Intro Section */}
      <section className="programs-intro-section">
        <div className="programs-container">
          <motion.div
            className="programs-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="programs-intro-tag">
              <span className="programs-intro-tag-line" />
              <span className="programs-intro-tag-text">What We Do</span>
            </div>
            <h2 className="programs-intro-headline">Our Programs, Event by Event</h2>
            <p className="programs-intro-description">
              A look at the initiatives we've run on the ground — click any photo
              to see the full story and gallery for that event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="events-section">
        <div className="programs-container">
          <div className="events-grid">
            {events.map((event, eIndex) => (
              <EventCard
                key={event.title}
                event={event}
                onOpen={() => openEventModal(eIndex)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta-section">
        <div className="programs-cta-bg" />
        <div className="programs-cta-glow" />

        <div className="programs-container">
          <motion.div
            className="programs-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <h2 className="programs-cta-headline">Join Us In Creating Positive Change</h2>
            <p className="programs-cta-description">
              Through volunteers, community leaders, CSR partners, and supporters,
              we continue to create meaningful opportunities and lasting impact for those who need it most.
            </p>
            <div className="programs-cta-buttons">
              <a href="/contact" className="programs-cta-primary">
                <span>Support Our Programs</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/volunteer" className="programs-cta-secondary">
                Become a Volunteer
                <span className="programs-cta-secondary-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Popup */}
      <AnimatePresence>
        {activeEventData && (
          <motion.div
            className="event-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeEventModal}
          >
            <motion.div
              className="event-modal"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.33, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="event-modal-close" onClick={closeEventModal} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="event-modal-body">
                <div className={`event-modal-badge eventcard-${activeEventData.accent}`}>
                  <span className="event-modal-badge-dot" />
                  {activeEventData.tag}
                </div>

                <h2 className="event-modal-title">{activeEventData.title}</h2>

                <div className="event-modal-location">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>{activeEventData.location}</span>
                </div>

                <p className="event-modal-description">{activeEventData.description}</p>

                <div className="event-modal-gallery">
                  {activeEventData.images.map((src, i) => (
                    <button
                      type="button"
                      className="event-modal-gallery-item"
                      key={i}
                      onClick={() => openLightbox(activeEventData.images, i)}
                    >
                      <img src={src} alt={`${activeEventData.title} photo ${i + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox (opened from inside the modal) */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button
                  className="lightbox-nav lightbox-prev"
                  onClick={(e) => { e.stopPropagation(); showPrev(); }}
                  aria-label="Previous image"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M14 4L6 11L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className="lightbox-nav lightbox-next"
                  onClick={(e) => { e.stopPropagation(); showNext(); }}
                  aria-label="Next image"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M8 4L16 11L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}

            <motion.div
              key={lightbox.index}
              className="lightbox-image-wrap"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.33, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.images[lightbox.index]} alt="" className="lightbox-image" />
              <div className="lightbox-counter">
                {lightbox.index + 1} / {lightbox.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Single-image event card — clicking the photo (or the link) opens the modal.
function EventCard({ event, onOpen }) {
  return (
    <div className={`event-card eventcard-${event.accent}`}>
      <button type="button" className="event-card-image" onClick={onOpen}>
        <img src={event.images[0]} alt={event.title} loading="lazy" />
        <span className="event-card-badge">
          <span className="event-card-badge-dot" />
          {event.tag}
        </span>
      </button>

      <div className="event-card-content">
        <div className="event-card-location">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{event.location}</span>
        </div>

        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-description">{event.description}</p>

        <div className="event-card-divider" />

        <button type="button" className="event-card-link" onClick={onOpen}>
          Explore Initiative
        </button>
      </div>
    </div>
  );
}