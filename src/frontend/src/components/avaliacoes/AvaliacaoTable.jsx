import React, { useEffect, useState } from 'react';
import api from '../../services/api.jsx';

const AvaliacaoTable = () => {
    const [avaliacao, setAvaliacao] = useState([]);

    useEffect(() => {
        api.get('/avaliacoes')
            .then(res => {
                setAvaliacao(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="text-18 min-vh-100 border-box w-full justify-content-center text-center">
            <div className="bg-white rounded p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Vídeo</th>
                            <th>Tipo de Aparelho</th>
                            <th>Resolução</th>
                            <th>Data e Hora</th>
                            <th>Subjetiva (Valor)</th>
                            <th>Objetiva (Método)</th>
                            <th>Objetiva (Valor)</th>
                            <th>Prestadora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            avaliacao.map((data) => (
                                <tr key={data.cliente_id}>
                                    <td>{data.cliente_id}</td>
                                    <td>{data.video_id}</td>
                                    <td>{data.tipoAparelho}</td>
                                    <td>{data.resolucao}</td>
                                    <td>{data.dh}</td>
                                    <td>{data.subjetiva}</td>
                                    <td>{data.objetivaMetodo}</td>
                                    <td>{data.objetivaValor}</td>
                                    <td>{data.prestadora_id}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AvaliacaoTable;