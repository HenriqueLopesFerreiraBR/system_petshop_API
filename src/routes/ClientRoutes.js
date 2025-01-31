const express = require('express');
const ClientController = require('../controllers/ClientController');
const router = express.Router();

router.post('/', ClientController.create);
router.get('/', ClientController.getAll);
router.get('/:id', ClientController.getById);
router.put('/:id', ClientController.update);
router.delete('/:id', ClientController.delete);

module.exports = router;
