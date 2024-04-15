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

        el.style.zIndex = -1

        setTimeout(()=>{
            el.style.zIndex = 1
        },2000)
        
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


let total = 0

const price_total = document.querySelectorAll('.price_total')
price_total.forEach((el)=>{
    let valores = parseFloat(el.innerHTML.replace('$', ''))
    total = total + valores
})

const sub_total = document.querySelectorAll('.sub_total')
sub_total.forEach((el)=>{
    el.innerHTML = '$' + total.toFixed(2)
})


const quantity = document.querySelectorAll('.quantity')

quantity.forEach((el) => {
    el.addEventListener('input', function () {
        const valueName = el.parentNode.parentNode.querySelector('.content p').innerHTML
        let newQuantity = parseFloat(this.value);

        
        if (isNaN(newQuantity)){
            newQuantity = 1
        }

       
        let xhr = new XMLHttpRequest()
        xhr.open('POST','/index/cartedit/'+newQuantity+'/'+valueName)
    
        xhr.setRequestHeader('Content-type', 'application/json')
    

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const newTotalPrice = response.newTotalPrice;
        
                
                const precoTotalElement = el.parentNode.parentNode.querySelector('.price_total');
                precoTotalElement.textContent = '$' + newTotalPrice.toFixed(2);


                let total = 0

                const price_total = document.querySelectorAll('.price_total')
                price_total.forEach((el)=>{
                    let valores = parseFloat(el.innerHTML.replace('$', ''))
                    total = total + valores
                })

                const sub_total = document.querySelectorAll('.sub_total')
                sub_total.forEach((el)=>{
                    el.innerHTML = '$' + total.toFixed(2)
                })
                                

            } else {
                console.error('Erro:', xhr.statusText);
            }
        };

        xhr.send()

    });
});


const campos = document.querySelectorAll('.input')
const spans_error = document.querySelectorAll('.span-error')
const form = document.querySelectorAll('.form')
const btn_submit = document.querySelectorAll('.form button[type="submit"]')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/



const setError = (index) =>{
    spans_error[index].style.display = 'block'
}

const removeError = (index) =>{
    spans_error[index].style.display = 'none'
}


campos.forEach((el,index)=>{
    el.addEventListener('input',()=>{

        if(el.classList.contains('name')){
            if(el.value.length < 3){
                setError(index)
            }else {
                removeError(index)
            }
        }


        if(el.classList.contains('email')){
            if(emailRegex.test(el.value)){
                removeError(index)
            }else {
                setError(index)
            }
        }


        if(el.classList.contains('password')){
            if(el.value.length>=8){
                removeError(index)
            }else {
                setError(index)
            }
        }

    })
})


btn_submit.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        
        spans_error.forEach((el)=>{
            if (el.style.display == 'block'){
                console.log('ha algum erro')
                event.preventDefault()
            }
        })

    })
})




const cards = document.querySelectorAll('.cards')
const id_card = document.querySelector('#input_id').value


cards.forEach((el)=>{
    el.addEventListener('click',()=>{

        let xhr = new XMLHttpRequest()
        xhr.open('GET','/index/about_product/' + id_card)
        xhr.setRequestHeader('Content-type', 'application/json')

        xhr.onload = () => {
            if (xhr.status === 200) {
                window.location.href = '/index/about_product/' + id_card 
            } else {
                console.log('Houve algum erro na requisição.');
            }
        }

        xhr.send()
    })
})

// console.log(el.childNodes[1].childNodes[1].currentSrc) img
// console.log(el.childNodes[0].parentNode.childNodes[5].childNodes[1].innerHTML) nome
// console.log(el.childNodes[0].parentNode.childNodes[5].childNodes[3].innerHTML) preço
