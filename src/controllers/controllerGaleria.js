// const db = require('../db');
const { galeria } = require('../models/modelGaleria');

module.exports.galeria = (app, req, res) => {
        try {
                res.render('galeria', { galeria: result });
                console.log(result)
        } catch (error) {
                console.error(error);
                es.status(500).send('Erro ao carregar a página inicial');
        }
};



