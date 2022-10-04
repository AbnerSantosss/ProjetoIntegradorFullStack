const mongoose = require('mongoose')

mongoose.connect(
  `mongodb+srv://API-Campinho:campinho10@apicampinho.1yipwgr.mongodb.net/?retryWrites=true&w=majority`,
  {},
  error => {
    if (error) {
      console.log('falha ao autenticar co o mongodb')
      console.log(error)
      return
    }
    console.log('Conectamos ao mongoDb')
  }
)

mongoose.Promise = global.Promise

module.exports = mongoose
