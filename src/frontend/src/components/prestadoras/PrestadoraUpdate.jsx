// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import prestadoras from '../data/prestadoras.js'

const PrestadoraUpdate = () => {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [ativo, setAtivo] = useState('')
    const navigate = useNavigate();

    let index = prestadoras.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const requestData = {
        //     nome: nome,
        //     email: email,
        //     telefone: telefone,
        //     ativo: ativo
        // }

        // try {
        //     await axios.put('http://127.0.0.1:5000/prestadoras-update/' + id, requestData)
        //         .then(res => {
        //             console.log(res);
        //             navigate('/prestadoras');
        //         })
        // } catch (err) {
        //     console.log(err)
        // }

        if (nome === '' || email === '' || telefone === '' || ativo === '') {
            alert('Preencha todos os campos')
        }

        let p = prestadoras[index]

        p.nome = nome
        p.email = email
        p.telefone = telefone
        p.ativo = ativo

        navigate('/prestadoras')
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setNome(localStorage.getItem('nome'))
        setEmail(localStorage.getItem('email'))
        setTelefone(localStorage.getItem('telefone'))
        setAtivo(localStorage.getItem('ativo'))
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
                        <label htmlFor='ativo'>Prestadora ativa? (Sim/Não)</label>
                        <input
                            id='ativo'
                            type='text'
                            className='form-control text-black text-18'
                            placeholder='Digite se a prestadora está ativa ou não'
                            value={ativo}
                            onChange={e => setAtivo(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success rounded-full text-center text-white mb-2 text-bold' type="submit" onClick={(e) => handleSubmit(e)}>Atualizar</button>
                </form>
                <div className="mb-2">
                    <button className='btn btn-danger rounded-full text-center text-white text-bold' onClick={() => navigate("/prestadoras")}>Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default PrestadoraUpdate