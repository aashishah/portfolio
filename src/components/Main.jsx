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
      return <div className="projects">THIS IS A WIP!</div>;
    case "Contact":
      return <div className="contact">THIS IS A WIP!</div>;
    case "What I'm doing currently":
      return <div className="current-work">THIS IS A WIP!</div>;
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
