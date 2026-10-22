// // // import { useEffect, useRef, useState } from "react";
// // // import "./Socialwall.css";

// // // // Real Instagram post/reel URLs
// // // const instagramPosts = [
// // //   {
// // //     id: "ig-1",
// // //     link: "https://www.instagram.com/reel/DZpTfJeSjtI/",
// // //   },
// // //   {
// // //     id: "ig-2",
// // //     link: "https://www.instagram.com/p/DZpSJnIEnPv/",
// // //   },
// // //   {
// // //     id: "ig-3",
// // //     link: "https://www.instagram.com/reel/DYziybcyZdW/",
// // //   },
// // //   {
// // //     id: "ig-4",
// // //     link: "https://www.instagram.com/reel/DX1sRRESqId/",
// // //   },
// // //   {
// // //     id: "ig-5",
// // //     link: "https://www.instagram.com/reel/DVgD89NklT7/",
// // //   },
// // // ];

// // // // Real LinkedIn post URLs (company page: uvagai-foundation)
// // // // LinkedIn's official embeddable format is built from the post's activity ID:
// // // // https://www.linkedin.com/embed/feed/update/urn:li:activity:<ID>
// // // const linkedinPosts = [
// // //   {
// // //     id: "li-1",
// // //     activityId: "7476170472624181249",
// // //     link: "https://www.linkedin.com/posts/uvagai-foundation_internationaldayagainstdrugabuse-drugfreesociety-activity-7476170472624181249-w_mx",
// // //   },
// // //   {
// // //     id: "li-2",
// // //     activityId: "7474397453971202048",
// // //     link: "https://www.linkedin.com/posts/uvagai-foundation_internationalyogaday2026-yogaday-yogaforoneearthonehealth-activity-7474397453971202048-gDBv",
// // //   },
// // //   {
// // //     id: "li-3",
// // //     activityId: "7472203675268993024",
// // //     link: "https://www.linkedin.com/posts/uvagai-foundation_uvagaifoundation-educationforall-communityimpact-activity-7472203675268993024-Cl-m",
// // //   },
// // //   {
// // //     id: "li-4",
// // //     activityId: "7470736485638545408",
// // //     link: "https://www.linkedin.com/posts/uvagai-foundation_uvagaifoundation-educationforall-womenempowerment-activity-7470736485638545408-VTd0",
// // //   },
// // //   {
// // //     id: "li-5",
// // //     activityId: "7471851061188653056",
// // //     link: "https://www.linkedin.com/posts/uvagai-foundation_worldblooddonorday-givebloodgivehope-donatebloodsavelives-activity-7471851061188653056-Attd",
// // //   },
// // // ];

// // // // Loads Instagram's embed.js script once, and re-processes embeds
// // // // whenever it's called (needed because Instagram's script only scans
// // // // the DOM once on load, but React mounts content after that).
// // // function loadInstagramEmbedScript(callback) {
// // //   const existingScript = document.getElementById("instagram-embed-script");

// // //   if (existingScript) {
// // //     // Script already loaded — just re-process any new blockquotes
// // //     if (window.instgrm) {
// // //       window.instgrm.Embeds.process();
// // //     }
// // //     if (callback) callback();
// // //     return;
// // //   }

// // //   const script = document.createElement("script");
// // //   script.id = "instagram-embed-script";
// // //   script.src = "https://www.instagram.com/embed.js";
// // //   script.async = true;
// // //   script.onload = () => {
// // //     if (window.instgrm) {
// // //       window.instgrm.Embeds.process();
// // //     }
// // //     if (callback) callback();
// // //   };
// // //   document.body.appendChild(script);
// // // }

// // // function InstagramEmbed({ link }) {
// // //   const containerRef = useRef(null);

// // //   useEffect(() => {
// // //     loadInstagramEmbedScript();
// // //   }, [link]);

// // //   return (
// // //     <div className="igw-embed-wrap" ref={containerRef}>
// // //       <blockquote
// // //         className="instagram-media"
// // //         data-instgrm-permalink={link}
// // //         data-instgrm-version="14"
// // //         style={{
// // //           background: "#FFF",
// // //           border: 0,
// // //           borderRadius: "12px",
// // //           margin: "0",
// // //           maxWidth: "360px",
// // //           minWidth: "300px",
// // //           width: "100%",
// // //         }}
// // //       >
// // //         <a href={link} target="_blank" rel="noopener noreferrer">
// // //           View this post on Instagram
// // //         </a>
// // //       </blockquote>
// // //     </div>
// // //   );
// // // }

