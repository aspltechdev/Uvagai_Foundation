
import "./Causes.css";

export default function Causes() {
  const causes = [
    {
      icon: "📚",
      title: "Education",
      description:
        "Providing access to quality education, scholarships, learning resources, and skill development opportunities.",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description:
        "Organizing medical camps, health awareness programs, and healthcare support for underserved communities.",
    },
    {
      icon: "👶",
      title: "Child Welfare",
      description:
        "Supporting children through nutrition programs, educational assistance, and overall development initiatives.",
    },
    {
      icon: "👵",
      title: "Elderly Care",
      description:
        "Enhancing the quality of life for senior citizens through care, support, and wellness programs.",
    },
    {
      icon: "🤝",
      title: "Community Development",
      description:
        "Empowering communities through sustainable livelihood programs, awareness initiatives, and social development.",
    },
    {
      icon: "❤️",
      title: "Humanitarian Aid",
      description:
        "Providing emergency relief, disaster response, and humanitarian assistance to vulnerable populations.",
    },
  ];

  return (
    <section className="causes-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Causes</span>

          <h2>Making a Difference Where It Matters Most</h2>

          <p>
            Our initiatives are designed to create sustainable impact and
            improve the lives of individuals, families, and communities.
          </p>
        </div>

        <div className="causes-grid">
          {causes.map((cause, index) => (
            <div className="cause-card" key={index}>
              <div className="cause-icon">{cause.icon}</div>

              <h3>{cause.title}</h3>

              <p>{cause.description}</p>

              <a href="/programs" className="cause-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

