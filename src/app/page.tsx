"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const techs = ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"];

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden", width: "100%" }}>

      {/* HERO SECTION */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 40px 0 40px", position: "relative" }}>

        {/* Background gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at top left, rgba(30,58,138,0.4) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(88,28,135,0.4) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "row",
          alignItems: "center", gap: "64px",
          maxWidth: "900px", width: "100%",
          flexWrap: "wrap", justifyContent: "center"
        }}>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "260px", height: "260px",
              borderRadius: "50%", overflow: "hidden",
              border: "3px solid rgba(96,165,250,0.5)",
              flexShrink: 0,
              boxShadow: "0 0 40px rgba(96,165,250,0.15)"
            }}
          >
            <Image
              src="/profile.png"
              alt="Kenenisa Gemechu"
              width={260}
              height={260}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </motion.div>

          {/* Text content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1, minWidth: "280px" }}>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: "#60a5fa", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "13px" }}
            >
              Hello, I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: "52px", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}
            >
              Kenenisa{" "}
              <span style={{
                background: "linear-gradient(to right, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Gemechu
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ fontSize: "20px", color: "#9ca3af", fontWeight: 300 }}
            >
              Fullstack developer turning ideas into products
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {techs.map((tech) => (
                <span key={tech} style={{
                  padding: "4px 12px", fontSize: "12px", fontWeight: 500,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px", color: "#d1d5db"
                }}>
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <a href="#projects" style={{
                padding: "12px 24px", background: "#2563eb",
                color: "#ffffff", fontWeight: 500, borderRadius: "8px",
                textDecoration: "none", fontSize: "15px"
              }}>
                View My Work
              </a>
              <a href="#contact" style={{
                padding: "12px 24px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff", fontWeight: 500, borderRadius: "8px",
                textDecoration: "none", fontSize: "15px"
              }}>
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ display: "flex", gap: "16px" }}
            >
              <a href="https://github.com/kenenisa-kg7" target="_blank" style={{ color: "#9ca3af", textDecoration: "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kenenisa-gemechu" target="_blank" style={{ color: "#9ca3af", textDecoration: "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:kenokg07@gmail.com" style={{ color: "#9ca3af", textDecoration: "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            position: "absolute", bottom: "32px",
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: "8px", color: "#6b7280"
          }}
        >
          <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>

      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      <Navbar/>

    </main>
  );
}

