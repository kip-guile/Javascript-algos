function almostIncreasingSequence(sequence: number[]): boolean {
    let res
    for (let i = 0; i < sequence.length; i++) {
        if (res === true) return res
        let token = sequence[i]
        sequence.splice(i, 1)
        for (let j = 0; j < sequence.length - 1; j++) {
            if (sequence[j] > sequence[j+1]) {
                res = false
                break
            } else {
                res = true
            }
        }
        sequence.splice(i, 0, token)
    }
    return res
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([5, 6, 3, 4, 5])) 
console.log(almostIncreasingSequence([1, 2, 3, 9, 8])) 