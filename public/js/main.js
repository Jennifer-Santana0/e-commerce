const add_cart = document.querySelectorAll('.addToCartButton')

add_cart.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        event.preventDefault()
        
        let form = el.closest('form')
        let rota = form.getAttribute('action')
        let segments = rota.split('/')

        let product_name = segments[3]
        let product_price = segments[4]
        let product_id = segments[2]

        let data = {
            product_name: product_name,
            product_price: product_price,
            product_id: product_id
        }

        let xhr = new XMLHttpRequest()
        xhr.open('POST',rota)
        xhr.setRequestHeader('Content-type', 'application/json')

        xhr.onload = () => {
            if(xhr.status === 200){
                console.log('Produto adicionado ao carrinho com sucesso');
            } else {
                console.error('Erro ao adicionar produto ao carrinho:', xhr.statusText);
            }
        }

        xhr.onerror = () => {
            console.error('Erro ao adicionar produto ao carrinho:', xhr.statusText);
        }
        xhr.send(JSON.stringify(data))
    })
})