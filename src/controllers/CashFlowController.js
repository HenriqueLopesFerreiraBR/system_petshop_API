const CashFlow = require('../models/CashFlow');

class CashFlowController {
  // Create (Criar um novo registro)
  static async create(req, res) {
    try {
      const { entry, exit, description, balance } = req.body;

      // O valor de balance é calculado com base na entrada e saída
      const newCashFlow = await CashFlow.create({
        entry,
        exit,
        description,
        balance
      });

      res.status(201).json(newCashFlow);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar fluxo de caixa', details: error.message });
    }
  }

  // Read (Buscar todos os registros)
  static async findAll(req, res) {
    try {
      const cashFlows = await CashFlow.findAll();
      res.status(200).json(cashFlows);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar fluxos de caixa', details: error.message });
    }
  }

  // Read (Buscar um registro específico)
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const cashFlow = await CashFlow.findByPk(id);

      if (!cashFlow) {
        return res.status(404).json({ error: 'Fluxo de caixa não encontrado' });
      }

      res.status(200).json(cashFlow);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar fluxo de caixa', details: error.message });
    }
  }

  // Update (Atualizar um registro)
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { entry, exit, description, balance } = req.body;

      const cashFlow = await CashFlow.findByPk(id);
      if (!cashFlow) {
        return res.status(404).json({ error: 'Fluxo de caixa não encontrado' });
      }

      await cashFlow.update({
        entry,
        exit,
        description,
        balance
      });

      res.status(200).json(cashFlow);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar fluxo de caixa', details: error.message });
    }
  }

  // Delete (Excluir um registro)
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const cashFlow = await CashFlow.findByPk(id);
      if (!cashFlow) {
        return res.status(404).json({ error: 'Fluxo de caixa não encontrado' });
      }

      await cashFlow.destroy();
      res.status(200).json({ message: 'Fluxo de caixa excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir fluxo de caixa', details: error.message });
    }
  }
}

module.exports = CashFlowController;
