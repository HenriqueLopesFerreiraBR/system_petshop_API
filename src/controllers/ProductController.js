const  Product  = require('../models/Product');

class ProductController {
  async create(req, res) {

    try {
      const {name,description, saleValue,weightKg} = req.body

      if (!name || name.trim() === "") { // Simplifica a verificação do nome
        return res.status(400).json({ message: 'O nome não pode ser vazio' });
      }
      if (!saleValue || saleValue.trim() === "") { // Simplifica a verificação do nome
        return res.status(400).json({ message: 'O nome não pode ser vazio' });
      }


      const productExist = await Product.findOne({where:{name:name}})
      if(productExist){
        return res.status(400).json({message:'Já existe um produto cadastrado com esse nome'})
      }

      const newProduct={
        name:name,
        description:description,
        saleValue:saleValue,
        weightKg:weightKg
        
      }

      const product = await Product.create(newProduct);
      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ error: 'Product not found' });
      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const {name,description, saleValue,weightKg} = req.body
      const product = await Product.findByPk(id)

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado.' });
      }

      product.name = name || product.name;
      product.saleValue = saleValue || product.saleValue;
      product.description = description || product.description 
      product.weightKg = weightKg || product.weightKg

      // const [updated] = await Product.update(updateProduct, { where: { id } });
      // if (!updated) return res.status(404).json({ error: 'Product not found' });
      // const updatedProduct = await Product.findByPk(id);

      await product.save();
      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Product.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ error: 'Product not found' });
      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProductController();