const express = require('express');
const CashFlowController = require('../controllers/CashFlowController');

const router = express.Router();

// Rota para criar um novo fluxo de caixa
router.post('/', CashFlowController.create);

// Rota para buscar todos os fluxos de caixa
router.get('/', CashFlowController.findAll);

// Rota para buscar um fluxo de caixa pelo ID
router.get('/:id', CashFlowController.findOne);

// Rota para atualizar um fluxo de caixa
router.put('/:id', CashFlowController.update);

// Rota para excluir um fluxo de caixa
router.delete('/:id', CashFlowController.delete);

module.exports = router;
