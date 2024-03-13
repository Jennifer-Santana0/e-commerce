const express = require('express')
const routes = require('./routes/router')
const app = express()

app.set('view engine')

app.use('/',routes)

app.listen(3000,()=>{
    console.log('http://localhost/3000')
})