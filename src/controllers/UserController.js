const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class UserController {

  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || name.trim() === "") { // Simplifica a verificação do nome
        return res.status(400).json({ message: 'O nome não pode ser vazio' });
      }
      if (!email || email.trim() === "") { // Simplifica a verificação do email
        return res.status(400).json({ message: 'O email não pode ser vazio' });
      }
      if (!password || password.trim() === "") { // Simplifica a verificação da senha
        return res.status(400).json({ message: 'A senha não pode ser vazia' });
      }
  
      const userExist = await User.findOne({ where:{email:email} }); // Simplifica a busca
      if (userExist) {
        return res.status(400).json({ message: 'Esse email já foi cadastrado' });
      }


      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
      res.status(201).json(user);
    } catch (err) {
      console.error(err); // Use console.error para logs de erro
      res.status(500).json({ error: 'Erro interno do servidor' }); // Resposta de erro mais genérica para o cliente, por segurança.
    }
  }


  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ message: 'Usuario não existe' });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(401).json({ message: 'Senha Invalida' });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'Usuário não existe' });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await User.update(req.body, { where: { id } });
      if (!updated) return res.status(404).json({ error: 'Usuário não existe' });
      const updatedUser = await User.findByPk(id);
      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ error: 'Usuario não existe' });
      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController;
