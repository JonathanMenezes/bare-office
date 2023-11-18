import PrestadoraRepository from '../repositories/PrestadoraRepository.js';

class PrestadoraController {
    async index(req, res) {
        const row = await PrestadoraRepository.findAll()
        res.json(row)
    }

    async store(req, res) {
        const prestadora = req.body
        const row = await PrestadoraRepository.create(prestadora)
        res.json(row)
    }
    async update(req, res) {
        const prestadora = req.body
        const id = req.params.id
        const row = await PrestadoraRepository.update(prestadora, id)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await PrestadoraRepository.delete(id)
        res.json(row)
    }
}

export default new PrestadoraController()