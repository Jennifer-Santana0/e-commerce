const getProdut = require('../api/api')

const showCategoria = async (req,res) => {
    const nome_produto = req.body.produto
    const produtos = await getProdut(nome_produto)
  
    res.render('./produtos',{produtos})
}


module.exports = {
    showCategoria,
}

