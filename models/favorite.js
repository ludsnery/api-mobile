const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    bebida: {type: Schema.Types.ObjectId, ref: 'Bebidas'}
});

const favorites = mongoose.model('Favorites', FavoriteSchema);

module.exports = favorites;
