const express = require('express');
const TransactionController = require('../controllers/TransactionController');

const router = express.Router();

// Rota para criar uma nova transação
router.post('/', TransactionController.create);

// Rota para buscar todas as transações
router.get('/', TransactionController.findAll);

// Rota para buscar uma transação pelo ID
router.get('/:id', TransactionController.findOne);

// Rota para atualizar uma transação
router.put('/:id', TransactionController.update);

// Rota para excluir uma transação
router.delete('/:id', TransactionController.delete);

module.exports = router;
