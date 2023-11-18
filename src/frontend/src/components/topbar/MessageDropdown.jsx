import React from 'react'
import { BiCalendarEvent } from 'react-icons/bi'
import { RiSettings3Fill } from 'react-icons/ri'
import { MdPerson, MdLink } from 'react-icons/md'

const MessageDropdown = () => {
    return (
        <div>
            <ul className='dropdown-menu dropdown-menu-end mailbox animated bounceInDown' aria-labelledby='2'>
                <ul className='list-style-none'>
                    <div>
                        <li className='link-border-top'>
                            <div className='d-flex no-block align-items-center p-10'>
                                <span className='btn btn-success btn-circle d-flex align-items-center justify-content-center'>
                                    <i className='mdi mdi-calendar text-white fs-4'>
                                        <BiCalendarEvent className='icon-24' />
                                    </i>
                                </span>
                                <div className='ms-2'>
                                    <h5 className='mb-0'>Evento hoje</h5>
                                    <span className='mail-desc'>Apenas um lembrete</span>
                                </div>
                            </div>
                        </li>
                        <li className='link-border-top'>
                            <div className='d-flex no-block align-items-center p-10'>
                                <span className='btn btn-info btn-circle d-flex align-items-center justify-content-center'>
                                    <i className='mdi mdi-settings text-white fs-4'>
                                        <RiSettings3Fill className='icon-24' />
                                    </i>
                                </span>
                                <div className='ms-2'>
                                    <h5 className='mb-0'>Configurações</h5>;
                                    <span className='mail-desc'>Customize esse template</span>
                                </div>
                            </div>
                        </li>
                        <li className='link-border-top'>
                            <div className='d-flex no-block align-items-center p-10'>
                                <span className='btn btn-primary btn-circle d-flex align-items-center justify-content-center'>
                                    <i className='mdi mdi-account text-white fs-4'>
                                        <MdPerson className='icon-24' />
                                    </i>
                                </span>
                                <div className='ms-2'>
                                    <h5 className='mb-0'>Jonathan Menezes</h5>
                                    <span className='mail-desc'>Lorem ipsum dolor</span>
                                </div>
                            </div>
                        </li>
                        <li className='link-border-top'>
                            <div className='d-flex no-block align-items-center p-10'>
                                <span className='btn btn-warning btn-circle d-flex align-items-center justify-content-center'>
                                    <i className='mdi mdi-link text-white fs-4'>
                                        <MdLink className='icon-24' />
                                    </i>
                                </span>
                                <div className='ms-2'>
                                    <h5 className='mb-0'>Novo link disponível</h5>
                                    <span className='mail-desc'>Clique para saber mais!</span>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </ul>
        </div>
    )
}

export default MessageDropdown