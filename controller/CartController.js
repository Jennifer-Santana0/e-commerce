const Cart = require('../models/Cart')

const cartAdd = async (req,res) => {
   try{
        Cart.create(req.params)
        console.log('cadastrou')
   }catch(err){
        console.log('Houve um erro.')
   }
}

const cart = (req,res) => {
    let validacao_user = true
    let id_user = req.params.id_user
    res.render('cart', {validacao_user,id_user})
}

module.exports = {
    cart,
    cartAdd
}