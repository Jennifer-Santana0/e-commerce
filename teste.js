let l_nome = ['nome1','nome2','nome3','nome4'];
let l_valor = ['valor1','valor2','valor3']
let l_img = ['img1','img2','img3']

const f = () => {
    let l_total = []
    l_total.push(l_nome,l_valor,l_img)
    return l_total
}

const produtos = f()
console.log(produtos)

// for (let index = 0; index < produtos[0].length; index++) {
//     console.log(produtos[0][index])
//     console.log(produtos[1][index])
//     console.log(produtos[2][index])
    
// }









// console.log(produtos)
// console.log('-----------------------')
// for (let index = 0; index < produtos[0].length; index++) {
//     console.log(produtos[0][index])
//     console.log(produtos[1][index])
//     console.log(produtos[2][index])
// }
// console.log('-----------------------')
// console.log(produtos[0][0])