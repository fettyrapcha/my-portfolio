
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';




function App() {
  return (
    <>
    
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 4,
                color: "#F9AB00"
              }
            }
          },
        }}
        />
        <Navigation />
        <Header  />
        <About  />
        <Resume  />
        <Services  />
        <Portfolio  />
        <Contact />
        
    </>
  );
}

export default App;
