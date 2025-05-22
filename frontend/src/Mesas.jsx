import { useEffect, useState } from 'react';
import api from './services/api';

function Mesas() {
  const [mesas, setMesas] = useState([]);

  const carregarMesas = async () => {
    const response = await api.get('/mesas');
    setMesas(response.data);
  };

  const ocuparMesa = async (id) => {
    await api.post(`/mesas/${id}/ocupar`);
    carregarMesas();
  };

  const liberarMesa = async (id) => {
    await api.post(`/mesas/${id}/liberar`);
    carregarMesas();
  };

  useEffect(() => {
    carregarMesas();
  }, []);

  return (
    <div>
      <h2>Mesas</h2>
      <ul>
        {mesas.map((mesa) => (
          <li key={mesa.id}>
            Mesa {mesa.numero} - {mesa.status}
            {mesa.status === 'livre' ? (
              <button onClick={() => ocuparMesa(mesa.id)}>Ocupar</button>
            ) : (
              <button onClick={() => liberarMesa(mesa.id)}>Liberar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mesas;
