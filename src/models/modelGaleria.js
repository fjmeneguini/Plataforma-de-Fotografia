module.exports = {
  getEvents: (connection, callback) => {
    if (!connection) {
      console.error('Conexão inválida com o banco de dados.');
      return callback(new Error('Conexão inválida'), null);
    }

    const sql = 'SELECT * FROM event_;';
    console.log('Executando SQL:', sql);

    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Erro ao executar query:', error);
        return callback(error, null);
      }

      if (!results || results.length === 0) {
        console.log('Nenhum evento encontrado.');
        return callback(null, []);
      }

      console.log('Resultados encontrados:', results.length);
      return callback(null, results);
    });
  }
};