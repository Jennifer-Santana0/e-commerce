const add_cart = document.querySelectorAll('.addToCartButton')


const add_cart_f = (data) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST','/index/cart/'+data.product_id+'/'+data.product_name+'/'+data.product_price+'/'+data.product_img1+'/'+data.product_img2+'/'+data.product_img3+'/'+data.product_img4)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.onload = () => {
        if(xhr.status === 200){
            console.log('Produto adicionado ao carrinho com sucesso');
        } else {
            console.error('Erro ao adicionar produto ao carrinho:', xhr.statusText);
        }
    }
    xhr.onerror = () => {
        console.error('Erro ao adicionar produto ao carrinhohhhhh:', xhr.statusText);
    }
    xhr.send()
}

add_cart.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        event.preventDefault()
        
        let form = el.closest('form')
        let rota = form.getAttribute('action')
        let segments = rota.split('/')


        let product_name = segments[4].split(' ')
        product_name = product_name[0] + ' ' +product_name[1] + ' ' + product_name[2]
        
        let product_price = segments[5]

        let product_img1 = segments[6]
        let product_img2 = segments[8]
        let product_img3 = segments[9]
        let product_img4 = segments[10]

        let product_id = segments[3]

      
        let data = {
            product_name:product_name,
            product_price: product_price,
            product_id: product_id,
            product_img1: product_img1,
            product_img2: product_img2,
            product_img3: product_img3,
            product_img4: product_img4,
        }

        let rotaExtra = '/index/cart/'+data.product_id+'/SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s/109/https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
        
        if(rota==rotaExtra){
            let data_extra = {
                product_name:product_name,
                product_price: '109',
                product_id: product_id,
                product_img1: 'https:',
                product_img2: 'fakestoreapi.com',
                product_img3: 'img',
                product_img4: '61U7T1koQqL._AC_SX679_.jpg',
            }
            add_cart_f(data_extra)
        }else {
            add_cart_f(data)
        }        
        
    })
})

