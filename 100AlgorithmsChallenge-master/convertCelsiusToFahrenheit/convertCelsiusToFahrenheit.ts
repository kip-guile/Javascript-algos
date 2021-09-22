function celsiusToFahrenheit(celsius: number): number {
    let fahr = (celsius * 9/5) + 32
    return fahr
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));