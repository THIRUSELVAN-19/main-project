import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Journey from './Pages/Journey';
import Ourteam from './Pages/Ourteam';
import Career from './Pages/Career';
import Contact from './Pages/Contact';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Ourteam" element={<Ourteam />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
