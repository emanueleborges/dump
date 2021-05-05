const path = require('path');

const routes = require('express').Router();

const siteController        = require('../controllers/site.controller.js')

const dqc8Controller         = require('../controllers/dqc8.controller.js')

const dqc84Controller       = require('../controllers/dqc84.controller.js')

const dqc841Controller      = require('../controllers/dqc841.controller.js')

routes.get('/', siteController.index)

routes.get('/dqc8',                  dqc8Controller.index);
routes.post('/dqc8/salvar',          dqc8Controller.salvar);
routes.post('/dqc8/deletar',         dqc8Controller.deletar);

routes.get('/dqc84',                dqc84Controller.index);
routes.post('/dqc84/salvar',        dqc84Controller.salvar);
routes.post('/dqc84/deletar',       dqc84Controller.deletar);

routes.get('/dqc841',               dqc841Controller.index);
routes.post('/dqc841/salvar',       dqc841Controller.salvar);
routes.post('/dqc841/deletar',      dqc841Controller.deletar);




module.exports = routes;