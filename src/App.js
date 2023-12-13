// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import CustomNavbar from './components/Navbar';
import Climate from './components/Climate';
import BracketValidation from './components/BracketValidation';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/climate" element={<Climate />} />
            <Route path="/bracket_validation" element={<BracketValidation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
