import React from 'react';
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import './App.css';
import Home from './Home';
import Recetas from './Recetas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<Recetas />} />
      </Routes>
    </Router>
  );
}

export default App;
