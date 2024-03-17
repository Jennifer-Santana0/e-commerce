const axios = require('axios');

// console.log(response.data.data)
        //   console.log(response.data.data[`${index}`].offer.price)//valor
        //   console.log(response.data.data[`${index}`].product_photos[0])//img

const getProdut = async (nome) => {
    let lista_produtos = [
       
    ]
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
            lista_produtos.push(response.data.data[`${index}`].product_title)
        }
        console.log(lista_produtos)
        return lista_produtos
    } catch (error) {
        console.error(error);
    }
}

module.exports = getProdut