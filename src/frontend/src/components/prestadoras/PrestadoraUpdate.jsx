import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PrestadoraUpdate = () => {
    const { id } = useParams('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [ativo, setAtivo] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:5000/prestadoras/update/' + id, {
            nome, email, telefone, ativo
        })
            .then(res => {
                console.log(res);
                navigate('/prestadoras');
            }).catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor=''>Nome</label>
                        <input type='text' className='form-control' placeholder='Digite o nome da prestadora' onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>E-mail</label>
                        <input type='text' className='form-control' placeholder='Digite o e-mail da prestadora' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Telefone</label>
                        <input type='text' className='form-control' placeholder='Digite o telefone da prestadora' onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <fieldset className='mb-2'>
                        <legend htmlFor=''>Prestadora ativa?</legend>
                        <div>
                            <input type='radio' name="active" id='true' value={true} onChange={e => setAtivo(e.target.value)} />
                            <label htmlFor='true'>Sim</label>
                        </div>
                        <div>
                            <input type='radio' name="active" id='false' value={false} onChange={e => setAtivo(e.target.value)} />
                            <label htmlFor='false'>Não</label>
                        </div>
                    </fieldset>
                    <button className='btn btn-success rounded-full text-center text-white'>Atualizar</button>
                </form>
            </div>
        </div>
    )
}

export default PrestadoraUpdate