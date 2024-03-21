const getProdut = require('../api/api')


const showCategoria = async (req,res) => {
    let categoria = req.params.categoria
    let validacao_user = true

    if(categoria == 'electronics'){
        await getProdut(req.params.categoria)
        res.render('./produtos', {validacao_user})
    }else if (categoria == 'jewelery'){
        await getProdut(req.params.categoria)
        res.render('./produtos', {validacao_user})
    }else if (categoria == "men's clothing"){
        await getProdut(req.params.categoria)
        res.render('./produtos', {validacao_user})
    }else if (categoria == "women's clothing"){
        await getProdut(req.params.categoria)
        res.render('./produtos', {validacao_user})
    } else {
        validacao_user = false
        let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
        res.render('index', {type_list,validacao_user})
    }
    
}


module.exports = {
    showCategoria,
}

