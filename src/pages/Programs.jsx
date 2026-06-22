
import "./Programs.css";

export default function Programs() {
  const programs = [
    {
      icon: "📚",
      title: "Education Support",
      description:
        "Providing scholarships, learning resources, digital literacy, and skill development opportunities.",
    },
    {
      icon: "🏥",
      title: "Healthcare Initiatives",
      description:
        "Medical camps, health awareness programs, preventive healthcare, and wellness support.",
    },
    {
      icon: "👶",
      title: "Child Welfare",
      description:
        "Supporting children through nutrition, education, protection, and development initiatives.",
    },
    {
      icon: "👵",
      title: "Elderly Care",
      description:
        "Improving the quality of life of senior citizens through healthcare and social support programs.",
    },
    {
      icon: "🤝",
      title: "Community Development",
      description:
        "Empowering communities through sustainable development and livelihood enhancement programs.",
    },
    {
      icon: "❤️",
      title: "Humanitarian Aid",
      description:
        "Providing emergency relief, disaster response, and humanitarian assistance.",
    },
    {
      icon: "🌱",
      title: "Environmental Sustainability",
      description:
        "Promoting environmental awareness, tree plantation, and sustainable practices.",
    },
    {
      icon: "👩‍🎓",
      title: "Women Empowerment",
      description:
        "Skill development, entrepreneurship support, and empowerment initiatives for women.",
    },
  ];

  return (
    <div className="programs-page">

      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">

          <span className="section-tag">
            Programs & Initiatives
          </span>

          <h1>
            Creating Sustainable Impact Through Meaningful Programs
          </h1>

          <p>
            Our initiatives focus on education, healthcare,
            community welfare, environmental sustainability,
            and humanitarian support to build stronger communities.
          </p>

        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-section">
        <div className="container">

          <div className="programs-grid">

            {programs.map((program, index) => (
              <div className="program-card" key={index}>

                <div className="program-icon">
                  {program.icon}
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Impact Banner */}
      <section className="impact-banner">
        <div className="container">

          <h2>
            Together We Are Creating Positive Change
          </h2>

          <p>
            Through collaborative efforts, dedicated volunteers,
            and community participation, we continue to transform
            lives and create sustainable impact.
          </p>

          <a href="/volunteer" className="primary-btn">
            Join Our Mission
          </a>

        </div>
      </section>

    </div>
  );
}

