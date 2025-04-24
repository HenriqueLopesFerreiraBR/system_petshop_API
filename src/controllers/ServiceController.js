const Service  = require('../models/Service'); // Importando o modelo Service

class ServiceController {
    // Criar um novo serviço
    async create(req, res) {
        try {
            const { name, description, price, estimatedTime, restrictions, additionalNotes } = req.body;

            // Cria o serviço no banco de dados
            const service = await Service.create({
                name,
                description,
                price,
                estimatedTime,
                restrictions,
                additionalNotes,
            });

            return res.status(201).json(service); // Retorna o serviço criado
        } catch (error) {
            console.error("Erro ao criar serviço:", error);
            return res.status(500).json({ message: "Erro interno ao criar serviço", error: error.message });
        }
    }

    // Listar todos os serviços
    async getAll(req, res) {
        try {
            const services = await Service.findAll();
            return res.status(200).json(services); // Retorna a lista de serviços
        } catch (error) {
            console.error("Erro ao listar serviços:", error);
            return res.status(500).json({ message: "Erro interno ao listar serviços", error: error.message });
        }
    }

    // Obter um serviço específico pelo ID
    async getById(req, res) {
        try {
            const { id } = req.params;

            const service = await Service.findByPk(id);

            if (!service) {
                return res.status(404).json({ message: "Serviço não encontrado" });
            }

            return res.status(200).json(service); // Retorna o serviço encontrado
        } catch (error) {
            console.error("Erro ao obter serviço:", error);
            return res.status(500).json({ message: "Erro interno ao obter serviço", error: error.message });
        }
    }

    // Atualizar um serviço existente
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, description, price, estimatedTime, restrictions, additionalNotes } = req.body;

            const service = await Service.findByPk(id);

            if (!service) {
                return res.status(404).json({ message: "Serviço não encontrado" });
            }

            // Atualiza os dados do serviço
            service.name = name || service.name;
            service.description = description || service.description;
            service.price = price || service.price;
            service.estimatedTime = estimatedTime || service.estimatedTime;
            service.restrictions = restrictions || service.restrictions;
            service.additionalNotes = additionalNotes || service.additionalNotes;

            await service.save();

            return res.status(200).json(service); // Retorna o serviço atualizado
        } catch (error) {
            console.error("Erro ao atualizar serviço:", error);
            return res.status(500).json({ message: "Erro interno ao atualizar serviço", error: error.message });
        }
    }

    // Deletar um serviço
    async delete(req, res) {
        try {
            const { id } = req.params;

            const service = await Service.findByPk(id);

            if (!service) {
                return res.status(404).json({ message: "Serviço não encontrado" });
            }

            await service.destroy();

            return res.status(200).json({ message: "Serviço deletado com sucesso" }); // Retorna a confirmação de exclusão
        } catch (error) {
            console.error("Erro ao deletar serviço:", error);
            return res.status(500).json({ message: "Erro interno ao deletar serviço", error: error.message });
        }
    }
}

module.exports = new ServiceController();
