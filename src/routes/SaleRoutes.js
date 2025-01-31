const express = require('express');
const SaleController = require('../controllers/SaleController');
const router = express.Router();

router.post('/', SaleController.create);
router.get('/', SaleController.getAll);
router.get('/:id', SaleController.getById);
router.put('/:id', SaleController.update);
router.delete('/:id', SaleController.delete);

module.exports = router;
