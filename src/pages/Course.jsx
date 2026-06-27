// import "./Course.css";
// import english from "../assets/english.png";
// import computer from "../assets/computer.png";
// import graphic from "../assets/graphic.png";
// import marketing from "../assets/marketing.png";
// import web from "../assets/web.png";
// import leadership from "../assets/leadership.png";

// export default function Course() {
//   const internships = [
//     {

//       title: "Spoken English & Communication Skills",
//       duration: "3 Months",
//       image: english,
//       delay: "0.1s"
//     },
//     {

//       title: "Digital Literacy & Computer Basics",
//       duration: "3 Months",
//       image: computer,
//       delay: "0.2s"
//     },
//     {

//       title: "Graphic Design",
//       duration: "3 Months",
//       image: graphic,
//       delay: "0.3s"
//     },
//     {

//       title: "Digital Marketing Fundamentals",
//       duration: "3 Months",
//       image: marketing,
//       delay: "0.4s"
//     },
//     {

//       title: "Web Development Basics",
//       duration: "4 Months",
//       image: web,
//       delay: "0.5s"
//     },
//     {

//       title: "Leadership & Community Engagement",
//       duration: "2 Months",
//       image: leadership,
//       delay: "0.6s"
//     },
//   ];

//   // Using english image as hero background
//   const heroBackground = english;

//   // Function to handle Apply Now click
//   const handleApplyClick = () => {
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     } else {
//       console.log("Apply Now clicked - Redirect to contact");
//     }
//   };

//   return (
//     <div className="course-page">
//       {/* HERO SECTION with Background Image */}
//       <section 
//         className="hero-section"
//         style={{
//           backgroundImage: `url(${heroBackground})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <div className="hero-overlay"></div>
//         <div className="hero-container">
//           <div className="hero-content">
//             <div className="hero-text">
//               <span className="hero-tag">SKILL DEVELOPMENT PROGRAMS</span>
//                   <h1>Build Your Future <br />With Our Courses</h1>
//               <p className="hero-subtitle">
//                 Ensuring dignity and care for every senior citizen
//               </p>
//               <p className="hero-description">
//                Gain practical skills, earn certifications, and launch your career 
//                 with industry-recognized programs designed for your success.
//               </p>
//               <button className="hero-cta" onClick={handleApplyClick}>
//                 Join the Course→
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* COURSES SECTION */}
//       <section id="courses" className="courses-section">
//         <span className="Course-tag">Skills for a Better Future</span>
//         <div className="container">
//           <div className="courses-grid">

//             {internships.map((internship, index) => (
//               <div 
//                 className="course-card" 
//                 key={index}
//                 style={{ animationDelay: internship.delay }}
//               >
//                 <div className="card-image-wrapper">
//                   <img
//                     src={internship.image}
//                     alt={internship.title}
//                     className="card-image"
//                   />
//                   <div className="card-overlay">
//                     <div className="card-number">{internship.id}</div>
//                     <h3>{internship.title}</h3>
//                     <div className="card-duration">
//                       <span>{internship.duration}</span>
//                     </div>
//                     <button className="apply-btn" onClick={handleApplyClick}>
//                       Apply Now →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import "./Course.css";
import { useNavigate } from "react-router-dom";

import english from "../assets/english.png";
import computer from "../assets/computer.png";
import graphic from "../assets/graphic.png";
import marketing from "../assets/marketing.jpeg";
import web from "../assets/web.png";
import leadership from "../assets/leadership.png";
import entrepreneurship from "../assets/entrepreneurship.jpeg";
import Career from "../assets/Career.jpeg";
import Artificial from "../assets/Artificial.jpeg";

export default function Course() {
  const navigate = useNavigate();
  const internships = [
    {
      title: "Spoken English & Communication Skills",
      duration: "3 Months",
      image: english,
      delay: "0.1s",
      rating: "4.8",
      students: "1,234",
      lessons: "32"
    },
    {
      title: "Digital Literacy & Computer Basics",
      duration: "3 Months",
      image: computer,
      delay: "0.2s",
      rating: "4.6",
      students: "892",
      lessons: "28"
    },
    {
      title: "Graphic Design",
      duration: "3 Months",
      image: graphic,
      delay: "0.3s",
      rating: "4.9",
      students: "1,567",
      lessons: "45"
    },
    {
      title: "Digital Marketing Fundamentals",
      duration: "3 Months",
      image: marketing,
      delay: "0.4s",
      rating: "4.7",
      students: "2,103",
      lessons: "38"
    },
    {
      title: "Web Development Basics",
      duration: "4 Months",
      image: web,
      delay: "0.5s",
      rating: "4.9",
      students: "934",
      lessons: "40"
    },
    {
      title: "Leadership & Community Engagement",
      duration: "2 Months",
      image: leadership,
      delay: "0.6s",
      rating: "4.8",
      students: "567",
      lessons: "24"
    },
      {
      title: "Entrepreneurship & Business Skills",
      duration: "2 Months",
      image: entrepreneurship,
      delay: "0.6s",
      rating: "4.8",
      students: "567",
      lessons: "24"
    },
      {
      title: "Career Readiness & Employability Skills",
      duration: "2 Months",
      image: Career,
      delay: "0.6s",
      rating: "4.8",
      students: "567",
      lessons: "24"
    },
      {
      title: "Artificial Intelligence & Emerging Technologies",
      duration: "2 Months",
      image:Artificial ,
      delay: "0.6s",
      rating: "4.8",
      students: "567",
      lessons: "24"
    },
  ];

  const heroBackground = english;

  const handleApplyClick = () => {
    navigate("/contact");
  };

  return (
    <div className="course-page">
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-tag">SKILL DEVELOPMENT PROGRAMS</span>
              <h1>Build Your Future <br />With Our Courses</h1>
              <button className="hero-cta" onClick={handleApplyClick}>
                Join the Course →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="courses-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header-wrapper">
            <div className="section-header-left">
              <h2 className="section-main-title">Browse Our Courses</h2>
              <p className="section-main-description">
                Explore 500+ hours of expert-led courses and learn at your own place.
              </p>
            </div>
          </div>

          <div className="courses-grid">
            {internships.map((internship, index) => (
              <div
                className="course-card"
                key={index}
                style={{ animationDelay: internship.delay }}
              >
                <div className="card-image-wrapper">
                  <img
                    src={internship.image}
                    alt={internship.title}
                    className="card-image"
                  />
                  <div className="card-title-overlay">
                    <h3>{internship.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section"> 
        <div className="container">
          <div className="cta-wrapper">
            <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
            
            <button className="cta-button" onClick={handleApplyClick}>
              Apply Now →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}