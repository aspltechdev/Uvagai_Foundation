import { useState } from "react";
import "./SocialWall.css";

const posts = [
  { id: 1, image: null, caption: "Forty children. One classroom under the open sky. Every lesson here starts with a smile.", likes: 482 },
  { id: 2, image: null, caption: "Spoken English batch — week 4 confidence check.", likes: 211 },
  { id: 3, image: null, caption: "Hand-painted dreams on the community center wall.", likes: 356 },
  { id: 4, image: null, caption: "Volunteer orientation day — 18 new faces joined the mission.", likes: 298 },
  { id: 5, image: null, caption: "Certificates handed out, heads held high.", likes: 174 },
  { id: 6, image: null, caption: "Field visit to our Vision & Mission partner village.", likes: 263 },
];

const IGBadge = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="white" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="4.4" stroke="white" strokeWidth="1.8"/>
    <circle cx="17.4" cy="6.6" r="1.1" fill="white"/>
  </svg>
);

const IGSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#8e8e8e" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="4.4" stroke="#8e8e8e" strokeWidth="1.8"/>
    <circle cx="17.4" cy="6.6" r="1.1" fill="#8e8e8e"/>
  </svg>
);

function EmbedCard({ post }) {
  return (
    <div className="igw-card">
      {/* Placeholder image box — replace post.image with real URL when ready */}
      <div className="igw-img-wrap">
        {post.image ? (
          <img src={post.image} alt={post.caption} className="igw-img" loading="lazy" />
        ) : (
          <div className="igw-img-placeholder">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#ccc" strokeWidth="1.5"/>
              <circle cx="8.5" cy="8.5" r="1.5" stroke="#ccc" strokeWidth="1.5"/>
              <path d="M21 15l-5-5L5 21" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="igw-placeholder-label">Image coming soon</span>
          </div>
        )}
        <span className="igw-badge"><IGBadge /></span>
      </div>

      <a
        href="https://instagram.com/uvagaifoundation"
        target="_blank"
        rel="noopener noreferrer"
        className="igw-viewmore"
      >
        View more on Instagram
      </a>

      <div className="igw-actions">
        <div className="igw-actions-left">
          <button className="igw-btn" aria-label="Like">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="igw-btn" aria-label="Comment">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="igw-btn" aria-label="Share">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="#262626" strokeWidth="1.5" strokeLinecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </button>
        </div>
        <button className="igw-btn" aria-label="Save">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <div className="igw-body">
        <p className="igw-likes">{post.likes.toLocaleString()} likes</p>
        <div className="igw-comment-row">
          <input
            type="text"
            className="igw-comment-input"
            placeholder="Add a comment..."
            readOnly
            onClick={() => window.open("https://instagram.com/uvagaifoundation", "_blank")}
          />
          <span className="igw-ig-logo"><IGSmall /></span>
        </div>
      </div>
    </div>
  );
}

function SocialWall() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = posts.length - visible;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, max));

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
            href="https://instagram.com/uvagaifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="igw-handle"
          >
            <IGSmall />
            @uvagaifoundation
          </a>
        </div>

        <div className="igw-carousel-wrap">
          <button className="igw-arrow igw-arrow--left" onClick={prev} disabled={index === 0} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="igw-carousel-viewport">
            <div
              className="igw-carousel-track"
              style={{ transform: `translateX(calc(-${index} * (100% / ${visible}) - ${index} * 20px))` }}
            >
              {posts.map((post) => (
                <div className="igw-carousel-item" key={post.id}>
                  <EmbedCard post={post} />
                </div>
              ))}
            </div>
          </div>

          <button className="igw-arrow igw-arrow--right" onClick={next} disabled={index === max} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="igw-footer">
          <a
            href="https://instagram.com/uvagaifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="igw-cta"
          >
            Follow our journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default SocialWall;