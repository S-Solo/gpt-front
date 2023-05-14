import "./ResponseWindow.scss";
import OwlImageSRC from "../../assets/owl.png";
import Image from "../Image/Image";

const ResponseWindow = ({ text = "default" }) => {
  return (
    <div className="response-window-container">
      <div className="response-window">{text}</div>
      <Image src={OwlImageSRC} className="response-window-container-img" />
    </div>
  );
};

export default ResponseWindow;
