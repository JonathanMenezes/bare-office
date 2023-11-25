import "../styles/Login.css";
import "../styles/util.css";

import { React, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { MdPersonOutline, MdLockOutline } from "react-icons/md";
import { RiFacebookFill, RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa"
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.get("http://127.0.0.1:5000/login", {
            username: username,
            password: password,
        })
            .then(navigate("/dashboard"))
            .catch(err => {
                if (err.response) {
                    navigate("/")
                }
            });
    }

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-49">Login</span>
                        <div className="wrap-input100 validate-input m-b-23">
                            <label className="label-input100" htmlFor="username">Usuário</label>
                            <div className="input flex">
                                <MdPersonOutline className="icon" />
                                <input className="input100" id="username" autoComplete="on" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Digite seu nome de usuário" required />
                            </div>
                        </div>

                        <div className="wrap-input100 validate-input m-b-23">
                            <label className="label-input100" htmlFor="password">Senha</label>
                            <div className="input flex">
                                <MdLockOutline className="icon" />
                                <input className="input100" id="password" autoComplete="on" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" required />
                            </div>
                        </div>

                        <div className="text-right p-t-8 p-b-31">
                            {/* eslint-disable-next-line */}
                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn" onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>
                        </div>

                        <div className="txt1 text-center p-t-54 p-b-20">
                            <span>
                                Ou Faça Login Usando
                            </span>
                        </div>

                        <div className="flex-c-m">
                            {/* eslint-disable-next-line */}
                            <i className="login100-social-item bg1" onClick={facebook}>
                                <RiFacebookFill />
                            </i>
                            {/* eslint-disable-next-line */}
                            <i className="login100-social-item bg2" onClick={github}>
                                <FaGithub />
                            </i>
                            {/* eslint-disable-next-line */}
                            <i className="login100-social-item bg3" onClick={google}>
                                <RiGoogleFill />
                            </i>
                        </div>

                        <div className="flex-col-c p-t-155">
                            <span className="txt1 p-b-17">
                                Não Possui Conta?
                            </span>

                            <Link to="/cadastrar" className="txt2">
                                CADASTRAR
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login