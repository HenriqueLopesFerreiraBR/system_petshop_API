const express = require('express');
const AccountsPayController = require('../controllers/AccountsPayController');

const router = express.Router();

// Rota para criar uma nova conta a pagar
router.post('/', AccountsPayController.create);

// Rota para buscar todas as contas a pagar
router.get('/', AccountsPayController.findAll);

// Rota para buscar uma conta a pagar pelo ID
router.get('/:id', AccountsPayController.findOne);

// Rota para atualizar uma conta a pagar
router.put('/:id', AccountsPayController.update);

// Rota para excluir uma conta a pagar
router.delete('/:id', AccountsPayController.delete);

module.exports = router;
