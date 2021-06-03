const express = require('express');
const router = express.Router();

const bebidasController = require('../controllers/bebidasController');

router.get('/bebidas', bebidasController.findAll);
router.get('/bebidas/:id', bebidasController.findById);
router.post('/bebidas', bebidasController.create);
router.put('/bebidas/:id', bebidasController.update);
router.delete('/bebidas/:id', bebidasController.delete);



module.exports = router;