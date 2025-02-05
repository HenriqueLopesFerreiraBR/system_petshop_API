const Stock  = require('../models/Stock');

class StockController {
  // Método para criar um novo registro de estoque
  async create(req, res) {
    try {
      const { productId, quantity } = req.body;

      // Validações
      if (!productId) {
        return res.status(400).json({ message: 'O campo "productId" é obrigatório.' });
      }
      if (quantity == null) {
        return res.status(400).json({ message: 'O campo "quantity" é obrigatório.' });
      }

      const newStock = await Stock.create({ productId, quantity });
      return res.status(201).json(newStock);
    } catch (error) {
      console.error('Erro ao criar registro de estoque:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todos os registros de estoque
  async getAll(req, res) {
    try {
      const stocks = await Stock.findAll();
      return res.status(200).json(stocks);
    } catch (error) {
      console.error('Erro ao listar registros de estoque:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar um registro de estoque por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const stock = await Stock.findByPk(id);

      if (!stock) {
        return res.status(404).json({ message: 'Registro de estoque não encontrado.' });
      }

      return res.status(200).json(stock);
    } catch (error) {
      console.error('Erro ao buscar registro de estoque:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar um registro de estoque
  async update(req, res) {
    try {
      const { id } = req.params;
      const { productId, quantity } = req.body;

      const stock = await Stock.findByPk(id);

      if (!stock) {
        return res.status(404).json({ message: 'Registro de estoque não encontrado.' });
      }

      // Atualiza apenas os campos fornecidos
      stock.productId = productId || stock.productId;
      stock.quantity = quantity != null ? quantity : stock.quantity;

      await stock.save();

      return res.status(200).json(stock);
    } catch (error) {
      console.error('Erro ao atualizar registro de estoque:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para excluir um registro de estoque
  async delete(req, res) {
    try {
      const { id } = req.params;

      const stock = await Stock.findByPk(id);

      if (!stock) {
        return res.status(404).json({ message: 'Registro de estoque não encontrado.' });
      }

      await stock.destroy();
      return res.status(200).json({ message: 'Registro de estoque excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir registro de estoque:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para adicionar produtos ao estoque
  async addProduct(req, res) {
    try {
      const { productId, quantity } = req.body;

      if (!productId) {
        return res.status(400).json({ message: 'O campo "productId" é obrigatório.' });
      }
      if (quantity == null || quantity <= 0) {
        return res.status(400).json({ message: 'O campo "quantity" deve ser um valor positivo.' });
      }

      const stock = await Stock.findOne({ where: { productId } });

      if (stock) {
        stock.quantity += quantity;
        await stock.save();
        return res.status(200).json(stock);
      } else {
        const newStock = await Stock.create({ productId, quantity });
        return res.status(201).json(newStock);
      }
    } catch (error) {
      console.error('Erro ao adicionar produtos ao estoque:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para remover produtos do estoque
  async removeProduct(req, res) {
    try {
      const { productId, quantity } = req.body;

      if (!productId) {
        return res.status(400).json({ message: 'O campo "productId" é obrigatório.' });
      }
      if (quantity == null || quantity <= 0) {
        return res.status(400).json({ message: 'O campo "quantity" deve ser um valor positivo.' });
      }

      const stock = await Stock.findOne({ where: { productId } });

      if (!stock) {
        return res.status(404).json({ message: 'Produto não encontrado no estoque.' });
      }

      if (stock.quantity < quantity) {
        return res.status(400).json({ message: 'Quantidade insuficiente no estoque.' });
      }

      stock.quantity -= quantity;

      if (stock.quantity === 0) {
        await stock.destroy();
        return res.status(200).json({ message: 'Produto removido do estoque.' });
      }

      await stock.save();
      return res.status(200).json(stock);
    } catch (error) {
      console.error('Erro ao remover produtos do estoque:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = new StockController();
