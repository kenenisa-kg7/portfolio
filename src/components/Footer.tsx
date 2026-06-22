"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      width: "100%",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "32px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "16px"
    }}>
      {/* Left — name */}
      <p style={{ color: "#6b7280", fontSize: "14px" }}>
        © {year}{" "}
        <span style={{ color: "#ffffff", fontWeight: 500 }}>
          Kenenisa Gemechu
        </span>
      </p>

      {/* Right — built with */}
      <p style={{ color: "#6b7280", fontSize: "14px" }}>
        Built with{" "}
        <span style={{ color: "#60a5fa" }}>Next.js</span>
        {" & "}
        <span style={{ color: "#a78bfa" }}>Framer Motion</span>
      </p>
    </footer>
  );
}