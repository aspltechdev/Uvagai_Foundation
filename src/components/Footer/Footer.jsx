// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./Footer.css";
// import logo from "../../assets/logo.png";   // <-- fixed path

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const navigate = useNavigate();

//   const quickLinks = [
//     { to: "/", label: "Home" },
//     { to: "/about-us", label: "About Us" },
//     { to: "/vision-mission", label: "Vision & Mission" },
//     { to: "/programs", label: "Programs" },
//     { to: "/events", label: "Events" },
//     { to: "/gallerypage", label: "Gallery" },
//     { to: "/contact", label: "Contact" },
//   ];

//   const getInvolved = [
//     { to: "/volunteers", hash: "cta", label: "Volunteer" },
//     { to: "/csr-partnership", hash: "cta", label: "CSR Partnership" },
//     { to: "/donate", hash: "cta", label: "Donate" },
//     { to: "/annual-reports", hash: "cta", label: "Annual Reports" },
//     { to: "/contact", hash: "cta", label: "Partner With Us" },
//   ];

//   const focusAreas = [
//     "Education & Youth Empowerment",
//     "Healthcare & Wellness",
//     "Child Welfare",
//     "Elderly Care",
//     "Environmental Sustainability",
//     "Community Development",
//   ];

//   const socialLinks = [
//     { href: "https://www.facebook.com/uvagaifoundation", label: "Facebook", icon: "FB" },
//     { href: "https://www.instagram.com/uvagaifoundation", label: "Instagram", icon: "IG" },
//     { href: "https://www.linkedin.com/company/uvagai-foundation/", label: "LinkedIn", icon: "LN" },
//     { href: "https://www.youtube.com/@UvagaiFoundation", label: "YouTube", icon: "YT" },
//   ];

//   const goToTop = (to) => (e) => {
//     e.preventDefault();
//     navigate(to);
//     requestAnimationFrame(() => {
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     });
//   };

//   const goToSection = (to, hash) => (e) => {
//     e.preventDefault();
//     navigate(`${to}#${hash}`);
//     setTimeout(() => {
//       const el = document.getElementById(hash);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "center" });
//       } else {
//         window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//       }
//     }, 80);
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-top-line" />

//       <div className="ftr-container">
//         <div className="ftr-grid">
          
//           {/* Brand Column */}
//           <div className="ftr-col ftr-col-brand">
//             <motion.div 
//               className="ftr-brand"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <img 
//                 src={logo} 
//                 alt="Uvagai Foundation" 
//                 className="footer-logo-img" 
//               />
//             </motion.div>

//             <p className="ftr-desc">
//               Uplifting lives through education, healthcare, child welfare, 
//               elderly care, environmental sustainability, and community 
//               development initiatives.
//             </p>

//             <p className="ftr-motto">
//               Empowering Communities. Transforming Lives.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="ftr-col">
//             <h4 className="ftr-heading">Quick Links</h4>
//             <ul className="ftr-list">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link to={link.to} className="ftr-link" onClick={goToTop(link.to)}>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Get Involved */}
//           <div className="ftr-col">
//             <h4 className="ftr-heading">Get Involved</h4>
//             <ul className="ftr-list">
//               {getInvolved.map((link, index) => (
//                 <li key={index}>
//                   <Link to={link.to} className="ftr-link" onClick={goToTop(link.to)}>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Focus Areas */}
//           <div className="ftr-col">
//             <h4 className="ftr-heading">Focus Areas</h4>
//             <ul className="ftr-list">
//               {focusAreas.map((area, index) => (
//                 <li key={index} className="ftr-area-item">
//                   <span className={`ftr-area-dot ftr-area-dot-${index % 3}`} />
//                   {area}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="ftr-col ftr-col-contact">
//             <h4 className="ftr-heading">Contact</h4>
            
//             <div className="ftr-contact-list">
//               <div className="ftr-contact-row">
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                   <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
//                 </svg>
//                 <span>Chennai, Tamil Nadu, India</span>
//               </div>

//               <div className="ftr-contact-row">
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                   <path d="M1.5 3.5L7 7L12.5 3.5M1.5 3.5V10.5H12.5V3.5M1.5 3.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <a href="mailto:info@uvagai.org" className="ftr-contact-link">info@uvagai.org</a>
//               </div>

//               <motion.div 
//                 className="footer-contact-item"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: 0.2 }}
//               >
//                 <span className="footer-contact-icon">
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <path d="M3 2H5.5L6.5 5L4.5 6C5.5 8 7.5 10 9.5 11L10.5 9L13.5 10V12.5C13.5 13.3 12.8 14 12 14C6.5 14 2 9.5 2 4C2 3.2 2.7 2.5 3.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </span>
//                 <a href="tel:+919944002040" className="footer-contact-link">+91 99440 02040</a>
//               </motion.div>

//               <div className="ftr-contact-row">
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                   <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
//                   <path d="M7 1.5V5L9.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <span>www.uvagai.org</span>
//               </div>
//             </div>

