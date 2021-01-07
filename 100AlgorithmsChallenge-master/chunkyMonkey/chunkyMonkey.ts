function chunkyMonkey(arr: any[], size: number): any[][] {
  let base = []
  for (let i = 0; i < arr.length; i++) {
    let newArr = []
    for (let j = 0; j < size; j++) {
      if (arr.length < 1) {
        continue
      }
      let popped = arr.shift()
      newArr.push(popped)
    }
    base.push(newArr)
  }
  return base
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2))
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4))
