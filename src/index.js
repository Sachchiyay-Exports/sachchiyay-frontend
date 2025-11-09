import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // Assuming your styles are here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ALL manual JS logic for sliders/navbar/modal MUST be gone from this file.
