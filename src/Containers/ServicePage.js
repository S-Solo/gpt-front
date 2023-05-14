import { Fragment, useState } from "react";
import LandingImage from "../components/LandingImage/LandingImage";
import HeroImage2SRC from "../assets/hero2.png";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import "./ServicePages.scss";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const imitateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/response");
    }, 3_000);
  };

  return (
    <Fragment>
      <LandingImage imageSrc={HeroImage2SRC}>
        <Fragment>
          <div className="hero-text-container flex flex-col align-center">
            <h1 className="hero-image-text">Onboarding Assistant</h1>
            <div className="service-container">
              <label className="service-label">Github URL</label>
              <Input className="service-input" />
            </div>
            <Button onClick={imitateLoading}>Submit</Button>
          </div>
        </Fragment>
      </LandingImage>
      {loading && <Loading />}
    </Fragment>
  );
};

export default ServicePage;
