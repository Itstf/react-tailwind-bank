import Sign_in from './components/Sign_in';
import Sign_up from './components/Sign_up';
import DefaultScreen from "../src/DefaultScreen"
import Logged from '../src/Logged'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";


const App = () => {

  return (
    <>
      {/* <h1 className="text-4xl text-center"> testando </h1> */}

      <Router>
        <Routes>
          <Route path='/' element={<DefaultScreen />} />
          <Route path='/logged' element={<Logged />} />
          <Route path='/sign_in' element={<Sign_in />} />
          <Route path='/sign_up' element={<Sign_up />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
