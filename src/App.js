import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Schedule />
    </div>
  );
}

export default App;
