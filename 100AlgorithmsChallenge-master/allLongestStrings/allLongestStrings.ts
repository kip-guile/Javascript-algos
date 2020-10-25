function allLongestStrings(inputArray: string[]): string[] {
  let resArr = []
  inputArray.forEach((str) => {
    const strCount = str.length
    if (resArr.length === 0) {
      resArr.push(str)
    } else if (strCount > resArr[0].length) {
      resArr = []
      resArr.push(str)
    } else if (strCount === resArr[0].length) {
      resArr.push(str)
    }
  })
  return resArr
}

console.log(
  allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba', 'parrot', 'p', 'oyttre'])
)
