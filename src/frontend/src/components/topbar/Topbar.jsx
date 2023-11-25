import React, { useState } from 'react'
import { BiSolidLeaf, BiSolidBell } from 'react-icons/bi'
import { MdMenu, MdSearch, MdClose } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'
import ProfileDropdown from './ProfileDropdown';
import profile from '../../img/profile.png';
import NotificationDropdown from './NotificationDropdown';
import MessageDropdown from './MessageDropdown';
import { Link } from 'react-router-dom';

const Topbar = ({ user }) => {
    const [openNotification, setOpenNotification] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    return (
        <>
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin5">
                        <a className="navbar-brand" href="localhost:3000/dashboard">
                            <b className="logo-icon ps-2">
                                <BiSolidLeaf />
                            </b>
                            <span className="logo-text ms-2">BARÉ OFFICE</span>
                        </a>
                        <Link className='nav-toggler waves-effect waves-light d-block d-md-none'>
                            <i className='ti-menu ti-close'></i>
                        </Link>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        <ul className="navbar-nav float-start me-auto">
                            <li className="nav-item d-none d-md-block">
                                <Link className="nav-link sidebartoggler waves-effect waves-light" data-sidebartype="mini-sidebar">
                                    <i className="mdi mdi-menu icon-24">
                                        <MdMenu />
                                    </i>
                                </Link>
                            </li>
                            <li className='nav-item search-box'>
                                <Link className='nav-link waves-effect waves-dark'>
                                    <i className='mdi mdi-magnify fs-4'>
                                        <MdSearch className='icon-24' />
                                    </i>
                                </Link>
                                <form className='app-search position-absolute'>
                                    <input type='text' id="search" className='form-control' placeholder='Search &amp; enter' />
                                    <Link className='search-btn'>
                                        <i className='mdi mdi-window-close'>
                                            <MdClose className='icon-24' />
                                        </i>
                                    </Link>
                                </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav float-end">
                            <li className='nav-item dropdown'>
                                <Link className='nav-link dropdown-toggle' onClick={() => setOpenNotification((prev) => !prev)} id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    <i className='mdi mdi-bell font-24'>
                                        <BiSolidBell className='icon-24' />
                                    </i>
                                </Link>
                            </li>
                            <li className='nav-item dropdown'>
                                <Link className='nav-link dropdown-toggle waves-effect waves-dark' onClick={() => setOpenMessage((prev) => !prev)} id='2' role='button' data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='mdi mdi-comment-processing font-24'>
                                        <RiMessage2Fill className='icon-24' />
                                    </i>
                                </Link>
                                <MessageDropdown />
                            </li>
                            <li className='nav-item dropdown'>
                                <Link className='nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic' onClick={() => setOpenProfile((prev) => !prev)} id='navbarDropdown' role='button' data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={profile} style={{ borderRadius: "50%", height: "31px", width: "31px" }} alt='user' />
                                </Link>
                                <ProfileDropdown />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {
                openNotification && <NotificationDropdown />
            }
            {
                openMessage && <MessageDropdown />
            }
            {
                openProfile && <ProfileDropdown />
            }
        </>
    )
}

export default Topbar