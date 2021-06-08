const favoritesModel = require('../models/favorite');

exports.findAll = async (req, res) => {
    try {
        let results = await favoritesModel.find({}).populate('bebidas');
        res.send(results);
    } catch(e) {
        throw(e);
    }
}

exports.store = async (req, res) => {
    try {
        const { id } = req.body;

        const favorite = await favoritesModel.create({
            bebidas: id,
        });

        await favorite.save();

        res.send(favorite);
    } catch(e) {
        throw(e);
    }
}


exports.delete = async (req, res) => {
    try {
        await favoritesModel.findOneAndDelete({ bebidas: req.params.bebida_id })
        res.status(200).send();
    } catch(e) {
        throw(e);
    }
}