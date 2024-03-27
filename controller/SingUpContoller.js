const User = require('../models/User')

const singup = (req,res) => {
    res.render('singup')
}

const checkSingup = (req,res) =>{
    User.findOne({email:req.body.email}).then( async (user)=>{
        if(user){
            console.log('Este email já esta registrado!')
            res.render('singup')
        } else {
            let validacao_user = false
            let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
            await User.create(req.body)
            res.render('index', {type_list,validacao_user})
        }
    })
}

const login = (req,res) => {
    res.render('login')
}

module.exports = {
    singup,
    login,
    checkSingup,
}