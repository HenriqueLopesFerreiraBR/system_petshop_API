const AccountsPay = require('../models/AccountsPay');
const Supplier = require('../models/Supplier'); // Importa o modelo de Supplier, já relacionado com AccountsPay

class AccountsPayController {
  // Create (Criar um novo registro)
  static async create(req, res) {
    try {
      const { value, vencimento, status, paymentMethod, installments, supplier_id } = req.body;
      
      const newAccount = await AccountsPay.create({
        value,
        vencimento,
        status,
        paymentMethod,
        installments,
        supplier_id
      });

      res.status(201).json(newAccount);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar conta a pagar', details: error.message });
    }
  }

  // Read (Buscar todos os registros)
  static async findAll(req, res) {
    try {
      const accounts = await AccountsPay.findAll({
        include: {
          model: Supplier,
          attributes: ['id', 'name'], // Exibe apenas o id e o nome do fornecedor
        }
      });
      res.status(200).json(accounts);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar contas a pagar', details: error.message });
    }
  }

  // Read (Buscar um registro específico)
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const account = await AccountsPay.findByPk(id, {
        include: {
          model: Supplier,
          attributes: ['id', 'name'],
        }
      });

      if (!account) {
        return res.status(404).json({ error: 'Conta a pagar não encontrada' });
      }

      res.status(200).json(account);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar conta a pagar', details: error.message });
    }
  }

  // Update (Atualizar um registro)
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { value, vencimento, status, paymentMethod, installments, supplier_id } = req.body;

      const account = await AccountsPay.findByPk(id);
      if (!account) {
        return res.status(404).json({ error: 'Conta a pagar não encontrada' });
      }

      await account.update({
        value,
        vencimento,
        status,
        paymentMethod,
        installments,
        supplier_id
      });

      res.status(200).json(account);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar conta a pagar', details: error.message });
    }
  }

  // Delete (Excluir um registro)
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const account = await AccountsPay.findByPk(id);
      if (!account) {
        return res.status(404).json({ error: 'Conta a pagar não encontrada' });
      }

      await account.destroy();
      res.status(200).json({ message: 'Conta a pagar excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir conta a pagar', details: error.message });
    }
  }
}

module.exports =  AccountsPayController;
