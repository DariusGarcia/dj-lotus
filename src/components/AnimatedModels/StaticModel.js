import "./StaticModel.scss";
import macbook from "../../images/Macbook-pro.jpg";
import lotuslogo from "../../images/lotus-logo.jpg";
import Spline from "@splinetool/react-spline";

function StaticModel() {
  return (
    <div className="static-model-container">
      {/* {" "} */}
      {/* <img src={lotuslogo} alt="lotus-logo" id="static-model-image" /> */}
      {/* <Spline
        className="static-model-image"
        scene="https://prod.spline.design/iVEDS9klkYZjZD1L/scene.splinecode"
      /> */}
      <Spline
        className="static-model-image"
        scene="https://prod.spline.design/tw3td1Z9czt47Mc6/scene.splinecode"
      />
    </div>
  );
}

export default StaticModel;
