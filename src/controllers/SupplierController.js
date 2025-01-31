const { Supplier } = require('../models/Supplier');

class SupplierController {
  // Método para criar um novo fornecedor
  async create(req, res) {
    try {
      const { name, cnpj, email, adress, contact } = req.body;

      // Validações
      if (!name) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório.' });
      }

      const newSupplier = await Supplier.create({ name, cnpj, email, adress, contact });
      return res.status(201).json(newSupplier);
    } catch (error) {
      console.error('Erro ao criar fornecedor:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todos os fornecedores
  async getAll(req, res) {
    try {
      const suppliers = await Supplier.findAll();
      return res.status(200).json(suppliers);
    } catch (error) {
      console.error('Erro ao listar fornecedores:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar um fornecedor por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const supplier = await Supplier.findByPk(id);

      if (!supplier) {
        return res.status(404).json({ message: 'Fornecedor não encontrado.' });
      }

      return res.status(200).json(supplier);
    } catch (error) {
      console.error('Erro ao buscar fornecedor:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar um fornecedor
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, cnpj, email, adress, contact } = req.body;

      const supplier = await Supplier.findByPk(id);

      if (!supplier) {
        return res.status(404).json({ message: 'Fornecedor não encontrado.' });
      }

      // Atualiza apenas os campos fornecidos
      supplier.name = name || supplier.name;
      supplier.cnpj = cnpj || supplier.cnpj;
      supplier.email = email || supplier.email;
      supplier.adress = adress || supplier.adress;
      supplier.contact = contact || supplier.contact;

      await supplier.save();

      return res.status(200).json(supplier);
    } catch (error) {
      console.error('Erro ao atualizar fornecedor:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para excluir um fornecedor
  async delete(req, res) {
    try {
      const { id } = req.params;

      const supplier = await Supplier.findByPk(id);

      if (!supplier) {
        return res.status(404).json({ message: 'Fornecedor não encontrado.' });
      }

      await supplier.destroy();
      return res.status(200).json({ message: 'Fornecedor excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir fornecedor:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = new SupplierController();
