import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./Events.css";

export default function EventsHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);
  const marqueeX = useTransform(scrollYProgress, [0, 0.8], [0, -200]);

  const events = [
    {
      // Doctor/caregiver attending to a child - giving medical care - Elianna Gill on Unsplash
      image: "https://images.unsplash.com/photo-1698795635777-be9983d39605?w=800&q=80&auto=format&fit=crop",
      title: "Community Healthcare Camp",
      category: "Healthcare",
      location: "Rural Outreach",
      accent: "green",
      stat: "50K+",
    },
    {
      // Children with notebooks/books at a desk - Swastik Arora on Unsplash
      image: "https://images.unsplash.com/photo-1692269725827-699e04a11cdf?w=800&q=80&auto=format&fit=crop",
      title: "Education Support Program",
      category: "Education",
      location: "Youth Empowerment",
      accent: "red",
      stat: "5,284+",
    },
    {
      // Group in traditional Indian dress, community gathering - Adi Lica on Unsplash
      image: "https://images.unsplash.com/photo-1601689892697-b64daa00ff6d?w=800&q=80&auto=format&fit=crop",
      title: "Volunteer Engagement Drive",
      category: "Volunteer",
      location: "Community Service",
      accent: "blue",
      stat: "500+",
    },
    {
      // Gentle caring gesture toward a child's hand - Aditya Romansa on Unsplash
      image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=800&q=80&auto=format&fit=crop",
      title: "Child Welfare Activities",
      category: "Child Welfare",
      location: "Community Impact",
      accent: "red",
      stat: "10K+",
    },
    {
      // Elderly couple, caring companionship - Vitaly Gariev on Unsplash
      image: "https://images.unsplash.com/photo-1758686253677-d3af6c15186e?w=800&q=80&auto=format&fit=crop",
      title: "Elderly Care Program",
      category: "Senior Care",
      location: "Care & Compassion",
      accent: "blue",
      stat: "2,500+",
    },
    {
      // Green grass and trees, India forest cover - Ankit Choudhary on Unsplash
      image: "https://images.unsplash.com/photo-1603612692333-7bac35e43500?w=800&q=80&auto=format&fit=crop",
      title: "Environmental Campaign",
      category: "Sustainability",
      location: "Green Initiative",
      accent: "green",
      stat: "1M+",
    },
  ];

  // Duplicate events for seamless infinite marquee
  const marqueeEvents = [...events, ...events, ...events];
  const marqueeEventsReversed = [...marqueeEvents].reverse();

  return (
    <section className="events-marquee" ref={sectionRef}>
      
      {/* Background */}
      <motion.div className="events-marquee-bg" style={{ y: bgY }} />
      
      {/* Ambient Orbs */}
      <motion.div 
        className="events-marquee-orb events-marquee-orb-red"
        style={{ opacity: glowOpacity }}
      />
      <motion.div 
        className="events-marquee-orb events-marquee-orb-green"
        style={{ opacity: glowOpacity }}
      />

      <div className="events-marquee-container">
        
        {/* Section Header */}
        <motion.div 
          className="events-marquee-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <motion.div 
            className="events-marquee-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span 
              className="events-marquee-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span>Events & Initiatives</span>
            <motion.span 
              className="events-marquee-eyebrow-line"
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          <motion.h2 
            className="events-marquee-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Creating Impact Through
            <span className="text-red"> Action</span> &{" "}
            <span className="text-green"> Engagement</span>
          </motion.h2>
        </motion.div>

      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="events-marquee-track-wrapper">
        <motion.div 
          className="events-marquee-track"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {marqueeEvents.map((event, index) => (
            <motion.div 
              className={`events-marquee-card card-${event.accent}`}
              key={`row1-${index}`}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <div className="events-marquee-card-image">
                <img src={event.image} alt={event.title} loading="lazy" />
                <div className="events-marquee-card-overlay" />
                
                {/* Category Badge */}
                <span className={`events-marquee-card-badge badge-${event.accent}`}>
                  {event.category}
                </span>

                {/* Stat */}
                <div className="events-marquee-card-stat">
                  <span>{event.stat}</span>
                </div>
              </div>

              <div className="events-marquee-card-body">
                <div className="events-marquee-card-location">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C4.34 1 3 2.34 3 4C3 6.5 6 10 6 10C6 10 9 6.5 9 4C9 2.34 7.66 1 6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="4" r="1" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  <span>{event.location}</span>
                </div>
                <h3 className="events-marquee-card-title">{event.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 - Right to Left (Different speed) */}
      <div className="events-marquee-track-wrapper">
        <motion.div 
          className="events-marquee-track"
          animate={{
            x: [-50 + "%", 0],
          }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {marqueeEventsReversed.map((event, index) => (
            <motion.div 
              className={`events-marquee-card card-${event.accent}`}
              key={`row2-${index}`}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <div className="events-marquee-card-image">
                <img src={event.image} alt={event.title} loading="lazy" />
                <div className="events-marquee-card-overlay" />
                
                <span className={`events-marquee-card-badge badge-${event.accent}`}>
                  {event.category}
                </span>

                <div className="events-marquee-card-stat">
                  <span>{event.stat}</span>
                </div>
              </div>

              <div className="events-marquee-card-body">
                <div className="events-marquee-card-location">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C4.34 1 3 2.34 3 4C3 6.5 6 10 6 10C6 10 9 6.5 9 4C9 2.34 7.66 1 6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="4" r="1" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  <span>{event.location}</span>
                </div>
                <h3 className="events-marquee-card-title">{event.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="events-marquee-container">
        <motion.div 
          className="events-marquee-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a 
            href="/events" 
            className="events-marquee-cta"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>View All Events & Initiatives</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
}