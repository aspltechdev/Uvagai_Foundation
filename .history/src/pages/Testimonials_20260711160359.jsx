import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./Testimonials.css";

export default function TestimonialsHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1757351122515-21a7b61d682e?w=300&h=300&fit=crop&crop=faces&q=80",
      name: "Lakshmi Devi",
      role: "Parent Beneficiary",
      quote:
        "The educational support provided by Uvagai Foundation helped my daughter continue her studies with confidence. Their guidance has brought hope and opportunity to our family.",
      accent: "red",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1590233357551-265f689a51ea?w=300&h=300&fit=crop&crop=faces&q=80",
      name: "Dr. Ramesh Kumar",
      role: "Healthcare Volunteer",
      quote:
        "Through medical camps and community outreach programs, I have witnessed the Foundation's commitment to making healthcare accessible for everyone.",
      accent: "green",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=300&h=300&fit=crop&crop=faces&q=80",
      name: "Meena S",
      role: "Community Volunteer",
      quote:
        "Volunteering with Uvagai Foundation has been a rewarding experience. Every initiative is driven by compassion, transparency, and a genuine desire to create change.",
      accent: "blue",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1601972678306-c2bc15613615?w=300&h=300&fit=crop&crop=faces&q=80",
      name: "Rajesh Krishnan",
      role: "CSR Partner",
      quote:
        "Uvagai Foundation has been a dependable implementation partner for community-focused projects. Their professionalism and dedication create meaningful impact.",
      accent: "red",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1558377235-802c801ab268?w=300&h=300&fit=crop&crop=faces&q=80",
      name: "Saraswathi Amma",
      role: "Senior Citizen Beneficiary",
      quote:
        "The care and support I received made me feel valued and respected. Uvagai Foundation treats every individual with dignity and kindness.",
      accent: "green",
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1629114488955-bf6390a59c21?w=300&h=300&fit=crop&crop=faces&q=80",
      name: "Arun Prakash",
      role: "Youth Program Participant",
      quote:
        "The mentorship and skill development opportunities gave me confidence to pursue my goals. I am grateful for the opportunities created by the Foundation.",
      accent: "blue",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  // Show first 3 testimonials
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        
        <motion.div 
          className="testimonials-header"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <span className="testimonials-eyebrow">
            Voices of Impact
          </span>

          <h2 className="testimonials-title">
            Stories of
            <span className="text-red"> Hope </span>
            &
            <span className="text-green"> Transformation</span>
          </h2>

          <p className="testimonials-subtitle">
            Hear from beneficiaries, volunteers, and partners whose lives
            have been positively impacted through the initiatives of
            Uvagai Foundation.
          </p>
        </motion.div>

        {/* Testimonials Grid - 3 Cards Side by Side */}
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div 
              className={`testimonials-card card-${testimonial.accent}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              {/* Quote Icon */}
              <div className="testimonials-quote-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M10 8C6 12 4 16 4 22C4 24 5 26 8 26C11 26 14 23.5 14 20C14 16 12 14 10 14C9 14 8.5 14 8 14.5C8.5 12 10 10 12 8L10 8ZM22 8C18 12 16 16 16 22C16 24 17 26 20 26C23 26 26 23.5 26 20C26 16 24 14 22 14C21 14 20.5 14 20 14.5C20.5 12 22 10 24 8L22 8Z" fill="currentColor" opacity="0.12"/>
                </svg>
              </div>

              {/* Star Rating */}
              <div className="testimonials-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10.06 5.26L14.72 5.94L11.36 9.26L12.16 13.9L8 11.66L3.84 13.9L4.64 9.26L1.28 5.94L5.94 5.26L8 1Z" fill="#F59E0B"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testimonials-card-quote">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="testimonials-card-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonials-card-avatar"
                />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          className="testimonials-trust"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="testimonials-trust-line" />
          <p>
            Trusted by Volunteers, Beneficiaries & Community Partners Since 2019
          </p>
          <div className="testimonials-trust-line" />
        </motion.div>

      </div>
    </section>
  );
}