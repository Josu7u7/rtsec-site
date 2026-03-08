export default function SolutionCard({ title, text, accent }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div
        style={{
          height: 220,
          borderRadius: 20,
          background: accent,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />
      <h3 style={{ marginTop: 18, marginBottom: 8, fontSize: 24 }}>{title}</h3>
      <p style={{ color: "#94a3b8", lineHeight: 1.75, fontSize: 15 }}>{text}</p>
      <a href="#contacto" style={{ marginTop: 18, display: "inline-block", color: "#60a5fa", fontWeight: 700 }}>
        Más información →
      </a>
    </div>
  );
}