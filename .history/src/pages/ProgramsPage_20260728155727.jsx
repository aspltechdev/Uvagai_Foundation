import { useState } from "react";

// Replace with your real event data — each event owns its own images array.
const EVENTS = [
  {
    id: "annual-gala",
    theme: "eventblock-red",
    title: "Annual Charity Gala",
    description:
      "An evening of stories, performances, and giving that brings our community together.",
    images: [
      "/images/events/gala-1.jpg",
      "/images/events/gala-2.jpg",
      "/images/events/gala-3.jpg",
      "/images/events/gala-4.jpg",
    ],
  },
  {
    id: "school-drive",
    theme: "eventblock-green",
    title: "Back-to-School Supply Drive",
    description:
      "Distributing books, bags, and uniforms to children starting the new academic year.",
    images: [
      "/images/events/school-1.jpg",
      "/images/events/school-2.jpg",
      "/images/events/school-3.jpg",
    ],
  },
  {
    id: "health-camp",
    theme: "eventblock-blue",
    title: "Community Health Camp",
    description:
      "Free checkups, screenings, and medicine distribution held in partnership with local clinics.",
    images: [
      "/images/events/health-1.jpg",
      "/images/events/health-2.jpg",
      "/images/events/health-3.jpg",
      "/images/events/health-4.jpg",
      "/images/events/health-5.jpg",
    ],
  },
];

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export default function ProgramsEvents() {
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { eventId, index }

  const toggleEvent = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const openLightbox = (eventId, index) => setLightbox({ eventId, index });
  const closeLightbox = () => setLightbox(null);

  const activeEvent = lightbox
    ? EVENTS.find((e) => e.id === lightbox.eventId)
    : null;

  const showPrev = () => {
    if (!activeEvent) return;
    setLightbox((cur) => ({
      ...cur,
      index: (cur.index - 1 + activeEvent.images.length) % activeEvent.images.length,
    }));
  };
  const showNext = () => {
    if (!activeEvent) return;
    setLightbox((cur) => ({
      ...cur,
      index: (cur.index + 1) % activeEvent.images.length,
    }));
  };

  return (
    <div className="events-section">
      <div className="programs-container">
        <div className="event-block-list">
          {EVENTS.map((event, i) => {
            const isOpen = openId === event.id;
            return (
              <div
                key={event.id}
                className={`event-block ${event.theme} ${isOpen ? "is-open" : ""}`}
              >
                <div
                  className="event-block-header"
                  onClick={() => toggleEvent(event.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleEvent(event.id);
                    }
                  }}
                >
                  <div className="event-block-index">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="event-block-heading">
                    <div className="event-block-accent" />
                    <div className="event-block-title">{event.title}</div>
                    <div className="event-block-description">
                      {event.description}
                    </div>
                  </div>
                  <button className="event-block-toggle" aria-hidden="true">
                    <ChevronIcon />
                  </button>
                </div>

                {/* Collapsible wrapper — grid-rows animation needs this inner div */}
                <div className="event-gallery-wrap">
                  <div>
                    <div className="event-gallery">
                      {event.images.map((src, index) => (
                        <button
                          key={src}
                          className="event-gallery-item"
                          onClick={() => openLightbox(event.id, index)}
                          aria-label={`Open image ${index + 1} of ${event.title}`}
                        >
                          <img src={src} alt={`${event.title} photo ${index + 1}`} />
                          <span className="gallery-zoom-glyph">🔍</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {lightbox && activeEvent && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-image-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="lightbox-image"
              src={activeEvent.images[lightbox.index]}
              alt={`${activeEvent.title} photo ${lightbox.index + 1}`}
            />
            <div className="lightbox-counter">
              {lightbox.index + 1} / {activeEvent.images.length}
            </div>
          </div>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            ✕
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={showPrev} aria-label="Previous">
            ‹
          </button>
          <button className="lightbox-nav lightbox-next" onClick={showNext} aria-label="Next">
            ›
          </button>
        </div>
      )}
    </div>
  );
}