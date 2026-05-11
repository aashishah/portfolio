export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 0 0",
        borderTop: "1px solid #ffffff",
        marginTop: "1px",
        animation: "fadeUp 0.5s ease 0.5s both",
        position: "sticky",
        bottom: 0,
        background: "#010101",
      }}
    >
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {[
          { label: "GH", title: "GitHub" },
          { label: "LI", title: "LinkedIn" },
          { label: "TW", title: "Twitter" },
        ].map((s) => (
          <div
            key={s.label}
            title={s.title}
            style={{
              width: "30px",
              height: "30px",
              border: "1px solid #949494",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "9px",
              color: "#949494",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ce3330";
              e.currentTarget.style.color = "#ce3330";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#949494";
              e.currentTarget.style.color = "#c7c7c7";
            }}
          >
            {s.label}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            color: "#ce3330",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          ✦
        </div>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.18em",
            color: "#c7c7c7",
          }}
        >
          CODE
        </span>
      </div>

      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.18em",
          color: "#c7c7c7",
        }}
      >
        DESIGN + CODE = POETRY ✦
      </div>
    </footer>
  );
}
