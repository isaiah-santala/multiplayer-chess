
exports.newBoard = () => {
  const newBoard = []
  const row = []

  for (let length = 0; length < 8; length++) {
    row.push(0)
  }
  for (let height = 0; height < 8; height++) {
    newBoard.push(row)
  }

  return newBoard
}
