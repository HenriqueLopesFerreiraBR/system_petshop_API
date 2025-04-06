const express = require('express');
const FinancialCategoryController = require('../controllers/FinancialCategoryController');

const router = express.Router();

// Rota para criar uma nova categoria financeira
router.post('/', FinancialCategoryController.create);

// Rota para buscar todas as categorias financeiras
router.get('/', FinancialCategoryController.findAll);

// Rota para buscar uma categoria financeira pelo ID
router.get('/:id', FinancialCategoryController.findOne);

// Rota para atualizar uma categoria financeira
router.put('/:id', FinancialCategoryController.update);

// Rota para excluir uma categoria financeira
router.delete('/:id', FinancialCategoryController.delete);

module.exports = router;
