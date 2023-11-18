import UserRepository from '../repositories/UserRepository.js'

class UserController {
    async login(req, res) {
        const username = req.body.username
        const password = req.body.password
        const row = await UserRepository.findAll(username, password)
        res.json(row)
    }

    async register(req, res) {
        const user = req.body
        const row = await UserRepository.create(user)
        res.json(row)
    }
}

export default new UserController()