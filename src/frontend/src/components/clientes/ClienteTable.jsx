import React from 'react';
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import clientes from '../data/clientes.js';
// import { useEffect, useState } from 'react'
// import axios from 'axios';

const ClienteTable = () => {
    // const [cliente, setCliente] = useState([]);
    const navigate = useNavigate()

    function setID(cliente_id, cliente_nome, cliente_email, cliente_telefone, cliente_sexo, cliente_dataNasc) {
        localStorage.setItem('cliente_id', cliente_id)
        localStorage.setItem('cliente_nome', cliente_nome)
        localStorage.setItem('cliente_email', cliente_email)
        localStorage.setItem('cliente_telefone', cliente_telefone)
        localStorage.setItem('cliente_sexo', cliente_sexo)
        localStorage.setItem('cliente_dataNasc', cliente_dataNasc)
    }

    function excluir(id) {
        let index = clientes.map(function (e) {
            return e.cliente_id
        }).indexOf(id);

        clientes.splice(index, 1);

        navigate("/clientes")
    }

    // useEffect(() => {
    //     axios.get('http://localhost:5000/clientes')
    //         .then(res => {
    //             setCliente(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    // function handleDelete(id) {
    //     axios.delete("http://localhost:5000/clientes/" + id)
    //         .then(window.location.reload())
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <div className="text-18 vh-100 w-full justify-content-center text-center">
            <div className="bg-white rounded p-3">
                <Link to="/clientes/create" className="btn btn-success text-white text-center"><BsPlus className="icon-24 text-white" /> Criar novo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Sexo</th>
                            <th>Data de Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientes.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.cliente_nome}</td>
                                        <td>{item.cliente_email}</td>
                                        <td>{item.cliente_telefone}</td>
                                        <td>{item.cliente_sexo}</td>
                                        <td>{item.cliente_dataNasc}</td>
                                        <td>
                                            <Link to="/clientes/update" className="btn btn-primary" onClick={(e) => setID(item.cliente_id, item.cliente_nome, item.cliente_email, item.cliente_telefone, item.cliente_sexo, item.cliente_dataNasc)}>
                                                <MdEdit className="icon-18 text-white" /> Editar
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => excluir(item.cliente_id)}>
                                                <MdDelete className="icon-18 text-white" /> Excluir
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClienteTable;