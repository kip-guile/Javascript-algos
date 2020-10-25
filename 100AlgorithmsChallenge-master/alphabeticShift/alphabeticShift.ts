function alphabeticShift(inputString: string): string {
    let mainStr = 'abcdefghijklmnopqrstuvwxyz'
    let afterStr = 'bcdefghijklmnopqrstuvwxyza'
    const cache = {}
    let newStr = ''
    mainStr.split('').forEach((letter, i) => {
        cache[letter] = afterStr[i]
    })
    for (let i = 0; i < inputString.length; i++) {
        newStr = newStr.concat(cache[inputString[i]])
    }
    return newStr
}

console.log(alphabeticShift('crazy'));