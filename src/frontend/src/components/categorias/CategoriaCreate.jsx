import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CategoriaCreate = () => {
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')
    const [ativa, setAtiva] = useState(0)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            id: id,
            nome: nome,
            ativa: ativa
        }
        try {
            await axios.post('http://localhost:5000/categorias-create', requestData)
                .then(res => {
                    console.log(res);
                    navigate('/categorias');
                })
        } catch (err) {
            console.log('Erro ao cadastrar cliente: ', err.message)
        }
    }

    return (
        <div className="text-25 vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form className="w-full">
                    <div className='mb-2'>
                        <label htmlFor='id'>ID</label>
                        <input
                            id='id'
                            type='number'
                            className='form-control text-black text-18'
                            placeholder='Digite o ID do cliente'
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                    </div>
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
                        <label htmlFor='ativo'>Categoria ativa? (1 = sim, 0 = não)</label>
                        <input
                            id='ativo'
                            type='number'
                            className='form-control text-black text-18'
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