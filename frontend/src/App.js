import React, { useState } from 'react';
import Login from './Login';
import FuncionarioEditor from './FuncionarioEditor';
import './App.css';

function App() {
  const [logadoComoFuncionario, setLogadoComoFuncionario] = useState(false);

  return (
    <div className="App">
      {logadoComoFuncionario ? (
        <FuncionarioEditor />
      ) : (
        <Login onLoginSucesso={() => setLogadoComoFuncionario(true)} />
      )}
    </div>
  );
}

export default App;