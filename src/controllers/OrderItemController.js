const  OrderItem  = require('../models/OrderItem');

class OrderController {
  // Método para criar um novo pedido
  async create(req, res) {
    try {
      const { orderId,productId, value, quantity, total } = req.body;

      let value1 = parseFloat(value)
      let total1 = (value1*quantity)


      // Validações
      if (!productId || !value || !quantity || !total) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
      }
      const newOrderItem = await OrderItem.create({ orderId,productId, quantity, value:value1, total:value1 });
      return res.status(201).json(newOrderItem);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todos os pedidos
  async getAll(req, res) {
    try {
      const orderItens = await OrderItem.findAll();
      return res.status(200).json(orderItens);
    } catch (error) {
      console.error('Erro ao listar pedidos:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar um pedido por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const orderItem = await OrderItem.findByPk(id);

      if (!orderItem) {
        return res.status(404).json({ message: 'Pedido não encontrado.' });
      }

      return res.status(200).json(orderItem);
    } catch (error) {
      console.error('Erro ao buscar pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar um pedido
  async update(req, res) {
    try {
      const { id } = req.params;
      const { idProduct, quantity, value } = req.body;

      const orderItem = await OrderItem.findByPk(id);

      if (!orderItem) {
        return res.status(404).json({ message: 'Pedido não encontrado.' });
      }

      // Atualiza apenas os campos fornecidos
      OrderItem.idProduct = idProduct || OrderItem.idProduct;
      OrderItem.quantity = quantity || OrderItem.quantity;
      OrderItem.value = value || OrderItem.value;

      await OrderItem.save();

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

      const orderItem = await OrderItem.findByPk(id);

      if (!orderItem) {
        return res.status(404).json({ message: 'Pedido não encontrado.' });
      }

      await OrderItem.destroy();
      return res.status(200).json({ message: 'Pedido excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = new OrderController();
