
import "./Donate.css";

export default function Donate() {
  const donationOptions = [
    {
      amount: "₹500",
      impact: "Provides educational materials for a child",
    },
    {
      amount: "₹1,000",
      impact: "Supports a healthcare awareness initiative",
    },
    {
      amount: "₹2,500",
      impact: "Helps provide nutrition support for children",
    },
    {
      amount: "₹5,000",
      impact: "Contributes to community development programs",
    },
  ];

  return (
    <div className="donate-page">

      {/* Hero Section */}
      <section className="donate-hero">
        <div className="container">

          <span className="section-tag">
            Support Our Mission
          </span>

          <h1>
            Every Contribution Creates Lasting Impact
          </h1>

          <p>
            Your generosity helps us improve lives through
            education, healthcare, child welfare, elderly care,
            humanitarian aid, and community development initiatives.
          </p>

        </div>
      </section>

      {/* Donation Options */}
      <section className="donation-options">
        <div className="container">

          <div className="section-heading">
            <h2>Choose Your Impact</h2>

            <p>
              Select a contribution amount and help us make
              a meaningful difference.
            </p>
          </div>

          <div className="donation-grid">
            {donationOptions.map((option, index) => (
              <div className="donation-card" key={index}>

                <h3>{option.amount}</h3>

                <p>{option.impact}</p>

                <button className="donate-btn">
                  Donate Now
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Custom Donation */}
      <section className="custom-donation">
        <div className="container">

          <div className="custom-card">

            <h2>Make a Custom Contribution</h2>

            <p>
              Choose an amount that reflects your commitment
              to creating positive social impact.
            </p>

            <form className="donation-form">

              <input
                type="number"
                placeholder="Enter Donation Amount"
              />

              <button type="submit">
                Proceed to Donate
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Impact Section */}
      <section className="donation-impact">
        <div className="container">

          <div className="section-heading">
            <h2>Your Donation Supports</h2>
          </div>

          <div className="impact-grid">

            <div className="impact-card">
              <span>📚</span>
              <h3>Education</h3>
              <p>
                Scholarships, learning resources, and skill development.
              </p>
            </div>

            <div className="impact-card">
              <span>🏥</span>
              <h3>Healthcare</h3>
              <p>
                Medical camps and health awareness programs.
              </p>
            </div>

            <div className="impact-card">
              <span>👶</span>
              <h3>Child Welfare</h3>
              <p>
                Nutrition, education, and development support.
              </p>
            </div>

            <div className="impact-card">
              <span>👵</span>
              <h3>Elderly Care</h3>
              <p>
                Wellness, healthcare, and social support initiatives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="donate-cta">
        <div className="container">

          <h2>
            Together, We Can Transform Lives
          </h2>

          <p>
            Every donation contributes to building stronger,
            healthier, and more empowered communities.
          </p>

          <a href="/contact" className="cta-btn">
            Contact Us
          </a>

        </div>
      </section>

    </div>
  );
}

