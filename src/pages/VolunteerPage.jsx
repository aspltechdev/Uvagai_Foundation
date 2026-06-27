import { useEffect, useRef, useState } from "react";
import "./VolunteerPage.css";
import childwelfareImg from "../assets/childwelfare.jpg";
import communityImg from "../assets/community.jpg";
import digitalImg from "../assets/digital.jpg";
import educationImg from "../assets/education.jpg";
import eldeImg from "../assets/elde.jpg";
import environmentImg from "../assets/environment.jpg";
import eventImg from "../assets/event.jpg";
import eventsImg from "../assets/events.jpg";
import healthcareImg from "../assets/healthcare.jpg";
import applyImg from "../assets/apply.jpg";
import getmatchImg from "../assets/getmatch.jpg";
import orientationImg from "../assets/orientation.jpg";

const opportunities = [
  {
    category: "blue",
    label: "Education",
    title: "Education & Mentorship Volunteer",
    description:
      "Support students through mentoring, tutoring, career guidance, digital literacy programs, and educational workshops that help shape brighter futures.",
    points: ["Mentoring & tutoring", "Career guidance", "Digital literacy workshops"],
    image: educationImg,
  },
  {
    category: "green",
    label: "Healthcare",
    title: "Healthcare Volunteer",
    description:
      "Assist during medical camps, health awareness drives, blood donation initiatives, wellness programs, and community healthcare outreach activities.",
    points: ["Medical camp support", "Blood donation drives", "Wellness outreach"],
    image: healthcareImg,
  },
  {
    category: "blue",
    label: "Child Welfare",
    title: "Child Welfare Volunteer",
    description:
      "Participate in programs focused on child education, nutrition, personal development, creative learning activities, and well-being support.",
    points: ["Child education support", "Nutrition programs", "Creative learning"],
    image: childwelfareImg,
  },
  {
    category: "red",
    label: "Elderly Care",
    title: "Elderly Care Volunteer",
    description:
      "Spend time with senior citizens, support welfare programs, assist during events, and contribute to initiatives that promote dignity and care.",
    points: ["Companionship visits", "Welfare program support", "Event assistance"],
    image: eldeImg,
  },
  {
    category: "green",
    label: "Environment",
    title: "Environmental Volunteer",
    description:
      "Join tree plantation drives, sustainability campaigns, clean-up activities, and environmental awareness initiatives.",
    points: ["Tree plantation drives", "Clean-up campaigns", "Sustainability awareness"],
    image: environmentImg,
  },
  {
    category: "red",
    label: "Community Outreach",
    title: "Community Outreach Volunteer",
    description:
      "Work directly with communities, support awareness programs, social campaigns, and community development projects.",
    points: ["Awareness programs", "Social campaigns", "Community development"],
    image: communityImg,
  },
  {
    category: "blue",
    label: "Events & Campaigns",
    title: "Event & Campaign Volunteer",
    description:
      "Help organize social events, fundraising campaigns, workshops, awareness drives, and foundation activities.",
    points: ["Event organization", "Fundraising support", "Workshop coordination"],
    image: eventImg,
  },
  {
    category: "green",
    label: "Digital & Creative",
    title: "Digital & Creative Volunteer",
    description:
      "Contribute your skills in graphic design, content creation, photography, videography, social media, and digital marketing.",
    points: ["Graphic design", "Content & photography", "Social media support"],
    image: digitalImg,
  },
];

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description: "Fill out our short volunteer interest form — it takes less than five minutes.",
    image: applyImg,
  },
  {
    number: "02",
    title: "Get Matched",
    description: "Our team connects you with a program that fits your skills, interests, and availability.",
    image: getmatchImg,
  },
  {
    number: "03",
    title: "Attend Orientation",
    description: "Join a quick orientation session to understand our work, safety guidelines, and expectations.",
    image: orientationImg,
  },
  {
    number: "04",
    title: "Start Volunteering",
    description: "Begin contributing to real projects alongside our team and fellow volunteers.",
    image: environmentImg,
  },
];

const heroMarqueeImages = [
  educationImg,
  healthcareImg,
  childwelfareImg,
  eldeImg,
  environmentImg,
  communityImg,
  eventImg,
  eventsImg,
  digitalImg,
];

/** Triggers a class toggle every time the section enters/leaves the viewport */
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/** Cycles through 0..totalSteps-1 every `interval` ms, only while active */
function useAutoStep(totalSteps, interval, isActive) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSteps);
    }, interval);
    return () => clearInterval(timer);
  }, [isActive, totalSteps, interval]);

  return activeIndex;
}

