import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VideoCreate = () => {
    const [videoId, setVideoId] = useState(0)
    const [titulo, setTitulo] = useState('')
    const [duracao, setDuracao] = useState('')
    const [prestadora_id, setPrestadora_id] = useState(0)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            video_id: videoId,
            titulo: titulo,
            duracao: duracao,
            prestadora_id: prestadora_id
        }
        try {
            await axios.post('http://127.0.0.1:5000/videos-create', requestData)
                .then(res => {
                    console.log(res);
                    navigate('/videos');
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="text-25 vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='id'>ID do vídeo</label>
                        <input
                            id='id'
                            type='number'
                            className='form-control text-black text-18'
                            value={videoId}
                            onChange={e => setVideoId(e.target.value)}
                        />
                    </div>
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
                        <label htmlFor='duracao'>Duração do vídeo (HH:MM:SS)</label>
                        <input
                            id='duracao'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o tempo de duração do vídeo'
                            value={duracao}
                            onChange={e => setDuracao(e.target.value)}
                            autoComplete='on'
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='prestadora_id'>ID da prestadora</label>
                        <input
                            id='prestadora_id'
                            type='number'
                            className='form-control text-black text-18'
                            placeholder='Digite o ID da prestadora'
                            value={prestadora_id}
                            onChange={e => setPrestadora_id(e.target.value)}
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