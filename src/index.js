import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PlanProvider } from './PlanContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlanProvider>
      <App />
    </PlanProvider>
  </React.StrictMode>
);

reportWebVitals();
