const express = require('express')

const User = require('../models/User.js')

const router = express.Router()

router.post('/register', async(req, res)=>{
    const usuario = await User.create(req.body)
    return res.status(200).json({
        erro: false,
        message: `Usuario ${User.name} criado com sucesso!`,
        data: User
      })

})
module.exports = router
