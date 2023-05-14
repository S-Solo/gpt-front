import "./ResponseWindow.scss";
import OwlImageSRC from "../../assets/owl.png";
// import TriangleSRC from "../../assets/triangle.png";
import Image from "../Image/Image";

const ResponseWindow = ({ text = "default" }) => {
  return (
    <div className="response-window-container">
      <div className="response-window-container-inner">
        <div className="response-window">{text}</div>
        {/* <Image
          src={TriangleSRC}
          className="response-window-container-triangle"
        /> */}
        <Image src={OwlImageSRC} className="response-window-container-img" />
      </div>
    </div>
  );
};

export default ResponseWindow;
