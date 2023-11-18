import { consulta } from '../database/db.js';

class VideoRepository {

    findAll() {
        const sql = "SELECT titulo, TIME_FORMAT(duracao, '%H:%i:%s') AS duracao, p.nome AS prestadora_id FROM bare_office.video v JOIN bare_office.prestadora p ON p.id = v.prestadora_id ORDER BY v.id";
        return consulta(sql)
    }
    create(video) {
        const sql = "INSERT INTO `bare_office`.`video` SET ?";
        return consulta(sql, video)
    }

    update(video, id) {
        const sql = "UPDATE `bare_office`.`video` SET ? WHERE `id` = ?";
        return consulta(sql, [video, id])
    }

    delete(id) {
        const sql = "DELETE FROM `bare_office`.`video` WHERE `id` = ?";
        return consulta(sql, id)
    }
}

export default new VideoRepository()