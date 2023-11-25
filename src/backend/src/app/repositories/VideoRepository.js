import { consulta } from '../database/db.js';

class VideoRepository {

    findAll() {
        const sql = `SELECT titulo, 
        duracao, 
        p.nome AS prestadora_id 
        FROM video v 
        JOIN prestadora p 
        ON p.id = v.prestadora_id 
        ORDER BY v.videoId`;
        return consulta(sql)
    }
    create(video) {
        const sql = "INSERT INTO video SET ?";
        return consulta(sql, video)
    }

    update(video, videoId) {
        const sql = "UPDATE video SET ? WHERE videoId = ?;";
        return consulta(sql, [video, videoId])
    }

    delete(videoId) {
        const sql = "DELETE FROM video  WHERE videoId = ?";
        return consulta(sql, videoId)
    }
}

export default new VideoRepository()