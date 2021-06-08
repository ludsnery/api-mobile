const express = require('express');
const router = express.Router();

const bebidasController = require('../controllers/bebidasController');
const favoriteController = require('../controllers/favoriteController');


router.get('/bebidas', bebidasController.findAll);
router.get('/bebidas/:id', bebidasController.findById);
router.post('/bebidas', bebidasController.create);
router.put('/bebidas/:id', bebidasController.update);
router.delete('/bebidas/:id', bebidasController.delete);


router.get('/favorites', favoriteController.findAll);
router.post('/favorites', favoriteController.store);
router.delete('/favorites/:bebida_id', favoriteController.delete);


module.exports = router;