import React from 'react'
import { MdPerson, MdAssignment, MdEmail, MdSettings, MdLogout } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProfileDropdown = () => {
    const navigate = useNavigate()
    function handleLogout(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/logout', {

        })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <ul className='dropdown-menu dropdown-menu-end user-dd animated' aria-labelledby='navbarDropdown'>
                <li className='dropdown-item'>
                    <i className='mdi mdi-account me-1 ms-1 icon-24'><MdPerson /></i> Meu Perfil
                </li>
                <li className='dropdown-item'>
                    <i className='mdi mdi-assignment me-1 ms-1 icon-24'><MdAssignment /></i> Formulários
                </li>
                <li className='dropdown-item'><i className='mdi mdi-email me-1 ms-1 icon-24'>
                    <MdEmail /></i> Caixa de Entrada
                </li>
                <div className="dropdown-divider"></div>
                <li className='dropdown-item'><i className='mdi mdi-settings me-1 ms-1 icon-24'>
                    <MdSettings /></i> Configurações da Conta
                </li>
                <div className="dropdown-divider"></div>
                <Link className='dropdown-item' to="/logout" onClick={handleLogout}><i className='mdi mdi-power me-1 ms-1 icon-24'>
                    <MdLogout /></i> Encerrar Sessão
                </Link>
                <div className="dropdown-divider"></div>
                <div className="ps-4 p-10">
                    <button className="btn btn-sm btn-success btn-rounded text-white">Ver Perfil</button>
                </div>
            </ul>
        </div>
    )
}

export default ProfileDropdown