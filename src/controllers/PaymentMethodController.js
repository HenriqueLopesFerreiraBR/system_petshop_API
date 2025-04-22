// controllers/PaymentMethodController.js
const PaymentMethod = require('../models/PaymentMethod');

class PaymentMethodController {
    // Buscar todas as formas de pagamento
     async getAll(req, res) {
        try {
            const formasPagamento = await PaymentMethod.findAll();
            res.status(200).json(formasPagamento);
        } catch (error) {
            console.error('Erro ao buscar formas de pagamento:', error);
            res.status(500).json({ message: 'Erro ao buscar formas de pagamento.' });
        }
    }

    // Buscar forma de pagamento por ID
     async getById(req, res) {
        const { id } = req.params;
        try {
            const formaPagamento = await PaymentMethod.findByPk(id);
            if (!formaPagamento) {
                return res.status(404).json({ message: 'Forma de pagamento não encontrada.' });
            }
            res.status(200).json(formaPagamento);
        } catch (error) {
            console.error('Erro ao buscar forma de pagamento:', error);
            res.status(500).json({ message: 'Erro ao buscar forma de pagamento.' });
        }
    }

    // Criar nova forma de pagamento
     async create(req, res) {
        const { description, active } = req.body;
        try {
            const novaFormaPagamento = await PaymentMethod.create({ description, active });
            res.status(201).json(novaFormaPagamento);
        } catch (error) {
            console.error('Erro ao criar forma de pagamento:', error);
            
            res.status(500).json({ message: 'Erro ao criar forma de pagamento.' });
        }
    }

    // Atualizar forma de pagamento
     async update(req, res) {
        const { id } = req.params;
        const { description, active } = req.body;
        try {
            const formaPagamento = await PaymentMethod.findByPk(id);
            if (!formaPagamento) {
                return res.status(404).json({ message: 'Forma de pagamento não encontrada.' });
            }
            await formaPagamento.update({ description, active });
            res.status(200).json(formaPagamento);
        } catch (error) {
            console.error('Erro ao atualizar forma de pagamento:', error);
            res.status(500).json({ message: 'Erro ao atualizar forma de pagamento.' });
        }
    }

    // Deletar forma de pagamento
     async delete(req, res) {
        const { id } = req.params;
        try {
            const formaPagamento = await PaymentMethod.findByPk(id);
            if (!formaPagamento) {
                return res.status(404).json({ message: 'Forma de pagamento não encontrada.' });
            }
            await formaPagamento.destroy();
            res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar forma de pagamento:', error);
            res.status(500).json({ message: 'Erro ao deletar forma de pagamento.' });
        }
    }
}

module.exports = new PaymentMethodController;
