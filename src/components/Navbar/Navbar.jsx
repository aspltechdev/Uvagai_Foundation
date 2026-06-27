import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { to: "/", label: "Home", accent: "red" },
    { to: "/about-us", label: "About", accent: "red" },
    { to: "/vision-mission", label: "Vision & Mission", accent: "blue" },
    { to: "/programs", label: "Programs", accent: "green" },
    { to: "/events", label: "Events", accent: "red" },
    { to: "/gallery", label: "Gallery", accent: "green" },
    { to: "/Donate", label: "Donate", accent: "red"},
    { to: "/csr-partnership", label: "CSR", accent: "blue" },
    { to: "/contact", label: "Contact", accent: "red" },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.08,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -15 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header 
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
    >
      <div className="navbar-container">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/" className="navbar-logo" aria-label="Uvagai Foundation Home">
            <div className="navbar-logo-mark">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <rect width="34" height="34" rx="8" className="logo-bg" />
                <path 
                  d="M10 17L15 22L24 12" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-name">Uvagai</span>
              <span className="navbar-logo-subtitle">Foundation</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav">
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.to} className="navbar-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    `navbar-link ${isActive ? 'navbar-link-active' : ''} navbar-link-${item.accent}`
                  }
                  end={item.to === "/"}
                >
                  <span className="navbar-link-text">{item.label}</span>
                  <span className="navbar-link-underline" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Donate CTA */}
        <motion.div
          className="navbar-cta-wrapper"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link to="/donate" className="navbar-cta">
            <span className="navbar-cta-text">Donate</span>
            <span className="navbar-cta-icon">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5H13M13 7.5L8.5 3M13 7.5L8.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`navbar-toggle-icon ${menuOpen ? 'open' : ''}`}>
            <span className="toggle-bar toggle-bar-1" />
            <span className="toggle-bar toggle-bar-2" />
            <span className="toggle-bar toggle-bar-3" />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="navbar-mobile-inner">
              <nav>
                <ul className="navbar-mobile-links">
                  {navItems.map((item) => (
                    <motion.li 
                      key={item.to}
                      variants={mobileItemVariants}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) => 
                          `navbar-mobile-link ${isActive ? 'navbar-mobile-link-active' : ''} mobile-link-${item.accent}`
                        }
                        end={item.to === "/"}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="mobile-link-dot" />
                        <span className="mobile-link-text">{item.label}</span>
                        <span className="mobile-link-arrow">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <motion.div 
                className="navbar-mobile-cta"
                variants={mobileItemVariants}
              >
                <Link 
                  to="/donate" 
                  className="navbar-mobile-cta-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Make a Donation</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}