const AccountsReceive = require('../models/AccountsReceive');
const Client = require('../models/Client'); // Importa o modelo de Cliente, já relacionado com AccountsReceive

class AccountsReceiveController {
  // Create (Criar um novo registro)
  static async create(req, res) {
    try {
      const { value, vencimento, status, paymentMethod, installments, client_id } = req.body;
      
      const newAccount = await AccountsReceive.create({
        value,
        vencimento,
        status,
        paymentMethod,
        installments,
        client_id
      });

      res.status(201).json(newAccount);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar conta a receber', details: error.message });
    }
  }

  // Read (Buscar todos os registros)
  static async findAll(req, res) {
    try {
      const accounts = await AccountsReceive.findAll({
        include: {
          model: Client,
          attributes: ['id', 'name'], // Exibe apenas o id e o nome do cliente
        }
      });
      res.status(200).json(accounts);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar contas a receber', details: error.message });
    }
  }

  // Read (Buscar um registro específico)
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const account = await AccountsReceive.findByPk(id, {
        include: {
          model: Client,
          attributes: ['id', 'name'],
        }
      });

      if (!account) {
        return res.status(404).json({ error: 'Conta a receber não encontrada' });
      }

      res.status(200).json(account);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar conta a receber', details: error.message });
    }
  }

  // Update (Atualizar um registro)
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { value, vencimento, status, paymentMethod, installments, client_id } = req.body;

      const account = await AccountsReceive.findByPk(id);
      if (!account) {
        return res.status(404).json({ error: 'Conta a receber não encontrada' });
      }

      await account.update({
        value,
        vencimento,
        status,
        paymentMethod,
        installments,
        client_id
      });

      res.status(200).json(account);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar conta a receber', details: error.message });
    }
  }

  // Delete (Excluir um registro)
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const account = await AccountsReceive.findByPk(id);
      if (!account) {
        return res.status(404).json({ error: 'Conta a receber não encontrada' });
      }

      await account.destroy();
      res.status(200).json({ message: 'Conta a receber excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir conta a receber', details: error.message });
    }
  }
}

module.exports = AccountsReceiveController;
