import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ClienteCreate = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:5000/clientes/create/', {
                nome, email, telefone, dataNasc
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
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className='mb-2 text-18'>
                        <label htmlFor=''>Nome</label>
                        <input type='text' className='form-control' placeholder='Digite o nome do cliente' onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className='mb-2 text-18'>
                        <label htmlFor=''>Email</label>
                        <input type='email' className='form-control' placeholder='Digite o e-mail do cliente' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2 text-18'>
                        <label htmlFor=''>Telefone</label>
                        <input type='text' className='form-control' placeholder='Digite o telefone do cliente' onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <div className='mb-2 text-18'>
                        <label htmlFor=''>Data de Nascimento</label>
                        <input type='date' className='form-control' onChange={e => setDataNasc(e.target.value)} />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default ClienteCreate