// // // // LinkedIn uses a simple iframe embed (no script needed). The official
// // // // embeddable URL format is built from the post's activity ID.
// // // function LinkedInEmbed({ activityId, link }) {
// // //   const src = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`;

// // //   return (
// // //     <div className="igw-embed-wrap igw-li-embed-wrap">
// // //       <iframe
// // //         src={src}
// // //         title={`LinkedIn post ${activityId}`}
// // //         className="igw-li-iframe"
// // //         frameBorder="0"
// // //         allowFullScreen
// // //         loading="lazy"
// // //       />
// // //       <a
// // //         href={link}
// // //         target="_blank"
// // //         rel="noopener noreferrer"
// // //         className="igw-li-fallback-link"
// // //       >
// // //         View this post on LinkedIn
// // //       </a>
// // //     </div>
// // //   );
// // // }

// // // function SocialWall() {
// // //   // Which platform's posts are currently shown in the marquee
// // //   const [activeTab, setActiveTab] = useState("instagram");

// // //   // Re-process embeds after every render in case Instagram's script
// // //   // loaded before all blockquotes were in the DOM
// // //   useEffect(() => {
// // //     loadInstagramEmbedScript();
// // //   }, []);

// // //   // Re-process Instagram embeds whenever we switch back to the
// // //   // Instagram tab, since the blockquotes are freshly mounted
// // //   useEffect(() => {
// // //     if (activeTab === "instagram") {
// // //       loadInstagramEmbedScript();
// // //     }
// // //   }, [activeTab]);

// // //   const activePosts = activeTab === "instagram" ? instagramPosts : linkedinPosts;
// // //   // Duplicate posts for seamless infinite marquee
// // //   const marqueeItems = [...activePosts, ...activePosts];

// // //   return (
// // //     <section className="igw-section" id="social-wall">
// // //       <div className="igw-inner">
// // //         <div className="igw-header">
// // //           <span className="igw-eyebrow">
// // //             <span className="igw-dot" />
// // //             From the Field
// // //           </span>
// // //           <h2 className="igw-title">
// // //             Moments, As They <em>Happen</em>
// // //           </h2>
// // //           <p className="igw-subtitle">
// // //             Real classrooms, real volunteers, real progress — straight from our
// // //             Instagram and LinkedIn, where every post is a small part of the
// // //             bigger mission.
// // //           </p>

// // //           <div className="igw-tabs">
// // //             <button
// // //               type="button"
// // //               className={`igw-tab-btn${activeTab === "instagram" ? " igw-tab-btn-active" : ""}`}
// // //               onClick={() => setActiveTab("instagram")}
// // //             >
// // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
// // //                 <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
// // //                 <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
// // //                 <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
// // //               </svg>
// // //               Instagram
// // //             </button>
// // //             <button
// // //               type="button"
// // //               className={`igw-tab-btn${activeTab === "linkedin" ? " igw-tab-btn-active" : ""}`}
// // //               onClick={() => setActiveTab("linkedin")}
// // //             >
// // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
// // //                 <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
// // //                 <circle cx="7.2" cy="8" r="1.4" fill="currentColor" />
// // //                 <rect x="6" y="10.5" width="2.4" height="7.5" fill="currentColor" />
// // //                 <path
// // //                   d="M11.5 10.5h2.3v1.3c.5-.8 1.4-1.5 2.9-1.5 2.2 0 3.3 1.4 3.3 3.9v4.8h-2.4v-4.3c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8v4.4h-2.4v-7.5z"
// // //                   fill="currentColor"
// // //                 />
// // //               </svg>
// // //               LinkedIn
// // //             </button>
// // //           </div>

// // //           <a
// // //             href={
// // //               activeTab === "instagram"
// // //                 ? "https://www.instagram.com/uvagaifoundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
// // //                 : "https://www.linkedin.com/company/uvagai-foundation/"
// // //             }
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="igw-handle"
// // //           >
// // //             {activeTab === "instagram" ? "@uvagaifoundation" : "UVAGAI Foundation on LinkedIn"}
// // //           </a>
// // //         </div>

