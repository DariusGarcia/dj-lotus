import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Schedule from "./components/Schedule/Schedule";
import DjLotus from "./components/AnimatedModels/DjLotus";
function App() {
  return (
    <div className="App">
      <Navigation />
      <DjLotus />
      <About />
      {/* <Schedule /> */}
    </div>
  );
}

export default App;
