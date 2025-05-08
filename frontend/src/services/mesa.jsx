import { useEffect, useState } from 'react';
import api from './services/api';

function Mesas() {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    api.get('/mesas')
      .then((response) => setMesas(response.data))
      .catch((error) => console.error('Erro ao buscar mesas:', error));
  }, []);

  return (
    <div>
      <h2>Mesas</h2>
      <ul>
        {mesas.map((mesa) => (
          <li key={mesa.id}>Mesa {mesa.numero} - {mesa.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mesas;
