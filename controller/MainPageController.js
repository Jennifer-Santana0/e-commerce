const mainPage = (req,res) => {
    let validacao_user = false
    let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
    let id_user = req.params.id_user
    res.render('index', {type_list,validacao_user,id_user})
}

module.exports ={
    mainPage,
}