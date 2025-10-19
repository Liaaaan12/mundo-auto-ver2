
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/cliente.css'; 

// Asegura que se intente montar en el ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);