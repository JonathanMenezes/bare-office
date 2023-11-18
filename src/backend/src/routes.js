import { Router } from "express";

import ClienteController from './app/controllers/ClienteController.js'
import UserController from "./app/controllers/UserController.js"
import PrestadoraController from "./app/controllers/PrestadoraController.js"
import VideoController from "./app/controllers/VideoController.js"
import AvaliacaoController from "./app/controllers/AvaliacaoController.js"
import CategoriaController from "./app/controllers/CategoriaController.js"

const router = Router();

router.post('/register', UserController.register)
router.get('/login', UserController.login)

router.get('/clientes', ClienteController.index)
router.post('/clientes/create', ClienteController.store)
router.put('/clientes/update/:id', ClienteController.update)
router.delete('/clientes/:id', ClienteController.delete)

router.get('/prestadoras', PrestadoraController.index)
router.post('/prestadoras/create', PrestadoraController.store)
router.put('/prestadoras/update/:id', PrestadoraController.update)
router.delete('/prestadoras/:id', PrestadoraController.delete)

router.get('/videos', VideoController.index)
router.post('/videos/create', VideoController.store)
router.put('/videos/update/:id', VideoController.update)
router.delete('/videos/:id', VideoController.delete)

router.get('/categorias', CategoriaController.index)
router.post('/categorias/create', CategoriaController.store)
router.put('/categorias/update/:id', CategoriaController.update)
router.delete('/categorias/:id', CategoriaController.delete)

router.get('/avaliacoes', AvaliacaoController.index)

export default router