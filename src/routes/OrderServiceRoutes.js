const express = require('express');
const OrderServiceController = require('../controllers/OrderServiceController');
const router = express.Router();

router.post('/', OrderServiceController.create);
router.get('/', OrderServiceController.getAll);
router.get('/:id', OrderServiceController.getById);
router.put('/:id', OrderServiceController.update);
router.delete('/:id', OrderServiceController.delete);

module.exports = router;
