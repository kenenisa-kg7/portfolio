"use client";

import { motion } from "framer-motion";

export default function About() {
  const facts = [
    { label: "Location", value: "Ethiopia 🇪🇹" },
    { label: "Degree", value: "Software Engineering" },
    { label: "University", value: "ASTU" },
    { label: "Status", value: "Open to work ✅" },
  ];

  return (
    <section
      id="about"
      style={{ padding: "96px 0", width: "100%" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <p style={{
            color: "#60a5fa",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px"
          }}>
            Who I am
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 700 }}>
            About Me
          </h2>
        </motion.div>

        {/* Content grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
          alignItems: "center"
        }}>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p style={{ color: "#d1d5db", lineHeight: "1.8", fontSize: "15px" }}>
              I am a Software Engineering student at Adama Science and
              Technology University with real-world experience building
              fullstack web applications. I worked as a Full-Stack Developer
              at Efuye Gela Tech, where I built and shipped production-grade
              digital platforms from frontend to backend.
            </p>
            <p style={{ color: "#d1d5db", lineHeight: "1.8", fontSize: "15px" }}>
              I specialize in building fast, scalable web applications using
              React, Next.js, Node.js, and PostgreSQL. I am passionate about
              clean code, great user experiences, and continuously learning
              new technologies.
            </p>
            <p style={{ color: "#9ca3af", lineHeight: "1.8", fontSize: "15px" }}>
              Currently exploring AI integration in web applications and
              actively looking for remote freelance opportunities.
            </p>
          </motion.div>

          {/* Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px"
            }}
          >
            {facts.map((fact, index) => (
              <div
                key={index}
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}
              >
                <span style={{
                  color: "#60a5fa",
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}>
                  {fact.label}
                </span>
                <span style={{ color: "#ffffff", fontWeight: 500, fontSize: "15px" }}>
                  {fact.value}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}