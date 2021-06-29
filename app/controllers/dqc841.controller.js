var mongodb = require('mongodb')
const dqc841Model = require('../models/dqc841.model')
const dqc84Model = require('../models/dqc84.model')

class dqc841Controller {

    async index2(req, res) {

        var _dqc841Model = dqc841Model.index()
        var _dqc84Model = dqc84Model.index()
        
        Promise.all([_dqc841Model, _dqc84Model]).then((r) => {
            var dqc841Model = r[0]
            var dqc84Model = r[1]

            res.render('dqc841/index', {results: dqc841Model, resultss: dqc84Model})
        })
    }   
    async index(req, res) {
    if (req.query.search){

        var _dqc841Model = dqc841Model.index({
            fat_part_no: {
                $regex: ".*" + req.query.search + ".*"
            }
        })

        var _dqc84Model = dqc84Model.index()
        Promise.all([_dqc841Model, _dqc84Model]).then((r) => {
            var dqc841Model = r[0]
            var dqc84Model = r[1]
            res.render('dqc841/index', {results: dqc841Model, resultss: dqc84Model})
        })
    } else {
        var _dqc841Model = dqc841Model.index()
        var _dqc84Model = dqc84Model.index()
        Promise.all([_dqc841Model, _dqc84Model]).then((r) => {
        var dqc841Model = r[0]
        var dqc84Model = r[1]
        res.render('dqc841/index', {results: dqc841Model, resultss: dqc84Model})
    })

    }

}   





    async salvar(req, res) {
        console.log("teste body")
        console.log(req.body)
        if (req.query.id)
            await dqc841Model.update({ _id: new mongodb.ObjectID(req.query.id) }, req.body).then(r => {
                res.redirect('/dqc841')
            }).catch(err => { res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
        else
            await dqc841Model.insert(req.body).then(r => {
                res.redirect('/dqc841')
            }).catch(err => { console.log(err); res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
    }

    async deletar(req, res) {

        await dqc841Model.delete({ _id: new mongodb.ObjectID(req.query.id) }, req.body).then(r => {
            res.redirect('/dqc841')
        }).catch(err => { res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente..."); return; })
    }
}

module.exports = new dqc841Controller()