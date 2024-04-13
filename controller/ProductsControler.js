const api = require('../api/api')


const showCategory = async (req,res) => {
    let categoria = req.params.categoria
    let validacao_user = true
    let id_user = req.params.id_user

    if(categoria == 'electronics'){
        const produtos = await api.getCategoriesProducts(req.params.categoria)
        res.render('./products', {validacao_user,produtos,id_user})
    }else if (categoria == 'jewelery'){
        const produtos = await api.getCategoriesProducts(req.params.categoria)
        res.render('./products', {validacao_user,produtos,id_user})
    }else if (categoria == "men's clothing"){
        const produtos = await api.getCategoriesProducts(req.params.categoria)
        res.render('./products', {validacao_user,produtos,id_user})
    }else if (categoria == "women's clothing"){
        const produtos = await api.getCategoriesProducts(req.params.categoria)
        res.render('./products', {validacao_user,produtos,id_user})
    } else {
        validacao_user = false
        let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
        res.render('index', {type_list,validacao_user,id_user})
    }
    
}


module.exports = {
    showCategory,
}

