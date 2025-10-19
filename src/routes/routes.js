const { index } = require('../controllers/controllerIndex');
const { login } = require('../controllers/controllerLogin');
const { sobre } = require('../controllers/controllerSobre');
const { galeria } = require('../controllers/controllerGaleria');
const { maisDetalhes } = require('../controllers/controllerMaisDetalhes')


module.exports = {
    index: (app) => {
        app.get('/', function (req, res) {
            index(app, req, res);
        });
    },
    login: (app) => {
        app.get('/login', function (req, res) {
            login(app, req, res);
        });
    },
    sobre: (app) => {
        app.get('/sobre', function (req, res) {
            sobre(app, req, res);
        });
    },
    galeria: (app) => {
        app.get('/galeria', function (req, res) {
            galeria(app, req, res);
        });
    },
    maisDetalhes: (app) => {
        app.get('/maisDetalhes', function (req, res) {
            maisDetalhes(app, req, res);
        });
    },
    naoEncontrado: (app) => {
        app.use((req, res) => {
            res.status(404).render('naoEncontrado.ejs');
        });
    }
}