const express = require('express')
const routes = express.Router()
const MainPage = require('../controller/MainPage')

routes.get('/',MainPage.mainPage)


module.exports = routes