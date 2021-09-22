function confirmEnding(str: string, target: string) {
   for (let i = 0; i < str.length; i++) {
       if (str.substr(i) === target) {
           return true
       }
   }
   return false
}

console.log(confirmEnding("Abstraction", "ction"));
console.log(confirmEnding("Open sesame", "ame"));