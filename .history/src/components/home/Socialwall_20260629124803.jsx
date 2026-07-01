import "./SocialWall.css";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
    caption: "Forty children. One classroom under the open sky. Every lesson here starts with a smile.",
    likes: 482,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900",
    caption: "Spoken English batch — week 4 confidence check.",
    likes: 211,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=900",
    caption: "Hand-painted dreams on the community center wall.",
    likes: 356,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1100",
    caption: "Volunteer orientation day — 18 new faces joined the mission.",
    likes: 298,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a2?q=80&w=900",
    caption: "Certificates handed out, heads held high.",
    likes: 174,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=900",
    caption: "Field visit to our Vision & Mission partner village.",
    likes: 263,
  },
];

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CommentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="22" y1="2" x2="11" y2="13" stroke="#262626" strokeWidth="1.5" strokeLinecap="round"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const BookmarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IGLogoSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#262626" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="4.4" stroke="#262626" strokeWidth="1.8"/>
    <circle cx="17.4" cy="6.6" r="1.1" fill="#262626"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function EmbedCard({ post }) {
  return (
    <div className="ig-card">
      {/* Image fills the top — with carousel arrow */}
      <div className="ig-card-image-wrap">
        <img src={post.image} alt={post.caption} className="ig-card-image" loading="lazy" />
        <button className="ig-card-arrow" aria-label="Next slide">
          <ChevronRight />
        </button>
      </div>

      {/* "View more on Instagram" link */}
      <a
        href="https://instagram.com/uvagaifoundation"
        target="_blank"
        rel="noopener noreferrer"
        className="ig-card-viewmore"
      >
        View more on Instagram
      </a>

      {/* Action icons row */}
      <div className="ig-card-actions">
        <div className="ig-card-actions-left">
          <button className="ig-icon-btn" aria-label="Like"><HeartIcon /></button>
          <button className="ig-icon-btn" aria-label="Comment"><CommentIcon /></button>
          <button className="ig-icon-btn" aria-label="Share"><ShareIcon /></button>
        </div>
        <button className="ig-icon-btn" aria-label="Save"><BookmarkIcon /></button>
      </div>

      {/* Likes */}
      <div className="ig-card-body">
        <p className="ig-card-likes">{post.likes.toLocaleString()} likes</p>

        {/* Comment input row */}
        <div className="ig-card-comment-row">
          <input
            type="text"
            className="ig-card-comment-input"
            placeholder="Add a comment..."
            readOnly
            onClick={() => window.open("https://instagram.com/uvagaifoundation", "_blank")}
          />
          <span className="ig-card-ig-logo"><IGLogoSmall /></span>
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
            <IGLogoSmall />
            @uvagaifoundation
          </a>
        </div>

        <div className="ig-grid">
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
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default SocialWall;