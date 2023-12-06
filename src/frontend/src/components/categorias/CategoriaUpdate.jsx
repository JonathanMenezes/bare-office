// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import categorias from '../data/categorias'

const CategoriaUpdate = () => {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [ativa, setAtiva] = useState(false)
    const navigate = useNavigate();

    let index = categorias.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const requestData = {
        //     id: id,
        //     nome: nome,
        //     ativa: ativa
        // }
        // try {
        //     await axios.put('http://localhost:5000/categorias-update/' + id, requestData)
        //         .then(res => {
        //             console.log(res);
        //             navigate('/categorias');
        //         })
        // } catch (err) {
        //     console.log('Erro ao cadastrar cliente: ', err.message)
        // }

        if (nome === '' || ativa === '') {
            alert('Preencha todos os campos')
        }

        let cat = categorias[index]

        cat.id = id
        cat.nome = nome
        cat.ativa = ativa

        navigate('/categorias')
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setNome(localStorage.getItem('nome'))
        setAtiva(localStorage.getItem('ativa'))
    }, [])

    return (
        <div className="text-25 vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form className="w-full">
                    <div className='mb-2'>
                        <label htmlFor='nome'>Nome</label>
                        <input
                            id='nome'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o nome do cliente'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='ativo'>Categoria ativa? (Sim/Não)</label>
                        <input
                            id='ativo'
                            type='text'
                            className='form-control text-black text-18'
                            value={ativa}
                            onChange={e => setAtiva(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' onClick={handleSubmit}>Atualizar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/categorias")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriaUpdate