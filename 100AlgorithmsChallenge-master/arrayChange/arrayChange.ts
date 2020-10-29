function arrayChange(inputArray: number[]): number {
    let res = 0
    inputArray.forEach((num, i) => {
        if (num >= inputArray[i+1]) {
            let difference = (num + 1) - inputArray[i + 1]
            res += difference
            inputArray[i+1] = inputArray[i+1] + difference
        }
    })
    return res
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 4, 2]));
console.log(arrayChange([1, 0, 5, 4, 2, 0, 1, 7]));