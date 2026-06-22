"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    color: "#60a5fa",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    category: "Backend",
    color: "#a78bfa",
    skills: ["Node.js", "Express", "Spring Boot", "REST APIs"],
  },
  {
    category: "Database",
    color: "#34d399",
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Firebase"],
  },
  {
    category: "Tools & Others",
    color: "#fb923c",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Railway"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "96px 0", width: "100%", background: "rgba(255,255,255,0.02)" }}
    >
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
            color: "#60a5fa",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px"
          }}>
            What I work with
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 700 }}>
            Skills
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px"
        }}>
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              {/* Category label */}
              <h3 style={{
                color: group.color,
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }}>
                {group.category}
              </h3>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#e5e7eb",
                      fontSize: "13px",
                      fontWeight: 500
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}