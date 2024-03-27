const express = require('express')
const path = require('path')
const routes = require('./routes/router')
const connectToDB = require('./DB/db')
connectToDB()
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))


app.use('/',routes)

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})