const express = require('express');
const PurchaseController = require('../controllers/PurchaseController');
const router = express.Router();

router.post('/', PurchaseController.create);
router.get('/', PurchaseController.getAll);
router.get('/:id', PurchaseController.getById);
router.put('/:id', PurchaseController.update);
router.delete('/:id', PurchaseController.delete);

module.exports = router;
