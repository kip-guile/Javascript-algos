function avoidObstacles(inputArray: number[]): number {
    let sorted = inputArray.sort((a, b) => a - b)
    let touches = 1
    let prev = sorted[0]
    sorted.forEach(num => {
        if (num - prev > 1) {
            touches += 1
        }
        prev = num
    })
    touches += 1
    return touches
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([4, 2, 7, 6, 10, 9]));