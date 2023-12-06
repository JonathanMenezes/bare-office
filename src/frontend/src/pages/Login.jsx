import "../styles/Login.css";
import "../styles/util.css";

import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { AiOutlineSwapRight } from "react-icons/ai";
import { BiSolidLeaf } from 'react-icons/bi';
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')

    function handleSubmit(e) {
        e.preventDefault();
        axios.get("http://127.0.0.1:5000/login", {
            username: username,
            password: password,
        })
            .then((response) => {
                if (response.data.message || username === '' || password === '') {
                    navigate("/login")
                    setLoginStatus("Usuário Inválido")
                } else {
                    navigate("/dashboard");
                }
            })
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setStatusHolder('showMessage')
            setTimeout(() => {
                setStatusHolder('message')
            }, 3000)
        } else {
            setStatusHolder('error')
        }
    }, [loginStatus])

    const onSubmit = () => {
        setUsername('');
        setPassword('');
    }

    return (
        <div className="loginPage flex">
            <div className='container flex'>
                <video autoPlay loop muted className="anim-back">
                    <source src={video} type='video/mp4' />
                </video>
                <div className="videoDiv">

                    <div className="textDiv">
                        <h2 className="title">BARÉ OFFICE</h2>
                        <p className="text">Sistema de Monitoramento de Avaliações da Qualidade Percebida de Vídeos de Clientes de Serviços de Streaming</p>
                    </div>

                    <div class="footerDiv flex">
                        <span class="text">Usuário novo?</span>
                        <Link to="/cadastrar">
                            <button class="button">Cadastrar</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <BiSolidLeaf className="login-logo-icon" />
                        <h3>Login</h3>
                    </div>

                    <form action="" className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>
                        <div className="inputDiv">
                            <label htmlFor="username">Nome de Usuário</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id="username" placeholder="Digite seu nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)} required />
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
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Esqueceu sua senha? <a href="_self">Clique aqui</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login