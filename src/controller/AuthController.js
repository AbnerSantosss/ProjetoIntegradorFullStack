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



router.get('/usuario', async (req, res) => {
  console.log(res.json)
  try {
    const user = await User.find()

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error })
  }
})


router.get('/usuario/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({ _id: id })
    if (!user) {
      res.status(422).json({ message: 'Usuario não foi encontrado' })
      return
    }

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
module.exports = router