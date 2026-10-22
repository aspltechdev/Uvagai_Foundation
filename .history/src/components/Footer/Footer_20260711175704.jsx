import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/vision-mission", label: "Vision & Mission" },
    { to: "/programs", label: "Programs" },
    { to: "/gallery", label: "Gallery" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  // Each of these points at the CTA section on its target page
  // (the page needs a matching element, e.g. id="cta", around its
  // main call-to-action button — adjust the ids below if yours differ).
  // Only routes that actually exist in AppRoutes.jsx are listed here.
  const getInvolved = [
    { to: "/volunteers", hash: "cta", label: "Volunteer" },
    { to: "/csr-partnership", hash: "cta", label: "CSR Partnership" },
    { to: "/donate", hash: "cta", label: "Donate" },
    { to: "/annual-reports", hash: "cta", label: "Annual Reports" },
    { to: "/contact", hash: "cta", label: "Partner With Us" },
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
    // TODO: replace "#" with your real Facebook page URL
    { href: "#", label: "Facebook", icon: "FB" },
    { href: "https://www.instagram.com/uvagaifoundation", label: "Instagram", icon: "IG" },
    { href: "https://www.linkedin.com/company/uvagai-foundation/", label: "LinkedIn", icon: "LN" },
    { href: "https://www.youtube.com/@UvagaiFoundation", label: "YouTube", icon: "YT" },
  ];

  // Plain nav links (Quick Links): always land at the top of the
  // destination page, since SPA route changes don't reset scroll
  // position on their own.
  const goToTop = (to) => (e) => {
    e.preventDefault();
    navigate(to);
    // Wait a tick for the new route to mount, then jump to top.
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  };

  // "Get Involved" links: navigate to the page, then scroll the
  // specific CTA section into view once it's rendered.
  const goToSection = (to, hash) => (e) => {
    e.preventDefault();
    navigate(`${to}#${hash}`);
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 80);
  };

  return (
    <footer className="footer">
      {/* Top decorative line */}
      <div className="footer-top-line" />

      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1 - Brand */}
          <div className="footer-col footer-col-brand">
            <motion.div 
              className="footer-logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="footer-logo-mark">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="8" fill="#DC2626"/>
                  <path d="M10 18L16 24L26 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">Uvagai</span>
                <span className="footer-logo-subtitle">Foundation</span>
              </div>
            </motion.div>

            <p className="footer-description">
              Uplifting lives through education, healthcare,
              child welfare, elderly care, environmental
              sustainability, and community development initiatives.
            </p>

            <div className="footer-motto">
              <span className="footer-motto-line" />
              <span className="footer-motto-text">
                Empowering Communities. Transforming Lives.
              </span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className="footer-link"
                    onClick={goToTop(link.to)}
                  >
                    <span className="footer-link-arrow" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Get Involved */}
          <div className="footer-col">
            <h3 className="footer-heading">Get Involved</h3>
            <ul className="footer-list">
              {getInvolved.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={`${link.to}#${link.hash}`}
                    className="footer-link"
                    onClick={goToSection(link.to, link.hash)}
                  >
                    <span className="footer-link-arrow" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Focus Areas */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Focus Areas</h3>
            <ul className="footer-list footer-list-areas">
              {focusAreas.map((area, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <span className="footer-area-item">
                    <span className="footer-area-dot" />
                    {area}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-heading">Contact Information</h3>
            
            <div className="footer-contact-list">
              <motion.div 
                className="footer-contact-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </span>
                <span>Chennai, Tamil Nadu, India</span>
              </motion.div>

              <motion.div 
                className="footer-contact-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <span className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4L8 8L14 4M2 4V12H14V4M2 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <a href="mailto:info@uvagai.org" className="footer-contact-link">info@uvagai.org</a>
              </motion.div>

              <motion.div 
                className="footer-contact-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 2H5.5L6.5 5L4.5 6C5.5 8 7.5 10 9.5 11L10.5 9L13.5 10V12.5C13.5 13.3 12.8 14 12 14C6.5 14 2 9.5 2 4C2 3.2 2.7 2.5 3.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <a href="tel:+91XXXXXXXXXX" className="footer-contact-link">+91 XXXXX XXXXX</a>
              </motion.div>

              <motion.div 
                className="footer-contact-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <span className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 2V6L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>www.uvagai.org</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              <span className="footer-social-label">Follow Us</span>
              <div className="footer-social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ y: -3 }}
                    aria-label={social.label}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              &copy; {currentYear} Uvagai Foundation. All Rights Reserved.
            </p>
            
            <div className="footer-bottom-links">
              <Link to="/privacy-policy" className="footer-bottom-link" onClick={goToTop("/privacy-policy")}>
                Privacy Policy
              </Link>
              <span className="footer-bottom-sep">|</span>
              <Link to="/terms-and-conditions" className="footer-bottom-link" onClick={goToTop("/terms-and-conditions")}>
                Terms & Conditions
              </Link>
              <span className="footer-bottom-sep">|</span>
              <Link to="/donate" className="footer-bottom-link footer-bottom-link-donate" onClick={goToTop("/donate")}>
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}