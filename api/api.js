const axios = require('axios');

// console.log(response.data.data)
        //   console.log(response.data.data[`${index}`].offer.price)//valor
        //   console.log(response.data.data[`${index}`].product_photos[0])//img

const getProdut = async (nome) => {
    let nome_produto = []
    let img_produto = []
    let valor_produto = []
    let lista_produto = []
    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search',
        params: {
          q: nome,
          country: 'us',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '137ae7c2b7msh2678ad8c22f1f57p1bed9ejsn399291c62665',
          'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        for (let index = 0; index < response.data.data.length; index++) {
            nome_produto.push(response.data.data[`${index}`].product_title)
            img_produto.push(response.data.data[`${index}`].product_photos[0])
            valor_produto.push(response.data.data[`${index}`].offer.price)
        }
        lista_produto.push(nome_produto)
        lista_produto.push(img_produto)
        lista_produto.push(valor_produto)

        lista_produto.push(nome_produto,img_produto,valor_produto)

        return lista_produto
    } catch (error) {
        console.error(error);
    }
}

module.exports = getProdut