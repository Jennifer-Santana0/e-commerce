const api = require('../api/api')

const mainPage = async (req,res) => {
    let validacao_user = false
    let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
    let id_user = req.params.id_user
    const products = await api.getAllProducts()
    res.render('index', {type_list,validacao_user,id_user,products})
}



module.exports ={
    mainPage,
}