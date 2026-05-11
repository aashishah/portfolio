import { useEffect, useState } from "react";

export default function Header() {
  const d = new Date();
  const month = d.toLocaleString("default", { month: "short" }).toUpperCase();

  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toTimeString().slice(0, 8));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "28px 0 12px",
        borderBottom: "2px solid #222",
        animation: "fadeUp 0.5s ease both",
      }}
    >
      <h1
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(24px, 6vw, 42px)",
          letterSpacing: "0.04em",
          color: "#ffffff",
          lineHeight: 1,
        }}
      >
        AASHI SHAH <span style={{ color: "#ce3330" }}>///</span>
      </h1>
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#c7c7c7",
            border: "1px solid #949494",
            padding: "5px 14px",
            display: "inline-block",
          }}
        >
          {month} 2026
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            color: "#949494",
            marginTop: "6px",
            letterSpacing: "0.1em",
          }}
        >
          {time}{" "}
          <span
            style={{
              animation: "blink 1s step-start infinite",
              color: "#ce3330",
            }}
          >
            ▋
          </span>
        </div>
      </div>
    </header>
  );
}
