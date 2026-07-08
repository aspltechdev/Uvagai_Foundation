import "./SocialWall.css";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
    caption: "Forty children. One classroom under the open sky. Every lesson here starts with a smile.",
    likes: 482,
    comments: 36,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900",
    caption: "Spoken English batch — week 4 confidence check.",
    likes: 211,
    comments: 14,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=900",
    caption: "Hand-painted dreams on the community center wall.",
    likes: 356,
    comments: 22,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1100",
    caption: "Volunteer orientation day — 18 new faces joined the mission.",
    likes: 298,
    comments: 19,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a2?q=80&w=900",
    caption: "Certificates handed out, heads held high.",
    likes: 174,
    comments: 9,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=900",
    caption: "Field visit to our Vision & Mission partner village.",
    likes: 263,
    comments: 17,
  },
];

const IGLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 20.5s-7.5-4.6-9.8-9.1C.6 8.2 2.1 4.8 5.4 4c2.2-.5 4.2.5 5.6 2.3a.96.96 0 0 0 1 0C13.4 4.5 15.4 3.5 17.6 4c3.3.8 4.8 4.2 3.2 7.4-2.3 4.5-9.8 9.1-9.8 9.1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const CommentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BookmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function EmbedCard({ post }) {
  return (
    <div className="ig-embed-card">
      {/* Card header — mimics IG embed top bar */}
      <div className="ig-embed-header">
        <a
          href="https://instagram.com/uvagaifoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-embed-profile"
        >
          <div className="ig-embed-avatar">
            <IGLogo />
          </div>
          <div className="ig-embed-meta">
            <span className="ig-embed-username">uvagaifoundation</span>
            <span className="ig-embed-viewmore">View more on Instagram</span>
          </div>
        </a>
        <a
          href="https://instagram.com/uvagaifoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-embed-ig-icon"
          aria-label="View on Instagram"
        >
          <IGLogo />
        </a>
      </div>

      {/* Post image with carousel arrow (decorative) */}
      <div className="ig-embed-image-wrap">
        <img
          src={post.image}
          alt={post.caption}
          className="ig-embed-image"
          loading="lazy"
        />
        <button className="ig-carousel-btn ig-carousel-btn--right" aria-label="Next" tabIndex={-1}>
          <ChevronRight />
        </button>
      </div>

      {/* Action row */}
      <div className="ig-embed-actions">
        <div className="ig-embed-actions-left">
          <button className="ig-action-btn" aria-label="Like">
            <HeartIcon />
          </button>
          <button className="ig-action-btn" aria-label="Comment">
            <CommentIcon />
          </button>
          <button className="ig-action-btn" aria-label="Share">
            <ShareIcon />
          </button>
        </div>
        <button className="ig-action-btn" aria-label="Save">
          <BookmarkIcon />
        </button>
      </div>

      {/* Likes + comment */}
      <div className="ig-embed-body">
        <p className="ig-embed-likes">{post.likes.toLocaleString()} likes</p>
        <p className="ig-embed-caption">
          <span className="ig-embed-caption-user">uvagaifoundation</span>{" "}
          {post.caption}
        </p>
        <div className="ig-embed-comment-box">
          <input
            type="text"
            placeholder="Add a comment..."
            className="ig-embed-comment-input"
            readOnly
            onClick={(e) => {
              e.currentTarget.blur();
              window.open("https://instagram.com/uvagaifoundation", "_blank");
            }}
          />
          <span className="ig-embed-ig-bottom">
            <IGLogo />
          </span>
        </div>
      </div>
    </div>
  );
}

function SocialWall() {
  return (
    <section className="social-wall" id="social-wall">
      <div className="social-wall-inner">

        <div className="social-wall-header">
          <span className="social-wall-eyebrow">
            <span className="live-dot" />
            From the Field
          </span>
          <h2 className="social-wall-title">
            Moments, As They <em>Happen</em>
          </h2>
          <p className="social-wall-subtitle">
            Real classrooms, real volunteers, real progress — straight from our
            Instagram, where every post is a small part of the bigger mission.
          </p>
          <a
            href="https://instagram.com/uvagaifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="social-wall-handle"
          >
            <IGLogo />
            @uvagaifoundation
          </a>
        </div>

        <div className="ig-embed-grid">
          {posts.map((post) => (
            <EmbedCard key={post.id} post={post} />
          ))}
        </div>

        <div className="social-wall-footer">
          <a
            href="https://instagram.com/uvagaifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="social-wall-cta"
          >
            Follow our journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default SocialWall;