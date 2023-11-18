import { consulta } from '../database/db.js';

class AvaliacaoRepository {

    findAll() {
        const sql = `SELECT c.nome AS cliente_id, 
        v.titulo AS video_id, 
        CASE 
            WHEN tipoAparelho = 1 THEN 'Celular' 
            WHEN tipoAparelho = 2 THEN 'Notebook' 
            WHEN tipoAparelho = 3 THEN 'Tablet' 
            WHEN tipoAparelho = 4 THEN 'Televisão' 
            WHEN tipoAparelho = 5 THEN 'Desktop' 
            WHEN tipoAparelho = 6 THEN 'Outros' 
        END AS tipoAparelho, 
        resolucao, 
        date_format(dh, '%d/%m/%Y %H:%i:%s') AS dh, 
        subjetiva, 
        objetivaMetodo, 
        objetivaValor, 
        p.nome as prestadora_id 
        FROM bare_office.avaliacao a 
        JOIN cliente c ON c.id = a.cliente_id 
        JOIN video v ON v.id = a.video_id 
        JOIN prestadora p ON p.id = a.prestadora_id 
        ORDER BY a.cliente_id;`;

        return consulta(sql)
    }
}

export default new AvaliacaoRepository()