const connection = require('../config/connection')

class Dqc84Model {
    async index(filter = {}) {
        return new Promise((resolve, reject) => {
            var Dqc84Obj = connection.getDb().collection('Dqc84')
            Promise.all([Dqc84Obj]).then((result) => {
                var Dqc84Array = result[0].find(filter).sort({ id: 1 }).toArray()
                Promise.all([Dqc84Array]).then((result) => resolve(result[0]))
            })
        })
    }

    async insert(data = {}) {
        data["create_dt"] = new Date()

        return new Promise((resolve, reject) => {
            const Dqc84Obj = connection.getDb().collection('Dqc84')
            Promise.all([Dqc84Obj]).then((result) => {
                result[0].insert(data).then(r => {
                    resolve(r)
                }).catch(err => reject(err))
            })
        })
    }

    async update(filter = {}, data = {}) {
        data["update_dt"] = new Date()

        return new Promise((resolve, reject) => {
            const Dqc84Obj = connection.getDb().collection('Dqc84')
            Promise.all([Dqc84Obj]).then((result) => {
                result[0].update(filter, { $set: data }).then(r => {
                    resolve(r)
                }).catch(err => reject(err))
            })
        })
    }

    async delete(filter = {}) {
        return new Promise((resolve, reject) => {
            const transacoesObj = connection.getDb().collection('Dqc84')
            Promise.all([transacoesObj]).then((result) => {
                var transacoesArray = result[0].deleteMany(filter)
                Promise.all([transacoesArray]).then((result) => resolve(result[0]))
            })
        })
    }

}

module.exports = new Dqc84Model()
