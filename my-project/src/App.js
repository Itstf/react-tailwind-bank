import Navbar from '../src/components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Loan from './components/Loan';

function App() {
  return (
    <>
      {/* <h1 className="text-4xl text-center"> testando </h1> */}
      <Navbar />
      <Hero />
      <Loan />
      <About />
    </>
  );
}

export default App;
