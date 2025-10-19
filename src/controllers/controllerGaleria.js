const dbConnection = require('./../config/db');
const { getEvents } = require('./../models/modelGaleria');

module.exports.galeria = (app, req, res) => {
  console.log('[Controller galeria]');
  
  const dbConn = dbConnection(); // mantém a estrutura original

  getEvents(dbConn, (error, result) => {
    // Validação de erro no banco
    if (error) {
      console.error('Erro ao buscar eventos:', error);
      return res.status(500).send('Erro ao carregar eventos');
    }

    // Validação se não há eventos
    if (!result || result.length === 0) {
      console.log('Nenhum evento encontrado');
      return res.render('galeria.ejs', { events: [] });
    }

    // Renderiza
    return res.render('galeria.ejs', { events: result });
  });
};
