import "./Footer.css";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

import Wave from "../../img/wave.png";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>omer.ingec24@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/omer_ingc?igshid=YmMyMTA2M2Y=">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/omer1325">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
