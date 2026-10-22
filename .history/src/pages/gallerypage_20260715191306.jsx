// import { useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import "./gallerypage.css";

// export default function GalleryHome() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [filter, setFilter] = useState("All");

//   const galleryItems = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
//       title: "Education Support Program",
//       category: "Education",
//       description:
//         "Supporting students through learning resources, mentorship, and educational initiatives.",
//       accent: "red",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80",
//       title: "Community Healthcare Camp",
//       category: "Healthcare",
//       description:
//         "Medical consultations, health screenings, and wellness awareness programs.",
//       accent: "green",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
//       title: "Volunteer Engagement Drive",
//       category: "Volunteerism",
//       description:
//         "Volunteers coming together to support meaningful social initiatives.",
//       accent: "blue",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
//       title: "Child Welfare Activities",
//       category: "Child Welfare",
//       description:
//         "Programs focused on children's education, nutrition, and development.",
//       accent: "red",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
//       title: "Elderly Care Initiative",
//       category: "Senior Welfare",
//       description:
//         "Supporting senior citizens through care, engagement, and wellness programs.",
//       accent: "blue",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
//       title: "Environmental Awareness Campaign",
//       category: "Environment",
//       description:
//         "Promoting sustainability through tree plantation and green initiatives.",
//       accent: "green",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
//       title: "Community Food Distribution",
//       category: "Humanitarian",
//       description:
//         "Providing essential support and food assistance to families in need.",
//       accent: "red",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
//       title: "CSR Partnership Activities",
//       category: "CSR",
//       description:
//         "Collaborating with organizations to create sustainable social impact.",
//       accent: "blue",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
//       title: "Youth Skill Development Workshop",
//       category: "Skill Development",
//       description:
//         "Empowering youth with career guidance and employability skills.",
//       accent: "green",
//     },
//   ];

//   const categories = ["All", "Education", "Healthcare", "Volunteerism", "Child Welfare", "Senior Welfare", "Environment", "Humanitarian", "CSR", "Skill Development"];

//   const filteredItems = filter === "All" 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === filter);

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08, delayChildren: 0.1 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <div className="gallery-page" ref={sectionRef}>
//       {/* Hero Section */}
//       <section className="gallery-hero">
//         <div className="gallery-hero-bg" />
//         <div className="gallery-hero-glow gallery-hero-glow-1" />
//         <div className="gallery-hero-glow gallery-hero-glow-2" />
        
//         <div className="gallery-container">
//           <motion.div 
//             className="gallery-hero-content"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             <div className="gallery-hero-tag">
//               <span className="gallery-hero-tag-line" />
//               <span className="gallery-hero-tag-text">Gallery</span>
//             </div>

//             <h1 className="gallery-hero-headline">
//               Capturing Moments Of
//               <span className="gallery-hero-headline-accent"> Impact & Transformation</span>
//             </h1>

//             <p className="gallery-hero-subtitle">
//               Explore the journey of Uvagai Foundation through our
//               initiatives, community programs, volunteer activities,
//               healthcare camps, educational support, and social impact projects.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="gallery-filter-section">
//         <div className="gallery-container">
//           <motion.div 
//             className="gallery-filters"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, ease: [0.33, 0.1, 0.25, 1] }}
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 className={`gallery-filter-btn ${filter === category ? 'active' : ''}`}
//                 onClick={() => setFilter(category)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="gallery-grid-section">
//         <div className="gallery-container">
//           <motion.div 
//             className="gallery-grid"
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             layout
//           >
//             <AnimatePresence mode="popLayout">
//               {filteredItems.map((item, index) => (
//                 <motion.div 
//                   className={`gallery-card card-${item.accent}`}
//                   key={item.title}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   layout
//                   whileHover={{ y: -6 }}
//                   onClick={() => setSelectedImage(item)}
//                 >
//                   {/* Image Container */}
//                   <div className="gallery-card-image">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       loading="lazy"
//                     />
//                     <div className="gallery-card-image-overlay" />
                    
//                     {/* Category Badge */}
//                     <div className="gallery-card-badge">
//                       <span className="gallery-card-badge-dot" />
//                       <span className="gallery-card-badge-text">{item.category}</span>
//                     </div>

