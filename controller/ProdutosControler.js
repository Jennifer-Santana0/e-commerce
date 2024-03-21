const getProdut = require('../api/api')

const showCategoria = async (req,res) => {
    let categoria = req.params.categoria

    if(categoria == 'electronics'){
        await getProdut(req.params.categoria)
        res.render('./produtos')
    }else if (categoria == 'jewelery'){
        await getProdut(req.params.categoria)
        res.render('./produtos')
    }else if (categoria == "men's clothing"){
        await getProdut(req.params.categoria)
        res.render('./produtos')
    }else if (categoria == "women's clothing"){
        await getProdut(req.params.categoria)
        res.render('./produtos')
    } else {
        let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
        res.render('index', {type_list})
    }
    
}


module.exports = {
    showCategoria,
}