// // //         <div className="igw-marquee-outer">
// // //           <div className="igw-marquee-track">
// // //             {marqueeItems.map((post, i) => (
// // //               <div className="igw-marquee-item" key={`${post.id}-${i}`}>
// // //                 {activeTab === "linkedin" ? (
// // //                   <LinkedInEmbed activityId={post.activityId} link={post.link} />
// // //                 ) : (
// // //                   <InstagramEmbed link={post.link} />
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="igw-footer">
// // //           <a
// // //             href={
// // //               activeTab === "instagram"
// // //                 ? "https://instagram.com/uvagai_in"
// // //                 : "https://www.linkedin.com/company/uvagai-foundation/"
// // //             }
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="igw-cta"
// // //           >
// // //             Follow our journey
// // //             <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
// // //               <path
// // //                 d="M5 12h14M13 6l6 6-6 6"
// // //                 stroke="white"
// // //                 strokeWidth="2.2"
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //               />
// // //             </svg>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default SocialWall;

// // import { useEffect, useRef } from "react";
// // import { motion, useInView } from "framer-motion";
// // import "./Socialwall.css";

// // const instagramPosts = [
// //   {
// //     id: "ig-1",
// //     link: "https://www.instagram.com/reel/DZpTfJeSjtI/",
// //   },
// //   {
// //     id: "ig-2",
// //     link: "https://www.instagram.com/p/DZpSJnIEnPv/",
// //   },
// //   {
// //     id: "ig-3",
// //     link: "https://www.instagram.com/reel/DYziybcyZdW/",
// //   },
// //   {
// //     id: "ig-4",
// //     link: "https://www.instagram.com/reel/DX1sRRESqId/",
// //   },
// //   {
// //     id: "ig-5",
// //     link: "https://www.instagram.com/reel/DVgD89NklT7/",
// //   },
// // ];

// // function loadInstagramEmbedScript() {
// //   const existingScript = document.getElementById("sw-instagram-embed-script");
// //   if (existingScript) {
// //     if (window.instgrm) {
// //       window.instgrm.Embeds.process();
// //     }
// //     return;
// //   }

// //   const script = document.createElement("script");
// //   script.id = "sw-instagram-embed-script";
// //   script.src = "https://www.instagram.com/embed.js";
// //   script.async = true;
// //   script.onload = () => {
// //     if (window.instgrm) {
// //       window.instgrm.Embeds.process();
// //     }
// //   };
// //   document.body.appendChild(script);
// // }

// // function InstagramEmbed({ link }) {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     loadInstagramEmbedScript();
// //   }, [link]);

// //   return (
// //     <div className="sw-embed-wrap" ref={containerRef}>
// //       <blockquote
// //         className="instagram-media"
// //         data-instgrm-permalink={link}
// //         data-instgrm-version="14"
// //         style={{
// //           background: "#FFF",
// //           border: 0,
// //           borderRadius: "12px",
// //           margin: "0",
// //           maxWidth: "320px",
// //           minWidth: "280px",
// //           width: "100%",
// //         }}
// //       >
// //         <a href={link} target="_blank" rel="noopener noreferrer">
// //           View this post on Instagram
// //         </a>
// //       </blockquote>
// //     </div>
// //   );
// // }

// // export default function SocialWall() {
// //   const sectionRef = useRef(null);
// //   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

// //   useEffect(() => {
// //     loadInstagramEmbedScript();
// //   }, []);

// //   // Duplicate posts for seamless infinite marquee
// //   const marqueeItems = [...instagramPosts, ...instagramPosts];

// //   return (
// //     <section className="sw-section" ref={sectionRef}>
// //       <div className="sw-container">
        
// //         {/* Header */}
// //         <motion.div
// //           className="sw-header"
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
// //         >
// //           <div className="sw-header-tag">
// //             <span className="sw-header-tag-line" />
// //             <span className="sw-header-tag-text">Social Wall</span>
// //           </div>
// //           <h2 className="sw-header-title">
// //             Moments, As They <span className="sw-text-red">Happen</span>
// //           </h2>
// //           <p className="sw-header-desc">
// //             Real classrooms, real volunteers, real progress — straight from our 
// //             Instagram, where every post is a small part of the bigger mission.
// //           </p>
          