//                     {/* View Icon */}
//                     <div className="gallery-card-view">
//                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                         <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
//                         <path d="M1 10C3 5 7 2 10 2C13 2 17 5 19 10C17 15 13 18 10 18C7 18 3 15 1 10Z" stroke="currentColor" strokeWidth="1.5"/>
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="gallery-card-content">
//                     <h3 className="gallery-card-title">{item.title}</h3>
//                     <p className="gallery-card-description">{item.description}</p>
//                   </div>

//                   {/* Accent Line */}
//                   <div className="gallery-card-accent" />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* Empty State */}
//           {filteredItems.length === 0 && (
//             <motion.div 
//               className="gallery-empty"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <p>No images found in this category.</p>
//               <button onClick={() => setFilter("All")}>View All Images</button>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div 
//             className="gallery-lightbox"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div 
//               className="gallery-lightbox-content"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.33, 0.1, 0.25, 1] }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button 
//                 className="gallery-lightbox-close"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </button>

//               {/* Image */}
//               <div className="gallery-lightbox-image">
//                 <img src={selectedImage.image} alt={selectedImage.title} />
//               </div>

//               {/* Info */}
//               <div className="gallery-lightbox-info">
//                 <span className="gallery-lightbox-category">{selectedImage.category}</span>
//                 <h3 className="gallery-lightbox-title">{selectedImage.title}</h3>
//                 <p className="gallery-lightbox-description">{selectedImage.description}</p>
//               </div>

//               {/* Navigation */}
//               <div className="gallery-lightbox-nav">
//                 <button 
//                   className="gallery-lightbox-nav-btn"
//                   onClick={() => {
//                     const currentIndex = filteredItems.findIndex(item => item.title === selectedImage.title);
//                     const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
//                     setSelectedImage(filteredItems[prevIndex]);
//                   }}
//                 >
//                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//                 <span className="gallery-lightbox-counter">
//                   {filteredItems.findIndex(item => item.title === selectedImage.title) + 1} / {filteredItems.length}
//                 </span>
//                 <button 
//                   className="gallery-lightbox-nav-btn"
//                   onClick={() => {
//                     const currentIndex = filteredItems.findIndex(item => item.title === selectedImage.title);
//                     const nextIndex = (currentIndex + 1) % filteredItems.length;
//                     setSelectedImage(filteredItems[nextIndex]);
//                   }}
//                 >
//                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./gallerypage.css";

