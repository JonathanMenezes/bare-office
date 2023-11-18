import { consulta } from '../database/db.js';

class PrestadoraRepository {

    findAll() {
        const sql = "SELECT *, IF(ativo=1, 'Sim', 'Não') AS ativo FROM `bare_office`.`prestadora`";
        return consulta(sql)
    }
    create(prestadora) {
        const sql = "INSERT INTO `bare_office`.`prestadora` SET ?";
        return consulta(sql, prestadora)
    }

    update(prestadora, id) {
        const sql = "UPDATE `bare_office`.`prestadora` SET ? WHERE `id` = ?";
        return consulta(sql, [prestadora, id])
    }

    delete(id) {
        const sql = "DELETE FROM `bare_office`.`prestadora` WHERE `id` = ?";
        return consulta(sql, id)
    }
}

export default new PrestadoraRepository()