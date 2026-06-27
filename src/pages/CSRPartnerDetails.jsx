import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CSRPartnerDetails.css";

const heroVideos = [
  {
    src: "/videos/education.mp4",
    title: "Empowering Minds Through Education",
    subtitle: "Every child deserves access to quality learning. We're building classrooms, digital labs, and scholarship programs that transform lives and create equal opportunities for all.",
    tag: "Education Initiative"
  },
  {
    src: "/videos/healthcare.mp4",
    title: "Healing Communities, One Life at a Time",
    subtitle: "From rural health camps to preventive care programs, we're ensuring that quality healthcare reaches every doorstep, bringing hope and wellness to underserved communities.",
    tag: "Healthcare Mission"
  },
  {
    src: "/videos/environment.mp4",
    title: "Protecting Our Planet for Future Generations",
    subtitle: "Through tree plantations, sustainability campaigns, and green initiatives, we're nurturing a healthier planet and inspiring communities to embrace environmental responsibility.",
    tag: "Environmental Action"
  }
];

export default function CSRPartnerDetails() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });
  const [currentVideo, setCurrentVideo] = useState(0);

  // Refs for scroll animations
  const benefitsRef = useRef(null);
  const partnersRef = useRef(null);
  const processRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const ctaRef = useRef(null);

  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const opportunitiesInView = useInView(opportunitiesRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      title: "Measurable Impact",
      description: "Structured programs with transparent reporting, documentation, and impact assessment.",
      number: "01"
    },
    {
      title: "Trusted Collaboration",
      description: "Work with a dedicated team committed to creating meaningful social change.",
      number: "02"
    },
    {
      title: "Sustainable Development",
      description: "Long-term initiatives focused on education, healthcare, welfare, and community growth.",
      number: "03"
    },
    {
      title: "Employee Volunteering",
      description: "Create opportunities for employees to actively participate in impactful social initiatives.",
      number: "04"
    },
    {
      title: "CSR Compliance Support",
      description: "Assistance in planning and executing CSR projects aligned with organizational objectives.",
      number: "05"
    },
    {
      title: "Community Recognition",
      description: "Strengthen your brand reputation through meaningful contributions to society.",
      number: "06"
    }
  ];

  const partners = [
    {
      name: "Only Interns",
      type: "Strategic MoU Partner",
      description: "Signed an MoU to provide internships, skill development, mentorship, learn-and-earn opportunities, and career readiness programs."
    },
    {
      name: "Trinetra Educational Summit 2026",
      type: "Supporting Partner",
      description: "Supporting partner focused on education, career guidance and student development."
    },
    {
      name: "OneYes Startup Fest & Awards 2026",
      type: "NGO Partner",
      description: "Official NGO partner for startup and innovation initiatives."
    },
    {
      name: "BRAIIL Academy",
      type: "Program Collaboration",
      description: "Collaborator in mental wellness, emotional resilience and holistic development programs."
    },
    {
      name: "Tamil Nadu Skill Development Corporation",
      type: "Government Engagement",
      description: "Engagement focused on education, youth empowerment and skill development."
    },
    {
      name: "Naan Mudhalvan",
      type: "Government Program Collaboration",
      description: "Educational and employability initiatives for students."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Understand your CSR objectives, priorities, and social impact goals."
    },
    {
      step: "02",
      title: "Program Design",
      description: "Create customized initiatives aligned with your organization's CSR vision."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute projects efficiently through community engagement and local partnerships."
    },
    {
      step: "04",
      title: "Impact Reporting",
      description: "Share progress reports, outcomes, and measurable social impact insights."
    }
  ];

  const partnershipOpportunities = [
    {
      title: "Education Projects",
      description: "School support, digital learning, scholarships and youth development.",
      image: "/src/assets/images/education.png",
      alt: "Children in classroom learning"
    },
    {
      title: "Health Programs",
      description: "Medical camps, wellness initiatives and healthcare awareness.",
      image: "/src/assets/images/healthcare.png",
      alt: "Medical camp serving community"
    },
    {
      title: "Sustainability Projects",
      description: "Environmental awareness, tree plantation and green initiatives.",
      image: "/src/assets/images/sustainability.png",
      alt: "Tree plantation drive"
    },
    {
      title: "Employee Engagement",
      description: "Volunteer programs that strengthen community participation.",
      image: "/src/assets/images/volunteer.png",
      alt: "Volunteers helping community"
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <div className="csr-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="csr-hero">
        <div className="csr-hero-video-wrapper">
          <video
            key={currentVideo}
            autoPlay
            muted
            loop
            playsInline
            className="csr-hero-video"
          >
            <source src={heroVideos[currentVideo].src} type="video/mp4" />
          </video>
          <div className="csr-hero-overlay" />
        </div>

        <div className="csr-container">
          <motion.div
            className="csr-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="csr-hero-tag">
              <span className="csr-hero-tag-line" />
              <span className="csr-hero-tag-text">{heroVideos[currentVideo].tag}</span>
            </div>

            <h1 className="csr-hero-headline">
              {heroVideos[currentVideo].title}
            </h1>

            <p className="csr-hero-subtitle">
              {heroVideos[currentVideo].subtitle}
            </p>

            <div className="csr-hero-indicators">
              {heroVideos.map((_, index) => (
                <button
                  key={index}
                  className={`csr-hero-indicator ${index === currentVideo ? 'active' : ''}`}
                  onClick={() => setCurrentVideo(index)}
                  aria-label={`Switch to ${heroVideos[index].tag}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="csr-why-section" ref={benefitsRef}>
        <div className="csr-container">
          <motion.div
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Why Choose Uvagai Foundation</span>
            </div>
            <h2 className="csr-section-headline">Building Purpose-Driven Partnerships</h2>
            <p className="csr-section-subtitle">
              We help organizations achieve their CSR goals through transparent implementation, 
              community engagement, measurable outcomes, and sustainable impact.
            </p>
          </motion.div>

          <motion.div
            className="csr-benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                className="csr-benefit-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="benefit-card-stripe" />
                <div className="benefit-card-number">{benefit.number}</div>
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-description">{benefit.description}</p>
                <div className="benefit-card-shimmer" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="csr-partners-section" ref={partnersRef}>
        <div className="csr-container">
          <motion.div
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Trusted Collaborations</span>
            </div>
            <h2 className="csr-section-headline">Our Partners</h2>
            <p className="csr-section-subtitle">
              Collaborating with institutions, corporates, government bodies, and innovation 
              leaders to create meaningful and sustainable social impact.
            </p>
          </motion.div>

          <motion.div 
            className="partners-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="partner-rectangle"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="partner-rectangle-accent" />
                <div className="partner-rectangle-content">
                  <span className="partner-rectangle-type">{partner.type}</span>
                  <h3 className="partner-rectangle-name">{partner.name}</h3>
                  <p className="partner-rectangle-description">{partner.description}</p>
                  <div className="partner-rectangle-arrow">→</div>
                </div>
                <div className="partner-rectangle-shimmer" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="csr-process-section" ref={processRef}>
        <div className="csr-container">
          <motion.div
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Partnership Journey</span>
            </div>
            <h2 className="csr-section-headline">How We Work Together</h2>
            <p className="csr-section-subtitle">
              Our collaborative approach ensures transparency, efficiency, and lasting impact at every step
            </p>
          </motion.div>

          <div className="csr-process-timeline">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="csr-timeline-step"
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="csr-timeline-number-circle">{step.step}</div>
                <div className="csr-timeline-content">
                  <h3 className="csr-timeline-title">{step.title}</h3>
                  <p className="csr-timeline-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="csr-opportunities-section" ref={opportunitiesRef}>
        <div className="csr-container">
          <motion.div
            className="csr-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={opportunitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="csr-section-tag">
              <span className="csr-section-tag-line" />
              <span className="csr-section-tag-text">Get Involved</span>
            </div>
            <h2 className="csr-section-headline">Partnership Opportunities</h2>
            <p className="csr-section-subtitle">
              Choose from our diverse range of impact areas and make a difference
            </p>
          </motion.div>

          <motion.div
            className="csr-opportunities-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={opportunitiesInView ? "visible" : "hidden"}
          >
            {partnershipOpportunities.map((opportunity, index) => (
              <motion.div
                className="csr-opportunity-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
                style={{
                  backgroundImage: `url(${opportunity.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="opportunity-card-accent" />
                <div className="opportunity-card-number">0{index + 1}</div>
                <h3 className="opportunity-card-title">{opportunity.title}</h3>
                <p className="opportunity-card-description">{opportunity.description}</p>
                <div className="opportunity-card-arrow">→</div>
                <div className="opportunity-card-shimmer" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="csr-cta-section" ref={ctaRef}>
        <div className="csr-container">
          <motion.div
            className="csr-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h2 className="csr-cta-headline">Let's Build Stronger Communities Together</h2>
            <p className="csr-cta-description">
              Join hands with Uvagai Foundation to create sustainable social impact through 
              education, healthcare, welfare, community development, and environmental responsibility.
            </p>
            <motion.div 
              className="csr-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="/contact" className="csr-cta-primary">
                <span>Become a CSR Partner</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/volunteer" className="csr-cta-secondary">
                Explore Opportunities
                <span className="csr-cta-secondary-arrow">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}