function adjacentElementsProduct(inputArray: number[]): number {
  let res = 0
  for (let i = 0; i < inputArray.length; i++) {
    const check = inputArray[i] * inputArray[i + 1]
    if (check > res) {
      res = check
    }
  }
  return res
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
