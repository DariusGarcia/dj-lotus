import "./PicStack.scss";
import mixing from "../../images/mixing1.jpg";
import mixing2 from "../../images/dj-portrait3.jpg";
import mixing3 from "../../images/djing-portrait2.jpg";

function PicStack() {
  return (
    <div className="pictures-container">
      <img src={mixing} alt="lotus-mixing" className="mixing-image2" />
      <img src={mixing2} alt="lotus-mixing2" className="mixing-image2" />
      <img src={mixing3} alt="lotus-mixing3" className="mixing-image" />
    </div>
  );
}

export default PicStack;
