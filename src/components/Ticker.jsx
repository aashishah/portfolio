export default function Ticker({ items }) {
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderTop: "1px solid #949494",
        borderBottom: "1px solid #949494",
        padding: "6px 0",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "ticker 18s linear infinite",
          fontSize: "11px",
          letterSpacing: "0.18em",
          color: "#c7c7c7",
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} style={{ marginRight: "80px" }}>
            /// {t.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
