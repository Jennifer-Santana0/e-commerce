const Cart = require('../models/Cart')

const cartAdd = async (req,res) => {
    try {
        await Cart.create(req.params);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao adicionar produto ao carrinho');
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