const  OrderService  = require('../models/OrderService');

class OrderServiceController {
  // Método para criar um novo pedido
  async create(req, res) {
    try {
      const { total } = req.body;

      // Validações
      if (!total) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      }
      const newOrder = await OrderService.create({ total});
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todos os pedidos
  async getAll(req, res) {
    try {
      const orders = await OrderService.findAll();
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
      const order = await OrderService.findByPk(id);

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
      const { total } = req.body;

      const order = await OrderService.findByPk(id);

      if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado.' });
      }

      // Atualiza apenas os campos fornecidos
      order.idProduct = idProduct || order.idProduct;
      order.quantity = quantity || order.quantity;
      order.total = total || order.total;
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

      const order = await OrderService.findByPk(id);

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

module.exports = new OrderServiceController();
