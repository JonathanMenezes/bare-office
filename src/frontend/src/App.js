import React, { useEffect, useState } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Avaliacao from "./pages/avaliacoes/Avaliacao";
import AtualizarCategoria from './pages/categorias/AtualizarCategoria';
import Categoria from "./pages/categorias/Categoria";
import CriarCategoria from "./pages/categorias/CriarCategoria";
import AtualizarCliente from './pages/clientes/AtualizarCliente';
import Cliente from "./pages/clientes/Cliente";
import CriarCliente from "./pages/clientes/CriarCliente";
import AtualizarPrestadora from './pages/prestadoras/AtualizarPrestadora';
import CriarPrestadora from "./pages/prestadoras/CriarPrestadora";
import Prestadora from "./pages/prestadoras/Prestadora";
import AtualizarVideo from './pages/vídeos/AtualizarVideo';
import CriarVideo from "./pages/vídeos/CriarVideo";
import Video from "./pages/vídeos/Video";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/cadastrar" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/avaliacoes" element={<Avaliacao />} />
          <Route path="/categorias" element={<Categoria />} />
          <Route path="/categorias/create" element={<CriarCategoria />} />
          <Route path="/categorias/update" element={<AtualizarCategoria />} />
          <Route path="/clientes" element={<Cliente />} />
          <Route path="/clientes/create" element={<CriarCliente />} />
          <Route path="/clientes/update" element={<AtualizarCliente />} />
          <Route path="/prestadoras" element={<Prestadora />} />
          <Route path="/prestadoras/create" element={<CriarPrestadora />} />
          <Route path="/prestadoras/update" element={<AtualizarPrestadora />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/videos/create" element={<CriarVideo />} />
          <Route path="/videos/update" element={<AtualizarVideo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
