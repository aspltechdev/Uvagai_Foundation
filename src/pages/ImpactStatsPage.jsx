import { useState, useEffect, useRef } from "react";
import "./ImpactStatsPage.css";

const STATS = [
  { number: "2019", suffix: "", label: "Foundation Established", color: "white" },
  { number: "06", suffix: "+", label: "Core Social Impact Areas", color: "green" },
  { number: "10", suffix: "K+", label: "Lives Impacted", color: "red" },
];

const CARDS = [
  { title: "Education", sub: "Child & Youth Empowerment", desc: "Building future leaders through quality learning, skill development, and scholarships for underserved youth.", accent: "red" },
  { title: "Healthcare", sub: "Community Wellness", desc: "Providing accessible medical support, preventive care, and health awareness to vulnerable populations.", accent: "green" },
  { title: "Elder Care", sub: "Dignity & Support Programs", desc: "Honoring our seniors through companion care, healthcare access, and community support networks.", accent: "navy" },
  { title: "Child Welfare", sub: "Protection & Nurturing", desc: "Safeguarding children's rights, nutrition, and emotional wellbeing through shelter and care programs.", accent: "green" },
  { title: "Environment", sub: "Sustainability Initiatives", desc: "Driving environmental responsibility through afforestation, clean water, and eco-community projects.", accent: "navy" },
  { title: "CSR", sub: "Partnership Opportunities", desc: "Collaborative impact through corporate partnerships that create measurable change in communities.", accent: "red" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (ts) => {
      if (!startTime) startTime = ts;

      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return value;
}

function AnimatedStat({ number, suffix, label, color, animate }) {
  const counted = useCountUp(parseInt(number, 10), 1800, animate);

  return (
    <div className="stat">
      <span className={`stat-number stat-number--${color}`}>
        {counted}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function UvagaiFoundation() {

  const [playing, setPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoRef = useRef(null);
  const statsRef = useRef(null);

  const videos = [
    "/videos/village.mp4",
    "/videos/children.mp4",
    "/videos/volunteers.mp4",
    "/videos/food.mp4",
    "/videos/celebration.mp4",
  ];

  // Counter animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto change videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) =>
        prev === videos.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleVideo = () => {
    const v = videoRef.current;

    if (!v) return;

    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="page">

      <section className="above-video">
        <div className="above-left">
          <div className="eyebrow">
            <span className="eyebrow-bar" />
            Our Focus Areas
          </div>

          <h1 className="headline">
            Creating Lasting Social
            <br />
            Impact Through
            <br />
            <em>Compassion & Action.</em>
          </h1>
        </div>

        <div className="above-right">
          <p className="right-desc">
            Uvagai Foundation works towards building stronger communities
            through education, healthcare, child welfare, elderly care,
            environmental responsibility, humanitarian support, and
            sustainable development initiatives.
          </p>
        </div>
      </section>

      <section className="video-section" id="impact">

        {!videoLoaded && (
          <div className="video-fallback"></div>
        )}

        <video
          ref={videoRef}
          key={currentVideo}
          className="bg-video"
          autoPlay
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <button className="play-btn" onClick={toggleVideo}>
          {playing ? "PAUSE VIDEO" : "PLAY VIDEO"}
        </button>

        <div className="stats-overlay" ref={statsRef}>
          {STATS.map((s) => (
            <AnimatedStat
              key={s.label}
              {...s}
              animate={statsVisible}
            />
          ))}
        </div>

      </section>

      <section className="focus-section" id="focus">
        <div className="section-eyebrow">Our Programs</div>

        <p className="focus-intro">
          A comprehensive approach to building thriving, self-sustaining
          communities across India.
        </p>

        <div className="cards-grid">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`card card--${card.accent}`}
            >
              <h3 className="card-title">{card.title}</h3>
              <p className="card-sub">{card.sub}</p>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}