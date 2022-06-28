import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import DjLotus from "./components/AnimatedModels/DjLotus";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Schedule from "./components/Schedule/Schedule";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="lotus-container">
        <DjLotus />
      </div>
      <About />
      {/* <Contact />  */}
      <Newsletter />
      <Schedule />
    </div>
  );
}

export default App;
