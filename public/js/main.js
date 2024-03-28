const add_cart = document.querySelectorAll('.cards a')

add_cart.forEach((el)=>{
    el.addEventListener('click',()=>{
        console.log(el)
    })
})