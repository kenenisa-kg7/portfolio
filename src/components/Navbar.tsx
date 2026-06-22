"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "18px",
          letterSpacing: "0.02em"
        }}
      >
        Keno<span style={{ color: "#60a5fa" }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{
        display: "flex",
        gap: "32px",
        alignItems: "center"
      }}
        className="desktop-nav"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              transition: "color 0.2s"
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:kenokg07@gmail.com"
          style={{
            padding: "8px 20px",
            background: "#2563eb",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          color: "#ffffff"
        }}
        className="mobile-menu-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {menuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#9ca3af",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:kenokg07@gmail.com"
            style={{
              padding: "10px 20px",
              background: "#2563eb",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              textAlign: "center"
            }}
          >
            Hire Me
          </a>
        </motion.div>
      )}

    </motion.nav>
  );
}