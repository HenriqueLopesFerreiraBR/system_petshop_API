const { Purchase } = require('../models/Purchase');

class PurchaseController {
  // Método para criar uma nova compra
  async create(req, res) {
    try {
      const { supplierId, nf, productId, unit_value, quantity, total_value } = req.body;

      // Validações
      if (!supplierId) {
        return res.status(400).json({ message: 'O campo "supplierId" é obrigatório.' });
      }
      if (!productId) {
        return res.status(400).json({ message: 'O campo "productId" é obrigatório.' });
      }
      if (!unit_value) {
        return res.status(400).json({ message: 'O campo "unit_value" é obrigatório.' });
      }
      if (!quantity) {
        return res.status(400).json({ message: 'O campo "quantity" é obrigatório.' });
      }
      if (!total_value) {
        return res.status(400).json({ message: 'O campo "total_value" é obrigatório.' });
      }

      const newPurchase = await Purchase.create({ supplierId, nf, productId, unit_value, quantity, total_value });
      return res.status(201).json(newPurchase);
    } catch (error) {
      console.error('Erro ao criar compra:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todas as compras
  async getAll(req, res) {
    try {
      const purchases = await Purchase.findAll();
      return res.status(200).json(purchases);
    } catch (error) {
      console.error('Erro ao listar compras:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar uma compra por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const purchase = await Purchase.findByPk(id);

      if (!purchase) {
        return res.status(404).json({ message: 'Compra não encontrada.' });
      }

      return res.status(200).json(purchase);
    } catch (error) {
      console.error('Erro ao buscar compra:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar uma compra
  async update(req, res) {
    try {
      const { id } = req.params;
      const { supplierId, nf, productId, unit_value, quantity, total_value } = req.body;

      const purchase = await Purchase.findByPk(id);

      if (!purchase) {
        return res.status(404).json({ message: 'Compra não encontrada.' });
      }

      // Atualiza apenas os campos fornecidos
      purchase.supplierId = supplierId || purchase.supplierId;
      purchase.nf = nf || purchase.nf;
      purchase.productId = productId || purchase.productId;
      purchase.unit_value = unit_value || purchase.unit_value;
      purchase.quantity = quantity || purchase.quantity;
      purchase.total_value = total_value || purchase.total_value;

      await purchase.save();

      return res.status(200).json(purchase);
    } catch (error) {
      console.error('Erro ao atualizar compra:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para excluir uma compra
  async delete(req, res) {
    try {
      const { id } = req.params;

      const purchase = await Purchase.findByPk(id);

      if (!purchase) {
        return res.status(404).json({ message: 'Compra não encontrada.' });
      }

      await purchase.destroy();
      return res.status(200).json({ message: 'Compra excluída com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir compra:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = new PurchaseController();
