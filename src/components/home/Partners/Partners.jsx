
import "./Partners.css";

export default function Partners() {
  const partners = [
    {
      name: "CSR Partner",
      logo: "/partners/partner1.png",
    },
    {
      name: "Education Partner",
      logo: "/partners/partner2.png",
    },
    {
      name: "Healthcare Partner",
      logo: "/partners/partner3.png",
    },
    {
      name: "Community Partner",
      logo: "/partners/partner4.png",
    },
    {
      name: "NGO Partner",
      logo: "/partners/partner5.png",
    },
    {
      name: "Corporate Partner",
      logo: "/partners/partner6.png",
    },
  ];

  return (
    <section className="partners-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Our Partners
          </span>

          <h2>
            Collaborating For Greater Social Impact
          </h2>

          <p>
            Together with our partners, sponsors, institutions, and
            volunteers, we create sustainable change and meaningful
            community transformation.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img
                src={partner.logo}
                alt={partner.name}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
