import "./StaticModel.scss";
import macbook from "../../images/Macbook-pro.jpg";
import lotuslogo from "../../images/lotus-logo.jpg";

function StaticModel() {
  return (
    <div className="static-model-container">
      {" "}
      <img src={lotuslogo} alt="lotus-logo" id="static-model-image" />
    </div>
  );
}

export default StaticModel;
