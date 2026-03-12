export default function Footer() {
  return (
    <footer style={{ padding: "0 0 28px" }}>
      <div className="container-main">
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 18,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            color: "#64748b",
            fontSize: 14,
          }}
        >
          <div>© 2026 RTSEC Perú. Todos los derechos reservados.</div>
          <div>Diseño corporativo · Black premium aesthetic</div>
        </div>
      </div>
    </footer>
  );
}