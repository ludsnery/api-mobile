const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BebidaSchema = new Schema({
    descricao: {
        type: String,
        required: [true, "*Campo Obrigatório!"]
    },
    quantidade: {
        type: Number,
        required: [true, "*Campo Obrigatório!"]
    },
    dataEntrega: {
        type: Date,
        required: [true, "*Campo Obrigatório!"]
    },
    isGelada: {
        type: Boolean,
        required: [true, "*Campo Obrigatório!"]
    } 
});

const bebidas = mongoose.model('Bebidas', BebidaSchema);

module.exports = bebidas;
