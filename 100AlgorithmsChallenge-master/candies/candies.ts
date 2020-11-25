function candies(n: number, m: number): number {
    return Math.floor(m/n) * n
}

console.log(candies(4, 14));