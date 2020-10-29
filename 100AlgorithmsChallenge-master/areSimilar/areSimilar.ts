function areSimilar(a: number[], b: number[]): boolean {
   let cacheA = {}
   let cacheB = {}
   let errorCount = 0
   a.forEach((num, i) => {
        cacheA[i] = num
   })
   b.forEach((num, i) => {
        cacheB[i] = num
   })
   
   for (const key in cacheA) {
       if (cacheA[key] !== cacheB[key]) {
           errorCount += 1
    }
   }
   if (errorCount > 2) {
       return false
   }
   return true
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3, 4, 7], [1, 2, 4, 7, 3]));
