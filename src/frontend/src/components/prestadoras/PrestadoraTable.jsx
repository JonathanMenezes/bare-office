import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from "axios";
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import prestadoras from '../data/prestadoras';

const PrestadoraTable = () => {
    // const [prestadora, setPrestadora] = useState([]);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:5000/prestadoras')
    //         .then(res => {
    //             setPrestadora(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete("http://127.0.0.1:5000/prestadoras/" + id);
    //         window.location.reload();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const navigate = useNavigate()

    function setID(id, nome, email, telefone, ativo) {
        localStorage.setItem('id', id)
        localStorage.setItem('nome', nome)
        localStorage.setItem('email', email)
        localStorage.setItem('telefone', telefone)
        localStorage.setItem('ativo', ativo)
    }

    function excluir(id) {
        let index = prestadoras.map(function (e) {
            return e.id
        }).indexOf(id);

        prestadoras.splice(index, 1);

        navigate("/prestadoras")
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
                            prestadoras.map((item) => (
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.ativo}</td>
                                    <td>
                                        <Link to="/prestadoras/update" className="btn btn-primary text-white text-center" onChange={(e) => setID(item.id, item.nome, item.email, item.telefone, item.ativo)}>
                                            <MdEdit className="icon-24 text-white" /> Editar
                                        </Link>
                                        <button className="btn btn-danger text-white ms-2 text-center" onClick={(e) => excluir(item.id)}><MdDelete className="icon-24 text-white" /> Excluir</button>
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