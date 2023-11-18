import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ClienteUpdate = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNasc, setDataNasc] = useState(new Date())
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://127.0.0.1:5000/clientes/update/' + id, {
            nome, email, telefone, dataNasc
        })
            .then(res => {
                console.log(res);
                navigate('/clientes');
            }).catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form>
                    <div className='mb-2'>
                        <label htmlFor=''>Nome</label>
                        <input type='text' className='form-control' placeholder='Digite o nome do cliente' onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' className='form-control' placeholder='Digite o e-mail do cliente' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Telefone</label>
                        <input type='text' className='form-control' placeholder='Digite o telefone do cliente' onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Data de Nascimento</label>
                        <input type='date' className='form-control' placeholder='Digite a data de nascimento do cliente' onChange={e => setDataNasc(e.target.value)} />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white' onClick={handleSubmit}>Atualizar</button>
                </form>
            </div>
        </div>
    )
}

export default ClienteUpdate