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

       await Cart.findOne({product_name:cartData.product_name}).then((product)=>{
            if(product){
                console.log('Esse produto ja foi adicionado no cart.')
            }else {
                console.log('Adicionando o produto ao cart.')
                Cart.create(cartData)
            }
       }) 

      
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

const cartEdit = async (req,res) => {
    const newValue =  parseFloat(req.params.newValue)
    const valueName =  req.params.newValue
    
    try{
        await Cart.updateOne({product_img:valueName},{product_quantity:newValue}).then(()=>{
            console.log('certp')
        }).catch((err)=>{
            console.log('dei errado')
        })
    }catch(err){
        console.log(err)
    }
    

}

module.exports = {
    cart,
    cartAdd,
    cartEdit
}

