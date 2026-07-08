import { useEffect, useRef } from "react";
import "./Socialwall.css";

// Real Instagram post/reel URLs
const posts = [
  {
    id: 1,
    link: "https://www.instagram.com/reel/DZpTfJeSjtI/",
  },
  {
    id: 2,
    link: "https://www.instagram.com/p/DZpSJnIEnPv/",
  },
  {
    id: 3,
    link: "https://www.instagram.com/reel/DYziybcyZdW/",
  },
  {
    id: 4,
    link: "https://www.instagram.com/reel/DX1sRRESqId/",
  },
  {
    id: 5,
    link: "https://www.instagram.com/reel/DVgD89NklT7/",
  },
];

// Loads Instagram's embed.js script once, and re-processes embeds
// whenever it's called (needed because Instagram's script only scans
// the DOM once on load, but React mounts content after that).
function loadInstagramEmbedScript(callback) {
  const existingScript = document.getElementById("instagram-embed-script");

  if (existingScript) {
    // Script already loaded — just re-process any new blockquotes
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
    if (callback) callback();
    return;
  }

  const script = document.createElement("script");
  script.id = "instagram-embed-script";
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
    if (callback) callback();
  };
  document.body.appendChild(script);
}

function InstagramEmbed({ link }) {
  const containerRef = useRef(null);

  useEffect(() => {
    loadInstagramEmbedScript();
  }, [link]);

  return (
    <div className="igw-embed-wrap" ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={link}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          margin: "0",
          maxWidth: "360px",
          minWidth: "300px",
          width: "100%",
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
}

function SocialWall() {
  // Duplicate posts for seamless infinite marquee
  const marqueeItems = [...posts, ...posts];

  // Re-process embeds after every render in case Instagram's script
  // loaded before all blockquotes were in the DOM
  useEffect(() => {
    loadInstagramEmbedScript();
  }, []);

  return (
    <section className="igw-section" id="social-wall">
      <div className="igw-inner">
        <div className="igw-header">
          <span className="igw-eyebrow">
            <span className="igw-dot" />
            From the Field
          </span>
          <h2 className="igw-title">
            Moments, As They <em>Happen</em>
          </h2>
          <p className="igw-subtitle">
            Real classrooms, real volunteers, real progress — straight from our
            Instagram, where every post is a small part of the bigger mission.
          </p>
          <a
            href="https://instagram.com/uvagai_in"
            target="_blank"
            rel="noopener noreferrer"
            className="igw-handle"
          >
            @uvagai_in
          </a>
        </div>

        <div className="igw-marquee-outer">
          <div className="igw-marquee-track">
            {marqueeItems.map((post, i) => (
              <div className="igw-marquee-item" key={`${post.id}-${i}`}>
                <InstagramEmbed link={post.link} />
              </div>
            ))}
          </div>
        </div>

        <div className="igw-footer">
          <a
            href="https://instagram.com/uvagai_in"
            target="_blank"
            rel="noopener noreferrer"
            className="igw-cta"
          >
            Follow our journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialWall;