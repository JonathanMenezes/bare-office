import { consulta } from '../database/db.js';

class VideoRepository {

    findAll() {
        const sql = `SELECT titulo, 
        duracao, 
        p.nome AS prestadora_id 
        FROM video v 
        JOIN prestadora p 
        ON p.id = v.prestadora_id 
        ORDER BY v.id`;
        return consulta(sql)
    }
    create(video) {
        const sql = "INSERT INTO video SET ?";
        return consulta(sql, video)
    }

    update(video, id) {
        const sql = "UPDATE video SET ? WHERE id = ?";
        return consulta(sql, [video, id])
    }

    delete(id) {
        const sql = "DELETE FROM video  WHERE id = ?";
        return consulta(sql, id)
    }
}

export default new VideoRepository()