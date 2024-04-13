const getCategoriesProducts = async (categoria) => {
    let list = []
    let list_nome = []
    let list_price = []
    let list_img = []
    try{
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)
        const data = await response.json()
        for (let index = 0; index < data.length; index++) {
            list_nome.push(data[index].title)
            list_price.push(data[index].price)
            list_img.push(data[index].image)
       
        }

        list.push(list_nome)
        list.push(list_price)
        list.push(list_img)

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