// import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videos from './../data/videos';

const VideoUpdate = () => {
    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [prestadora, setPrestadora] = useState('')
    const navigate = useNavigate();

    let index = videos.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const requestData = {
        //     id: id,
        //     titulo: titulo,
        //     duracao: duracao,
        //     prestadora_id: prestadora_id
        // }
        // try {
        //     await axios.put('http://127.0.0.1:5000/videos-update/' + id, requestData)
        //         .then(res => {
        //             console.log(res);
        //             navigate('/videos');
        //         })
        // } catch (err) {
        //     console.log(err)
        // }

        if (titulo === '' || prestadora === '') {
            alert('Preencha todos os campos')
        }

        let v = videos[index]

        v.id = id
        v.titulo = titulo
        v.prestadora = prestadora

        navigate('/videos')
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setTitulo(localStorage.getItem('titulo'))
        setPrestadora(localStorage.getItem('prestadora'))
    }, [])

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
                            placeholder='Digite o título do vídeo'
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='prestadora'>ID da prestadora</label>
                        <input
                            id='prestadora'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o nome da prestadora'
                            value={prestadora}
                            onChange={e => setPrestadora(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' type="submit">Atualizar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/videos")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default VideoUpdate