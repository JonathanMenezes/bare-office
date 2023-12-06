import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from "axios";
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import videos from './../data/videos';

const VideoTable = () => {
    // const [video, setVideo] = useState([]);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:5000/videos')
    //         .then(res => {
    //             setVideo(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete("http://127.0.0.1:5000/videos/" + id);
    //         window.location.reload();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const navigate = useNavigate()

    function setID(id, titulo, prestadora) {
        localStorage.setItem('id', id)
        localStorage.setItem('titulo', titulo)
        localStorage.setItem('prestadora', prestadora)
    }

    function excluir(id) {
        let index = videos.map(function (e) {
            return e.id
        }).indexOf(id);

        videos.splice(index, 1);

        navigate("/videos")
    }

    return (
        <div className="vh-100 w-full justify-content-center text-center">
            <div className="bg-white rounded p-3 text-18">
                <Link to="/videos/create" className="btn btn-success text-white text-center"><BsPlus className="icon-24 text-white" /> Criar novo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Prestadora</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos.map((data) => (
                                <tr>
                                    <td>{data.titulo}</td>
                                    <td>{data.prestadora}</td>
                                    <td>
                                        <Link to="/videos/update" className="btn btn-primary text-white text-center" onChange={e => setID(data.id, data.titulo, data.prestadora)}>
                                            <MdEdit className="icon-24 text-white" /> Editar
                                        </Link>
                                        <button className="btn btn-danger text-white ms-2 text-center" onClick={e => excluir(data.id)}><MdDelete className="icon-24 text-white" /> Excluir</button>
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


export default VideoTable;