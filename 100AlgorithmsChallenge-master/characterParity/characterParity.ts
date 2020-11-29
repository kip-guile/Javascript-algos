function characterParity(symbol: string): string {
    let token = parseInt(symbol)
   if (!token) {
        return 'not a digit'
   } else {
        if (token % 2 === 0) {
            return 'even'
        } else {
            return 'odd'
        }
   }
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
