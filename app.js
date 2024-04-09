const express = require('express')
const path = require('path')
const routes = require('./routes/router')
const connectToDB = require('./DB/db')
const session = require('express-session')
const flash = require('connect-flash')
connectToDB()
const app = express()

app.use(session({
    secret: 'e-commerce',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        next()
})

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))


app.use('/',routes)

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})