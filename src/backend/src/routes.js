import { Router } from "express";

import ClienteController from './app/controllers/ClienteController.js'
import PrestadoraController from "./app/controllers/PrestadoraController.js"
import VideoController from "./app/controllers/VideoController.js"
import AvaliacaoController from "./app/controllers/AvaliacaoController.js"
import CategoriaController from "./app/controllers/CategoriaController.js"

const router = Router();

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'Login failed'
    })
})
router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'Login failed',
            user: req.user,
        })
    }
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/');
})

router.get('/clientes', ClienteController.index)
router.post('/clientes-create', ClienteController.store)
router.put('/clientes-update/:id', ClienteController.update)
router.delete('/clientes/:id', ClienteController.delete)

router.get('/prestadoras', PrestadoraController.index)
router.post('/prestadoras-create', PrestadoraController.store)
router.put('/prestadoras-update/:id', PrestadoraController.update)
router.delete('/prestadoras/:id', PrestadoraController.delete)

router.get('/videos', VideoController.index)
router.post('/videos-create', VideoController.store)
router.put('/videos-update/:id', VideoController.update)
router.delete('/videos/:id', VideoController.delete)

router.get('/categorias', CategoriaController.index)
router.post('/categorias-create', CategoriaController.store)
router.put('/categorias-update/:id', CategoriaController.update)
router.delete('/categorias/:id', CategoriaController.delete)

router.get('/avaliacoes', AvaliacaoController.index)
router.post('/avaliacoes-create', AvaliacaoController.store)

export default router