const express = require('express')
const authcontroller = require('./controller/AuthController')

const cors = require('cors')
app.use(cors())

const app = express()

require('dotenv').config()

app.use(express.json())

app.use('/auth', authcontroller)

app.listen(3005, () => {
  console.log('Servidor express Iniciado!')
})
