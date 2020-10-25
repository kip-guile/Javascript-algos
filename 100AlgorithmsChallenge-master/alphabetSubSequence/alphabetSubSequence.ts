function alphabetSubsequence(s: string): boolean {
    let cache = {}
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter, i) => {
        cache[letter] = i+1
    })
    for (let i = 0; i < s.length - 1; i++) {
        if (cache[s[i]] >= cache[s[i+1]]) {
            return false
        }
    }
    return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
