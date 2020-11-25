function boxBlur(image: number[][]): number[][] {
    let sum = 0
    let count = 0
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            sum += image[i][j]
            count += 1
        }
    }
    return [[Math.floor(sum/count)]]
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));