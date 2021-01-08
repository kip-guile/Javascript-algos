function commonCharacterCount(s1: string, s2: string): number {
  let count = 0
  const memoize = (string) => {
    let cache = {}
    for (let i = 0; i < string.length; i++) {
      if (cache[string[i]]) {
        cache[string[i]] += 1
      } else {
        cache[string[i]] = 1
      }
    }
    return cache
  }
  let cacheA = memoize(s1)
  let cacheB = memoize(s2)
  for (const key in cacheA) {
    if (cacheB.hasOwnProperty(key)) {
      count += Math.min(cacheB[key], cacheA[key])
    }
  }
  return count
}

console.log(commonCharacterCount('aabcdc', 'adcaa'))
