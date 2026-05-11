import Intro from "./Intro";
import Ticker from "./Ticker";

export default function Main() {
  return (
    <div className="main">
      <Intro></Intro>
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
