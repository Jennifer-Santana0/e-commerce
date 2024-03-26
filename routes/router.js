const express = require('express')
const routes = express.Router()
const Cadastro = require('../controller/CadastroContoller')
const MainPage = require('../controller/MainPageController')
const Categoria = require('../controller/ProdutosControler')
const Cart = require('../controller/CartController')

routes.get('/',Cadastro.cadastro)
routes.get('/login',Cadastro.login)

routes.get('/index',MainPage.mainPage)
routes.get('/produtos/:categoria',Categoria.showCategoria)
routes.get('/cart', Cart.cart)

module.exports = routes