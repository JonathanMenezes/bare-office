import React from 'react';
import avaliacoes from '../data/avaliacoes';
// import { useEffect, useState } from 'react';
// import api from '../../services/api.jsx';

const AvaliacaoTable = () => {
    // const [avaliacao, setAvaliacao] = useState([]);

    // useEffect(() => {
    //     api.get('/avaliacoes')
    //         .then(res => {
    //             setAvaliacao(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <div className="text-18 min-vh-100 border-box w-full justify-content-center text-center">
            <div className="bg-white rounded p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Prestadora</th>
                            <th>Subjetiva (Média)</th>
                            <th>Objetiva (Método)</th>
                            <th>Objetiva (Média)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            avaliacoes.map((data) => (
                                <tr>
                                    <td>{data.prestadora}</td>
                                    <td>{data.subjetiva}</td>
                                    <td>{data.metrica}</td>
                                    <td>{data.media}</td>
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