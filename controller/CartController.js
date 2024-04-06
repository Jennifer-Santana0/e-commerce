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
                Cart.create(cartData).then(()=>{
                    Cart.updateOne({product_name:cartData.product_name}, {product_normal_price:cartData.product_price}).then(()=>{
                        console.log('o preco normal ja foi adiconado')
                    }).catch((err)=>{
                        console.log('o preco nnormal nao foi adiconado')
                    })
                    
                }).catch((err)=>{
                    console.log('Houve algum erro ao cadastrar.')
                })
                
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







const cartEdit = async (req, res) => {
    const newQuantity = parseFloat(req.params.newQuantity);
    const valueName = req.params.valueName;

    try {
        const produto = await Cart.findOne({ product_name: valueName });
        

        const priceQuantity = newQuantity * produto.product_price;
        await Cart.updateOne(
            { product_name: valueName },
            { product_quantity: newQuantity}
        );

        // Retorna o novo preço total como resposta
        res.status(200).json({ newTotalPrice: priceQuantity });
    } catch (err) {
        console.log('Houve algum erro:', err);
        res.status(500).json({ error: 'Erro ao atualizar a quantidade do produto.' });
    }
};



module.exports = {
    cart,
    cartAdd,
    cartEdit
}

