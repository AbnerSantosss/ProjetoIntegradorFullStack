const express = require('express')
const { default: mongoose } = require('mongoose')
const authcontroller = require('./controller/AuthController')
const app = express()

app.use(express.json())
app.use('/auth', authcontroller)

app.listen(3001, () => {
  console.log('Servidor express Iniciado!')
})
