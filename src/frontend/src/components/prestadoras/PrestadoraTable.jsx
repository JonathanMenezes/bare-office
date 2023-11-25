import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";

const PrestadoraTable = () => {
    const [prestadora, setPrestadora] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/prestadoras')
            .then(res => {
                setPrestadora(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://127.0.0.1:5000/prestadoras/" + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="vh-100 w-full justify-content-center text-center text-18">
            <div className="bg-white rounded p-3">
                <Link to="/prestadoras/create/" className="btn btn-success text-white text-center"><BsPlus className="icon-24 text-white" /> Criar novo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Prestadora Ativa?</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prestadora.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.nome}</td>
                                    <td>{data.email}</td>
                                    <td>{data.telefone}</td>
                                    <td>{data.ativo}</td>
                                    <td>
                                        <Link to={`/prestadoras/update/${data.id}`} className="btn btn-primary text-white text-center"><MdEdit className="icon-24 text-white" /> Editar</Link>
                                        <button className="btn btn-danger text-white ms-2 text-center" onClick={e => handleDelete(data.id)}><MdDelete className="icon-24 text-white" /> Excluir</button>
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

export default PrestadoraTable;