import Section01 from "./Screens/Section01";
import Section02 from "./Screens/Section02";
import Section03 from "./Screens/Section03";
import "./App.css";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import Section04 from "./Screens/Section04";
import Section05 from "./Screens/Section05";

function App() {
  return (
    <div>
      <Section01 />

      <Fade>
        <Section02 />
      </Fade>

      <Section03 />
      <Section04 />
      <Section05 />
    </div>
  );
}

export default App;
