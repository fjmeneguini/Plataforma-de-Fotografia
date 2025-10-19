/*module.exports = {
    model: (db, callback) => {
        console.log('Funfou');
        const sql = 'select * from valor';
        db.query(sql, callback);
    }
}*/
const db = require('../config/db');

module.exports = {
  
  galeria: (connection, callback) => {
    dbConn = db;
    const sql = 'SELECT * FROM galerias WHERE visivel = 1 ORDER BY data_criacao DESC;';
    connection.query(sql, callback);
  }
}