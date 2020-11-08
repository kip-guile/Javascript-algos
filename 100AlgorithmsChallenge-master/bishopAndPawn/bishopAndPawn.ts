function bishopAndPawn(bishop: string, pawn: string): boolean {
    let field = {}
    'abcdefgh'.split('').forEach((letter, i) => {
        field[letter] = i + 1
    })

    const bishopX = field[bishop[0]]
    const bishopY = parseInt(bishop[1])
    const pawnX = field[bishop[0]]
    const pawnY = parseInt(pawn[1]);
    
    let res = (bishopX + bishopY === pawnY + pawnX || bishopX + bishopY === pawnX + bishopY) ? true : false

    return res
}

console.log(bishopAndPawn('a1', 'c3'));