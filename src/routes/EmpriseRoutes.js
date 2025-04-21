const express = require('express');
const EmpriseController = require('../controllers/EmpriseController');
const router = express.Router();

router.post('/', EmpriseController.create);
router.get('/', EmpriseController.getAll);
router.get('/:id', EmpriseController.getById);
router.put('/:id', EmpriseController.update);
router.delete('/:id', EmpriseController.delete);

module.exports = router;
