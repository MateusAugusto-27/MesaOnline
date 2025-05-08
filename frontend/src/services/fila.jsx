import { useEffect, useState } from 'react';
import api from './services/api';

function Fila() {
  const [fila, setFila] = useState([]);
  const [nome, setNome] = useState('');

  const carregarFila = () => {
    api.get('/fila')
      .then((response) => setFila(response.data))
      .catch((error) => console.error('Erro ao buscar fila:', error));
  };

  useEffect(() => {
    carregarFila();
  }, []);

  const adicionarNaFila = async () => {
    await api.post('/fila', { nome });
    carregarFila();
    setNome('');
  };

  return (
    <div>
      <h2>Fila de Espera</h2>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do cliente"
      />
      <button onClick={adicionarNaFila}>Adicionar</button>
      <ul>
        {fila.map((cliente, index) => (
          <li key={index}>{cliente.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fila;
