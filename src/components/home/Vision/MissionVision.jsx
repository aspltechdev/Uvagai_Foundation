// import { useRef } from "react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import "./MissionVision.css";

// // 👇 Update these two paths to match your actual images inside src/assets
// // Adjust the number of "../" depending on where this file sits relative to src/assets
// // (this file is at: src/components/home/Vision/MissionVision.jsx -> assets is 3 levels up)
// import visionImg from "../../../assets/m.png";
// import missionImg from "../../../assets/program44.png"; // <-- change to your real mission image filename

// export default function VisionMissionHome() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
//   const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
//   const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
//   const visionImageScale = useTransform(scrollYProgress, [0, 0.6], [1.15, 1]);
//   const missionImageScale = useTransform(scrollYProgress, [0.3, 0.8], [1.15, 1]);
//   const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
//     },
//   };

//   const imageRevealVariants = {
//     hidden: { opacity: 0, scale: 1.1, clipPath: 'inset(0% 0% 100% 0%)' },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       clipPath: 'inset(0% 0% 0% 0%)',
//       transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
//     },
//   };

//   return (
//     <section className="vm-home-section" ref={sectionRef}>
      
//       {/* Background */}
//       <motion.div className="vm-home-bg" style={{ y: bgY }} />
      
//       {/* Ambient Orbs */}
//       <motion.div className="vm-home-orb vm-home-orb-red" style={{ opacity: glowOpacity }} />
//       <motion.div className="vm-home-orb vm-home-orb-green" style={{ opacity: glowOpacity }} />

//       {/* Subtle Grid */}
//       <div className="vm-home-grid-pattern" />

//       <div className="vm-home-container">
        
//         {/* Section Header */}
//         <motion.div 
//           className="vm-home-header"
//           style={{ y: headingY, opacity: headingOpacity }}
//         >
//           <motion.div 
//             className="vm-home-eyebrow"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <motion.span 
//               className="vm-home-eyebrow-line"
//               animate={{ width: [20, 32, 20] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             />
//             <span>Vision & Mission</span>
//             <motion.span 
//               className="vm-home-eyebrow-line"
//               animate={{ width: [20, 32, 20] }}
//               transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
//             />
//           </motion.div>

//           <motion.h2 
//             className="vm-home-title"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Our <span className="text-red">Vision</span> &{" "}
//             <span className="text-green">Mission</span>
//           </motion.h2>

//           <motion.p 
//             className="vm-home-subtitle"
//             initial={{ opacity: 0, y: 15 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Since 2019, Uvagai Foundation has been dedicated to
//             empowering children, families, and communities through
//             education, healthcare, social welfare, environmental
//             responsibility, and sustainable development initiatives.
//           </motion.p>
//         </motion.div>

//         {/* Vision & Mission Cards */}
//         <motion.div 
//           className="vm-home-grid"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
          
//           {/* Vision Card */}
//           <motion.div 
//             className="vm-home-card vm-vision-card"
//             variants={cardVariants}
//             whileHover={{ y: -6 }}
//           >
//             <motion.div 
//               className="vm-home-card-image"
//               style={{ scale: visionImageScale }}
//             >
//               <motion.div 
//                 className="vm-home-card-image-wrapper"
//                 variants={imageRevealVariants}
//               >
//                 <img
//                   src={visionImg}
//                   alt="Uvagai Foundation Vision"
//                 />
//                 <div className="vm-home-card-image-overlay" />
//               </motion.div>

//               <div className="vm-home-card-image-label">
//                 <span className="vm-home-card-image-label-text">
//                   Our Vision
//                 </span>
//               </div>
//             </motion.div>

//             <div className="vm-home-card-body">
//               <div className="vm-home-card-number">01</div>

//               <h3 className="vm-home-card-title">
//                 A World of <span className="text-red">Hope</span>,{" "}
//                 <span className="text-green">Opportunity</span> & Dignity
//               </h3>

//               <p className="vm-home-card-text">
//                 To create a society where every child, family, and individual
//                 has access to quality education, healthcare, and opportunities
//                 that empower them to lead a dignified and fulfilling life.
//               </p>

//               <p className="vm-home-card-text">
//                 We envision inclusive communities built on compassion,
//                 equality, sustainability, and collective responsibility,
//                 ensuring that no one is left behind.
//               </p>

//               <div className="vm-home-motto">
//                 <span className="vm-home-motto-quote">"</span>
//                 <p className="vm-home-motto-text">
//                   Creating Hope. Inspiring Change.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Mission Card */}
//           <motion.div 
//             className="vm-home-card vm-mission-card"
//             variants={cardVariants}
//             whileHover={{ y: -6 }}
//           >
//             <motion.div 
//               className="vm-home-card-image"
//               style={{ scale: missionImageScale }}
//             >
//               <motion.div 
//                 className="vm-home-card-image-wrapper"
//                 variants={imageRevealVariants}
//               >
//                 <img
//                   src={missionImg}
//                   alt="Uvagai Foundation Mission"
//                 />
//                 <div className="vm-home-card-image-overlay" />
//               </motion.div>

