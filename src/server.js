const express = require('express')
const { default: mongoose } = require('mongoose')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    message: 'olá mundo'
  })
})

mongoose
  .connect(
    `mongodb+srv://API-Campinho:campinho10@apicampinho.1yipwgr.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(
    app.listen(3001, () => {
      console.log('Pegou!')
      console.log('conectamos ao mongodb')
    })
  )
  .catch(error => {
    console.log('não foi possivel conectar ao mongdb')
    console.log(error)
  })
