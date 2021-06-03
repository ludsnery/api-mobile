const bebidasModel = require('../models/bebidas');

exports.findAll = async (req, res) => {
    try {
        let results = await bebidasModel.find({})
        res.send(results);
    } catch(e) {
        throw(e);
    }
}

exports.findById = async (req, res) => {
    try {
        let bebida = await bebidasModel.findById(req.params.id)
        res.send(bebida);
    } catch(e) {
        throw(e);
    }
}

exports.create = async (req, res) => { 
    try {
        let newItem = {
            descricao: req.body.descricao,
            quantidade: req.body.quantidade,
            dataEntrega: new Date(req.body.dataEntrega),
            isGelada: req.body.isGelada
        }
        let bebidas = await bebidasModel.create(newItem)
        res.send(bebidas);
    } catch(e) {
        throw(e);
    }

}

exports.update = async (req, res) => {
    try {
        let data = {
            descricao: req.body.descricao,
            quantidade: req.body.quantidade,
            dataEntrega: new Date(req.body.dataEntrega),
            isGelada: req.body.isGelada
        }
        await bebidasModel.findOneAndUpdate({"_id": req.params.id}, data);
        res.status(200).send();;
    } catch(e) {
        throw(e);
    }

}

exports.delete = async (req, res) => {
    try {
        await bebidasModel.findByIdAndDelete(req.params.id)
        res.status(200).send();
    } catch(e) {
        throw(e);
    }
}
