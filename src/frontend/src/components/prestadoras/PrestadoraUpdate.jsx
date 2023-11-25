import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PrestadoraUpdate = () => {
    const { id } = useParams()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [ativo, setAtivo] = useState(0)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            nome: nome,
            email: email,
            telefone: telefone,
            ativo: ativo
        }

        try {
            await axios.put('http://127.0.0.1:5000/prestadoras-update/' + id, requestData)
                .then(res => {
                    console.log(res);
                    navigate('/prestadoras');
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
                        <label htmlFor='id'>ID</label>
                        <input
                            id='id'
                            type='number'
                            className='form-control text-black text-18'
                            placeholder='Digite o ID da prestadora'
                            value={id}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='nome'>Nome</label>
                        <input
                            id='nome'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o nome da prestadora'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o endereço de email da prestadora'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoComplete='on'
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='telefone'>Telefone</label>
                        <input
                            id='telefone'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o telefone da prestadora'
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='ativo'>Prestadora ativa? (1 = sim, 0 = não)</label>
                        <input
                            id='ativo'
                            type='number'
                            className='form-control text-black text-18'
                            placeholder='Digite o telefone da prestadora'
                            value={ativo}
                            onChange={e => setAtivo(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' type="submit">Atualizar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/prestadoras")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default PrestadoraUpdate