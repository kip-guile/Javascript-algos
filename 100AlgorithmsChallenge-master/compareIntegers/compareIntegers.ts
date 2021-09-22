function compareIntegers(a: string, b: string): string {
    let convA = parseInt(a)
    let convB = parseInt(b)
    if (convA < convB) {
        return "less"
    } else if (convA > convB) {
        return "greater"
    } else {
        return "equal"
    }
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));