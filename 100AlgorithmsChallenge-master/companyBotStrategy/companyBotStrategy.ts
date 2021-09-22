function companyBotStrategy(trainingData: number[][]): number {
    let time = 0
    let correctness = 0
 for (let i = 0; i < trainingData.length; i++) {
    if (trainingData[i][1] === 1) {
        time += trainingData[i][0]
        correctness += trainingData[i][1]
    }
 }
 const res = time/correctness
 if (!res) return 0
 return res
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