//             {/* Social Media Icons Only */}
//             <div className="ftr-social">
//               <span className="ftr-social-label">Follow Us</span>
//               <div className="ftr-social-icons">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="ftr-social-icon"
//                     aria-label={social.label}
//                     title={social.label}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <div className="footer-container">
//           <div className="footer-bottom-inner">
//             <p className="footer-copyright">
//               &copy; {currentYear} Uvagai Foundation. All Rights Reserved.
//             </p>
//             <p className="footer-copyright">
//               Crafted by ASPL Tech Solutions Private Limited.
//             </p>
//             <div className="footer-bottom-links">
//               <Link to="/privacy-policy" className="footer-bottom-link" onClick={goToTop("/privacy-policy")}>
//                 Privacy Policy
//               </Link>
//               <span className="ftr-bottom-divider">|</span>
//               <Link to="/terms-and-conditions" className="ftr-bottom-link" onClick={goToTop("/terms-and-conditions")}>
//                 Terms & Conditions
//               </Link>
//               <span className="ftr-bottom-divider">|</span>
//               <Link to="/Donate" className="ftr-bottom-link ftr-bottom-donate" onClick={goToTop("/Donate")}>
//                 Donate
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/vision-mission", label: "Vision & Mission" },
    { to: "/programs", label: "Programs" },
    { to: "/events", label: "Events" },
    { to: "/gallerypage", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  const getInvolved = [
    { to: "/volunteers", label: "Volunteer" },
    { to: "/csr-partnership", label: "CSR Partnership" },
    { to: "/Donate", label: "Donate" },
    { to: "/Course", label: "Courses" },
    { to: "/contact", label: "Partner With Us" },
  ];

  const focusAreas = [
    "Education & Youth Empowerment",
    "Healthcare & Wellness",
    "Child Welfare",
    "Elderly Care",
    "Environmental Sustainability",
    "Community Development",
  ];

  const socialLinks = [
    { 
      href: "https://www.facebook.com/uvagaifoundation", 
      label: "Facebook",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      href: "https://www.instagram.com/uvagaifoundation", 
      label: "Instagram",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    { 
      href: "https://www.linkedin.com/company/uvagai-foundation/", 
      label: "LinkedIn",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      href: "https://www.youtube.com/@UvagaiFoundation", 
      label: "YouTube",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ];

  const goToTop = (to) => (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <footer className="ftr-root">
      <div className="ftr-accent-line" />

      <div className="ftr-wrap">
        <div className="ftr-grid">
          
          {/* Brand Column */}
          <div className="ftr-col ftr-col-brand">
            <motion.div 
              className="ftr-brand"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="ftr-logo-wrap">
                <img src={logo} alt="Uvagai Foundation" className="ftr-logo-img" />
              </div>
              <div>
                <div className="ftr-brand-name">Uvagai</div>
                <div className="ftr-brand-tag">Foundation</div>
              </div>
            </motion.div>

            <p className="ftr-desc">
              Uplifting lives through education, healthcare, child welfare, 
              elderly care, environmental sustainability, and community 
              development initiatives.
            </p>

            <p className="ftr-motto">
              Empowering Communities. Transforming Lives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="ftr-col">
            <h4 className="ftr-heading">Quick Links</h4>
            <ul className="ftr-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="ftr-link" onClick={goToTop(link.to)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="ftr-col">
            <h4 className="ftr-heading">Get Involved</h4>
            <ul className="ftr-list">
              {getInvolved.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="ftr-link" onClick={goToTop(link.to)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="ftr-col">
            <h4 className="ftr-heading">Focus Areas</h4>
            <ul className="ftr-list">
              {focusAreas.map((area, index) => (
                <li key={index} className="ftr-area-item">
                  <span className={`ftr-area-dot ftr-area-dot-${index % 3}`} />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ftr-col ftr-col-contact">
            <h4 className="ftr-heading">Contact</h4>
            
            <div className="ftr-contact-list">
              <div className="ftr-contact-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>Chennai, Tamil Nadu, India</span>
              </div>

              <div className="ftr-contact-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 3.5L7 7L12.5 3.5M1.5 3.5V10.5H12.5V3.5M1.5 3.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:info@uvagai.org" className="ftr-contact-link">info@uvagai.org</a>
              </div>

              <div className="ftr-contact-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 1.5H5L5.8 4.2L4 5.2C4.8 7 6.8 8.8 8.5 9.8L9.2 8L12.2 8.8V11.5C12.2 12.3 11.5 13 10.7 13C5.5 13 1.5 9 1.5 3.8C1.5 3 2.2 2.3 3 2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="tel:+919944002040" className="ftr-contact-link">+91 99440 02040</a>
              </div>

              <div className="ftr-contact-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 1.5V5L9.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>www.uvagai.org</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="ftr-social">
              <span className="ftr-social-label">Follow Us</span>
              <div className="ftr-social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ftr-social-icon"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="ftr-bottom">
        <div className="ftr-wrap">
          <div className="ftr-bottom-row">
            <div className="ftr-bottom-left">
              <p className="ftr-copy">
                &copy; {currentYear} Uvagai Foundation. All rights reserved.
              </p>
              <p className="ftr-credit">
                Crafted by <span className="ftr-credit-name">ASPL Tech Solutions Private Limited</span>
              </p>
            </div>
            <div className="ftr-bottom-right">
              <Link to="/privacy-policy" className="ftr-bottom-link" onClick={goToTop("/privacy-policy")}>
                Privacy Policy
              </Link>
              <span className="ftr-bottom-divider">|</span>
              <Link to="/terms-and-conditions" className="ftr-bottom-link" onClick={goToTop("/terms-and-conditions")}>
                Terms & Conditions
              </Link>
              <span className="ftr-bottom-divider">|</span>
              <Link to="/Donate" className="ftr-bottom-link ftr-bottom-donate" onClick={goToTop("/Donate")}>
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}