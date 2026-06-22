"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "NetStream",
    description: "A full-stack Netflix-inspired video streaming platform with dynamic content browsing, user authentication, and seamless movie discovery powered by the TMDB API.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Firebase"],
    github: "https://github.com/kenenisa-kg7",
    live: "#",
    color: "#60a5fa",
  },
  {
    title: "SmartJob",
    description: "A full-featured digital job platform that streamlines job discovery for seekers and vacancy management for employers, with robust authentication and clean UI.",
    tech: ["React", "Node.js", "REST APIs", "TypeScript", "PostgreSQL"],
    github: "https://github.com/kenenisa-kg7",
    live: "#",
    color: "#a78bfa",
  },
  {
    title: "AbolChat",
    description: "A private campus-based social media platform built exclusively for university students, enabling secure communication, academic collaboration, and group interaction.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets", "Firebase"],
    github: "https://github.com/kenenisa-kg7",
    live: "#",
    color: "#34d399",
  },
  {
    title: "Efuye Gela Platform",
    description: "A production-grade digital media platform built at Efuye Gela Tech, managing end-to-end development from responsive frontend to robust backend services.",
    tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Prisma"],
    github: "https://github.com/kenenisa-kg7",
    live: "#",
    color: "#fb923c",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 0", width: "100%" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <p style={{
            color: "#60a5fa", fontSize: "12px", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px"
          }}>
            What I have built
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 700 }}>
            Projects
          </h2>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "32px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `3px solid ${project.color}`,
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              {/* Title */}
              <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 600 }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: "1.7" }}>
                {project.description}
              </p>

              {/* Tech pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tech.map((tech) => (
                  <span key={tech} style={{
                    padding: "4px 10px", fontSize: "12px", fontWeight: 500,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px", color: "#d1d5db"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
                <a
                  href={project.github}
                  target="_blank"
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    color: "#9ca3af", textDecoration: "none", fontSize: "14px",
                    fontWeight: 500
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      color: "#60a5fa", textDecoration: "none", fontSize: "14px",
                      fontWeight: 500
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}