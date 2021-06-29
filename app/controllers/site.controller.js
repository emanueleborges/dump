var mongodb = require('mongodb')
const dqc841Model = require('../models/dqc841.model')
const dqc84Model = require('../models/dqc84.model')
const dqc8Model = require('../models/dqc8.model')



class SiteController {

    async index(req, res) {        
        res.render('site/index')
        console.log ('entrou aqui no index')
    }
  
}

module.exports = new SiteController()