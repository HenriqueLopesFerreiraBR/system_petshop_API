const express = require('express');
const ServiceController = require('../controllers/ServiceController');
const router = express.Router();

router.post('/', ServiceController.create);
router.get('/', ServiceController.getAll);
router.get('/:id', ServiceController.getById);
router.put('/:id', ServiceController.update);
router.delete('/:id', ServiceController.delete);

module.exports = router;
