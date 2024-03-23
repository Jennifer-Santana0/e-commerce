const cart = (req,res) => {
    let validacao_user = true
    res.render('cart', {validacao_user})
}

module.exports = {
    cart
}