// //           <a
// //             href="https://www.instagram.com/uvagaifoundation"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="sw-header-handle"
// //           >
// //             <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
// //               <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
// //               <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
// //               <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
// //             </svg>
// //             @uvagaifoundation
// //           </a>
// //         </motion.div>
// //       </div>

// //       {/* Marquee Row 1 - Left to Right */}
// //       <div className="sw-marquee-wrap">
// //         <motion.div 
// //           className="sw-marquee-track"
// //           animate={{
// //             x: [0, "-50%"],
// //           }}
// //           transition={{
// //             x: {
// //               duration: 35,
// //               repeat: Infinity,
// //               ease: "linear",
// //             },
// //           }}
// //         >
// //           {marqueeItems.map((post, index) => (
// //             <div className="sw-marquee-item" key={`marquee1-${index}`}>
// //               <InstagramEmbed link={post.link} />
// //             </div>
// //           ))}
// //         </motion.div>
// //       </div>

// //       {/* Marquee Row 2 - Right to Left */}
// //       <div className="sw-marquee-wrap">
// //         <motion.div 
// //           className="sw-marquee-track"
// //           animate={{
// //             x: ["-50%", "0%"],
// //           }}
// //           transition={{
// //             x: {
// //               duration: 35,
// //               repeat: Infinity,
// //               ease: "linear",
// //             },
// //           }}
// //         >
// //           {marqueeItems.map((post, index) => (
// //             <div className="sw-marquee-item" key={`marquee2-${index}`}>
// //               <InstagramEmbed link={post.link} />
// //             </div>
// //           ))}
// //         </motion.div>
// //       </div>

// //       {/* CTA */}
// //       <div className="sw-container">
// //         <motion.div
// //           className="sw-cta"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6, delay: 0.5 }}
// //         >
// //           <a
// //             href="https://www.instagram.com/uvagaifoundation"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="sw-cta-btn"
// //           >
// //             <span>Follow Our Journey</span>
// //             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// //               <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //             </svg>
// //           </a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// import { useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import "./Socialwall.css";

// const instagramPosts = [
//   {
//     id: "ig-1",
//     link: "https://www.instagram.com/reel/DZpTfJeSjtI/",
//   },
//   {
//     id: "ig-2",
//     link: "https://www.instagram.com/p/DZpSJnIEnPv/",
//   },
//   {
//     id: "ig-3",
//     link: "https://www.instagram.com/reel/DYziybcyZdW/",
//   },
// ];

// const facebookPosts = [
//   {
//     id: "fb-1",
//     link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example1",
//     embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example1&show_text=true&width=350",
//   },
//   {
//     id: "fb-2",
//     link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example2",
//     embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example2&show_text=true&width=350",
//   },
//   {
//     id: "fb-3",
//     link: "https://www.facebook.com/uvagaifoundation/posts/pfbid02example3",
//     embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example3&show_text=true&width=350",
//   },
// ];

// function loadInstagramEmbedScript() {
//   const existingScript = document.getElementById("sw-instagram-embed-script");
//   if (existingScript) {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//     return;
//   }

//   const script = document.createElement("script");
//   script.id = "sw-instagram-embed-script";
//   script.src = "https://www.instagram.com/embed.js";
//   script.async = true;
//   script.onload = () => {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//   };
//   document.body.appendChild(script);
// }

// function InstagramEmbed({ link }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     loadInstagramEmbedScript();
//   }, [link]);

//   return (
//     <div className="sw-embed-wrap" ref={containerRef}>
//       <blockquote
//         className="instagram-media"
//         data-instgrm-permalink={link}
//         data-instgrm-version="14"
//         style={{
//           background: "#FFF",
//           border: 0,
//           borderRadius: "12px",
//           margin: "0",
//           maxWidth: "320px",
//           minWidth: "280px",
//           width: "100%",
//         }}
//       >
//         <a href={link} target="_blank" rel="noopener noreferrer">
//           View this post on Instagram
//         </a>
//       </blockquote>
//     </div>
//   );
// }

