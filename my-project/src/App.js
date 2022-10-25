import Sign_in from './components/Sign_in';
import Sign_up from './components/Sign_up';
import DefaultScreen from "../src/DefaultScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      {/* <h1 className="text-4xl text-center"> testando </h1> */}

      <Router>
        <Routes>
          <Route path='/' element={<DefaultScreen />} />
          <Route path='/sign_in' element={<Sign_in />} />
          <Route path='/sign_up' element={<Sign_up />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
