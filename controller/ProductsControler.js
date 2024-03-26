const getProdut = require('../api/api')


const showCategory = async (req,res) => {
    let categoria = req.params.categoria
    let validacao_user = true

    if(categoria == 'electronics'){
        const produtos = await getProdut(req.params.categoria)
        res.render('./products', {validacao_user,produtos})
    }else if (categoria == 'jewelery'){
        const produtos = await getProdut(req.params.categoria)
        res.render('./products', {validacao_user,produtos})
    }else if (categoria == "men's clothing"){
        const produtos = await getProdut(req.params.categoria)
        res.render('./products', {validacao_user,produtos})
    }else if (categoria == "women's clothing"){
        const produtos = await getProdut(req.params.categoria)
        res.render('./products', {validacao_user,produtos})
    } else {
        validacao_user = false
        let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
        res.render('index', {type_list,validacao_user})
    }
    
}


module.exports = {
    showCategory,
}

