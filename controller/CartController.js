const cart = (req,res) => {
    let validacao_user = true
    let id_user = req.params.id_user
    res.render('cart', {validacao_user,id_user})
}

module.exports = {
    cart
}