import portrait from "../images/portrait.jpg";
import ContactButton from "./InfoButton";
import InfoText from "./InfoText";
import "../css/info.css";

const Info = () => {
  return (
    <div>
      <img src={portrait} alt="portrait" className="portrait" />
      <InfoText />
      <ContactButton />
    </div>
  );
};

export default Info;
