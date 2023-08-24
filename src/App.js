import React from 'react';
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import './App.css';
import Home from './Home';
import Recetas from './Recetas';
import Planes from './Planes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas/:id" element={<Recetas />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>
    </Router>
  );
}

export default App;
