// server.js
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('Erro ao iniciar o servidor:', err.message);
});