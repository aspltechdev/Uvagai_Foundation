
import "./LeadershipTeam.css";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Mr. Founder Name",
      role: "Founder & Managing Trustee",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    },
    {
      name: "Ms. Leader Name",
      role: "Trustee",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    },
    {
      name: "Mr. Advisor Name",
      role: "Board Advisor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    },
    {
      name: "Ms. Program Director",
      role: "Program Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
    },
  ];

  return (
    <div className="leadership-page">

      {/* Hero Section */}
      <section className="leadership-hero">
        <div className="container">

          <span className="section-tag">
            Leadership Team
          </span>

          <h1>
            Meet The People Behind The Mission
          </h1>

          <p>
            Our leadership team is committed to creating sustainable
            social impact through compassion, innovation, and community
            development initiatives.
          </p>

        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">

          <div className="team-grid">

            {leaders.map((leader, index) => (
              <div className="team-card" key={index}>

                <img
                  src={leader.image}
                  alt={leader.name}
                />

                <div className="team-content">
                  <h3>{leader.name}</h3>

                  <span>{leader.role}</span>

                  <p>
                    Dedicated to driving meaningful social change
                    and empowering communities through impactful
                    initiatives.
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Leadership Message */}
      <section className="leadership-message">
        <div className="container">

          <div className="message-card">

            <span className="section-tag">
              Leadership Vision
            </span>

            <h2>
              Building Stronger Communities Together
            </h2>

            <p>
              At Uvagai Foundation, we believe meaningful change begins
              with collective action. Our leadership team works closely
              with volunteers, partners, donors, and communities to
              create lasting impact through education, healthcare,
              welfare programs, and sustainable development initiatives.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}

