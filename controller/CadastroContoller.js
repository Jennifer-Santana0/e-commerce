const cadastro = (req,res) => {
    res.render('cadastro')
}

const login = (req,res) => {
    res.render('login')
}

module.exports = {
    cadastro,
    login
}