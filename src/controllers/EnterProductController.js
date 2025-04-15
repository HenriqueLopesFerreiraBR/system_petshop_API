const EnterProduct = require("../models/EnterProduct");

class EnterProductController {
  // Criar nova entrada de produto
  async create(req, res) {
    try {
      const enterProduct = await EnterProduct.create(req.body);
      res.status(201).json(enterProduct);
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  }

  // Buscar todas as entradas de produtos
  async getAll(req, res) {
    try {
      const enterProducts = await EnterProduct.findAll();
      res.status(200).json(enterProducts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Buscar entrada de produto por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const enterProduct = await EnterProduct.findByPk(id);
      if (!enterProduct) {
        return res.status(404).json({ message: "Entrada de produto não encontrada" });
      }
      res.status(200).json(enterProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Atualizar entrada de produto por ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await EnterProduct.update(req.body, { where: { id } });

      if (!updated) {
        return res.status(404).json({ message: "Entrada de produto não encontrada" });
      }

      const updatedProduct = await EnterProduct.findByPk(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Excluir entrada de produto por ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await EnterProduct.destroy({ where: { id } });

      if (!deleted) {
        return res.status(404).json({ message: "Entrada de produto não encontrada" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new EnterProductController();
