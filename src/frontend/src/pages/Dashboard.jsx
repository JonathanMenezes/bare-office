/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../styles/Dashboard.css";
import { BiCalendarEvent, BiSolidDashboard } from "react-icons/bi";
import { MdPerson, MdVideoLibrary, MdCategory } from "react-icons/md";
import { BsPersonVcardFill, BsStarFill } from "react-icons/bs";
import { FaClipboardCheck, FaPlus } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import LineChart from '../components/charts/LineChart.jsx';
import BarChart from '../components/charts/ColumnChart.jsx';

import Topbar from '../components/topbar/Topbar.jsx';
import Sidebar from '../components/sidebar/SidebarDashboard.jsx';


class Dashboard extends React.Component {
    render() {
        return (
            <div id="app">
                <div className="body">
                    <div className='preloader' style={{ display: 'none' }}>
                        <div className="lds-ripple">
                            <div className="lds-pos"></div>
                            <div className="lds-pos"></div>
                        </div>
                    </div>
                    <div
                        id="main-wrapper"
                        data-layout="vertical"
                        data-navbarbg="skin5"
                        data-sidebartype="full"
                        data-sidebar-position="absolute"
                        data-header-position="absolute"
                        data-boxed-layout="full"
                    >
                        <Topbar />
                        <Sidebar />
                        <div className="page-wrapper">
                            <div className="page-breadcrumb">
                                <div className='row'>
                                    <div className='col-5 align-self-center'>
                                        <h2 className='page-title'>Dashboard</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className='row'>
                                    <div className='col-md-6 col-lg-4 col-xlg-3'>
                                        <div className='card card-hover'>
                                            <div className='box bg-cyan'>
                                                <h1 className='font-bold text-white text-30 text-center'><BiSolidDashboard className='icon-50' /> Dashboard</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 col-xlg-3'>
                                        <div className='card card-hover'>
                                            <div className='box bg-success'>
                                                <h1 className='font-bold text-white text-30 text-center'><MdPerson className='icon-50' /> Clientes</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 col-xlg-3'>
                                        <div className='card card-hover'>
                                            <div className='box bg-warning'>
                                                <h1 className='font-bold text-white text-30 text-center'><BsPersonVcardFill className='icon-50' /> Prestadoras</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 col-xlg-3'>
                                        <div className='card card-hover'>
                                            <div className='box bg-danger'>
                                                <h1 className='font-bold text-white text-30 text-center'><MdVideoLibrary className='icon-50' /> Vídeos</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 col-xlg-3'>
                                        <div className='card card-hover'>
                                            <div className='box bg-info'>
                                                <h1 className='font-bold text-white text-30 text-center'><MdCategory className='icon-50' /> Categorias</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-4 col-xlg-3'>
                                        <div className='card card-hover'>
                                            <div className='box bg-purple'>
                                                <h1 className='font-bold text-white text-30 text-center'><FaClipboardCheck className='icon-50' /> Avaliações</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='card'>
                                            <div className='card-body row'>
                                                <div className='row'>
                                                    <div className="col-lg-4">
                                                        <div className='flot-chart'>
                                                            <div id="line-chart" className='flot-chart-content' style={{ padding: 0, position: 'relative' }}>
                                                                <LineChart />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className='flot-chart'>
                                                            <div id="bar-chart" className='flot-chart-content' style={{ padding: 0, position: 'relative' }}>
                                                                <BarChart />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <div className='bg-white box-shadow p-10 text-center text-black'>
                                                                    <h1 className='text-black text-center '>
                                                                        <MdPerson className='icon-30' />
                                                                        <h4 className='font-bold text-16'>2520</h4>
                                                                        <h5 className='font-regular text-12'>Usuários</h5>
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='bg-white box-shadow p-10 text-center text-black'>
                                                                    <h1 className='text-black text-center '>
                                                                        <FaPlus className='icon-30' />
                                                                        <h4 className='font-bold text-16'>25</h4>
                                                                        <h5 className='font-regular text-12'>Prestadoras</h5>
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className='col-6 mt-3'>
                                                                <div className='bg-white box-shadow p-10 text-center text-black'>
                                                                    <h1 className='text-black text-center '>
                                                                        <PiVideoFill className='icon-30' />
                                                                        <h4 className='font-bold text-16'>50</h4>
                                                                        <h5 className='font-regular text-12'>Vídeos Cadastrados</h5>
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className='col-6 mt-3'>
                                                                <div className='bg-white box-shadow p-10 text-center text-black'>
                                                                    <h1 className='text-black text-center '>
                                                                        <FaClipboardCheck className='icon-30' />
                                                                        <h4 className='font-bold text-16'>1580</h4>
                                                                        <h5 className='font-regular text-12'>Avaliações</h5>
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className='col-6 mt-3'>
                                                                <div className='bg-white box-shadow p-10 text-center text-black'>
                                                                    <h1 className='text-black text-center '>
                                                                        <BiCalendarEvent className='icon-30' />
                                                                        <h4 className='font-bold text-16'>120</h4>
                                                                        <h5 className='font-regular text-12'>Avaliações Diárias</h5>
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className='col-6 mt-3'>
                                                                <div className='bg-white box-shadow p-10 text-center text-black'>
                                                                    <h1 className='text-black text-center '>
                                                                        <BsStarFill className='icon-30' />
                                                                        <h4 className='font-bold text-16'>4.98</h4>
                                                                        <h5 className='font-regular text-12'>Média das Avaliações</h5>
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer className="footer text-center">
                                    ® Todos os direitos reservados ao Projeto Baré Video Quality Assessment
                                </footer>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        );
    }
}

export default Dashboard;