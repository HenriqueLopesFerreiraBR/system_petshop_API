const Transaction = require('../models/Transaction');

class TransactionController {
  // Create (Criar um novo registro)
  static async create(req, res) {
    try {
      const { type, value, date, description, category, paymentMethod, status } = req.body;

      const newTransaction = await Transaction.create({
        type,
        value,
        date,
        description,
        category,
        paymentMethod,
        status,
      });

      res.status(201).json(newTransaction);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar transação', details: error.message });
    }
  }

  // Read (Buscar todos os registros)
  static async findAll(req, res) {
    try {
      const transactions = await Transaction.findAll();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar transações', details: error.message });
    }
  }

  // Read (Buscar um registro específico)
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const transaction = await Transaction.findByPk(id);

      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar transação', details: error.message });
    }
  }

  // Update (Atualizar um registro)
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { type, value, date, description, category, paymentMethod, status } = req.body;

      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      await transaction.update({
        type,
        value,
        date,
        description,
        category,
        paymentMethod,
        status,
      });

      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar transação', details: error.message });
    }
  }

  // Delete (Excluir um registro)
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      await transaction.destroy();
      res.status(200).json({ message: 'Transação excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir transação', details: error.message });
    }
  }
}

module.exports = TransactionController;
