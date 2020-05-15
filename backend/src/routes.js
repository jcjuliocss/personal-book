const express = require('express')
const usuariosController = require('./controllers/usuariosController')

const routes = express.Router()

routes.post('/registrar_usuario', usuariosController.create)
routes.put('/editar_usuario', usuariosController.update)
routes.get('/usuarios', usuariosController.index)

module.exports = routes