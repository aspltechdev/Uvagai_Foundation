
import "./Programs.css";

export default function Programs() {
  const programs = [
    {
      icon: "📚",
      title: "Education Support",
      description:
        "Providing scholarships, school supplies, digital learning resources, and educational opportunities.",
    },
    {
      icon: "🏥",
      title: "Healthcare Initiatives",
      description:
        "Medical camps, health awareness programs, preventive healthcare, and community wellness support.",
    },
    {
      icon: "👶",
      title: "Child Welfare",
      description:
        "Supporting children's nutrition, education, development, and overall well-being.",
    },
    {
      icon: "👵",
      title: "Elderly Care",
      description:
        "Programs focused on healthcare, emotional support, and improving quality of life for senior citizens.",
    },
    {
      icon: "🤝",
      title: "Community Development",
      description:
        "Empowering communities through sustainable development, awareness, and livelihood programs.",
    },
    {
      icon: "❤️",
      title: "Humanitarian Aid",
      description:
        "Emergency response, disaster relief, and humanitarian assistance for vulnerable communities.",
    },
  ];

  return (
    <section className="programs-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Our Programs
          </span>

          <h2>
            Creating Impact Through Meaningful Initiatives
          </h2>

          <p>
            Our programs focus on improving lives, empowering communities,
            and building a sustainable future for all.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <div className="program-icon">
                {program.icon}
              </div>

              <h3>{program.title}</h3>

              <p>{program.description}</p>

              <a href="/programs" className="program-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

