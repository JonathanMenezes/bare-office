// import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import categorias from '../data/categorias'

const CategoriaCreate = () => {
    const [nome, setNome] = useState('')
    const [ativa, setAtiva] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const requestData = {
        //     id: id,
        //     nome: nome,
        //     ativa: ativa
        // }
        // try {
        //     await axios.post('http://localhost:5000/categorias-create', requestData)
        //         .then(res => {
        //             console.log(res);
        //             navigate('/categorias');
        //         })
        // } catch (err) {
        //     console.log('Erro ao cadastrar cliente: ', err.message)
        // }

        const ids = uuid();
        let uni = ids.slice(0, 8);

        let a = nome,
            b = ativa;

        if (nome === '' || ativa === '') {
            alert('Preencha todos os campos')
        } else {
            categorias.push({ id: uni, nome: a, ativa: b })
            navigate('/categorias')
        }
    }

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
                            placeholder='Digite o nome da categoria'
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
                            placeholder='Digite se a categoria está ativa ou não'
                            value={ativa}
                            onChange={e => setAtiva(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' onClick={handleSubmit}>Cadastrar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/categorias")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriaCreate