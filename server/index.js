const express = require('express')
const app = express()
const { ChessGame } = require('../db/index')
const logic = require('./game/logic')

const port = 3001

app.get('/newGame', (req, res) => {
  ChessGame.create(logic.initNewGame(), (err, newGame) => {
    if (err) return res.status(500).send()
    res.status(200).send(newGame)
  })
})






app.listen(port, console.log('...listening on port:' + port))