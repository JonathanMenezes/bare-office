import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
import { v4 as uuid } from "uuid";
import clientes from '../data/clientes';

const ClienteCreate = () => {
    const [cliente_nome, setCliente_Nome] = useState('')
    const [cliente_email, setCliente_Email] = useState('')
    const [cliente_telefone, setCliente_Telefone] = useState('')
    const [cliente_sexo, setCliente_Sexo] = useState('')
    const [cliente_dataNasc, setDataCliente_Nasc] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // const requestData = {
        //     id: id,
        //     nome: nome,
        //     email: email,
        //     telefone: telefone,
        //     dataNasc: dataNasc
        // }
        // try {
        //     await axios.post('http://localhost:5000/clientes-create', requestData)
        //         .then(res => {
        //             console.log(res);
        //             navigate('/clientes');
        //         })
        // } catch (err) {
        //     console.log('Erro ao cadastrar cliente: ', err.message)
        // }

        const ids = uuid();
        let uni = ids.slice(0, 8);

        let a = cliente_nome,
            b = cliente_email,
            c = cliente_telefone,
            d = cliente_sexo,
            f = cliente_dataNasc;
        if (cliente_nome === '' || cliente_email === '' || cliente_telefone === '' || cliente_sexo === '' || cliente_dataNasc === '') {
            alert('Preencha todos os campos')
        } else {
            clientes.push({ cliente_id: uni, cliente_nome: a, cliente_email: b, cliente_telefone: c, cliente_sexo: d, cliente_dataNasc: f })
            navigate('/clientes')
        }
    }

    return (
        <div className="text-25 vh-100 w-full justify-content-center">
            <div className="bg-white rounded p-3">
                <form className="w-full">
                    <div className='mb-2'>
                        <label htmlFor='cliente_nome'>Nome</label>
                        <input
                            id='cliente_nome'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o nome do cliente'
                            required
                            onChange={e => setCliente_Nome(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cliente_email'>Email</label>
                        <input
                            id='cliente_email'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o endereço de email do cliente'
                            required
                            onChange={e => setCliente_Email(e.target.value)}
                            autoComplete='on'
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cliente_telefone'>Telefone</label>
                        <input
                            id='cliente_telefone'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o telefone do cliente'
                            required
                            onChange={e => setCliente_Telefone(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cliente_sexo'>Sexo (M/F)</label>
                        <input
                            id='cliente_sexo'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o sexo do cliente'
                            required
                            onChange={e => setCliente_Sexo(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cliente_dataNasc'>Data de Nascimento (DD/MM/AAAA)</label>
                        <input
                            id='cliente_dataNasc'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite a data de nascimento do cliente'
                            required
                            onChange={e => setDataCliente_Nasc(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' onClick={(e) => handleSubmit(e)}>Cadastrar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/clientes")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default ClienteCreate