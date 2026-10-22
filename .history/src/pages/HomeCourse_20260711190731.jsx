import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./HomeCourse.css";

// 👇 Update these imports to match your actual image paths
import course1 from "../assets/english.png";
import course2 from "../assets/computer.jpeg";
import course3 from "../assets/graphic.jpeg";
import course4 from "../assets/marketing.jpeg";
import course5 from "../assets/web.png";
import course6 from "../assets/leadership.png";

export default function HomeCourse() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const categories = ["All Courses", "Technology", "Business", "Creative", "Communication"];

  const courses = [
    {
      id: 1,
      category: "Communication",
      image: course1,
      title: "Spoken English & Communication Skills",
      description: "Master English speaking, presentation skills, and professional communication for career growth and workplace confidence.",
      accent: "red",
      stat: "3 Months",
      statLabel: "Duration",
      students: "1,200+",
      slug: "spoken-english-communication-skills",
    },
    {
      id: 2,
      category: "Technology",
      image: course2,
      title: "Digital Literacy & Computer Basics",
      description: "Learn essential computer skills, MS Office suite, internet usage, and digital tools for everyday professional tasks.",
      accent: "green",
      stat: "3 Months",
      statLabel: "Duration",
      students: "850+",
      slug: "digital-literacy-computer-basics",
    },
    {
      id: 3,
      category: "Creative",
      image: course3,
      title: "Graphic Design & Visual Creativity",
      description: "Explore design principles, color theory, typography, and create stunning visual content using industry-standard tools.",
      accent: "blue",
      stat: "3 Months",
      statLabel: "Duration",
      students: "1,500+",
      slug: "graphic-design-visual-creativity",
    },
    {
      id: 4,
      category: "Business",
      image: course4,
      title: "Digital Marketing Fundamentals",
      description: "Understand SEO, social media marketing, content strategy, and online brand building for business growth.",
      accent: "red",
      stat: "3 Months",
      statLabel: "Duration",
      students: "2,000+",
      slug: "digital-marketing-fundamentals",
    },
    {
      id: 5,
      category: "Technology",
      image: course5,
      title: "Web Development Basics",
      description: "Build responsive websites using HTML, CSS, JavaScript, and modern frameworks with hands-on projects.",
      accent: "green",
      stat: "4 Months",
      statLabel: "Duration",
      students: "950+",
      slug: "web-development-basics",
    },
    {
      id: 6,
      category: "Communication",
      image: course6,
      title: "Leadership & Community Engagement",
      description: "Develop leadership skills, team management, public speaking, and community outreach capabilities.",
      accent: "blue",
      stat: "2 Months",
      statLabel: "Duration",
      students: "600+",
      slug: "leadership-community-engagement",
    },
  ];

  const filteredCourses = activeTab === 0 
    ? courses 
    : courses.filter(c => c.category === categories[activeTab]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="home-course" ref={sectionRef}>
      {/* Background */}
      <div className="home-course-bg" />
      <div className="home-course-grid-overlay" />

      <div className="home-course-container">
        
        {/* Header Row */}
        <motion.div 
          className="home-course-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="home-course-header-left">
            <span className="home-course-eyebrow">
              <span className="eyebrow-accent" />
              Skill Development
            </span>
            
            <h2 className="home-course-title">
              Courses that{" "}
              <span className="title-red">transform</span>{" "}
              careers and{" "}
              <span className="title-green">build</span>{" "}
              futures
            </h2>
          </div>

          <p className="home-course-description">
            Gain practical skills through industry-recognized programs designed 
            to boost your employability. Expert-led courses with hands-on training 
            and certification.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="home-course-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { number: "08+", label: "Course Programs", accent: "red" },
            { number: "5K+", label: "Students Trained", accent: "green" },
            { number: "85%", label: "Placement Rate", accent: "blue" },
            { number: "500+", label: "Learning Hours", accent: "red" },
          ].map((stat, index) => (
            <div key={index} className={`home-course-stat stat-${stat.accent}`}>
              <span className="home-course-stat-number">{stat.number}</span>
              <span className="home-course-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="home-course-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              className={`home-course-tab ${activeTab === index ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
              {activeTab === index && (
                <motion.div 
                  className="tab-indicator"
                  layoutId="courseTab"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          className="home-course-grid"
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCourses.map((course) => (
            <motion.article
              key={course.id}
              className={`home-course-card card-${course.accent}`}
              variants={cardVariants}
              layout
            >
              {/* Image Container */}
              <div className="home-course-card-media">
                <motion.img 
                  src={course.image} 
                  alt={course.title}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.33, 0.1, 0.25, 1] }}
                />
                <div className="home-course-card-overlay" />
                
                {/* Category Badge */}
                <span className={`home-course-card-category category-${course.accent}`}>
                  {course.category}
                </span>

                {/* Students Badge */}
                <span className="home-course-card-students">
                  {course.students} students
                </span>
              </div>

              {/* Content */}
              <div className="home-course-card-body">
                <h3 className="home-course-card-title">
                  {course.title}
                </h3>
                <p className="home-course-card-text">
                  {course.description}
                </p>

                {/* Footer Row */}
                <div className="home-course-card-footer">
                  <div className="home-course-card-stat">
                    <span className="stat-number">{course.stat}</span>
                    <span className="stat-label">{course.statLabel}</span>
                  </div>
                  
                  <motion.div
                    whileHover={{ x: 4 }}
                  >
                    <Link 
                      to={`/course/${course.id}`}
                      className={`home-course-card-link link-${course.accent}`}
                    >
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="home-course-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/courses" className="home-course-cta">
              <span>View all courses</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}