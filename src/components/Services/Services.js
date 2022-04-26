import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../../resume.pdf";
import { themeContext } from "../../Context/Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Services() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome aw1">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Sequi nemo quod nesciunt ratione explicabo quasi quaerat, nulla alias
          iure cupiditate, <br />
          sit ab pariatur nihil atque earum veniam accusantium ipsam
          dignissimos!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={"Html, Css, Tailwind Css, JavaScript, React.js, Netx.js "}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={"C#, Asp.Net.Mvc, .Net5, .Net6, Rest API, Microservice "}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Database"}
            detail={"MS SQL, PostgreSQL, Redis, Mongo DB "}
          />
        </motion.div>
        <div
          className="blur s-blur-2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