// function FacebookEmbed({ embedUrl, link }) {
//   return (
//     <div className="sw-embed-wrap sw-fb-embed-wrap">
//       <iframe
//         src={embedUrl}
//         title="Facebook post"
//         className="sw-fb-iframe"
//         style={{
//           border: "none",
//           overflow: "hidden",
//           width: "320px",
//           height: "400px",
//           borderRadius: "12px",
//         }}
//         scrolling="no"
//         frameBorder="0"
//         allowFullScreen
//         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//       />
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="sw-fb-fallback-link"
//       >
//         View this post on Facebook
//       </a>
//     </div>
//   );
// }

// export default function SocialWall() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

//   useEffect(() => {
//     loadInstagramEmbedScript();
//   }, []);

//   // Combine and duplicate for marquee
//   const allPosts = [...instagramPosts, ...facebookPosts];
//   const marqueeItems = [...allPosts, ...allPosts];

//   return (
//     <section className="sw-section" ref={sectionRef}>
//       <div className="sw-container">
        
//         {/* Header */}
//         <motion.div
//           className="sw-header"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
//         >
//           <div className="sw-header-tag">
//             <span className="sw-header-tag-line" />
//             <span className="sw-header-tag-text">Social Wall</span>
//           </div>
//           <h2 className="sw-header-title">
//             Moments, As They <span className="sw-text-red">Happen</span>
//           </h2>
//           <p className="sw-header-desc">
//             Real classrooms, real volunteers, real progress — straight from our 
//             social media, where every post is a small part of the bigger mission.
//           </p>
          
//           <div className="sw-header-links">
//             <a
//               href="https://www.instagram.com/uvagaifoundation"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="sw-header-handle sw-handle-ig"
//             >
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                 <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
//                 <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
//                 <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
//               </svg>
//               @uvagaifoundation
//             </a>
//             <span className="sw-header-sep">•</span>
//             <a
//               href="https://www.facebook.com/uvagaifoundation"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="sw-header-handle sw-handle-fb"
//             >
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               /uvagaifoundation
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Marquee Row 1 - Left to Right */}
//       <div className="sw-marquee-wrap">
//         <motion.div 
//           className="sw-marquee-track"
//           animate={{
//             x: [0, "-50%"],
//           }}
//           transition={{
//             x: {
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             },
//           }}
//         >
//           {marqueeItems.map((post, index) => (
//             <div className="sw-marquee-item" key={`marquee1-${post.id}-${index}`}>
//               {post.id.startsWith("ig") ? (
//                 <InstagramEmbed link={post.link} />
//               ) : (
//                 <FacebookEmbed embedUrl={post.embedUrl} link={post.link} />
//               )}
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Marquee Row 2 - Right to Left */}
//       <div className="sw-marquee-wrap">
//         <motion.div 
//           className="sw-marquee-track"
//           animate={{
//             x: ["-50%", "0%"],
//           }}
//           transition={{
//             x: {
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             },
//           }}
//         >
//           {marqueeItems.map((post, index) => (
//             <div className="sw-marquee-item" key={`marquee2-${post.id}-${index}`}>
//               {post.id.startsWith("ig") ? (
//                 <InstagramEmbed link={post.link} />
//               ) : (
//                 <FacebookEmbed embedUrl={post.embedUrl} link={post.link} />
//               )}
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* CTA */}
//       <div className="sw-container">
//         <motion.div
//           className="sw-cta"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <div className="sw-cta-buttons">
//             <a
//               href="https://www.instagram.com/uvagaifoundation"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="sw-cta-btn sw-cta-ig"
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                 <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
//                 <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
//                 <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
//               </svg>
//               <span>Follow on Instagram</span>
//             </a>
//             <a
//               href="https://www.facebook.com/uvagaifoundation"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="sw-cta-btn sw-cta-fb"
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <span>Follow on Facebook</span>
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Socialwall.css";

const instagramPosts = [
  {
    id: "ig-1",
    link: "https://www.instagram.com/reel/DZpTfJeSjtI/",
  },
  {
    id: "ig-2",
    link: "https://www.instagram.com/p/DZpSJnIEnPv/",
  },
  {
    id: "ig-3",
    link: "https://www.instagram.com/reel/DYziybcyZdW/",
  },
  {
    id: "ig-4",
    link: "https://www.instagram.com/reel/DX1sRRESqId/",
  },
  {
    id: "ig-5",
    link: "https://www.instagram.com/reel/DVgD89NklT7/",
  },
];

