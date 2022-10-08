const express = require('express')

const User = require('../models/User.js')

const router = express.Router()

//Criar usuário
router.post('/register', async (req, res) => {
  const usuario = await User.create(req.body)
  return res.status(200).json({
    erro: false,
    message: `Usuario ${usuario.name} criado com sucesso!`,
    data: User
  })
})

//Ler usuários
router.get('/usuario', async (req, res) => {
  console.log(res.json)
  try {
    const user = await User.find()

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error })
  }
})

//Ler usuário especifico
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

//Atualização

router.patch('/usuario/:id', async (req, res) => {
  const id = req.params.id

  try {
    const updatePerson = await User.updateOne({ _id: id }, req.body)

    if (updatePerson.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não foi encontrado' })
      console.log('não pegou')
      return
    }

    res
      .status(200)
      .json({ mesage: `Usuario ${updatePerson.name} atualizado com sucesso` })
    console.log('deu tudo certo')
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar dados' })
    console.log(error)
  }
})

//deletar usuário
router.delete('/usuario/:id', async (req, res) => {
  const id = req.params.id
  const person = await User.findOne({ _id: id })
  if (!person) {
    res.status(422).json({ message: 'Usuário não encontrado' })
    return
  }
  try {
    await User.deleteOne({ _id: id })
    res
      .status(200)
      .json({ message: `Usuário ${person.name} removido com sucesso` })
  } catch (error) {
    res.status(500).json({ error: error })
    console.log(error)
  }
})

module.exports = router
