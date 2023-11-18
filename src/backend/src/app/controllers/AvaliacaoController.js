import AvaliacaoRepository from '../repositories/AvaliacaoRepository.js';

class AvaliacaoController {
    async index(req, res) {
        const row = await AvaliacaoRepository.findAll()
        res.json(row)
    }
}

export default new AvaliacaoController()