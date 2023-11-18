import { consulta } from '../database/db.js';

class UserRepository {

    findAll(username, password) {
        const sql = "SELECT * FROM `bare_office`.`users` WHERE `username` = ? AND `password` = ?";
        return consulta(sql, [username, password])
    }
    create(user) {
        const sql = "INSERT INTO `bare_office`.`users` SET ?";
        return consulta(sql, user)
    }
}

export default new UserRepository()