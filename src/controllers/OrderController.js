const  Order  = require('../models/Order');

class OrderController {
  // Método para criar um novo pedido
  async create(req, res) {
    try {
      const { idProduct, quantity, value, total } = req.body;

      // Validações
      if (!idProduct) {
        return res.status(400).json({ message: 'O campo "idProduct" é obrigatório.' });
      }
      if (!quantity) {
        return res.status(400).json({ message: 'O campo "quantity" é obrigatório.' });
      }
      if (!value) {
        return res.status(400).json({ message: 'O campo "value" é obrigatório.' });
      }
      if (!total) {
        return res.status(400).json({ message: 'O campo "total" é obrigatório.' });
      }

      const newOrder = await Order.create({ idProduct, quantity, value, total });
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todos os pedidos
  async getAll(req, res) {
    try {
      const orders = await Order.findAll();
      return res.status(200).json(orders);
    } catch (error) {
      console.error('Erro ao listar pedidos:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar um pedido por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id);

      if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado.' });
      }

      return res.status(200).json(order);
    } catch (error) {
      console.error('Erro ao buscar pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar um pedido
  async update(req, res) {
    try {
      const { id } = req.params;
      const { idProduct, quantity, value, total } = req.body;

      const order = await Order.findByPk(id);

      if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado.' });
      }

      // Atualiza apenas os campos fornecidos
      order.idProduct = idProduct || order.idProduct;
      order.quantity = quantity || order.quantity;
      order.value = value || order.value;
      order.total = total || order.total;

      await order.save();

      return res.status(200).json(order);
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para excluir um pedido
  async delete(req, res) {
    try {
      const { id } = req.params;

      const order = await Order.findByPk(id);

      if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado.' });
      }

      await order.destroy();
      return res.status(200).json({ message: 'Pedido excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = new OrderController();
