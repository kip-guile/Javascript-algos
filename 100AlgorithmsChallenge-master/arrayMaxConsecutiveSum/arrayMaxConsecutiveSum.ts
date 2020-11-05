function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let res = 0
    for (let i = 0; i < inputArray.length - k+1; i++) {
        let sum = 0
        for (let j = i; j < i+k; j++) {
            sum += inputArray[j]
        } 
        if (sum > res) res = sum
    }
    return res
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));