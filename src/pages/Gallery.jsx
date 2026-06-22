
import "./Gallery.css";

export default function Gallery() {
  const galleryItems = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    "https://images.unsplash.com/photo-1469571486292-b53601020f20",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <span className="section-tag">
            Our Gallery
          </span>

          <h1>Moments That Inspire Change</h1>

          <p>
            Explore highlights from our programs, community initiatives,
            healthcare camps, educational activities, volunteer drives,
            and social impact events.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((image, index) => (
              <div className="gallery-card" key={index}>
                <img
                  src={`${image}?w=800&auto=format&fit=crop`}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

