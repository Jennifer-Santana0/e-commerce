const mainPage = (req,res) => {
    let type_list = ['electronics','jewelery',"men's clothing","women's clothing"]
    res.render('index', {type_list})
}

module.exports ={
    mainPage,
}