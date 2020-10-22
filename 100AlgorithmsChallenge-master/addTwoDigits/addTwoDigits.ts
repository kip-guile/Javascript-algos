function addTwoDigits(n: any): number {
  let arr = n.toString().split('')
  return arr.reduce((acc, next) => {
    return parseInt(acc) + parseInt(next)
  })
}

console.log(addTwoDigits(59))
