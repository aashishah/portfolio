import Experience from "./Experience";
import Intro from "./Intro";
import SectionContent from "./SectionContent";
import Ticker from "./Ticker";

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
