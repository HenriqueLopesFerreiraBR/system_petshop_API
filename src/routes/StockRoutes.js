const express = require('express');
const StockController = require('../controllers/StockController');
const router = express.Router();

router.post('/', StockController.create);
router.get('/', StockController.getAll);
router.get('/:id', StockController.getById);
router.put('/:id', StockController.update);
router.delete('/:id', StockController.delete);
router.put('/addProduct/:id', StockController.addProduct);
router.put('/removeProduct/:id', StockController.removeProduct);

module.exports = router;
