const mainPage = (req,res) => {
    // [ 'electronics', 'jewelery', "men's clothing", "women's clothing" ] categoria
    let type_list = ['electronics','jewelery','mens clothing','womens clothing']
    res.render('index', {type_list})
}

module.exports ={
    mainPage,
}