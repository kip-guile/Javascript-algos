function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0
    for (let i = 0; i < inputArray.length - 1; i++) {
       let difference =  inputArray[i] - inputArray[i + 1]
       if (difference > max) max = difference
    }
    return max
}

console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));