import { useEffect, useRef } from "react";
import "./Socialwall.css";

// Real Instagram post/reel URLs
const instagramPosts = [
  {
    id: "ig-1",
    type: "instagram",
    link: "https://www.instagram.com/reel/DZpTfJeSjtI/",
  },
  {
    id: "ig-2",
    type: "instagram",
    link: "https://www.instagram.com/p/DZpSJnIEnPv/",
  },
  {
    id: "ig-3",
    type: "instagram",
    link: "https://www.instagram.com/reel/DYziybcyZdW/",
  },
  {
    id: "ig-4",
    type: "instagram",
    link: "https://www.instagram.com/reel/DX1sRRESqId/",
  },
  {
    id: "ig-5",
    type: "instagram",
    link: "https://www.instagram.com/reel/DVgD89NklT7/",
  },
];

// Real LinkedIn post URLs (company page: uvagai-foundation)
// LinkedIn's official embeddable format uses the post's activity ID:
// https://www.linkedin.com/embed/feed/update/urn:li:activity:<ID>
const linkedinPosts = [
  {
    id: "li-1",
    type: "linkedin",
    activityId: "7476170472624181249",
    link: "https://www.linkedin.com/posts/uvagai-foundation_internationaldayagainstdrugabuse-drugfreesociety-activity-7476170472624181249-w_mx",
  },
  {
    id: "li-2",
    type: "linkedin",
    activityId: "7474397453971202048",
    link: "https://www.linkedin.com/posts/uvagai-foundation_internationalyogaday2026-yogaday-yogaforoneearthonehealth-activity-7474397453971202048-gDBv",
  },
  {
    id: "li-3",
    type: "linkedin",
    activityId: "7472203675268993024",
    link: "https://www.linkedin.com/posts/uvagai-foundation_uvagaifoundation-educationforall-communityimpact-activity-7472203675268993024-Cl-m",
  },
  {
    id: "li-4",
    type: "linkedin",
    activityId: "7470736485638545408",
    link: "https://www.linkedin.com/posts/uvagai-foundation_uvagaifoundation-educationforall-womenempowerment-activity-7470736485638545408-VTd0",
  },
  {
    id: "li-5",
    type: "linkedin",
    activityId: "7471851061188653056",
    link: "https://www.linkedin.com/posts/uvagai-foundation_worldblooddonorday-givebloodgivehope-donatebloodsavelives-activity-7471851061188653056-Attd",
  },
];

// Interleave Instagram and LinkedIn posts so the marquee alternates
// between the two platforms instead of grouping them.
function interleave(a, b) {
  const result = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }
  return result;
}

const posts = interleave(instagramPosts, linkedinPosts);

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

// LinkedIn uses a simple iframe embed (no script needed). The official
// embeddable URL format is built from the post's activity ID.
function LinkedInEmbed({ activityId, link }) {
  const src = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`;

  return (
    <div className="igw-embed-wrap igw-li-embed-wrap">
      <iframe
        src={src}
        title={`LinkedIn post ${activityId}`}
        className="igw-li-iframe"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="igw-li-fallback-link"
      >
        View this post on LinkedIn
      </a>
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
            Instagram and LinkedIn, where every post is a small part of the
            bigger mission.
          </p>
          <div className="igw-handles">
            <a
              href="https://www.instagram.com/uvagaifoundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="igw-handle"
            >
              @uvagaifoundation
            </a>
            <a
              href="https://www.linkedin.com/company/uvagai-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="igw-handle igw-handle-linkedin"
            >
              UVAGAI Foundation on LinkedIn
            </a>
          </div>
        </div>

        <div className="igw-marquee-outer">
          <div className="igw-marquee-track">
            {marqueeItems.map((post, i) => (
              <div className="igw-marquee-item" key={`${post.id}-${i}`}>
                {post.type === "linkedin" ? (
                  <LinkedInEmbed activityId={post.activityId} link={post.link} />
                ) : (
                  <InstagramEmbed link={post.link} />
                )}
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