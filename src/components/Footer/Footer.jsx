import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";
import logo from "../../assets/logo.png";   // <-- fixed path

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
    { href: "https://www.facebook.com/uvagaifoundation", label: "Facebook", icon: "FB" },
    { href: "https://www.instagram.com/uvagaifoundation", label: "Instagram", icon: "IG" },
    { href: "https://www.linkedin.com/company/uvagai-foundation/", label: "LinkedIn", icon: "LN" },
    { href: "https://www.youtube.com/@UvagaiFoundation", label: "YouTube", icon: "YT" },
  ];

  const goToTop = (to) => (e) => {
    e.preventDefault();
    navigate(to);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  };

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
      <div className="footer-top-line" />

      <div className="ftr-container">
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
              <img 
                src={logo} 
                alt="Uvagai Foundation" 
                className="footer-logo-img" 
              />
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
              <div className="ftr-contact-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>Chennai, Tamil Nadu, India</span>
              </div>

              <div className="ftr-contact-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 3.5L7 7L12.5 3.5M1.5 3.5V10.5H12.5V3.5M1.5 3.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:info@uvagai.org" className="ftr-contact-link">info@uvagai.org</a>
              </div>

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
                <a href="tel:+919944002040" className="footer-contact-link">+91 99440 02040</a>
              </motion.div>

              <div className="ftr-contact-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 1.5V5L9.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>www.uvagai.org</span>
              </div>
            </div>

            {/* Social Media Icons Only */}
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
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              &copy; {currentYear} Uvagai Foundation. All Rights Reserved.
            </p>
            <p className="footer-copyright">
              Crafted by ASPL Tech Solutions Private Limited.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy" className="footer-bottom-link" onClick={goToTop("/privacy-policy")}>
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