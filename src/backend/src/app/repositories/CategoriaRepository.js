import { consulta } from '../database/db.js';

class CategoriaRepository {

    findAll() {
        const sql = "SELECT *, IF(ativa=1, 'Sim', 'Não') AS ativa FROM `bare_office`.`categoria`";
        return consulta(sql)
    }
    create(categoria) {
        const sql = "INSERT INTO `bare_office`.`categoria` SET ?";
        return consulta(sql, categoria)
    }



    update(categoria, id) {
        const sql = "UPDATE `bare_office`.`categoria` SET ? WHERE `id` = ?";
        return consulta(sql, [categoria, id])
    }

    delete(id) {
        const sql = "DELETE FROM `bare_office`.`categoria` WHERE `id` = ?";
        return consulta(sql, id)
    }
}

export default new CategoriaRepository()