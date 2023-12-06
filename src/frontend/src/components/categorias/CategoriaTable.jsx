import React from 'react';
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import axios from "axios";
import categorias from './../data/categorias';

const CategoriaTable = () => {
    const navigate = useNavigate()
    // const [categoria, setCategoria] = useState([]);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:5000/categorias')
    //         .then(res => {
    //             setCategoria(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    // function handleDelete(id) {
    //     axios.delete("http://127.0.0.1:5000/categorias/" + id)
    //         .then(window.location.reload())
    //         .catch(err => console.log(err))
    // }

    function setID(id, nome, ativa) {
        localStorage.setItem('id', id)
        localStorage.setItem('nome', nome)
        localStorage.setItem('ativa', ativa)
    }

    function excluir(id) {
        let index = categorias.map(function (e) {
            return e.id
        }).indexOf(id);

        categorias.splice(index, 1);

        navigate("/categorias")
    }

    return (
        <div className="text-18 vh-100 w-full justify-content-center text-center">
            <div className="bg-white rounded p-3">
                <Link to="/categorias/create" className="btn btn-success text-white text-center"><BsPlus className="icon-24 text-white" /> Criar novo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ativa</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categorias.map((item) => (
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>{item.ativa}</td>
                                    <td>
                                        <Link to="/categorias/update" className="btn btn-primary text-white text-center" onClick={(e) => setID(item.id, item.nome, item.ativa)}>
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

export default CategoriaTable;