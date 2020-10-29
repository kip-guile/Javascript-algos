function arrayConversion(inputArray: number[]): number {
    let first = []
    let second = []
    let res = 0
    for (let i = 0; i < inputArray.length - 1; i+=2) {
        first.push(inputArray[i] + inputArray[i+1])
    }
     for (let i = 0; i < first.length - 1; i+=2) {
        second.push(first[i] * first[i+1])
    }
     for (let i = 0; i < second.length; i++) {
        res += second[i]
    }
    console.log(first, second)
    return res
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
