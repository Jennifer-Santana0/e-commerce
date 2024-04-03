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

routes.post('/index/:id_user',MainPageConroller.mainPage)

routes.get('/index/:id_user/products/:categoria',CategoryConroller.showCategory)

routes.post('/index/cart/:product_id/:product_name/:product_price/:product_img1/:product_img2/:product_img3/:product_img4', CartConroller.cartAdd)
routes.post('/index/:id_user/cart', CartConroller.cart)
routes.post('/index/cartedit/:newValue/:valueName',CartConroller.cartEdit)





module.exports = routes