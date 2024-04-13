const getCategoriesProducts = async (categoria) => {
    let list = []
    let list_nome = []
    let list_price = []
    let list_img = []
    let list_rate = []
    try{
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)
        const data = await response.json()
        for (let index = 0; index < data.length; index++) {
            list_nome.push(data[index].title)
            list_price.push(data[index].price)
            list_img.push(data[index].image)
            list_rate.push(data[index].rating.rate)
        }

        list.push(list_nome)
        list.push(list_price)
        list.push(list_img)
        list.push(list_rate)

        return list
        
    }catch(err){
        console.log('Houve um erro ' + err )
    }
}

const getAllProducts = async () => {
    let listProducts = []
    try{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()
        
        for (let index = 0; index < data.length; index++) {
            listProducts.push(data[index])
        }

        return listProducts

    }catch(err){
        console.log('Houve um erro ' + err )
    }
}



module.exports = {
    getCategoriesProducts,
    getAllProducts
}