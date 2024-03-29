const Cart = require('../models/Cart')

const cartAdd = async (req,res) => {
   try{
       let product_img = req.params.product_img1+'//'+req.params.product_img2+'/'+req.params.product_img3+'/'+req.params.product_img4
       let cartData = {
            product_name: req.params.product_name,
            product_price: req.params.product_price,
            product_img: product_img,
            product_id: req.params.product_id
       }
       console.log('cadastrou')
       Cart.create(cartData)
   }catch(err){
        console.log('Houve um erro.')
   }
}

const cart = async (req,res) => {
    let validacao_user = true
    let id_user = req.params.id_user
    try{
        await Cart.find({product_id:req.params.id_user}).then((produto)=>{
            produto.reverse()
            res.render('cart', {validacao_user,id_user,produto})
        }).catch((err)=>{
            console.log('Houve algum erro!')
        })
    }catch(err){
        console.log('Houve algum erro!')
    }
    
}

module.exports = {
    cart,
    cartAdd
}

