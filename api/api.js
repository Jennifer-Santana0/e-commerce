const getProdut = async (categoria) => {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log('Houve um erro ' + err )
    }
}

module.exports = getProdut