import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";

const VideoTable = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/videos')
            .then(res => {
                setVideo(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://127.0.0.1:5000/videos/" + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="vh-100 w-full justify-content-center text-center">
            <div className="bg-white rounded p-3 text-18">
                <Link to="/videos/create" className="btn btn-success text-white text-center"><BsPlus className="icon-24 text-white" /> Criar novo</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Duração</th>
                            <th>Prestadora</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            video.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.titulo}</td>
                                    <td>{data.duracao}</td>
                                    <td>{data.prestadora_id}</td>
                                    <td>
                                        <Link to={`/videos/update/${data.id}`} className="btn btn-primary text-white text-center"><MdEdit className="icon-24 text-white" /> Editar</Link>
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

export default VideoTable;