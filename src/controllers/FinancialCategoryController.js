const FinancialCategory = require('../models/FinancialCategory');

class FinancialCategoryController {
  // Create (Criar um novo registro)
  static async create(req, res) {
    try {
      const { name, type, description } = req.body;

      const newCategory = await FinancialCategory.create({
        name,
        type,
        description,
      });

      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar categoria financeira', details: error.message });
    }
  }

  // Read (Buscar todos os registros)
  static async findAll(req, res) {
    try {
      const categories = await FinancialCategory.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar categorias financeiras', details: error.message });
    }
  }

  // Read (Buscar um registro específico)
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const category = await FinancialCategory.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: 'Categoria financeira não encontrada' });
      }

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar categoria financeira', details: error.message });
    }
  }

  // Update (Atualizar um registro)
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, type, description } = req.body;

      const category = await FinancialCategory.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria financeira não encontrada' });
      }

      await category.update({
        name,
        type,
        description,
      });

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar categoria financeira', details: error.message });
    }
  }

  // Delete (Excluir um registro)
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const category = await FinancialCategory.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria financeira não encontrada' });
      }

      await category.destroy();
      res.status(200).json({ message: 'Categoria financeira excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir categoria financeira', details: error.message });
    }
  }
}

module.exports = FinancialCategoryController;
