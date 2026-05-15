import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", idx: "01" },
  { label: "Experience", idx: "02" },
  { label: "Projects", idx: "03" },
  { label: "Contact", idx: "04" },
  { label: "What I'm doing currently", idx: "05" },
];

const RED = "#ce3330";
const MONO = "'IBM Plex Mono', 'Courier New', monospace";

const listVariants = {
  closed: {},
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const rowVariants = {
  closed: { opacity: 0, y: 12 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 6,
    transition: { duration: 0.2, ease: [0.55, 0, 1, 0.45] },
  },
};

const panelVariants = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function NavRow({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      variants={rowVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        listStyle: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* red wipe */}
      <motion.div
        aria-hidden
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          background: RED,
          transformOrigin: "left center",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "baseline",
          gap: "20px",
          padding: "14px 28px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <motion.span
          animate={{
            color: hovered ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.2)",
          }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: MONO,
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            minWidth: "22px",
          }}
        >
          {item.idx}
        </motion.span>

        <motion.span
          animate={{ color: hovered ? "#000" : "#e8e4de" }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: MONO,
            fontSize: "0.88rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {item.label}
        </motion.span>

        <motion.span
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
          initial={{ opacity: 0, x: -6 }}
          transition={{ duration: 0.22 }}
          style={{
            marginLeft: "auto",
            fontFamily: MONO,
            fontSize: "0.8rem",
            color: "#000",
          }}
        >
          →
        </motion.span>
      </div>
    </motion.li>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        fontFamily: MONO,
      }}
    >
      <div style={{ position: "relative" }}>
        {/* Trigger */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.96 }}
          style={{
            background: "none",
            border: `1px solid ${open ? RED : "rgba(255,255,255,0.22)"}`,
            color: open ? RED : "#e8e4de",
            fontFamily: MONO,
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "8px 14px",
            cursor: "pointer",
            transition: "border-color 0.25s ease, color 0.25s ease",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            {[0, 1].map((i) => (
              <motion.span
                key={i}
                animate={
                  open
                    ? i === 0
                      ? { rotate: 45, y: 4.5, backgroundColor: RED }
                      : { rotate: -45, y: -4.5, backgroundColor: RED }
                    : { rotate: 0, y: 0, backgroundColor: "#e8e4de" }
                }
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  display: "block",
                  width: "16px",
                  height: "1.5px",
                  backgroundColor: "#e8e4de",
                }}
              />
            ))}
          </span>

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.16 }}
            >
              {open ? "CLOSE" : "MENU"}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                right: 0,
                width: "380px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}
            >
              <div style={{ height: "2px", background: RED }} />

              <motion.ul
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="exit"
                style={{ margin: 0, padding: 0 }}
              >
                {NAV_ITEMS.map((item) => (
                  <NavRow key={item.label} item={item} />
                ))}
              </motion.ul>

              <div
                style={{
                  padding: "10px 28px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.15)",
                  }}
                >
                  v1.2026
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
