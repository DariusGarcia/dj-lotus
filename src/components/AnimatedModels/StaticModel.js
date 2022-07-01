import "./StaticModel.scss";
import macbook from "../../images/Macbook-pro.jpg";

function StaticModel() {
  return (
    <div className="static-model-container">
      {" "}
      <img src={macbook} alt="macbook" id="static-model-image" />
    </div>
  );
}

export default StaticModel;
