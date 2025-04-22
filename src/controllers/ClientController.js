const  Client  = require('../models/Client');

class ClientController {
  // Método para criar um novo cliente
  async create(req, res) {
    try {
      const { name, email, cnpj, phone, address, active } = req.body;

      // Validações
      if (!name) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório.' });
      }
      // if (!cnpj) {
      //   return res.status(400).json({ message: 'O campo "cnpj" é obrigatório.' });
      // }

      const clientExit = await Client.findOne({where:{cnpj:cnpj}});

      // if(clientExit){
      //   return res.status(433).json({ message: 'Já existe um cliente com esse CPF ou CNPJ.' });
      // }

      const newClient = await Client.create({ name, email, cnpj, phone, address, active });
      return res.status(201).json(newClient);
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para listar todos os clientes
  async getAll(req, res) {
    try {
      const clients = await Client.findAll();
      return res.status(200).json(clients);
    } catch (error) {
      console.error('Erro ao listar clientes:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para buscar um cliente por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findByPk(id);

      if (!client) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
      }

      return res.status(200).json(client);
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para atualizar um cliente
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, cnpj, phone, address, active } = req.body;

      const client = await Client.findByPk(id);

      if (!client) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
      }

      // Atualiza apenas os campos fornecidos
      client.name = name || client.name;
      client.email = email || client.email;
      client.cnpj = cnpj || client.cnpj;
      client.phone = phone || client.phone;
      client.address = address || client.address;
      client.active = active !== undefined ? active : client.active;

      await client.save();

      return res.status(200).json(client);
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // Método para excluir um cliente
  async delete(req, res) {
    try {
      const { id } = req.params;

      const client = await Client.findByPk(id);

      if (!client) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
      }

      await client.destroy();
      return res.status(200).json({ message: 'Cliente excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = new ClientController();
