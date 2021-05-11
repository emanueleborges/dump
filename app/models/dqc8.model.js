const connection = require('../config/connection')

class Dqc8Model {
    async index(filter = {}) {
        return new Promise((resolve, reject) => {
            var DqcmodelObj = connection.getDb().collection('Dqcmodel')
            Promise.all([DqcmodelObj]).then((result) => {
                var DqcmodelArray = result[0].find(filter).sort({ id: 1 }).toArray()
                Promise.all([DqcmodelArray]).then((result) => resolve(result[0]))
            })
        })
    }

    async pesquisar(filter = {}) {
        return new Promise((resolve, reject) => {
            var DqcmodelObj = connection.getDb().collection('Dqcmodel')
            Promise.all([DqcmodelObj]).then((result) => {
                var DqcmodelArray = result[0].find(filter).sort({ id: 1 }).toArray()
                Promise.all([DqcmodelArray]).then((result) => resolve(result[0]))
            })
        })
    }


    
	
    async insert(data = {}) {
        data["create_dt"] = new Date()
        return new Promise((resolve, reject) => {
            const DqcmodelObj = connection.getDb().collection('Dqcmodel')
            Promise.all([DqcmodelObj]).then((result) => {
                result[0].insert(data).then(r => {
                    resolve(r)
                }).catch(err => reject(err))
            })
        })
    }

    async update(filter = {}, data = {}) {
        data["update_dt"] = new Date()
        return new Promise((resolve, reject) => {
            const DqcmodelObj = connection.getDb().collection('Dqcmodel')
            Promise.all([DqcmodelObj]).then((result) => {
                result[0].update(filter, { $set: data }).then(r => {
                    resolve(r)
                }).catch(err => reject(err))
            })
        })
    }

    async delete(filter = {}) {
        return new Promise((resolve, reject) => {
            const transacoesObj = connection.getDb().collection('Dqcmodel')
            Promise.all([transacoesObj]).then((result) => {
                var transacoesArray = result[0].deleteMany(filter)
                Promise.all([transacoesArray]).then((result) => resolve(result[0]))
            })
        })
    }
}

module.exports = new Dqc8Model()
