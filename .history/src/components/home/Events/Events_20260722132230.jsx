import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./Events.css";
import healthcarehome from "../../../assets/healthcarehome.png"; 
import educationhome from "../../../assets/educationhome.png";
import newbg from "../../../assets/newbg.png";
import elders from "../../../assets/elders.png";
import child from "../../../assets/childhome.png";

// Custom hook for smooth infinite marquee
function useMarquee(totalWidth, speed = 40) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rAF;
    let lastTime = performance.now();

    const tick = (now) => {
      const dt = (now - lastTime) / 1000; // seconds
      lastTime = now;

      setOffset((prev) => {
        const next = prev + speed * dt; // px per second
        // Wrap around when we’ve moved one full “set” width
        return next >= totalWidth ? next - totalWidth : next;
      });

      rAF = requestAnimationFrame(tick);
    };

    rAF = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rAF);
  }, [totalWidth, speed]);

  return -offset; // move left
}

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
      image: "https://images.pexels.com/photos/28141441/pexels-photo-28141441.jpeg",
      title: "Community Healthcare Camp",
      category: "Healthcare",
      location: "Rural Outreach",
      accent: "green",
      stat: "50K+",
    },
    {
      image: "https://images.pexels.com/photos/35216547/pexels-photo-35216547.jpeg",
      title: "Skill Development",
      category: "Skill Development",
      location: "Skilling",
      accent: "red",
      stat: "10000+",
    },
    {
      image: "https://images.pexels.com/photos/18067562/pexels-photo-18067562.jpeg",
      title: "Placement Drive",
      category: "Placement Drive",
      location: "Drive",
      accent: "red",
      stat: "20000+",
    },
    {
      image: "https://images.unsplash.com/photo-1692269725827-699e04a11cdf?w=800&q=80&auto=format&fit=crop",
      title: "Education Support Program",
      category: "Education",
      location: "Youth Empowerment",
      accent: "red",
      stat: "5,284+",
    },
    {
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=800&q=80&auto=format&fit=crop",
      title: "Volunteer Engagement Drive",
      category: "Volunteer",
      location: "Community Service",
      accent: "blue",
      stat: "500+",
    },
    {
      image: "https://images.pexels.com/photos/5909876/pexels-photo-5909876.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Child Welfare Activities",
      category: "Child Welfare",
      location: "Community Impact",
      accent: "red",
      stat: "10K+",
    },
    {
      image: "https://images.pexels.com/photos/16364307/pexels-photo-16364307.jpeg",
      title: "Elderly Care Program",
      category: "Senior Care",
      location: "Care & Compassion",
      accent: "blue",
      stat: "2,500+",
    },
    {
      image: "https://images.unsplash.com/photo-1603612692333-7bac35e43500?w=800&q=80&auto=format&fit=crop",
      title: "Environmental Campaign",
      category: "Sustainability",
      location: "Green Initiative",
      accent: "green",
      stat: "1M+",
    },
  ];

  const marqueeEvents = [...events, ...events, ...events];
  const marqueeEventsReversed = [...marqueeEvents].reverse();

  // Measure one “set” width for seamless wrap
  const trackRef1 = useRef(null);
  const trackRef2 = useRef(null);
  const [setLength1, setSetLength1] = useState(0);
  const [setLength2, setSetLength2] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef1.current) {
        // One “set” = width of `events` length cards
        const card = trackRef1.current.querySelector(".events-marquee-card");
        if (card) {
          const cardWidth = card.getBoundingClientRect().width;
          setSetLength1(cardWidth * events.length);
        }
      }
      if (trackRef2.current) {
        const card = trackRef2.current.querySelector(".events-marquee-card");
        if (card) {
          const cardWidth = card.getBoundingClientRect().width;
          setSetLength2(cardWidth * events.length);
        }
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef1.current) ro.observe(trackRef1.current);
    if (trackRef2.current) ro.observe(trackRef2.current);

    return () => ro.disconnect();
  }, [events.length]);

  const x1 = useMarquee(setLength1 || 1, 60);  // px/s, tweak for speed
  const x2 = useMarquee(setLength2 || 1, 50);

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
          ref={trackRef1}
          className="events-marquee-track"
          style={{ x: x1 }}
        >
          {marqueeEvents.map((event, index) => (
            <motion.div 
              className={`events-marquee-card card-${event.accent}`}
              key={`row1-${index}`}
              whileHover={{ 
                y: -8,
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

      {/* Marquee Row 2 - Right to Left (Different speed) */}
      <div className="events-marquee-track-wrapper">
        <motion.div 
          ref={trackRef2}
          className="events-marquee-track"
          style={{ x: x2 }}
        >
          {marqueeEventsReversed.map((event, index) => (
            <motion.div 
              className={`events-marquee-card card-${event.accent}`}
              key={`row2-${index}`}
              whileHover={{ 
                y: -8,
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