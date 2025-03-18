const express = require('express');
const OrderItemController = require('../controllers/OrderItemController');
const router = express.Router();

router.post('/', OrderItemController.create);
router.get('/', OrderItemController.getAll);
router.get('/:id', OrderItemController.getById);
router.put('/:id', OrderItemController.update);
router.delete('/:id', OrderItemController.delete);

module.exports = router;
