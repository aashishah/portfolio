import Experience from "./Experience";
import Intro from "./Intro";
import Ticker from "./Ticker";

function SectionContent({ activeSection }) {
  switch (activeSection) {
    case "Home":
    case "Intro":
      return <Intro />;
    case "Experience":
      return <Experience />;
    case "Projects":
      return (
        <div className="projects">
          <h1>Projects</h1>
          <p>
            Here are the projects I’m working on, with current design and code
            work.
          </p>
        </div>
      );
    case "Contact":
      return (
        <div className="contact">
          <h1>Contact</h1>
          <p>
            Get in touch to collaborate, build, or explore new ideas together.
          </p>
        </div>
      );
    case "What I'm doing currently":
      return (
        <div className="current-work">
          <h1>Current Focus</h1>
          <p>
            Experimenting with dynamic interfaces, motion, and reactive design
            systems.
          </p>
        </div>
      );
    default:
      return <Intro />;
  }
}

export default function Main({ activeSection }) {
  return (
    <div className="main">
      <SectionContent activeSection={activeSection} />
      <div style={{ margin: "0 -20px" }}>
        <Ticker
          items={[
            "CREATIVE DEVELOPMENT",
            "DESIGN",
            "ENGINEERING",
            "REACT",
            "PYTHON",
          ]}
        />
      </div>
    </div>
  );
}
