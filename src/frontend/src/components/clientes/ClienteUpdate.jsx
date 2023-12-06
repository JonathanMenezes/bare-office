// import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clientes from './../data/clientes';

const ClienteUpdate = () => {
    const [cliente_id, setCliente_Id] = useState('')
    const [cliente_nome, setCliente_Nome] = useState('')
    const [cliente_email, setCliente_Email] = useState('')
    const [cliente_telefone, setCliente_Telefone] = useState('')
    const [cliente_sexo, setCliente_Sexo] = useState('')
    const [cliente_dataNasc, setCliente_DataNasc] = useState('')
    const navigate = useNavigate()

    let index = clientes.map(function (e) {
        return e.cliente_id
    }).indexOf(cliente_id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const requestData = {
        //     nome: nome,
        //     email: email,
        //     telefone: telefone,
        //     dataNasc: dataNasc
        // }

        // try {
        //     await axios.put('http://127.0.0.1:5000/clientes-update/' + id, requestData)
        //         .then(res => {
        //             console.log(res);
        //             navigate('/clientes');
        //         })
        // } catch (err) {
        //     console.log(err)
        // }
        if (cliente_nome === '' || cliente_email === '' || cliente_telefone === '' || cliente_sexo === '' || cliente_dataNasc === '') {
            alert('Preencha todos os campos')
        }

        let c = clientes[index]

        c.cliente_id = cliente_id
        c.cliente_nome = cliente_nome
        c.cliente_email = cliente_email
        c.cliente_telefone = cliente_telefone
        c.cliente_sexo = cliente_sexo
        c.cliente_dataNasc = cliente_dataNasc

        navigate('/clientes')
    }

    useEffect(() => {
        setCliente_Id(localStorage.getItem('cliente_id'))
        setCliente_Nome(localStorage.getItem('cliente_nome'))
        setCliente_Email(localStorage.getItem('cliente_email'))
        setCliente_Telefone(localStorage.getItem('cliente_telefone'))
        setCliente_Sexo(localStorage.getItem('cliente_sexo'))
        setCliente_DataNasc(localStorage.getItem('cliente_dataNasc'))
    }, [])

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
                            value={cliente_nome}
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
                            value={cliente_email}
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
                            value={cliente_telefone}
                            onChange={e => setCliente_Telefone(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cliente_sexo'>Sexo (M/F)</label>
                        <input
                            id='cliente_sexo'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite o gênero do cliente'
                            value={cliente_sexo}
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
                            value={cliente_dataNasc}
                            onChange={e => setCliente_DataNasc(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' type="submit" onClick={(e) => handleSubmit(e)}>Atualizar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/clientes")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default ClienteUpdate