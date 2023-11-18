import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";

const CategoriaTable = () => {
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/categorias')
            .then(res => {
                setCategoria(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    function handleDelete(id) {
        axios.delete("http://127.0.0.1:5000/categorias/" + id)
            .then(window.location.reload())
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 w-full justify-content-center text-center">
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
                            categoria.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.nome}</td>
                                    <td>{data.ativa}</td>
                                    <td>
                                        <Link to={`/categorias/update/${data.id}`} className="btn btn-primary text-white text-center"><MdEdit className="icon-24 text-white" /> Editar</Link>
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

export default CategoriaTable;