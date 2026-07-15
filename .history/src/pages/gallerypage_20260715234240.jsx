import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

import childwelfareImg from "../assets/Capturechild.PNG";
import communityImg from "../assets/chatcomm.png";
import digitalImg from "../assets/creativecapture.PNG";
import educationImg from "../assets/educati.PNG";
import eldeImg from "../assets/elderlycapture.png";
import environmentImg from "../assets/chatenv.png";
import eventImg from "../assets/chateve.png";
import healthcareImg from "../assets/healthCapture.PNG";

import benefitImg1 from "../assets/edu.png";
import benefitImg2 from "../assets/educa.png";
import benefitImg3 from "../assets/educatio.png";

import educationnew12 from "../assets/e.png";
import healthcarenew1 from "../assets/healthcarenew1.png";
import childwelfarenew1 from "../assets/child.png";
import childwelfarenew3 from "../assets/h.png";
import chil1 from "../assets/chil.png";
import elderlycarenew1 from "../assets/elderlycarenew1.jpeg";
import enviroinmentnew1 from "../assets/environmentnew1.jpeg";
import communitynew1 from "../assets/communitynew1.jpeg";
import communitynew2 from "../assets/el.png";
import large1 from "../assets/education1.png";
import image2 from "../assets/image2.jpeg";
import image5 from "../assets/educat.png";
import communityimg2 from "../assets/co.jpg";
import communityimg3 from "../assets/com.jpg";
import communityimg3 from "../assets/comm.jpg";

import vmBg from "../assets/communitynew1.jpeg";
import purpose from "../assets/ndimagee.png";
import empower from "../assets/voli.jpeg";
import volunteer from "../assets/volent.jpeg";
import education from "../assets/ed.png";
import healthcare from "../assets/healthfinal.png";
import child from "../assets/childwelf.jpeg";
import elderly from "../assets/oldage.jpeg";
import environment from "../assets/env.jpeg";
import community from "../assets/community.png";
import humanitarian from "../assets/humani.jpeg";
import women from "../assets/womenempfinal.png";

