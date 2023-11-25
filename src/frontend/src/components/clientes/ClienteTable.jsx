import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from 'axios';


const ClienteTable = () => {
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/clientes')
            .then(res => {
                setCliente(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    function handleDelete(id) {
        axios.delete("http://localhost:5000/clientes/" + id)
            .then(window.location.reload())
            .catch(err => {
                console.log(err)
            })
    }

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
                            <th>Data de Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cliente.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.nome}</td>
                                    <td>{data.email}</td>
                                    <td>{data.telefone}</td>
                                    <td>{data.dataNasc}</td>
                                    <td>
                                        <Link to={`/clientes/update/${data.id}`} className="btn btn-primary text-white text-center"><MdEdit className="icon-24 text-white" /> Editar</Link>
                                        <button className="btn btn-danger text-white ms-2 text-center" onClick={() => handleDelete(data.id)}><MdDelete className="icon-24 text-white" /> Excluir</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClienteTable;