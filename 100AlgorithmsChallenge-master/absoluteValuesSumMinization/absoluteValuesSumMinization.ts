function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0 ? true : false
  if (isEven) {
    const position = a.length / 2
    return a[position - 1]
  } else {
    const position = Math.floor(a.length / 2)
    return a[position]
  }
}

console.log(absoluteValuesSumMinimization([2, 4, 7]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]))
