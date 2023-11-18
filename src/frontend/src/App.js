import React from 'react';

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Avaliacao from "./pages/avaliacoes/Avaliacao";
import Categoria from "./pages/categorias/Categoria"
import CriarCategoria from "./pages/categorias/CriarCategoria";
import AtualizarCategoria from './pages/categorias/AtualizarCategoria';
import Cliente from "./pages/clientes/Cliente";
import CriarCliente from "./pages/clientes/CriarCliente";
import AtualizarCliente from './pages/clientes/AtualizarCliente';
import Prestadora from "./pages/prestadoras/Prestadora";
import CriarPrestadora from "./pages/prestadoras/CriarPrestadora";
import AtualizarPrestadora from './pages/prestadoras/AtualizarPrestadora';
import Video from "./pages/vídeos/Video";
import CriarVideo from "./pages/vídeos/CriarVideo";
import AtualizarVideo from './pages/vídeos/AtualizarVideo';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/avaliacoes" element={<Avaliacao />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/categorias/create" element={<CriarCategoria />} />
        <Route path="/categorias/update/:id" element={<AtualizarCategoria />} />
        <Route path="/clientes" element={<Cliente />} />
        <Route path="/clientes/create" element={<CriarCliente />} />
        <Route path="/clientes/update/:id" element={<AtualizarCliente />} />
        <Route path="/prestadoras" element={<Prestadora />} />
        <Route path="/prestadoras/create" element={<CriarPrestadora />} />
        <Route path="/prestadoras/update/:id" element={<AtualizarPrestadora />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/videos/create" element={<CriarVideo />} />
        <Route path="/videos/update/:id" element={<AtualizarVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
