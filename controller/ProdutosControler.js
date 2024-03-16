const showCategoria = (req,res) => {
    const n = req.body.produto
    res.render('./components/produtos',{n})
}


module.exports = {
    showCategoria,
}