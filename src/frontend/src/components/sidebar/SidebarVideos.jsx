import React from 'react'
import "../../styles/Dashboard.css";
import { BiSolidDashboard } from "react-icons/bi";
import { MdPerson, MdVideoLibrary, MdCategory, MdLogout } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import '../../styles/util.css';
import '../../styles/Dashboard.css';

const Sidebar = () => {
    return (
        <div>
            <aside className='left-sidebar' data-sidebarbg='skin5'>
                <div className='scroll-sidebar'>
                    <nav className='sidebar-nav'>
                        <ul id='sidebarnav' className='pt-4 in'>
                            <li className='sidebar-item'>
                                <Link className='sidebar-link waves-effect waves-dark' to="/dashboard" aria-expanded="false">
                                    <i className='mdi mdi-view-dashboard sidebar-icon'>
                                        <BiSolidDashboard className='icon-24' />
                                    </i>
                                    <span className='hide-menu'>Dashboard</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link className='sidebar-link waves-effect waves-dark' to="/clientes" aria-expanded="false">
                                    <i className='mdi mdi-view-dashboard sidebar-icon'>
                                        <MdPerson className='icon-24' />
                                    </i>
                                    <span className='hide-menu'>Clientes</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link className='sidebar-link waves-effect waves-dark' to="/prestadoras" aria-expanded="false">
                                    <i className='mdi mdi-view-dashboard sidebar-icon'>
                                        <BsPersonVcardFill className='icon-24' />
                                    </i>
                                    <span className='hide-menu'>Prestadoras</span>
                                </Link>
                            </li>
                            <li className='sidebar-item selected'>
                                <Link className='sidebar-link waves-effect waves-dark active' to="/videos" aria-expanded="false">
                                    <i className='mdi mdi-view-dashboard sidebar-icon'>
                                        <MdVideoLibrary className='icon-24' />
                                    </i>
                                    <span className='hide-menu'>Vídeos</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link className='sidebar-link waves-effect waves-dark' to="/categorias" aria-expanded="false">
                                    <i className='mdi mdi-view-dashboard sidebar-icon'>
                                        <MdCategory className='icon-24' />
                                    </i>
                                    <span className='hide-menu'>Categorias</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link className='sidebar-link waves-effect waves-dark' to="/avaliacoes" aria-expanded="false">
                                    <i className='mdi mdi-view-dashboard sidebar-icon'>
                                        <FaClipboardCheck className='icon-24' />
                                    </i>
                                    <span className='hide-menu'>Avaliações</span>
                                </Link>
                            </li>
                            <li className='sidebar-item selected-2'>
                                <Link className='sidebar-link waves-effect waves-dark active' to="/">
                                    <button className='btn btn-green rounded-full text-center text-black opacity-100'>
                                        <i className='mdi mdi-view-dashboard sidebar-icon text-black'>
                                            <MdLogout className='icon-24' />
                                        </i>
                                        <span className='hide-menu text-bold'>Encerrar Sessão</span>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar