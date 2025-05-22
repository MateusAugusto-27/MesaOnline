import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Certifique-se de que o caminho do arquivo App.tsx está correto
import './index.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
