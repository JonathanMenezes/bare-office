import AvaliacaoRepository from '../repositories/AvaliacaoRepository.js';

class AvaliacaoController {
    async index(req, res) {
        const row = await AvaliacaoRepository.findAll()
        res.json(row)
    }

    async store(req, res) {
        const avaliacao = req.body
        const row = await AvaliacaoRepository.create(avaliacao)
        res.json(row)
    }
}

export default new AvaliacaoController()