const mongoose = require('mongoose')

require('dotenv').config()

const DB_USER = process.env.USER
const DB_PASSWORD = process.env.PASSWORD

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicampinho.1yipwgr.mongodb.net/?retryWrites=true&w=majority`,
  {},
  error => {
    if (error) {
      console.log('falha ao autenticar com  mongodb')
      console.log(error)
      return
    }
    console.log('Conectamos ao mongoDb')
  }
)

mongoose.Promise = global.Promise

module.exports = mongoose
