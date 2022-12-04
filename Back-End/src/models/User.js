const mongoose = require('../database')

const UseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  habilidade: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true, //Aqui estou dizendo que esse campo é obrigatório
    unique: true, //aqui estou dizendo que esse email tem que ser unico no meu banco/coleção ele é um dado que não pode se repetir
    lowercase: true // mesmo se o usuario digitar alguma letra maiuscula eu estou convertendo tudo para minuscula
  },
  linkedin: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false //aqui estou dizendo que quando eu fizer uma consulta no mongdb, não quero que mostre o password!
  },
  createdAt: {
    //Aqui é para armazenar quando registro foi criado
    type: Date, //tipo data
    default: Date.now // Equi estou dizendo que a data atual sempre vai ser a data padrão, meio que estou fazendo isso de forma automática
  }
})

const User = mongoose.model('User', UseSchema) //aqui é uma model baseado nas validações, no primeiro parametro é o nome da model e o segundo é os parametros(regras que ele vai seguir)

module.exports = User
