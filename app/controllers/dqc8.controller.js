var mongodb = require('mongodb')
const dqc8Model = require('../models/dqc8.model')

class dqc8Controller {
    async index(req, res) {
        var results = dqc8Model.index().then(r => {
            res.render('dqc8/index', {results: r});
        })
    }

    async salvar(req, res) {
        console.log("teste body")
        console.log(req.body)
        if (req.query.id)
            await dqc8Model.update({ _id: new mongodb.ObjectID(req.query.id) }, req.body).then(r => {
                res.redirect('/dqc8')
            }).catch(err => { res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
        else
            await dqc8Model.insert(req.body).then(r => {
                res.redirect('/dqc8')
            }).catch(err => { console.log(err); res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
    }

    async deletar(req, res) {

        await dqc8Model.delete({ _id: new mongodb.ObjectID(req.query.id) }, req.body).then(r => {
            res.redirect('/dqc8')
        }).catch(err => { res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
    }
}

module.exports = new dqc8Controller()