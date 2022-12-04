const express = require('express')
const authcontroller = require('./controller/AuthController')

const cors = require('cors')

const app = express()

require('dotenv').config()

app.use(express.json())

app.use(cors())

app.use('/auth', authcontroller)

app.listen(3005, () => {
  console.log('Servidor express Iniciado!')
})
