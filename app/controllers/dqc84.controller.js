var mongodb = require('mongodb')
const dqc84Model = require('../models/dqc84.model')
const dqc8Model = require('../models/dqc8.model')


class dqc84Controller {
    async index(req, res) {
        var _dqc84Model = dqc84Model.index()
        var _dqc8Model = dqc8Model.index()
        Promise.all([_dqc84Model, _dqc8Model]).then((r) => {
            var dqc84Model = r[0]
            var dqc8Model = r[1]
            res.render('dqc84/index', {results: dqc84Model, resultss: dqc8Model})
        })
    }   
     
    async salvar(req, res) {
        if (req.query.id)
            await dqc84Model.update({ _id: new mongodb.ObjectID(req.query.id) }, req.body).then(r => {
                res.redirect('/dqc84')
            }).catch(err => { res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
        else
            await dqc84Model.insert(req.body).then(r => {
                res.redirect('/dqc84')
            }).catch(err => { console.log(err); res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
    }

    async deletar(req, res) {

        await dqc84Model.delete({ _id: new mongodb.ObjectID(req.query.id) }, req.body).then(r => {
            res.redirect('/dqc84')
        }).catch(err => { res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
    }
}



module.exports = new dqc84Controller()