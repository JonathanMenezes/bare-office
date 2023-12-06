import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BiSolidLeaf } from 'react-icons/bi';
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { MdMarkEmailRead } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import "../styles/Register.css";
import "../styles/util.css";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http:/localhost:5000/register', {
            username: username,
            email: email,
            password: password
        }).then(() => {
            navigate("/login")

            setUsername('');
            setEmail('');
            setPassword('');
        })
    };



    return (
        <div className="registerPage flex">
            <video autoPlay loop muted className="anim-back">
                <source src={video} type='video/mp4' />
            </video>
            <div className='container flex'>
                <div className="videoDiv">

                    <div className="textDiv">
                        <h2 className="title">BARÉ OFFICE</h2>
                        <p className="text">Sistema de Monitoramento de Avaliações da Qualidade Percebida de Vídeos de Clientes de Serviços de Streaming</p>
                    </div>

                    <div class="footerDiv flex">
                        <span class="text">Já possui cadastro?</span>
                        <Link to="/login">
                            <button class="button">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <BiSolidLeaf className="register-logo-icon" />
                        <h3>Cadastrar Usuário</h3>
                    </div>

                    <form action="" className="form grid">
                        <div className="inputDiv">
                            <label htmlFor="username">Nome de Usuário</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id="username" placeholder="Digite seu nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="email">Endereço de Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon" />
                                <input type="email" id="email" placeholder="Digite seu endereço de email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Senha</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>

                        <button type="submit" onClick={handleSubmit} className="button flex">
                            <span>Finalizar Cadastro</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Esqueceu sua senha? <a href="_self">Clique aqui</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