//               <div className="vm-home-card-image-label vm-mission-label">
//                 <span className="vm-home-card-image-label-text">
//                   Our Mission
//                 </span>
//               </div>
//             </motion.div>

//             <div className="vm-home-card-body">
//               <div className="vm-home-card-number">02</div>

//               <h3 className="vm-home-card-title">
//                 Turning <span className="text-green">Compassion</span> Into Action
//               </h3>

//               <p className="vm-home-card-text">
//                 Through education & placement support, healthcare initiatives, child
//                 welfare, elderly care, environmental sustainability,
//                 humanitarian assistance, and community development programs,
//                 we create meaningful opportunities for individuals and families.
//               </p>

//               <p className="vm-home-card-text">
//                 By working alongside volunteers, institutions, communities, individual sponsors 
//                 and CSR partners, we strive to deliver measurable social
//                 impact and sustainable transformation where it is needed most.
//               </p>

//               <div className="vm-home-motto">
//                 <span className="vm-home-motto-quote">"</span>
//                 <p className="vm-home-motto-text">
//                   Empowering Communities. Transforming Lives.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//         </motion.div>

//         {/* Bottom Link */}
//         <motion.div 
//           className="vm-home-bottom"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.7 }}
//         >
//           <motion.a 
//             href="/vision-mission" 
//             className="vm-home-link"
//             whileHover={{ x: 5 }}
//           >
//             <span>Discover How We're Creating Lasting Impact</span>
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </motion.a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./MissionVision.css";

import visionImg from "../../../assets/m.png";
import missionImg from "../../../assets/program44.png";

export default function VisionMissionHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="vms-section" ref={sectionRef}>
      <div className="vms-container">
        
        {/* Section Header */}
        <motion.div
          className="vms-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="vms-header-tag">
            <span className="vms-header-tag-line" />
            <span className="vms-header-tag-text">Our Purpose</span>
          </div>
          <h2 className="vms-header-title">
            Our <span className="vms-text-red">Vision</span> &{" "}
            <span className="vms-text-green">Mission</span>
          </h2>
          <p className="vms-header-desc">
            Since 2019, Uvagai Foundation has been dedicated to empowering 
            children, families, and communities through education, healthcare, 
            and sustainable development initiatives.
          </p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <motion.div
          className="vms-grid"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
        >
          {/* Vision Card */}
          <motion.div
            className="vms-card vms-card-vision"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } },
            }}
            whileHover={{ y: -5 }}
          >
            <div className="vms-card-media">
              <img src={visionImg} alt="Our Vision" />
              <div className="vms-card-media-shade" />
              <span className="vms-card-badge vms-badge-red">Vision</span>
            </div>

            <div className="vms-card-body">
              {/* <div className="vms-card-num">01</div> */}
              <h3 className="vms-card-title">
                A World of <span className="vms-text-red">Hope</span>,{" "}
                <span className="vms-text-green">Opportunity</span> & Dignity
              </h3>
              <p className="vms-card-text">
                To create a society where every child, family, and individual has 
                access to quality education, healthcare, and opportunities that 
                empower them to lead a dignified and fulfilling life.
              </p>
              <p className="vms-card-text">
                We envision inclusive communities built on compassion, equality, 
                sustainability, and collective responsibility, ensuring that no 
                one is left behind.
              </p>
              <div className="vms-card-quote">
                <span className="vms-card-quote-mark">"</span>
                <p>Creating Hope. Inspiring Change.</p>
              </div>
            </div>

            <div className="vms-card-line vms-line-red" />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="vms-card vms-card-mission"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 0.1, 0.25, 1] } },
            }}
            whileHover={{ y: -5 }}
          >
            <div className="vms-card-media">
              <img src={missionImg} alt="Our Mission" />
              <div className="vms-card-media-shade" />
              <span className="vms-card-badge vms-badge-green">Mission</span>
            </div>

            <div className="vms-card-body">
              {/* <div className="vms-card-num">02</div> */}
              <h3 className="vms-card-title">
                Turning <span className="vms-text-green">Compassion</span> Into Action
              </h3>
              <p className="vms-card-text">
                Through education & placement support, healthcare initiatives, 
                child welfare, elderly care, environmental sustainability, 
                humanitarian assistance, and community development programs, we 
                create meaningful opportunities for individuals and families.
              </p>
              <p className="vms-card-text">
                By working alongside volunteers, institutions, communities, 
                individual sponsors and CSR partners, we strive to deliver 
                measurable social impact and sustainable transformation where 
                it is needed most.
              </p>
              <div className="vms-card-quote">
                <span className="vms-card-quote-mark">"</span>
                <p>Empowering Communities. Transforming Lives.</p>
              </div>
            </div>

            <div className="vms-card-line vms-line-green" />
          </motion.div>
        </motion.div>

        {/* Bottom Link */}
        <motion.div
          className="vms-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="/vision-mission" className="vms-bottom-link">
            <span>Discover How We're Creating Lasting Impact</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}