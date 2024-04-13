const User = require('../models/User')
const api = require('../api/api')

const singup = (req,res) => {
    res.render('singup')
}

const checkSingup = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            req.flash('error_msg', 'This email is already registered!');
            res.redirect('/singup');
        } else {
            await User.create(req.body);
            const newUser = await User.findOne({ email: req.body.email });
            const id_user = newUser._id;
            res.render('index', { type_list, validacao_user: false, id_user, error_msg: false });
        }
    } catch (error) {
        console.error('Erro durante o cadastro:', error);
        req.flash('error_msg', 'Error during registration. Please try again!');
        res.redirect('/singup');
    }
};

const login = (req,res) => {
    res.render('login')
}

const checkLogin = async (req,res) => {
    await User.findOne({email:req.body.email}).then( async (user)=>{
        if(user && user.password == req.body.password){
            let validacao_user = false
            let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
            let id_user = user._id
            const products = await api.getAllProducts()
            res.render('index', {type_list,validacao_user,id_user,products})
        }else {
            req.flash('error_msg', 'This email is not registered or incorrect password!');
            res.redirect('/')
        }
    }).catch((err)=>{
        console.log('Houve algum erro.')
        res.render('login')
    })
}

module.exports = {
    singup,
    login,
    checkSingup,
    checkLogin
}