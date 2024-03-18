const getProdut = async () => {
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log('Houve um erro ' + err )
    }
}

module.exports = getProdut