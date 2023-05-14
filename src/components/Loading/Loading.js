import Image from "../Image/Image";
import LoaderSRC from "../../assets/loader.gif";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="app-loading">
      <Image src={LoaderSRC} className="app-loading-img" />
      {/* <div className="app-loading-text">Loading...</div> */}
      <div className="app-loading-backdrop"></div>
    </div>
  );
};

export default Loading;
