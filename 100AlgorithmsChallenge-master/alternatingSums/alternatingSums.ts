function alternatingSums(a: number[]): number[] {
    let arr = []
    let team1sum = 0
    let team2sum = 0
    a.forEach((number, i) => {
        if (i % 2 === 0) {
            team1sum += number
        } else {
            team2sum += number
        }
    })
    arr.push(team1sum)
    arr.push(team2sum)
    return arr
}

console.log(alternatingSums([50, 60, 60, 45, 70]))