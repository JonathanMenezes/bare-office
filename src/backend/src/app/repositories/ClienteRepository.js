import { consulta } from '../database/db.js';

class ClienteRepository {

    findAll() {
        const sql = "SELECT * FROM `bare_office`.`cliente`";
        return consulta(sql)
    }
    create(cliente) {
        const sql = "INSERT INTO `bare_office`.`cliente` SET ?";
        return consulta(sql, cliente)
    }

    update(cliente, id) {
        const sql = "UPDATE `bare_office`.`cliente` SET ? WHERE `id` = ?";
        return consulta(sql, [cliente, id])
    }

    delete(id) {
        const sql = "DELETE FROM `bare_office`.`cliente` WHERE `id` = ?";
        return consulta(sql, id)
    }
}

export default new ClienteRepository()