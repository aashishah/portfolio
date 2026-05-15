import { useState, useEffect } from "react";
import Ticker from "./components/Ticker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const projects = [
  {
    id: "alpha",
    title: "PROJECT ALPHA",
    sub: "INTERACTION DESIGN",
    img: null,
    color: "#c8f0a0",
    desc: "Mobile-first interaction design system with modular component architecture.",
    tag: "UX / UI",
  },
  {
    id: "realms",
    title: "SYNTHETIC_REALMS",
    sub: "GENERATIVE ART",
    img: null,
    color: "#a0c8f0",
    desc: "Real-time generative art driven by noise fields and recursive geometry.",
    tag: "WebGL",
  },
  {
    id: "pixel",
    title: "THE PIXEL LAB",
    sub: "SVG ANIMATION",
    img: null,
    color: "#f0c8a0",
    desc: "Frame-accurate SVG animation toolkit for expressive data storytelling.",
    tag: "SVG",
  },
];

const experiments = [
  "Audio-Reactive Particles",
  "Generative Grid Systems",
  "Pixel Sorting Filter",
];

const navLinks = ["Home", "Profile", "Code", "Art", "Lab", "Contact"];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const colors = ["#b8f5a0", "#a0d4f5", "#f5d0a0"];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid #333",
        position: "relative",
        overflow: "hidden",
        cursor: "crosshair",
        transition:
          "transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        borderColor: hovered ? colors[index] : "#333",
        background: "#111",
        animation: `fadeUp 0.6s ease ${index * 0.12 + 0.3}s both`,
      }}
    >
      {/* Fake code / art background */}
      <div
        style={{
          height: "180px",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
            backgroundSize: "24px 24px",
          }}
        />
        {/* Central figure */}
        <div
          style={{
            width: "60px",
            height: "60px",
            border: `2px solid ${colors[index]}`,
            borderRadius: index === 1 ? "50%" : "4px",
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 0.3s, transform 0.4s",
            transform: hovered ? "scale(1.1) rotate(10deg)" : "scale(1)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "8px",
              border: `1px solid ${colors[index]}`,
              borderRadius: index === 1 ? "50%" : "2px",
              opacity: 0.5,
            }}
          />
        </div>
        {/* Corner tag */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "9px",
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.14em",
            color: colors[index],
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.3s",
          }}
        >
          {project.tag}
        </div>
        {/* Index */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "12px",
            fontSize: "32px",
            fontFamily: "'Bebas Neue', sans-serif",
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
          }}
        >
          0{index + 1}
        </div>
      </div>

      <div style={{ padding: "14px 16px 18px" }}>
        <div
          style={{
            fontSize: "12px",
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.1em",
            color: hovered ? colors[index] : "#ccc",
            transition: "color 0.3s",
            marginBottom: "2px",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontSize: "9px",
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.2em",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          {project.sub}
        </div>
        <div
          style={{
            fontSize: "11px",
            fontFamily: "'DM Sans', sans-serif",
            color: "#666",
            lineHeight: 1.6,
            maxHeight: hovered ? "60px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {project.desc}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    info: "",
    subject: "",
  });
  const [sent, setSent] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleSend = (e) => {
    e.preventDefault && e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2800);
  };

  return (
    <>
      <div className="noise-overlay" />

      <div className="portfolio-root" style={{ padding: "0 20px" }}>
        <Header
          activeSection={activeSection}
          onSelectSection={setActiveSection}
        />
        <Main activeSection={activeSection} />

        <Footer />
      </div>
    </>
  );
}
