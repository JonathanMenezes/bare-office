/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../../styles/Dashboard.css";
import CategoriaTable from '../../components/categorias/CategoriaTable';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/SidebarCategorias';

const Categoria = () => {
    return (
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
                                <h2 className='page-title'>Categorias</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='card'>
                                <div className='card-body w-full'>
                                    <CategoriaTable />
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer text-center">
                        ® Todos os direitos reservados ao Projeto Baré Video Quality Assessment
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Categoria