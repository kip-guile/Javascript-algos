function chessBoardCellColor(cell1: string, cell2: string): boolean {
  let board = {}
  'ABCDEFGH'.split('').forEach((letter, i) => {
    if (i % 2 !== 0) {
      board[letter] = true
    } else {
      board[letter] = false
    }
  })
  let cell1position = parseInt(cell1[1])
  let cell2position = parseInt(cell2[1])
  let cell1color = cell1position % 2 !== 0 ? board[cell1[0]] : !board[cell1[0]]
  let cell2color = cell2position % 2 !== 0 ? board[cell2[0]] : !board[cell2[0]]
  console.log(cell1position, cell2position)
  if (cell1color === cell2color) {
    return true
  } else {
    return false
  }
}

console.log(chessBoardCellColor('A1', 'C3'))
console.log(chessBoardCellColor('A1', 'H3'))
