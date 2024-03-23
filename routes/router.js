const express = require('express')
const routes = express.Router()
const MainPage = require('../controller/MainPageController')
const Categoria = require('../controller/ProdutosControler')
const Cart = require('../controller/CartController')

routes.get('/',MainPage.mainPage)
routes.get('/produtos/:categoria',Categoria.showCategoria)
routes.get('/produtos/cart/:produto', Cart.cart)

module.exports = routes