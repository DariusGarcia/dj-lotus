import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Schedule from "./components/Schedule/Schedule";
import DjLotus from "./components/AnimatedModels/DjLotus";

function App() {
  return (
    <div className="App">
      <Navigation />
      <DjLotus />
      <About />
      <Contact />
      {/* <Schedule /> */}
    </div>
  );
}

export default App;
