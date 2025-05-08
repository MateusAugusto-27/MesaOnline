import { useEffect, useState } from 'react';
import api from './services/api';

function Fila() {
  const [fila, setFila] = useState([]);
  const [nome, setNome] = useState('');

  const carregarFila = async () => {
    const response = await api.get('/fila');
    setFila(response.data);
  };

  const adicionar = async () => {
    if (!nome) return;
    await api.post('/fila', { nome });
    setNome('');
    carregarFila();
  };

  const remover = async () => {
    await api.delete('/fila');
    carregarFila();
  };

  useEffect(() => {
    carregarFila();
  }, []);

  return (
    <div>
      <h2>Fila de Espera</h2>
      <input
        type="text"
        placeholder="Nome do cliente"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={remover} disabled={fila.length === 0}>Remover</button>
      <ul>
        {fila.map((pessoa, index) => (
          <li key={index}>{pessoa.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fila;
