const generators = require('./generators')

exports.initNewGame = () => ({
    gameId: 1,
    board: generators.newBoard(),
    turn: 1
})
