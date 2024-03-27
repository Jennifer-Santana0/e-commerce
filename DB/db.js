const mongodb = require('mongoose')

const connectToDB = () => {
    mongodb.connect('mongodb+srv://root:myadmin@cluster0.me5uo0x.mongodb.net/')
    .then(()=>{
        console.log('Banco de Dados conectado.')
    }).catch((err)=>{
        console.log('Erro ao se conectar com o banco de dados.'+err)
    })
}

module.exports = connectToDB