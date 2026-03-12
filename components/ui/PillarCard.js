export default function PillarCard({ number, title, text }) {
  return (
    <div className="card" style={{ padding: 24 }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          display: "grid",
          placeItems: "center",
          background: "rgba(59,130,246,0.14)",
          border: "1px solid rgba(59,130,246,0.28)",
          color: "#93c5fd",
          fontWeight: 800,
        }}
      >
        {number}
      </div>

      <h3 style={{ marginTop: 18, marginBottom: 10, fontSize: 24 }}>{title}</h3>
      <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>{text}</p>
    </div>
  );
}