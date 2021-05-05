var mongodb = require('mongodb')
const dqc841Model = require('../models/dqc841.model')

class dqc841Controller {
    async index(req, res) {
        var results = dqc841Model.index().then(r => {
            res.render('dqc841/index', {results: r});
        })
    }

    async editar(req, res) {
        // var cpf

        // if (req.session.groups.find((data) => {
        //         return data == 'admin'
        //     }))
        //     cpf = req.query.cpf
        // else
        //     cpf = req.session.user

        // await associadoModel.get({
        //     cpf: cpf
        // }).then(r => {
        //     var associado = r[0]
        //     res.render('associado/editar', {
        //         "associado": associado,
        //         permissao: new Permissao(req.session.groups)
        //     })
        // }).catch(err => {
        //     res.send("Erro: Banco de Dados! Clique <a href='.'>aqui</a> para tentar novamente...");
        //     return;
        // })

    }

    async novo(req, res) {
        res.render('associado/novo')
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