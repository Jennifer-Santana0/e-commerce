const mainPage = (req,res) => {
    let validacao_user = false
    let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
    res.render('index', {type_list,validacao_user})
}

module.exports ={
    mainPage,
}