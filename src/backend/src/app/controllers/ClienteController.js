import ClienteRepository from '../repositories/ClienteRepository.js';

class ClienteController {
    async index(req, res) {
        const row = await ClienteRepository.findAll()
        res.json(row)
    }

    async store(req, res) {
        const cliente = req.body
        const row = await ClienteRepository.create(cliente)
        res.json(row)
    }
    async update(req, res) {
        const cliente = req.body
        const id = req.params.id
        const row = await ClienteRepository.update(cliente, id)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await ClienteRepository.delete(id)
        res.json(row)
    }
}

export default new ClienteController()