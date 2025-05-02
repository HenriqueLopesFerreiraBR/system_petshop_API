const SaleService = require('../models/SaleService')

class SaleServiceController {
  // Método para criar uma nova venda
  async create(req, res) {
    try {
      const { serviceId, orderServiceId, total } = req.body;

      //Validações
      if (!serviceId) {
        return res.status(400).json({ message: 'O campo "serviceId" é obrigatório.' });
      }
      if (!orderServiceId) {
        return res.status(400).json({ message: 'O campo "orderServiceId" é obrigatório.' });
      }
      if (!total) {
        return res.status(400).json({ message: 'O campo "total" é obrigatório.' });
      }

      const newSale = await SaleService.create({ serviceId, orderServiceId, total });
      return res.status(201).json(newSale);
    } catch (error) {
      console.error('Erro ao criar venda:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todas as vendas
  async getAll(req, res) {
    try {
      const sales = await SaleService.findAll();
      return res.status(200).json(sales);
    } catch (error) {
      console.error('Erro ao listar serviços:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar uma venda por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const sale = await SaleService.findByPk(id);

      if (!sale) {
        return res.status(404).json({ message: 'Serviço não encontrado.' });
      }

      return res.status(200).json(sale);
    } catch (error) {
      console.error('Erro ao buscar serviço:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar uma venda
  async update(req, res) {
    try {
      const { id } = req.params;
      const { serviceId, orderServiceId, total } = req.body;

      const sale = await SaleService.findByPk(id);

      if (!sale) {
        return res.status(404).json({ message: 'Serviço não encontrado.' });
      }

      // Atualiza apenas os campos fornecidos
      sale.serviceId = serviceId || sale.serviceId;
      sale.orderServiceId = orderServiceId || sale.orderServiceId;
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

      const sale = await SaleService.findByPk(id);

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

module.exports = new SaleServiceController();
