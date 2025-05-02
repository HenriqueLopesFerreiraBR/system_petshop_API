const express = require('express');
const OrderServiceItemController = require('../controllers/OrderServiceItemController');
const router = express.Router();

router.post('/', OrderServiceItemController.create);
router.get('/', OrderServiceItemController.getAll);
router.get('/:id', OrderServiceItemController.getById);
router.put('/:id', OrderServiceItemController.update);
router.delete('/:id', OrderServiceItemController.delete);

module.exports = router;
