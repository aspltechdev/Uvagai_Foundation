
import "./Blog.css";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: "/blog/blog1.jpg",
      category: "Education",
      title: "Empowering Students Through Education Support",
      date: "June 2026",
    },
    {
      id: 2,
      image: "/blog/blog2.jpg",
      category: "Healthcare",
      title: "Free Medical Camp Benefits Hundreds of Families",
      date: "May 2026",
    },
    {
      id: 3,
      image: "/blog/blog3.jpg",
      category: "Community Development",
      title: "Building Stronger Communities Together",
      date: "April 2026",
    },
    {
      id: 4,
      image: "/blog/blog4.jpg",
      category: "Volunteer",
      title: "Youth Volunteers Driving Positive Change",
      date: "March 2026",
    },
    {
      id: 5,
      image: "/blog/blog5.jpg",
      category: "Events",
      title: "Uvagai Foundation Participates in Social Impact Summit",
      date: "February 2026",
    },
    {
      id: 6,
      image: "/blog/blog6.jpg",
      category: "CSR",
      title: "Corporate Partnerships Creating Lasting Impact",
      date: "January 2026",
    },
  ];

  return (
    <div className="blog-page">

      <section className="blog-hero">
        <div className="container">
          <span className="section-tag">
            News & Updates
          </span>

          <h1>Blog & Stories</h1>

          <p>
            Explore our latest initiatives, impact stories,
            events, volunteer activities, and community
            transformation journeys.
          </p>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">

          <div className="blog-grid">
            {blogs.map((blog) => (
              <div className="blog-card" key={blog.id}>

                <div className="blog-image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>

                <div className="blog-content">

                  <span className="blog-category">
                    {blog.category}
                  </span>

                  <h3>{blog.title}</h3>

                  <p>{blog.date}</p>

                  <a href="#" className="read-more">
                    Read More →
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

