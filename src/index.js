const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let mesas = [
  { id: 1, numero: 1, status: 'livre' },
  { id: 2, numero: 2, status: 'ocupada' },
  { id: 3, numero: 3, status: 'livre' },
];

let fila = [];

// Rotas de MESAS
app.get('/mesas', (req, res) => {
  res.json(mesas);
});

app.post('/mesas/:id/ocupar', (req, res) => {
  const id = parseInt(req.params.id);
  mesas = mesas.map((mesa) =>
    mesa.id === id ? { ...mesa, status: 'ocupada' } : mesa
  );
  res.json({ mensagem: `Mesa ${id} ocupada.` });
});

app.post('/mesas/:id/liberar', (req, res) => {
  const id = parseInt(req.params.id);
  mesas = mesas.map((mesa) =>
    mesa.id === id ? { ...mesa, status: 'livre' } : mesa
  );
  res.json({ mensagem: `Mesa ${id} liberada.` });
});

// Rotas de FILA
app.get('/fila', (req, res) => {
  res.json(fila);
});

app.post('/fila', (req, res) => {
  const { nome } = req.body;
  fila.push({ nome });
  res.json({ mensagem: `${nome} adicionado(a) à fila.` });
});

app.delete('/fila', (req, res) => {
  const removido = fila.shift();
  res.json({ mensagem: `${removido?.nome || 'Ninguém'} removido da fila.` });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
