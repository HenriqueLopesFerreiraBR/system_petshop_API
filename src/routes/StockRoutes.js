const express = require('express');
const StockController = require('../controllers/StockController');
const router = express.Router();

router.post('/', StockController.create);
router.get('/', StockController.getAll);
router.get('/:id', StockController.getById);

// Adicione essas rotas antes da rota genérica de update
router.put('/addProduct/', StockController.addProduct);
router.put('/removeProduct/', StockController.removeProduct);

router.put('/:id', StockController.update); // Agora essa rota vem por último
router.delete('/:id', StockController.delete);

module.exports = router;
