function bishopAndPawn(bishop: string, pawn: string): boolean {
    let alphaWeights = {}
    let bishopArr = bishop.split('')
    let pawnArr = pawn.split('')
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter, i) => {
        alphaWeights[letter] = i + 1
    })
    console.log(alphaWeights[pawnArr[0]], parseInt(pawnArr[1]))
    if (alphaWeights[pawnArr[0]] === parseInt(pawnArr[1])) {
        return true
    }
    return false
}

console.log(bishopAndPawn('a1', 'c3'));