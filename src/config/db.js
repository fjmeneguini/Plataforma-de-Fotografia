// db.js
require('dotenv').config();
const mysql = require('mysql2');

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || '2003';
const database = process.env.DB_NAME || 'portfolio';


module.exports = () => {
  try {
  dbConn = mysql.createConnection({
      host: host,
      user: user,
      password: password, 
      database: database
    });
    console.log('Banco de dados conectado com sucesso!');
    return dbConn;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra o app se não conseguir conectar
  }
}