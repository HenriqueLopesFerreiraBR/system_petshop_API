const Sale = require('../models/Sale')

class SaleController {
  // Método para criar uma nova venda
  async create(req, res) {
    try {
      const { clientId, orderId, total } = req.body;

      //Validações
      if (!clientId) {
        return res.status(400).json({ message: 'O campo "clientId" é obrigatório.' });
      }
      if (!orderId) {
        return res.status(400).json({ message: 'O campo "orderId" é obrigatório.' });
      }
      if (!total) {
        return res.status(400).json({ message: 'O campo "total" é obrigatório.' });
      }

      const newSale = await Sale.create({ clientId, orderId, total });
      return res.status(201).json(newSale);
    } catch (error) {
      console.error('Erro ao criar venda:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todas as vendas
  async getAll(req, res) {
    try {
      const sales = await Sale.findAll();
      return res.status(200).json(sales);
    } catch (error) {
      console.error('Erro ao listar vendas:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar uma venda por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const sale = await Sale.findByPk(id);

      if (!sale) {
        return res.status(404).json({ message: 'Venda não encontrada.' });
      }

      return res.status(200).json(sale);
    } catch (error) {
      console.error('Erro ao buscar venda:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar uma venda
  async update(req, res) {
    try {
      const { id } = req.params;
      const { clientId, orderId, total } = req.body;

      const sale = await Sale.findByPk(id);

      if (!sale) {
        return res.status(404).json({ message: 'Venda não encontrada.' });
      }

      // Atualiza apenas os campos fornecidos
      sale.clientId = clientId || sale.clientId;
      sale.orderId = orderId || sale.orderId;
      sale.total = total || sale.total;

      await sale.save();

      return res.status(200).json(sale);
    } catch (error) {
      console.error('Erro ao atualizar venda:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para excluir uma venda
  async delete(req, res) {
    try {
      const { id } = req.params;

      const sale = await Sale.findByPk(id);

      if (!sale) {
        return res.status(404).json({ message: 'Venda não encontrada.' });
      }

      await sale.destroy();
      return res.status(200).json({ message: 'Venda excluída com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir venda:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = new SaleController();
