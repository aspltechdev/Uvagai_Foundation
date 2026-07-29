import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logoimg from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { to: "/", label: "Home", accent: "red" },
    { to: "/about-us", label: "About Us", accent: "red" },
    { to: "/vision-mission", label: "Vision & Mission", accent: "blue" },
    { to: "/impact", label: "Impact", accent: "green" },
    { to: "/programs", label: "Programs", accent: "green" },
    { to: "/events", label: "Events", accent: "red" },
    { to: "/gallerypage", label: "Gallery", accent: "green" },
    { to: "/Course", label: "Courses", accent: "blue" },
    { to: "/volunteers", label: "Volunteer", accent: "red" },
    { to: "/csr-partnership", label: "CSR", accent: "blue" },
    { to: "/contact", label: "Contact", accent: "red" },
  ];

  const mobileVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.03, staggerDirection: -1, when: "afterChildren", duration: 0.3 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.08, type: "spring", stiffness: 300, damping: 30 }
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header 
      className={`nv-header ${scrolled ? "nv-header-scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
    >
      <div className="nv-container">
        
        {/* BRAND LOGO */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/" className="nv-brand" aria-label="Uvagai Foundation">
            <div className="nv-brand-logo-wrap">
              <img 
                src={logoimg} 
                alt="Uvagai Foundation" 
                className="nv-brand-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="nv-brand-logo-fallback" style={{ display: 'none' }}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <defs>
                    <linearGradient id="nvLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#1E3A8A" />
                    </linearGradient>
                  </defs>
                  <rect width="44" height="44" rx="12" fill="url(#nvLogoGrad)" />
                  <path d="M14 23L20 28L30 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="nv-brand-text">
              <span className="nv-brand-name">Uvagai</span>
              <span className="nv-brand-tagline">Foundation</span>
            </div>
          </Link>
        </motion.div>

        {/* DESKTOP NAVIGATION */}
        <nav className="nv-nav">
          <ul className="nv-nav-list">
            {navItems.map((item) => (
              <li key={item.to} className="nv-nav-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    `nv-nav-link nv-nav-${item.accent} ${isActive ? 'nv-nav-link-active' : ''}`
                  }
                  end={item.to === "/"}
                >
                  <span className="nv-nav-text">{item.label}</span>
                  <span className="nv-nav-line" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* DONATE CTA - Uvagai Theme Gradient */}
        <motion.div
          className="nv-cta-wrap"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link to="/Donate" className="nv-cta-btn">
            <span className="nv-cta-text">Donate Now</span>
            <span className="nv-cta-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* MOBILE TOGGLE */}
        <motion.button
          className={`nv-toggle ${menuOpen ? 'nv-toggle-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          whileTap={{ scale: 0.92 }}
        >
          <div className="nv-toggle-bars">
            <span className="nv-bar nv-bar-1" />
            <span className="nv-bar nv-bar-2" />
            <span className="nv-bar nv-bar-3" />
          </div>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nv-mobile-menu"
            variants={mobileVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="nv-mobile-inner">
              <nav className="nv-mobile-nav">
                {navItems.map((item) => (
                  <motion.div key={item.to} variants={itemVariants}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => 
                        `nv-mobile-link nv-mobile-${item.accent} ${isActive ? 'nv-mobile-link-active' : ''}`
                      }
                      end={item.to === "/"}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="nv-mobile-dot" />
                      <span className="nv-mobile-text">{item.label}</span>
                      <span className="nv-mobile-arrow">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div className="nv-mobile-cta" variants={itemVariants}>
                <Link 
                  to="/Donate" 
                  className="nv-mobile-cta-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Donate Now</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                
                <div className="nv-mobile-contact">
                  <a href="tel:+919876543210" className="nv-mobile-phone">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2H6L7.5 5.5L5.5 7C6.5 9 8.5 10.5 11 11L12.5 9L15.5 10V13C15.5 14.1 14.6 15 13.5 15C7.7 15 3 10.3 3 4.5C3 3.4 3.9 2.5 5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}