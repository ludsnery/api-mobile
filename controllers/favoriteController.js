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