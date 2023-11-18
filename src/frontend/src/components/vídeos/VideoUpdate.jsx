import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VideoUpdate = () => {
    const { id } = useParams('')
    const [titulo, setTitulo] = useState('')
    const [duracao, setDuracao] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:5000/videos/update/' + id, {
                titulo, duracao
            })
                .then(res => {
                    console.log(res);
                    navigate('/videos');
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="d-flex vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor=''>Título</label>
                        <input type='text' className='form-control' placeholder='Digite o título do vídeo' onChange={e => setTitulo(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Duração</label>
                        <input type='time' className='form-control' placeholder='Digite o tempo de duração do vídeo' onChange={e => setDuracao(e.target.value)} />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white'>Atualizar</button>
                </form>
            </div>
        </div>
    )
}

export default VideoUpdate