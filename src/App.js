import './App.scss';
import Navigation from './components/Navigation/Navigation';
import StaticModel from './components/AnimatedModels/StaticModel';
import DjLotus from './components/AnimatedModels/DjLotus';
import About from './components/About/About';
// import Contact from "./components/Contact/Contact";
import PicStack from './components/PictureStack/PicStack';
import Schedule from './components/Schedule/Schedule';
import Collaborations from './components/Collaborations/Collaborations';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

import MediaQuery from 'react-responsive';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <MediaQuery minWidth={1024}>
        <div className='lotus-container'>
          <DjLotus />
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={1023}>
        <div>
          <StaticModel />
        </div>
      </MediaQuery>
      <About />
      {/* <Contact /> */}
      <Schedule />
      <PicStack />
      <Collaborations />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
