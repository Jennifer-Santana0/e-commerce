const singup = (req,res) => {
    res.render('singup')
}

const login = (req,res) => {
    res.render('login')
}

module.exports = {
    singup,
    login
}