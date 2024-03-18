const getProdut = require('../api/api')

const showCategoria = async (req,res) => {
    getProdut()
    res.render('./produtos')
}


module.exports = {
    showCategoria,
}

