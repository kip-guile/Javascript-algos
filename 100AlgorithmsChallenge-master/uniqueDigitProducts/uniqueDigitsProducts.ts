function uniqueDigitProducts(a) {
  let res = []
  for (let i = 0; i < a.length; i++) {
    let product = 1
    for (let j = 0; j < a[i].toString().length; j++) {
      product = product * parseInt(a[i].toString()[j])
    }
    res.push(product)
  }

  return new Set(res).size
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]))
