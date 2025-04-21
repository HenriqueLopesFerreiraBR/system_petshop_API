const Emprise = require('../models/Emprise'); // Importando o modelo

class EmpriseController {
  // Método para criar uma nova empresa
   async create(req, res) {
    const { razaoSocial, nomeFantasia, email, telefone, endereco, cnpj, inscricaoEstadual } = req.body;

    try {
      // Validando dados obrigatórios
      if (!razaoSocial || !email || !endereco || !cnpj ) {
        return res.status(400).json({ message: 'Todos os campos obrigatórios precisam ser preenchidos.' });
      }

      // Criando a nova empresa
      const emprise = await Emprise.create({
        razaoSocial,
        nomeFantasia,
        email,
        telefone,
        endereco,
        cnpj,
        inscricaoEstadual,
      });

      return res.status(201).json(emprise);
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      return res.status(500).json({ message: 'Erro ao criar empresa.' });
    }
  }

  // Método para listar todas as empresas
   async getAll(req, res) {
    try {
      const empresas = await Emprise.findAll();
      return res.status(200).json(empresas);
    } catch (error) {
      console.error('Erro ao buscar empresas:', error);
      return res.status(500).json({ message: 'Erro ao buscar empresas.' });
    }
  }

  // Método para buscar uma empresa pelo ID
   async getById(req, res) {
    const { id } = req.params;

    try {
      const emprise = await Emprise.findByPk(id);
      if (!emprise) {
        return res.status(404).json({ message: 'Empresa não encontrada.' });
      }
      return res.status(200).json(emprise);
    } catch (error) {
      console.error('Erro ao buscar empresa:', error);
      return res.status(500).json({ message: 'Erro ao buscar empresa.' });
    }
  }

  // Método para atualizar os dados de uma empresa
   async update(req, res) {
    const { id } = req.params;
    const { razaoSocial, nomeFantasia, email, telefone, endereco, cnpj, inscricaoEstadual } = req.body;

    try {
      const emprise = await Emprise.findByPk(id);
      if (!emprise) {
        return res.status(404).json({ message: 'Empresa não encontrada.' });
      }

      // Atualizando os dados
      await emprise.update({
        razaoSocial,
        nomeFantasia,
        email,
        telefone,
        endereco,
        cnpj,
        inscricaoEstadual,
      });

      return res.status(200).json(emprise);
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      return res.status(500).json({ message: 'Erro ao atualizar empresa.' });
    }
  }

  // Método para excluir uma empresa
   async delete(req, res) {
    const { id } = req.params;

    try {
      const emprise = await Emprise.findByPk(id);
      if (!emprise) {
        return res.status(404).json({ message: 'Empresa não encontrada.' });
      }

      await emprise.destroy();
      return res.status(200).json({ message: 'Empresa excluída com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir empresa:', error);
      return res.status(500).json({ message: 'Erro ao excluir empresa.' });
    }
  }
}

module.exports = new  EmpriseController;
