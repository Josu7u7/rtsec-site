export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="badge">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}