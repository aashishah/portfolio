import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";

export default function SectionContent({ activeSection }) {
  switch (activeSection) {
    case "Home":
    case "Intro":
      return <Intro />;
    case "Experience":
      return <Experience />;
    case "Projects":
      return <Projects />;
    case "Contact":
      return <div className="contact">THIS IS A WIP!</div>;
    case "What I'm doing currently":
      return <div className="current-work">THIS IS A WIP!</div>;
    default:
      return <Intro />;
  }
}
