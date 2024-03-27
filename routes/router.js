const express = require('express')
const routes = express.Router()
const SingUpConroller = require('../controller/SingUpContoller')
const MainPageConroller = require('../controller/MainPageController')
const CategoryConroller = require('../controller/ProductsControler')
const CartConroller = require('../controller/CartController')

routes.get('/',SingUpConroller.login)
routes.get('/singup',SingUpConroller.singup)

routes.post('/check/singup',SingUpConroller.checkSingup)
routes.post('/check/login',SingUpConroller.checkLogin)

routes.get('/index',MainPageConroller.mainPage)
routes.get('/index/products/:categoria',CategoryConroller.showCategory)
routes.get('/index/cart', CartConroller.cart)

module.exports = routes