import React, { useState } from "react";
import "./FuncionarioEditor.css";

const mesasIniciais = [
  { id: 1, ocupada: false, tempo: "" },
  { id: 2, ocupada: true, tempo: "23:54" },
  { id: 3, ocupada: false, tempo: "" },
  { id: 4, ocupada: false, tempo: "" },
  { id: 5, ocupada: false, tempo: "" },
  { id: 6, ocupada: true, tempo: "12:36" }
];

const FuncionarioEditor = () => {
  const [mesas, setMesas] = useState(mesasIniciais);

  const alternarStatus = (id) => {
    setMesas(prevMesas =>
      prevMesas.map(mesa =>
        mesa.id === id
          ? { ...mesa, ocupada: !mesa.ocupada, tempo: mesa.ocupada ? "" : gerarHoraAtual() }
          : mesa
      )
    );
  };

  const gerarHoraAtual = () => {
    const agora = new Date();
    return agora.toTimeString().slice(0, 5); // HH:mm
  };

  return (
    <div className="editor-container">
      <h1>EDITOR DE MESAS</h1>
      <div className="mesa-grid">
        {mesas.map((mesa) => (
          <div key={mesa.id} className="mesa-card">
            <div className="mesa-img">🍽️</div>
            {mesa.ocupada && <p className="tempo">TEMPO: {mesa.tempo}</p>}
            <button className="editar-btn">EDITAR</button>
            <div className="status-icon">
              {mesa.ocupada ? "❌" : "✅"}
            </div>
            {mesa.ocupada && (
              <button
                className="modificar-btn"
                onClick={() => alternarStatus(mesa.id)}
              >
                MODIFICAR STATUS
              </button>
            )}
          </div>
        ))}
      </div>
      <button className="sair-btn">SAIR</button>
    </div>
  );
};

export default FuncionarioEditor;