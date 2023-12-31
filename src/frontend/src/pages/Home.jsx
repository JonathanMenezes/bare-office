import React from 'react'
import sample from "../assets/video.mp4"
import { BiSolidLeaf } from 'react-icons/bi';
import { Link } from "react-router-dom"

import "../styles/util.css";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className='limiter'>
            <div className='container-landing'>
                <video autoPlay loop muted className="anim-back">
                    <source src={sample} type='video/mp4' />
                </video>
                <div className="container-landing">
                    <div className='wrap-landing p-l-68 p-r-68 p-t-76 p-b-80'>
                        <div className='landing'>
                            <div className="landing-logo-brand p-b-224">
                                <i className='landing-logo-icon'>
                                    <BiSolidLeaf />
                                </i>
                                <span className="landing-logo-text ms-2">BARÉ OFFICE</span>
                            </div>
                            <span className='landing-welcome m-t-197 m-b-197'>Sistema de Monitoramento de Avaliações da Qualidade Percebida de Vídeos de Clientes de Serviços de Streaming</span>
                            <div className="container-landing-form-btn">
                                <div className="wrap-landing-form-btn">
                                    <div className="landing-form-bgbtn"></div>
                                    <Link to="/login">
                                        <button className="landing-form-btn">
                                            Fazer Login
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home