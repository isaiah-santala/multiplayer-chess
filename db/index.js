const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/chess', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
  
const chessSchema = new mongoose.Schema({
  gameId: Number,
  board: Array,
  turn: Number
})

exports.ChessGame = mongoose.model('Game', chessSchema)

