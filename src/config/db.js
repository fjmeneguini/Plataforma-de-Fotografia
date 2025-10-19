// db.js
require('dotenv').config();
const mysql = require('mysql2/promise');

// Cria uma função assíncrona para conexão
async function connectDB() {
  try {

    const connection = await mysql.createConnection({

      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '1234',
      database: process.env.DB_NAME || 'portfolio',

    });

    console.log('Banco de dados conectado com sucesso!');
    return connection;

  } catch (error) {

    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra o app se não conseguir conectar

  }
}

module.exports = connectDB;
