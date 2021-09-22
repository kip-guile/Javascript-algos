function containsDuplicates(a: number[]): boolean {
    let store = {}
    a.forEach((digit, i) => {
        store[digit] = i
    })
    const nodups = Object.keys(store)
    if (a.length !== nodups.length) {
        return true
    }
    return false
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
