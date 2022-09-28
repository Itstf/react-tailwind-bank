import Navbar from '../src/components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Application from './components/Application';
import AllInOne from './components/AllInOne';
import Prime from './components/Prime';

function App() {
  return (
    <>
      {/* <h1 className="text-4xl text-center"> testando </h1> */}
      <Navbar />
      <Hero />
      <Application />
      <About />
      <AllInOne />
      <Prime />
    </>
  );
}

export default App;
