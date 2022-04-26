import { useContext } from "react";
import { themeContext } from "../../Context/Context";
import "./Experience.css";

function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle">2+</div>
        <span>years</span>
        <span>Ecperience</span>
      </div>
      <div className="achievement">
        <div className="circle">30+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">1</div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
}

export default Experience;
