function validTime(time: string): boolean {
  let h = ''
  let m = ''
  let count = 0
  let arr = time.split('')
  for (let i = 0; i < arr.length; i++) {
    if ((typeof parseInt(arr[i]) === 'number' && parseInt(arr[i]) % 1) === 0) {
      if (count < 2) {
        h = h + arr[i]
        count += 1
      } else {
        m = m + arr[i]
      }
    }
  }
  if (
    parseInt(h) > 24 ||
    parseInt(h) < 0 ||
    parseInt(m) > 60 ||
    parseInt(h) < 0
  ) {
    return false
  }

  return true
}

console.log(validTime('13:58'))
console.log(validTime('05:51'))
console.log(validTime('22:00'))