import healthcare1 from "../assets/healthcare1.jpg";
import volunteer1 from "../assets/volunteer1.jpg";
import educationHero from "../assets/educat.png";
import healthcareHero from "../assets/healthcare.jpg";
import volunteerImg from "../assets/volunteer.png";
import childImg from "../assets/childd.png";
import elderlyImg from "../assets/elder.png";
import environmentHero from "../assets/environment.jpg";
import foodImg from "../assets/food1.jpg";
import csrImg from "../assets/csr.jpg";
import skillImg from "../assets/skill1.jpg";

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const galleryItems = [
    { image: educationImg, title: "Education Support Program", category: "Education", description: "Supporting students through learning resources and mentorship.", accent: "red" },
    { image: benefitImg1, title: "Scholarship Distribution", category: "Education", description: "Financial support for deserving students.", accent: "red" },
    { image: educationnew12, title: "Digital Literacy Camp", category: "Education", description: "Computer skills for underprivileged students.", accent: "red" },
    { image: education, title: "School Supply Drive", category: "Education", description: "Books, bags, and stationery distribution.", accent: "red" },
    { image: benefitImg2, title: "After-School Tutoring", category: "Education", description: "Extra academic support for students.", accent: "red" },
    { image: benefitImg3, title: "Library Setup Initiative", category: "Education", description: "Setting up libraries in rural schools.", accent: "red" },
    { image: large1, title: "STEM Workshop", category: "Education", description: "Science and technology for young minds.", accent: "red" },
    { image: image2, title: "Career Counseling", category: "Education", description: "Guiding students toward brighter careers.", accent: "red" },
    { image: image5, title: "Creative Arts Program", category: "Education", description: "Art and craft workshops for creativity.", accent: "red" },
    { image: digitalImg, title: "Reading Campaign", category: "Education", description: "Promoting reading in rural areas.", accent: "red" },

    { image: healthcareImg, title: "Community Healthcare Camp", category: "Healthcare", description: "Medical consultations and health screenings.", accent: "green" },
    { image: healthcare1, title: "Free Eye Checkup", category: "Healthcare", description: "Vision screenings and free glasses.", accent: "green" },
    { image: healthcarenew1, title: "Dental Health Drive", category: "Healthcare", description: "Dental checkups and oral hygiene.", accent: "green" },
    { image: healthcareHero, title: "Blood Donation Camp", category: "Healthcare", description: "Organizing blood donation drives.", accent: "green" },
    { image: healthcarenew1, title: "Mental Health Workshop", category: "Healthcare", description: "Mental health awareness programs.", accent: "green" },
    { image: women, title: "Women Health Camp", category: "Healthcare", description: "Specialized checkups for women.", accent: "green" },
    { image: childwelfarenew3, title: "Child Vaccination Drive", category: "Healthcare", description: "Essential vaccinations for children.", accent: "green" },
    { image: healthcare, title: "Yoga & Wellness Camp", category: "Healthcare", description: "Physical and mental wellness programs.", accent: "green" },

    { image: childwelfareImg, title: "Children's Day Event", category: "Child Welfare", description: "Fun events for children.", accent: "blue" },
    // { image: childwelfarenew1, title: "Playground Setup", category: "Child Welfare", description: "Safe play areas for kids.", accent: "blue" },
    { image: child, title: "Sports Day", category: "Child Welfare", description: "Physical activity through sports.", accent: "blue" },
    { image: chil1, title: "Art & Craft Workshop", category: "Child Welfare", description: "Nurturing creativity in children.", accent: "blue" },
    { image: childImg, title: "Child Rights Awareness", category: "Child Welfare", description: "Educating about child rights.", accent: "blue" },
    // { image: childwelfareImg, title: "Summer Camp", category: "Child Welfare", description: "Fun and learning during summer.", accent: "blue" },
    // { image: childwelfareImg, title: "Storytelling Sessions", category: "Child Welfare", description: "Inspiring imagination through stories.", accent: "blue" },
    { image: childwelfarenew1, title: "School Enrollment", category: "Child Welfare", description: "Getting children into schools.", accent: "blue" },
    // { image: childwelfareImg, title: "Health & Hygiene", category: "Child Welfare", description: "Teaching hygiene to children.", accent: "blue" },
    { image: eventImg, title: "Dance & Music", category: "Child Welfare", description: "Introducing performing arts.", accent: "blue" },
    // { image: childwelfareImg, title: "Personality Development", category: "Child Welfare", description: "Building confidence in children.", accent: "blue" },
    { image: environmentImg, title: "Environmental Education", category: "Child Welfare", description: "Teaching about nature conservation.", accent: "blue" },
    { image: benefitImg3, title: "Gift Distribution", category: "Child Welfare", description: "Spreading joy during festivals.", accent: "blue" },

    // { image: skillImg, title: "Youth Skill Workshop", category: "Skill Development", description: "Career guidance and employability.", accent: "red" },
    // { image: skillImg, title: "Computer Training", category: "Skill Development", description: "Basic to advanced computer skills.", accent: "red" },
    // { image: skillImg, title: "Vocational Training", category: "Skill Development", description: "Hands-on vocational skills.", accent: "red" },
    { image: skillImg, title: "Entrepreneurship Program", category: "Skill Development", description: "Business skills for entrepreneurs.", accent: "red" },
    // { image: skillImg, title: "Soft Skills Training", category: "Skill Development", description: "Communication and interpersonal skills.", accent: "red" },
    { image: digitalImg, title: "Digital Marketing", category: "Skill Development", description: "Modern marketing techniques.", accent: "red" },
    { image: empower, title: "Tailoring & Design", category: "Skill Development", description: "Fashion design skills for women.", accent: "red" },
    // { image: large1, title: "Electrician Training", category: "Skill Development", description: "Certified electrician programs.", accent: "red" },
    // { image: volunteerImg, title: "Web Development", category: "Skill Development", description: "Coding and web development skills.", accent: "red" },
    { image: image5, title: "Public Speaking", category: "Skill Development", description: "Building confidence through speaking.", accent: "red" },
    { image: image2, title: "Accounting Basics", category: "Skill Development", description: "Financial literacy training.", accent: "red" },
    // { image: image5, title: "Photography Workshop", category: "Skill Development", description: "Professional photography skills.", accent: "red" },
    { image: educationnew12, title: "Culinary Arts", category: "Skill Development", description: "Professional cooking training.", accent: "red" },
    // { image: skillImg, title: "Placement Preparation", category: "Skill Development", description: "Interview and job preparation.", accent: "red" },
    { image: large1, title: "Leadership Program", category: "Skill Development", description: "Building leadership qualities.", accent: "red" },

    // { image: skillImg, title: "Job Placement Drive", category: "Placement", description: "Connecting skills with jobs.", accent: "green" },
    { image: volunteerImg, title: "Career Fair", category: "Placement", description: "Multiple employer events.", accent: "green" },
    { image: large1, title: "Resume Workshop", category: "Placement", description: "Professional resume building.", accent: "green" },
    // { image: volunteerImg, title: "Mock Interviews", category: "Placement", description: "Interview practice sessions.", accent: "green" },
    { image: humanitarian, title: "Corporate Connect", category: "Placement", description: "Bridging job seekers and employers.", accent: "green" },
    { image: childwelfarenew1, title: "Success Stories", category: "Placement", description: "Celebrating job placements.", accent: "green" },
    // { image: environmentImg, title: "Recruitment Camp", category: "Placement", description: "On-the-spot recruitment drives.", accent: "green" },
    // { image: benefitImg3, title: "Industry Partnership", category: "Placement", description: "Building company partnerships.", accent: "green" },
    { image: skillImg, title: "Apprenticeship Program", category: "Placement", description: "Hands-on work experience.", accent: "green" },
    { image: women, title: "Women Employment Drive", category: "Placement", description: "Special placement for women.", accent: "green" },
    { image: image2, title: "Campus Recruitment", category: "Placement", description: "College placement drives.", accent: "green" },
    { image: large1, title: "Skill Assessment", category: "Placement", description: "Matching skills with jobs.", accent: "green" },
    // { image: communitynew1, title: "Job Portal Registration", category: "Placement", description: "Online job portal assistance.", accent: "green" },
    { image: volunteer1, title: "Networking Event", category: "Placement", description: "Professional networking opportunities.", accent: "green" },
    // { image: benefitImg2, title: "Offer Distribution", category: "Placement", description: "Celebrating job offer letters.", accent: "green" },

    // { image: csrImg, title: "CSR Partnership Meet", category: "CSR", description: "Corporate collaborations for impact.", accent: "blue" },
    { image: volunteer1, title: "Corporate Volunteer Day", category: "CSR", description: "Employees volunteering for causes.", accent: "blue" },
    { image: communitynew1, title: "CSR Project Launch", category: "CSR", description: "Launching new CSR initiatives.", accent: "blue" },
    { image: volunteerImg, title: "Employee Engagement", category: "CSR", description: "Staff in social initiatives.", accent: "blue" },
    { image: benefitImg1, title: "Impact Assessment", category: "CSR", description: "Reviewing CSR project outcomes.", accent: "blue" },
    { image: communityImg, title: "Community Development", category: "CSR", description: "CSR-funded infrastructure projects.", accent: "blue" },
    { image: communityimg2, title: "CSR Strategy Workshop", category: "CSR", description: "Planning with corporate partners.", accent: "blue" },
    { image: communityimg3, title: "Grant Distribution", category: "CSR", description: "CSR grants for community projects.", accent: "blue" },
    { image: humanitarian, title: "Partnership Signing", category: "CSR", description: "Formalizing CSR partnerships.", accent: "blue" },
    { image: communityImg, title: "Annual CSR Summit", category: "CSR", description: "CSR leaders knowledge sharing.", accent: "blue" },
    { image: communityimg4, title: "CSR Reporting", category: "CSR", description: "Compliance and reporting training.", accent: "blue" },
    // { image: benefitImg2, title: "Employee Giving", category: "CSR", description: "Mobilizing employee contributions.", accent: "blue" },
    { image: volunteer, title: "NGO Partnership", category: "CSR", description: "Connecting NGOs with CSR programs.", accent: "blue" },
    { image: enviroinmentnew1, title: "Sustainability Initiative", category: "CSR", description: "Environmental CSR projects.", accent: "blue" },
    { image: benefitImg3, title: "CSR Awards", category: "CSR", description: "Recognizing CSR contributions.", accent: "blue" },

    { image: environmentHero, title: "Tree Plantation Drive", category: "Environment", description: "Green initiatives for sustainability.", accent: "red" },
    { image: environmentImg, title: "Clean-up Campaign", category: "Environment", description: "Community cleanliness drives.", accent: "red" },
    { image: enviroinmentnew1, title: "Recycling Workshop", category: "Environment", description: "Teaching recycling practices.", accent: "red" },
    { image: environment, title: "Nature Walk", category: "Environment", description: "Connecting with nature events.", accent: "red" },
    // { image: environmentImg, title: "Solar Energy Camp", category: "Environment", description: "Renewable energy awareness.", accent: "red" },
    // { image: enviroinmentnew1, title: "Water Conservation", category: "Environment", description: "Saving water initiatives.", accent: "red" },
    // { image: enviroinmentnew1, title: "Eco-Friendly Workshop", category: "Environment", description: "Sustainable living practices.", accent: "red" },
    // { image: enviroinmentnew1, title: "Garden Project", category: "Environment", description: "Community gardening initiatives.", accent: "red" },
    // { image: environmentImg, title: "Plastic-Free Campaign", category: "Environment", description: "Reducing plastic usage.", accent: "red" },
    // { image: environmentHero, title: "Climate Awareness", category: "Environment", description: "Climate change education.", accent: "red" },
    // { image: enviroinmentnew1, title: "Seed Ball Making", category: "Environment", description: "Seed ball distribution drives.", accent: "red" },
    // { image: enviroinmentnew1, title: "Forest Conservation", category: "Environment", description: "Protecting forest areas.", accent: "red" },
    // { image: environment, title: "Beach Cleanup", category: "Environment", description: "Coastal area cleaning drives.", accent: "red" },
    // { image: environmentImg, title: "Environmental Rally", category: "Environment", description: "Awareness marches and rallies.", accent: "red" },
    // { image: enviroinmentnew1, title: "Green School Program", category: "Environment", description: "Eco-education in schools.", accent: "red" },

    { image: foodImg, title: "Food Distribution", category: "Community", description: "Food assistance for families.", accent: "green" },
    { image: communityImg, title: "Community Gathering", category: "Community", description: "Bringing communities together.", accent: "green" },
    { image: communitynew2, title: "Relief Distribution", category: "Community", description: "Emergency relief support.", accent: "green" },
    { image: community, title: "Festival Celebration", category: "Community", description: "Celebrating festivals together.", accent: "green" },
    { image: volunteer1, title: "Awareness Campaign", category: "Community", description: "Social awareness programs.", accent: "green" },
    { image: elderly, title: "Senior Support", category: "Community", description: "Elderly care in communities.", accent: "green" },
    { image: women, title: "Women's Meet", category: "Community", description: "Women empowerment gatherings.", accent: "green" },
    { image: communitynew1, title: "Infrastructure Project", category: "Community", description: "Building community facilities.", accent: "green" },
    { image: community, title: "Cultural Program", category: "Community", description: "Preserving cultural heritage.", accent: "green" },
    { image: volunteerImg, title: "Self-Help Group", category: "Community", description: "Community savings groups.", accent: "green" },
    
    { image: humanitarian, title: "Legal Aid Camp", category: "Community", description: "Free legal assistance.", accent: "green" },
    { image: elderlycarenew1, title: "Winter Relief", category: "Community", description: "Blanket and warm clothes distribution.", accent: "green" },
    { image: eldeImg, title: "Civic Awareness", category: "Community", description: "Voter and civic education.", accent: "green" },
    { image: purpose, title: "Community Kitchen", category: "Community", description: "Feeding the hungry programs.", accent: "green" },
  ];

  const categories = ["All", "Education", "Healthcare", "Child Welfare", "Skill Development", "Placement", "CSR", "Environment", "Community"];
  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="glp-page" ref={sectionRef}>
      <section className="glp-hero">
        <div className="glp-hero-bg" />
        <div className="glp-hero-glow glp-hero-glow-1" />
        <div className="glp-hero-glow glp-hero-glow-2" />
        <div className="glp-container">
          <motion.div className="glp-hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="glp-hero-tag">
              <span className="glp-hero-tag-line" />
              <span className="glp-hero-tag-text">Gallery</span>
            </div>
            <h1 className="glp-hero-headline">Capturing Moments Of <span className="glp-hero-accent">Impact</span></h1>
            <p className="glp-hero-desc">Explore the journey of Uvagai Foundation through our initiatives and social impact projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="glp-filter-section">
        <div className="glp-container">
          <motion.div className="glp-filters" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`glp-filter-btn ${filter === category ? "glp-filter-active" : ""}`}
                onClick={() => {
                  setFilter(category);
                  setVisibleCount(12);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="glp-grid-section">
        <div className="glp-container">
          <motion.div className="glp-grid" layout>
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, index) => (
                <motion.div
                  className={`glp-card glp-card-${item.accent}`}
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  layout
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="glp-card-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="glp-card-shade" />
                    <div className="glp-card-badge">
                      <span className={`glp-card-dot glp-dot-${item.accent}`} />
                      <span className="glp-card-badge-text">{item.category}</span>
                    </div>
                    <div className="glp-card-view">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M1 9C3 4.5 6 2 9 2C12 2 15 4.5 17 9C15 13.5 12 16 9 16C6 16 3 13.5 1 9Z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="glp-card-body">
                    <h3 className="glp-card-title">{item.title}</h3>
                    <p className="glp-card-text">{item.description}</p>
                  </div>
                  <div className={`glp-card-line glp-line-${item.accent}`} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMore && (
            <motion.div className="glp-load-more" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button className="glp-load-btn" onClick={() => setVisibleCount((prev) => prev + 12)}>
                View More
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="glp-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="glp-lightbox-dialog"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="glp-lightbox-close" onClick={() => setSelectedImage(null)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="glp-lightbox-image">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>
              <div className="glp-lightbox-info">
                <span className={`glp-lightbox-cat glp-cat-${selectedImage.accent}`}>{selectedImage.category}</span>
                <h3 className="glp-lightbox-title">{selectedImage.title}</h3>
                <p className="glp-lightbox-desc">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}