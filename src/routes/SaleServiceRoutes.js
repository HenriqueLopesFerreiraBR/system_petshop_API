const express = require('express');
const SaleServiceController = require('../controllers/SaleServiceController');
const router = express.Router();

router.post('/', SaleServiceController.create);
router.get('/', SaleServiceController.getAll);
router.get('/:id', SaleServiceController.getById);
router.put('/:id', SaleServiceController.update);
router.delete('/:id', SaleServiceController.delete);

module.exports = router;
