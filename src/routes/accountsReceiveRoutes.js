const express = require('express');
const AccountsReceiveController = require('../controllers/AccountsReceiveController');

const router = express.Router();

// Rota para criar uma nova conta a receber
router.post('/', AccountsReceiveController.create);

// Rota para buscar todas as contas a receber
router.get('/', AccountsReceiveController.findAll);

// Rota para buscar uma conta a receber pelo ID
router.get('/:id', AccountsReceiveController.findOne);

// Rota para atualizar uma conta a receber
router.put('/:id', AccountsReceiveController.update);

// Rota para excluir uma conta a receber
router.delete('/:id', AccountsReceiveController.delete);

module.exports = router;
