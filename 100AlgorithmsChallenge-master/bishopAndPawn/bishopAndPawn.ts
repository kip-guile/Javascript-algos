function bishopAndPawn(bishop: string, pawn: string): boolean {
    let board = {}
    'abcdefgh'.split('').forEach((letter, i) => {
        board[letter] = i + 1
    })

    const bishopX = board[bishop[0]]
    const bishopY = parseInt(bishop[1])
    const pawnX = board[bishop[0]]
    const pawnY = parseInt(pawn[1])
    
    if (bishopX + bishopY === pawnY + pawnX || bishopX + bishopY === pawnX + bishopY) {
        console.log(bishopX + bishopY, pawnY + pawnX, 'or', bishopX + bishopY, pawnX + bishopY)
        return true
    }

    return false
}

console.log(bishopAndPawn('a1', 'c3'));