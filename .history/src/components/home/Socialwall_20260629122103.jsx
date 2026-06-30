import "./SocialWall.css";

/**
 * Static placeholder data — swap `image` with real imported assets,
 * and wire `caption`, `likes`, `comments` from the Instagram Graph API
 * (or a service like Behold / SnapWidget) once you're ready for live embeds.
 */
const posts = [
  {
    id: 1,
    size: "size-lg",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
    caption:
      "Forty children. One classroom under the open sky. Every lesson here starts with a smile.",
    likes: 482,
    comments: 36,
  },
  {
    id: 2,
    size: "size-sm",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900",
    caption: "Spoken English batch — week 4 confidence check.",
    likes: 211,
    comments: 14,
  },
  {
    id: 3,
    size: "size-tall",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=900",
    caption: "Hand-painted dreams on the community center wall.",
    likes: 356,
    comments: 22,
  },
  {
    id: 4,
    size: "size-md",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1100",
    caption: "Volunteer orientation day — 18 new faces joined the mission.",
    likes: 298,
    comments: 19,
  },
  {
    id: 5,
    size: "size-sm",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a2?q=80&w=900",
    caption: "Certificates handed out, heads held high.",
    likes: 174,
    comments: 9,
  },
  {
    id: 6,
    size: "size-tall",
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=900",
    caption: "Field visit to our Vision & Mission partner village.",
    likes: 263,
    comments: 17,
  },
  {
    id: 7,
    size: "size-md",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1100",
    caption: "Skill kits packed and ready for distribution this weekend.",
    likes: 205,
    comments: 11,
  },
];

const InstagramGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.4" stroke="white" strokeWidth="1.8" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="white" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 20.5s-7.5-4.6-9.8-9.1C.6 8.2 2.1 4.8 5.4 4c2.2-.5 4.2.5 5.6 2.3a.96.96 0 0 0 1 0C13.4 4.5 15.4 3.5 17.6 4c3.3.8 4.8 4.2 3.2 7.4-2.3 4.5-9.8 9.1-9.8 9.1Z"
      fill="white"
    />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 3l-1.2 4.1c.8 1.3 1.2 2.8 1.2 4.4Z"
      stroke="white"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
            Real classrooms, real volunteers, real progress — straight from
            our Instagram, where every post is a small part of the bigger
            mission.
          </p>

          <a
            href="https://instagram.com/uvagaifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="social-wall-handle"
          >
            <InstagramGlyph />
            @uvagaifoundation
          </a>
        </div>

        <div className="social-wall-grid">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/uvagaifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card ${post.size}`}
            >
              <div
                className="social-card-img"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="social-card-overlay" />

              <span className="social-card-ig-badge">
                <InstagramGlyph />
              </span>

              <div className="social-card-content">
                <p className="social-card-caption">{post.caption}</p>
                <div className="social-card-meta">
                  <span className="stat">
                    <HeartIcon />
                    {post.likes}
                  </span>
                  <span className="stat">
                    <CommentIcon />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
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
            <ArrowIcon />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Socialwall;