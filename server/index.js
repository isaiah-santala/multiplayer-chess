const express = require('express')
const app = express()
const { ChessGame } = require('../db/index')
const logic = require('./game/logic')

const { promisify } = require('util')
const createNewGamePromisified = promisify(ChessGame.create.bind(ChessGame))

const port = 3001

app.get('/newGame', (req, res) => {
  createNewGamePromisified(logic.initNewGame())
    .then(newGame => res.status(200).send(newGame))
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
})

app.get('/game/piece/moves/:id', (req, res) => {
  
})

app.listen(port, console.log('...listening on port:' + port))