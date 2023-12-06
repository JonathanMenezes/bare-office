// import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import videos from './../data/videos';

const VideoCreate = () => {
    const [titulo, setTitulo] = useState('')
    const [prestadora, setPrestadora] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const requestData = {
        //     video_id: id,
        //     titulo: titulo,
        //     duracao: duracao,
        //     prestadora: prestadora
        // }
        // try {
        //     await axios.post('http://127.0.0.1:5000/videos-create', requestData)
        //         .then(res => {
        //             console.log(res);
        //             navigate('/videos');
        //         })
        // } catch (err) {
        //     console.log(err)
        // }

        const ids = uuid();
        let uni = ids.slice(0, 8);

        let a = titulo,
            b = prestadora;

        if (titulo === '' || prestadora === '') {
            alert('Preencha todos os campos')
        } else {
            videos.push({ id: uni, titulo: a, prestadora: b })
            navigate('/videos')
        }
    }

    return (
        <div className="text-25 vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='titulo'>Título do vídeo</label>
                        <input
                            id='titulo'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o nome do vídeo'
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='prestadora'>Prestadora</label>
                        <input
                            id='prestadora'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o nome da prestadora'
                            value={prestadora}
                            onChange={e => setPrestadora(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' type="submit">Cadastrar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/videos")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default VideoCreate