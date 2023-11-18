import CategoriaRepository from '../repositories/CategoriaRepository.js';

class CategoriaController {
    async index(req, res) {
        const row = await CategoriaRepository.findAll()
        res.json(row)
    }

    async store(req, res) {
        const categoria = req.body
        const row = await CategoriaRepository.create(categoria)
        res.json(row)
    }
    async update(req, res) {
        const categoria = req.body
        const id = req.params.id
        const row = await CategoriaRepository.update(categoria, id)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await CategoriaRepository.delete(id)
        res.json(row)
    }
}

export default new CategoriaController()