/** Looping marquee row used under the hero */
function HeroMarqueeRow({ images, direction = "left", speed = 38 }) {
  const looped = [...images, ...images];
  return (
    <div className="vol-hero-marquee-row">
      <div
        className={`vol-hero-marquee-track vol-hero-marquee-${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {looped.map((src, index) => (
          <div className="vol-hero-marquee-cell" key={index}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

function VolunteerPage() {
  const [oppRef, oppVisible] = useScrollReveal();
  const [stepsRef, stepsVisible] = useScrollReveal();
  const activeStep = useAutoStep(steps.length, 4000, stepsVisible);

  return (
    <main className="vol-page">
      {/* Hero */}
      <section className="vol-hero vol-hero-photo">
        <div className="vol-hero-bg-gradient" aria-hidden="true" />
        <div className="vol-hero-bg-photo" aria-hidden="true" />
        <div className="vol-hero-overlay" aria-hidden="true" />
        <div className="vol-hero-glow vol-hero-glow-1" aria-hidden="true" />
        <div className="vol-hero-glow vol-hero-glow-2" aria-hidden="true" />
        <div className="vol-hero-glow vol-hero-glow-3" aria-hidden="true" />
        <div className="vol-hero-inner">
          <p className="vol-eyebrow vol-eyebrow-light">
            <span className="vol-eyebrow-line vol-eyebrow-line-light" />
            VOLUNTEER WITH UVAGAI FOUNDATION
          </p>
          <h1 className="vol-hero-title vol-hero-title-light">
            Together We Can Create <span className="vol-accent-bright">Positive Change</span>
          </h1>
          <p className="vol-hero-subtitle vol-hero-subtitle-light">
            Become part of a passionate community of changemakers dedicated to
            empowering lives, strengthening communities, and creating
            sustainable social impact through meaningful action.
          </p>
          <div className="vol-hero-cta-row">
            <button className="vol-hero-btn vol-hero-btn-primary" type="button">
              Become A Volunteer
            </button>
            
          </div>
        </div>
      </section>

      {/* Marquee strip — fills the blank gap below the hero */}
      <section className="vol-hero-marquee-strip" aria-hidden="true">
        <HeroMarqueeRow images={heroMarqueeImages} direction="left" speed={36} />
      </section>

      {/* Opportunities — full-bleed photo cards with overlay text */}
      <section className="vol-opportunities" ref={oppRef}>
        <div className="vol-blob vol-blob-red" aria-hidden="true" />
        <div className="vol-blob vol-blob-green" aria-hidden="true" />
        <div className="vol-blob vol-blob-blue" aria-hidden="true" />

        <div className={`vol-section-header ${oppVisible ? "vol-reveal-up is-visible" : "vol-reveal-up"}`}>
          <p className="vol-eyebrow">
            <span className="vol-eyebrow-line" />
            VOLUNTEER OPPORTUNITIES
          </p>
          <h2 className="vol-section-title">Find A Meaningful Way To Contribute</h2>
          <p className="vol-section-subtitle">
            Whether you're a student, professional, retiree, or passionate
            individual, there's a place for you in our mission.
          </p>
        </div>

        <div className="vol-cards-grid">
          {opportunities.map((item, index) => (
            <article
              className={`vol-card vol-card-${item.category} ${
                oppVisible ? "vol-card-reveal is-visible" : "vol-card-reveal"
              }`}
              style={{ transitionDelay: oppVisible ? `${index * 100}ms` : "0ms" }}
              key={item.title}
            >
              <div className="vol-card-inner vol-card-photo-inner">
                <img
                  className="vol-card-bg-image"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="vol-card-photo-overlay" aria-hidden="true" />
                <div className="vol-card-shine" aria-hidden="true" />

                <span className="vol-card-label-overlay">{item.label}</span>

                <div className="vol-card-body-overlay">
                  <div className="vol-card-title-row">
                    <h3 className="vol-card-title-overlay">{item.title}</h3>
                    <span className="vol-card-arrow" aria-hidden="true">
                      &#8594;
                    </span>
                  </div>

                  <div className="vol-card-hidden-content">
                    <p className="vol-card-text-overlay">{item.description}</p>
                    <ul className="vol-card-points-overlay">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works — one image card per step, auto-advancing every 4s */}
      <section className="vol-steps" ref={stepsRef}>
        <div className={`vol-section-header ${stepsVisible ? "vol-reveal-up is-visible" : "vol-reveal-up"}`}>
          <p className="vol-eyebrow">
            <span className="vol-eyebrow-line" />
            HOW IT WORKS
          </p>
          <h2 className="vol-section-title">Getting Started Is Simple</h2>
        </div>

        <div className="vol-timeline">
          <div className={`vol-timeline-track ${stepsVisible ? "is-drawn" : ""}`} aria-hidden="true" />

          {steps.map((step, index) => (
            <div
              className={`vol-timeline-step ${stepsVisible ? "vol-step-reveal is-visible" : "vol-step-reveal"} ${
                stepsVisible && index === activeStep ? "is-active-step" : ""
              }`}
              style={{ transitionDelay: stepsVisible ? `${index * 160}ms` : "0ms" }}
              key={step.number}
            >
              <div className={`vol-timeline-node ${stepsVisible && index === activeStep ? "is-pulsing" : ""}`}>
                <span className="vol-timeline-number">{step.number}</span>
              </div>

              {index < steps.length - 1 && (
                <span className="vol-timeline-arrow" aria-hidden="true">
                  &#8594;
                </span>
              )}

              <div className="vol-step-image-card">
                <div
                  className={`vol-step-image-wrap ${stepsVisible && index === activeStep ? "is-loaded" : ""}`}
                >
                  <img src={step.image} alt={step.title} loading="lazy" />
                  <div className="vol-step-image-overlay" aria-hidden="true" />
                  {stepsVisible && index === activeStep && (
                    <span className="vol-step-progress-bar" key={`progress-${activeStep}`}>
                      <span className="vol-step-progress-fill" />
                    </span>
                  )}
                </div>
              </div>

              <div className="vol-timeline-card">
                <h3 className="vol-step-title">{step.title}</h3>
                <p className="vol-step-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="vol-cta">
        <div className="vol-cta-inner">
          <h2 className="vol-cta-title">Ready To Make A Difference?</h2>
          <p className="vol-cta-text">
            Join hundreds of volunteers already working with us to build
            stronger, healthier communities.
          </p>
          <button className="vol-cta-button" type="button">
            Apply To Volunteer
          </button>
        </div>
      </section>
    </main>
  );
}

export default VolunteerPage;