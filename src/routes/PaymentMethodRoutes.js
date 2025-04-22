const express = require('express');
const PaymentMethodController = require('../controllers/PaymentMethodController');
const router = express.Router();

router.post('/', PaymentMethodController.create);
router.get('/', PaymentMethodController.getAll);
router.get('/:id', PaymentMethodController.getById);
router.put('/:id', PaymentMethodController.update);
router.delete('/:id', PaymentMethodController.delete);

module.exports = router;
