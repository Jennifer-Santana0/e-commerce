const express = require('express')
const routes = express.Router()
const MainPage = require('../controller/MainPageController')
const Categoria = require('../controller/ProdutosControler')

routes.get('/',MainPage.mainPage)
routes.post('/produtos',Categoria.showCategoria)


module.exports = routes