export default function GalleryPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const galleryItems = [
    // Education - 15 items
    { image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", title: "Education Support Program", category: "Education", description: "Supporting students through learning resources and mentorship.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80", title: "Scholarship Distribution", category: "Education", description: "Financial support for deserving students.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1523050854058-8df90910c6d6?w=600&q=80", title: "Digital Literacy Camp", category: "Education", description: "Computer skills for underprivileged students.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1571266028243-3716f02d2e2d?w=600&q=80", title: "School Supply Drive", category: "Education", description: "Books, bags, and stationery distribution.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80", title: "After-School Tutoring", category: "Education", description: "Extra academic support for students.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80", title: "Library Setup Initiative", category: "Education", description: "Setting up libraries in rural schools.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", title: "STEM Workshop", category: "Education", description: "Science and technology for young minds.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&q=80", title: "Career Counseling", category: "Education", description: "Guiding students toward brighter careers.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80", title: "Creative Arts Program", category: "Education", description: "Art and craft workshops for creativity.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80", title: "Reading Campaign", category: "Education", description: "Promoting reading in rural areas.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", title: "Teacher Training", category: "Education", description: "Modern teaching methodologies for educators.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80", title: "Language Classes", category: "Education", description: "English and language learning programs.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80", title: "Science Exhibition", category: "Education", description: "Showcasing student innovations.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1606326608605-20c5e4a5c3e7?w=600&q=80", title: "Educational Field Trip", category: "Education", description: "Visits to museums and science labs.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", title: "Parent Engagement", category: "Education", description: "Involving parents in education journey.", accent: "red" },

    // Healthcare - 15 items
    { image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80", title: "Community Healthcare Camp", category: "Healthcare", description: "Medical consultations and health screenings.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", title: "Free Eye Checkup", category: "Healthcare", description: "Vision screenings and free glasses.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", title: "Dental Health Drive", category: "Healthcare", description: "Dental checkups and oral hygiene.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", title: "Blood Donation Camp", category: "Healthcare", description: "Organizing blood donation drives.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80", title: "Mental Health Workshop", category: "Healthcare", description: "Mental health awareness programs.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1599084993091-1cb5c0727f33?w=600&q=80", title: "Women Health Camp", category: "Healthcare", description: "Specialized checkups for women.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1551601651-2a8555f1a29e?w=600&q=80", title: "Child Vaccination Drive", category: "Healthcare", description: "Essential vaccinations for children.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80", title: "Yoga & Wellness Camp", category: "Healthcare", description: "Physical and mental wellness programs.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&q=80", title: "First Aid Training", category: "Healthcare", description: "Basic first aid for community members.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80", title: "Nutrition Awareness", category: "Healthcare", description: "Healthy eating education programs.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80", title: "Mobile Clinic Service", category: "Healthcare", description: "Healthcare in remote villages.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80", title: "Diabetes Screening", category: "Healthcare", description: "Free diabetes testing and counseling.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80", title: "Senior Health Checkup", category: "Healthcare", description: "Health screenings for elderly.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80", title: "Hygiene Awareness Drive", category: "Healthcare", description: "Teaching proper hygiene practices.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", title: "Health Insurance Help", category: "Healthcare", description: "Enrolling families in health schemes.", accent: "green" },

    // Child Welfare - 15 items
    { image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80", title: "Child Welfare Program", category: "Child Welfare", description: "Education, nutrition, and development.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80", title: "Nutrition Support", category: "Child Welfare", description: "Nutritious meals for children.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1472162072942-fa3a5e0e6e6f?w=600&q=80", title: "Children's Day Event", category: "Child Welfare", description: "Fun events for children.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1566140967404-b8b393a3f5f2?w=600&q=80", title: "Playground Setup", category: "Child Welfare", description: "Safe play areas for kids.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80", title: "Sports Day", category: "Child Welfare", description: "Physical activity through sports.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80", title: "Art & Craft Workshop", category: "Child Welfare", description: "Nurturing creativity in children.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&q=80", title: "Child Rights Awareness", category: "Child Welfare", description: "Educating about child rights.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", title: "Summer Camp", category: "Child Welfare", description: "Fun and learning during summer.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1595967783491-3c4c3e1b6c7e?w=600&q=80", title: "Storytelling Sessions", category: "Child Welfare", description: "Inspiring imagination through stories.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1567057420212-5ed3b3e9f45c?w=600&q=80", title: "School Enrollment", category: "Child Welfare", description: "Getting children into schools.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1606103955054-99913abd77c8?w=600&q=80", title: "Health & Hygiene", category: "Child Welfare", description: "Teaching hygiene to children.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80", title: "Dance & Music", category: "Child Welfare", description: "Introducing performing arts.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?w=600&q=80", title: "Personality Development", category: "Child Welfare", description: "Building confidence in children.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1560421683-6856ea585c5f?w=600&q=80", title: "Environmental Education", category: "Child Welfare", description: "Teaching about nature conservation.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&q=80", title: "Gift Distribution", category: "Child Welfare", description: "Spreading joy during festivals.", accent: "blue" },

    // Skill Development - 15 items
    { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", title: "Youth Skill Workshop", category: "Skill Development", description: "Career guidance and employability.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80", title: "Computer Training", category: "Skill Development", description: "Basic to advanced computer skills.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", title: "Vocational Training", category: "Skill Development", description: "Hands-on vocational skills.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80", title: "Entrepreneurship Program", category: "Skill Development", description: "Business skills for entrepreneurs.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80", title: "Soft Skills Training", category: "Skill Development", description: "Communication and interpersonal skills.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&q=80", title: "Digital Marketing", category: "Skill Development", description: "Modern marketing techniques.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", title: "Tailoring & Design", category: "Skill Development", description: "Fashion design skills for women.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=600&q=80", title: "Electrician Training", category: "Skill Development", description: "Certified electrician programs.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&q=80", title: "Web Development", category: "Skill Development", description: "Coding and web development skills.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", title: "Public Speaking", category: "Skill Development", description: "Building confidence through speaking.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", title: "Accounting Basics", category: "Skill Development", description: "Financial literacy training.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", title: "Photography Workshop", category: "Skill Development", description: "Professional photography skills.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80", title: "Culinary Arts", category: "Skill Development", description: "Professional cooking training.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80", title: "Placement Preparation", category: "Skill Development", description: "Interview and job preparation.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80", title: "Leadership Program", category: "Skill Development", description: "Building leadership qualities.", accent: "red" },

    // Placement - 15 items
    { image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80", title: "Job Placement Drive", category: "Placement", description: "Connecting skills with jobs.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80", title: "Career Fair", category: "Placement", description: "Multiple employer events.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80", title: "Resume Workshop", category: "Placement", description: "Professional resume building.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80", title: "Mock Interviews", category: "Placement", description: "Interview practice sessions.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80", title: "Corporate Connect", category: "Placement", description: "Bridging job seekers and employers.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", title: "Success Stories", category: "Placement", description: "Celebrating job placements.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", title: "Recruitment Camp", category: "Placement", description: "On-the-spot recruitment drives.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80", title: "Industry Partnership", category: "Placement", description: "Building company partnerships.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&q=80", title: "Apprenticeship Program", category: "Placement", description: "Hands-on work experience.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80", title: "Women Employment Drive", category: "Placement", description: "Special placement for women.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80", title: "Campus Recruitment", category: "Placement", description: "College placement drives.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80", title: "Skill Assessment", category: "Placement", description: "Matching skills with jobs.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=600&q=80", title: "Job Portal Registration", category: "Placement", description: "Online job portal assistance.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&q=80", title: "Networking Event", category: "Placement", description: "Professional networking opportunities.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80", title: "Offer Distribution", category: "Placement", description: "Celebrating job offer letters.", accent: "green" },

    // CSR - 15 items
    { image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", title: "CSR Partnership Meet", category: "CSR", description: "Corporate collaborations for impact.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80", title: "Corporate Volunteer Day", category: "CSR", description: "Employees volunteering for causes.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", title: "CSR Project Launch", category: "CSR", description: "Launching new CSR initiatives.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", title: "Employee Engagement", category: "CSR", description: "Staff in social initiatives.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&q=80", title: "Impact Assessment", category: "CSR", description: "Reviewing CSR project outcomes.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80", title: "Community Development", category: "CSR", description: "CSR-funded infrastructure projects.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", title: "CSR Strategy Workshop", category: "CSR", description: "Planning with corporate partners.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80", title: "Grant Distribution", category: "CSR", description: "CSR grants for community projects.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80", title: "Partnership Signing", category: "CSR", description: "Formalizing CSR partnerships.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80", title: "Annual CSR Summit", category: "CSR", description: "CSR leaders knowledge sharing.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", title: "CSR Reporting", category: "CSR", description: "Compliance and reporting training.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80", title: "Employee Giving", category: "CSR", description: "Mobilizing employee contributions.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", title: "NGO Partnership", category: "CSR", description: "Connecting NGOs with CSR programs.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", title: "Sustainability Initiative", category: "CSR", description: "Environmental CSR projects.", accent: "blue" },
    { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", title: "CSR Awards", category: "CSR", description: "Recognizing CSR contributions.", accent: "blue" },

    // Environment - 15 items
    { image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", title: "Tree Plantation Drive", category: "Environment", description: "Green initiatives for sustainability.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80", title: "Clean-up Campaign", category: "Environment", description: "Community cleanliness drives.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80", title: "Recycling Workshop", category: "Environment", description: "Teaching recycling practices.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", title: "Nature Walk", category: "Environment", description: "Connecting with nature events.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80", title: "Solar Energy Camp", category: "Environment", description: "Renewable energy awareness.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80", title: "Water Conservation", category: "Environment", description: "Saving water initiatives.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", title: "Eco-Friendly Workshop", category: "Environment", description: "Sustainable living practices.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80", title: "Garden Project", category: "Environment", description: "Community gardening initiatives.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1526953208973-f6f01399e32a?w=600&q=80", title: "Plastic-Free Campaign", category: "Environment", description: "Reducing plastic usage.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1552799446-159ba9523315?w=600&q=80", title: "Climate Awareness", category: "Environment", description: "Climate change education.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=600&q=80", title: "Seed Ball Making", category: "Environment", description: "Seed ball distribution drives.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80", title: "Forest Conservation", category: "Environment", description: "Protecting forest areas.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80", title: "Beach Cleanup", category: "Environment", description: "Coastal area cleaning drives.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=600&q=80", title: "Environmental Rally", category: "Environment", description: "Awareness marches and rallies.", accent: "red" },
    { image: "https://images.unsplash.com/photo-1498925008800-019c7d59d903?w=600&q=80", title: "Green School Program", category: "Environment", description: "Eco-education in schools.", accent: "red" },

    // Community - 15 items
    { image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", title: "Food Distribution", category: "Community", description: "Food assistance for families.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80", title: "Community Gathering", category: "Community", description: "Bringing communities together.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80", title: "Relief Distribution", category: "Community", description: "Emergency relief support.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80", title: "Festival Celebration", category: "Community", description: "Celebrating festivals together.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", title: "Awareness Campaign", category: "Community", description: "Social awareness programs.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80", title: "Senior Support", category: "Community", description: "Elderly care in communities.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", title: "Women's Meet", category: "Community", description: "Women empowerment gatherings.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80", title: "Infrastructure Project", category: "Community", description: "Building community facilities.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=600&q=80", title: "Cultural Program", category: "Community", description: "Preserving cultural heritage.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80", title: "Self-Help Group", category: "Community", description: "Community savings groups.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80", title: "Sports Tournament", category: "Community", description: "Community sports events.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1603201667141-5322d62a4e97?w=600&q=80", title: "Legal Aid Camp", category: "Community", description: "Free legal assistance.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&q=80", title: "Winter Relief", category: "Community", description: "Blanket and warm clothes distribution.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80", title: "Civic Awareness", category: "Community", description: "Voter and civic education.", accent: "green" },
    { image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80", title: "Community Kitchen", category: "Community", description: "Feeding the hungry programs.", accent: "green" },
  ];

  const categories = ["All", "Education", "Healthcare", "Child Welfare", "Skill Development", "Placement", "CSR", "Environment", "Community"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    setVisibleCount(12);
  };

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
              <motion.button key={category} className={`glp-filter-btn ${filter === category ? 'glp-filter-active' : ''}`} onClick={() => handleFilterChange(category)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{category}</motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="glp-grid-section">
        <div className="glp-container">
          <motion.div className="glp-grid" layout>
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, index) => (
                <motion.div className={`glp-card glp-card-${item.accent}`} key={item.title} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: index * 0.02 }} layout whileHover={{ y: -5 }} onClick={() => setSelectedImage(item)}>
                  <div className="glp-card-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="glp-card-shade" />
                    <div className="glp-card-badge">
                      <span className={`glp-card-dot glp-dot-${item.accent}`} />
                      <span className="glp-card-badge-text">{item.category}</span>
                    </div>
                    <div className="glp-card-view">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1 9C3 4.5 6 2 9 2C12 2 15 4.5 17 9C15 13.5 12 16 9 16C6 16 3 13.5 1 9Z" stroke="currentColor" strokeWidth="1.5"/></svg>
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
              <button className="glp-load-btn" onClick={handleLoadMore}>View More </button>
            </motion.div>
          )}
          {filteredItems.length === 0 && (
            <motion.div className="glp-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p>No images found in this category.</p>
              <button onClick={() => handleFilterChange("All")}>View All Images</button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="glp-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
            <motion.div className="glp-lightbox-dialog" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button className="glp-lightbox-close" onClick={() => setSelectedImage(null)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <div className="glp-lightbox-image"><img src={selectedImage.image} alt={selectedImage.title} /></div>
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