import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const RED = "#ce3330";
const MONO = "'IBM Plex Mono', 'Courier New', monospace";

const projects = [
  {
    id: "01",
    title: "Portfolio OS",
    tags: ["React", "Framer Motion", "CSS"],
    year: "2026",
    description:
      "A personal portfolio designed as a minimal operating-system interface with custom navigation and live clock.",
    link: "#",
  },
  {
    id: "02",
    title: "WorldWise",
    tags: ["React", "SQL"],
    year: "2025",
    description:
      "An app to track all the places you've visited in the world, completed with map-tracking and notes and dates!",
    link: "#",
  },
  {
    id: "03",
    title: "Janus",
    tags: ["Node.js", "Javascript", "Cockroach DB", "Courier"],
    year: "2021",
    description:
      "A Chrome Extension, that tracks your applications for you, at the click of a button. It also sends you periodic mails to remind you to follow up on previously applied jobs.",
    link: "#",
  },
  {
    id: "04",
    title: "Book Covers",
    tags: ["Figma", "Illustrator", "Design"],
    year: "2023",
    description:
      "Freelance series of book cover designs spanning fiction, non-fiction, and academic publications.",
    link: "#",
  },
];

/* ── Tilt card ── */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-1, 1], [4, -4]);
  const rotateY = useTransform(x, [-1, 1], [-4, 4]);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    x.set(nx);
    y.set(ny);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
        position: "relative",
        cursor: "pointer",
        background: hovered ? "#161616" : "#111",
        border: `1px solid ${hovered ? "rgba(206,51,48,0.35)" : "rgba(255,255,255,0.07)"}`,
        transition: "background 0.25s ease, border-color 0.25s ease",
        overflow: "hidden",
      }}
    >
      {/* red corner bracket top-left */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : -6,
          y: hovered ? 0 : -6,
        }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "18px",
          height: "18px",
          borderTop: `2px solid ${RED}`,
          borderLeft: `2px solid ${RED}`,
          zIndex: 2,
        }}
      />
      {/* red corner bracket bottom-right */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : 6,
          y: hovered ? 0 : 6,
        }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "18px",
          height: "18px",
          borderBottom: `2px solid ${RED}`,
          borderRight: `2px solid ${RED}`,
          zIndex: 2,
        }}
      />

      {/* scanline overlay on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.013) 3px, rgba(255,255,255,0.013) 4px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{ padding: "28px 24px 24px", position: "relative", zIndex: 3 }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "18px",
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: RED,
            }}
          >
            {project.id}
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(232,228,222,0.2)",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* title */}
        <h2
          style={{
            fontFamily: MONO,
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: hovered ? "#fff" : "#e8e4de",
            margin: "0 0 10px",
            transition: "color 0.2s ease",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h2>

        {/* description — reveals on hover */}
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            lineHeight: 1.7,
            color: "rgba(232,228,222,0.45)",
            margin: "0 0 20px",
            minHeight: "60px",
          }}
        >
          {project.description}
        </motion.p>

        {/* tags */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: MONO,
                fontSize: "0.58rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: hovered
                  ? "rgba(206,51,48,0.9)"
                  : "rgba(232,228,222,0.25)",
                border: `1px solid ${hovered ? "rgba(206,51,48,0.3)" : "rgba(255,255,255,0.08)"}`,
                padding: "3px 8px",
                transition: "color 0.25s ease, border-color 0.25s ease",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* link arrow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          transition={{ duration: 0.25, delay: hovered ? 0.05 : 0 }}
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            fontFamily: MONO,
            fontSize: "0.75rem",
            color: RED,
          }}
        >
          ↗
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div>
      {/* heading */}
      <div
        style={{ maxWidth: "860px", marginTop: "0.5em", marginBottom: "2em" }}
      >
        <h1>Projects</h1>
        <p className="subtext">
          Selected work — engineering & creative development
        </p>
      </div>

      {/* grid */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
