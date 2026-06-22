
import "./Stories.css";

export default function Stories() {
  const stories = [
    {
      image: "/stories/story1.jpg",
      title: "Empowering Education",
      description:
        "Supporting students with educational resources and scholarships to help them achieve their dreams.",
    },
    {
      image: "/stories/story2.jpg",
      title: "Healthcare for All",
      description:
        "Conducting medical camps and providing healthcare access to underserved communities.",
    },
    {
      image: "/stories/story3.jpg",
      title: "Caring for the Elderly",
      description:
        "Enhancing the quality of life for senior citizens through care and wellness initiatives.",
    },
  ];

  return (
    <section className="stories-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Impact Stories
          </span>

          <h2>
            Stories of Hope, Change & Transformation
          </h2>

          <p>
            Every life touched is a step toward building stronger
            communities and a brighter future.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story, index) => (
            <div className="story-card" key={index}>
              <div className="story-image">
                <img
                  src={story.image}
                  alt={story.title}
                />
              </div>

              <div className="story-content">
                <h3>{story.title}</h3>

                <p>{story.description}</p>

                <a href="/impact-stories" className="story-link">
                  Read Story →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