const facebookPosts = [
  {
    id: "fb-1",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example1&show_text=true&width=350",
  },
  {
    id: "fb-2",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example2&show_text=true&width=350",
  },
  {
    id: "fb-3",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example3&show_text=true&width=350",
  },
  {
    id: "fb-4",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example4&show_text=true&width=350",
  },
  {
    id: "fb-5",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02example5&show_text=true&width=350",
  },
];

function loadInstagramEmbedScript() {
  const existingScript = document.getElementById("sw-instagram-embed-script");
  if (existingScript) {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
    return;
  }

  const script = document.createElement("script");
  script.id = "sw-instagram-embed-script";
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };
  document.body.appendChild(script);
}

function InstagramEmbed({ link }) {
  const containerRef = useRef(null);

  useEffect(() => {
    loadInstagramEmbedScript();
  }, [link]);

  return (
    <div className="sw-embed-wrap" ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={link}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          margin: "0",
          maxWidth: "320px",
          minWidth: "280px",
          width: "100%",
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
}

function FacebookEmbed({ embedUrl }) {
  return (
    <div className="sw-embed-wrap sw-fb-embed">
      <iframe
        src={embedUrl}
        title="Facebook post"
        className="sw-fb-iframe"
        style={{
          border: "none",
          overflow: "hidden",
          width: "320px",
          height: "380px",
          borderRadius: "12px",
          background: "#FFF",
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}

export default function SocialWall() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState("instagram");

  useEffect(() => {
    loadInstagramEmbedScript();
  }, []);

  useEffect(() => {
    if (activeTab === "instagram") {
      loadInstagramEmbedScript();
    }
  }, [activeTab]);

  const activePosts = activeTab === "instagram" ? instagramPosts : facebookPosts;
  const marqueeItems = [...activePosts, ...activePosts];

  return (
    <section className="sw-section" ref={sectionRef}>
      <div className="sw-container">
        
        {/* Header */}
        <motion.div
          className="sw-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="sw-header-tag">
            <span className="sw-header-tag-line" />
            <span className="sw-header-tag-text">Social Wall</span>
          </div>
          <h2 className="sw-header-title">
            Moments, As They <span className="sw-text-red">Happen</span>
          </h2>
          <p className="sw-header-desc">
            Real classrooms, real volunteers, real progress — straight from our 
            social media, where every post is a small part of the bigger mission.
          </p>

          {/* Toggle Tabs */}
          <div className="sw-tabs">
            <button
              className={`sw-tab ${activeTab === "instagram" ? "sw-tab-active sw-tab-ig" : ""}`}
              onClick={() => setActiveTab("instagram")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
              </svg>
              Instagram
            </button>
            <button
              className={`sw-tab ${activeTab === "facebook" ? "sw-tab-active sw-tab-fb" : ""}`}
              onClick={() => setActiveTab("facebook")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Facebook
            </button>
          </div>
        </motion.div>
      </div>

      {/* Single Marquee Row */}
      <div className="sw-marquee-wrap" key={`marquee-${activeTab}`}>
        <motion.div 
          className="sw-marquee-track"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((post, index) => (
            <div className="sw-marquee-item" key={`${post.id}-${index}`}>
              {activeTab === "instagram" ? (
                <InstagramEmbed link={post.link} />
              ) : (
                <FacebookEmbed embedUrl={post.embedUrl} />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      {/* <div className="sw-container">
        <motion.div
          className="sw-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={
              activeTab === "instagram"
                ? "https://www.instagram.com/uvagaifoundation"
                : "https://www.facebook.com/uvagaifoundation"
            }
            target="_blank"
            rel="noopener noreferrer"
            className={`sw-cta-btn ${activeTab === "instagram" ? "sw-cta-ig" : "sw-cta-fb"}`}
          >
            <span>
              {activeTab === "instagram" ? "Follow on Instagram" : "Follow on Facebook"}
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div> */}
    </section>
  );
}