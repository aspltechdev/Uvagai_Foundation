
import "./Events.css";

export default function Events() {
  const events = [
    {
      image: "/events/event1.jpg",
      title: "Community Health Camp",
      date: "15 July 2026",
      location: "Chennai, Tamil Nadu",
      description:
        "Free health check-ups, awareness sessions, and healthcare support for local communities.",
    },
    {
      image: "/events/event2.jpg",
      title: "Education Support Drive",
      date: "28 July 2026",
      location: "Kanchipuram",
      description:
        "Distribution of educational kits and mentoring sessions for students.",
    },
    {
      image: "/events/event3.jpg",
      title: "Volunteer Engagement Program",
      date: "10 August 2026",
      location: "Chennai",
      description:
        "Join our volunteer network and contribute to impactful social initiatives.",
    },
    {
      image: "/events/event4.jpg",
      title: "CSR Partnership Meet",
      date: "20 August 2026",
      location: "Chennai",
      description:
        "Connecting corporate partners to create sustainable social impact.",
    },
    {
      image: "/events/event5.jpg",
      title: "Women Empowerment Workshop",
      date: "05 September 2026",
      location: "Tamil Nadu",
      description:
        "Skill development and entrepreneurship training for women.",
    },
    {
      image: "/events/event6.jpg",
      title: "Environmental Awareness Campaign",
      date: "15 September 2026",
      location: "Chennai",
      description:
        "Tree plantation and environmental conservation awareness activities.",
    },
  ];

  return (
    <div className="events-page">

      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">

          <span className="section-tag">
            Events & Activities
          </span>

          <h1>Upcoming Events</h1>

          <p>
            Explore our upcoming programs, awareness campaigns,
            volunteer opportunities, workshops, and community initiatives.
          </p>

        </div>
      </section>

      {/* Events Grid */}
      <section className="events-section">
        <div className="container">

          <div className="events-grid">
            {events.map((event, index) => (
              <div className="event-card" key={index}>

                <div className="event-image">
                  <img
                    src={event.image}
                    alt={event.title}
                  />
                </div>

                <div className="event-content">

                  <span className="event-date">
                    {event.date}
                  </span>

                  <h3>{event.title}</h3>

                  <p className="event-location">
                    📍 {event.location}
                  </p>

                  <p>{event.description}</p>

                  <a href="#" className="event-btn">
                    View Details
                  </a>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

