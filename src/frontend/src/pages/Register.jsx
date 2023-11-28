import "../styles/Register.css";
import "../styles/util.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail, MdPersonOutline, MdLockOutline } from "react-icons/md";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http:/127.0.0.1:5000/register', {
            username,
            email,
            password
        }).then(navigate("/login"))
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                }
            })
    };



    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-49">Cadastrar Usuário</span>
                        <div className="wrap-input100 validate-input m-b-23">
                            <label className="label-input100" htmlFor="username">Usuário</label>
                            <div className="input flex">
                                <MdPersonOutline className="icon" />
                                <input className="input100" id='username' autoComplete="on" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Digite seu nome de usuário" required />
                            </div>
                        </div>

                        <div className="wrap-input100 validate-input m-b-23">
                            <label className="label-input100" htmlFor="email">Usuário</label>
                            <div className="input flex">
                                <MdOutlineEmail className="icon" />
                                <input className="input100" id='email' autoComplete="on" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu endereço de email" required />
                            </div>
                        </div>

                        <div className="wrap-input100 validate-input m-b-23">
                            <label className="label-input100" htmlFor="password">Senha</label>
                            <div className="input flex">
                                <MdLockOutline className="icon" />
                                <input className="input100" id='password' autoComplete="on" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" required />
                            </div>
                        </div>
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn" onClick={handleSubmit}>
                                    Finalizar Cadastro
                                </button>
                            </div>
                        </div>
                        <div className="flex-col-c p-t-155">
                            <span className="txt1 p-b-17">
                                Já Possui Conta?
                            </span>

                            <Link to="/login" className="txt2">
                                LOGIN
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
