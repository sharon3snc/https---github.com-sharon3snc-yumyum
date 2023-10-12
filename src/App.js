import React from 'react';
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import './App.css';
import Home from './Home';
import Recetas from './Recetas';
import Planes from './Planes';
import Crea from './Crea'
import { PlanProvider } from './PlanContext';

function App() {
  return (
    <Router>
      <PlanProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recetas/:id" element={<Recetas />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/crea" element={<Crea />} />
        </Routes>
      </PlanProvider>
    </Router>
  );
}

export default App;
